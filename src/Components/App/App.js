import React, { useEffect, useState } from 'react'
import './App.scss'
import { fetchBooks, fetchSingleBook } from '../../ApiCalls'
import Inventory from '../Inventory/Inventory'
import EmbeddedBook from '../EmbeddedBook/EmbeddedBook'
import Header from '../Header/Header'
import { Route, Redirect, useLocation} from 'react-router-dom' 

function App() {
  const location = useLocation();
  const category = location ? location.pathname.split('/')[2] : 'reptiles'
  const [books, setBooks] = useState([])
  const [error, setError] = useState('')
  const [searchCritera, setSearchCriteria] = useState(category || "reptiles")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks(searchCritera)
        setBooks(data.items)
        setLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    getBooks()
  }, [searchCritera])

  

  const getSingleBooks = (categoryGiven) => {
    const urls = books.map(book => book.selfLink)
    urls.forEach(async (url) => await getSingleBook(url))
  }

  const getSingleBook = async (url) => {
    setBooks([])
    try {
      const singleBook = await fetchSingleBook(url)
      const bookToAddImg = books.find(book => book.id === singleBook.id)
      const booksWithImgs = { ...bookToAddImg, coverImg: singleBook.volumeInfo.imageLinks}
      setBooks(s => [...s, booksWithImgs])
    } catch (error) {
      setError(error)
    }
  }

  const searchBooks = (id) => {
    setSearchCriteria(id) 
  }

  return (
    <main className="App">
    {error && <h1 className="error-message">Reptiles are eating! Check back in a minute to see if they are done.</h1>}
    <Header 
    getSingleBooks={getSingleBooks}
    searchBooks = {searchBooks}/>
    {loading && !error && <h1>Loading...</h1>}
    {books.length > 0 && (
      <Route
        path="/reptiles-everywhere/:category/:viewType"
        render={({ match }) => {
          const { category } = match.params
          const { viewType } = match.params
          if (viewType !== "EmbeddedBook"){
            return (
            <Inventory 
            setBooks={setBooks}
            books={books} 
            category={category}
            getSingleBooks={getSingleBooks}
            viewType = {viewType}
            /> )
          }
        }}
      />
    )}
      {books.length > 0 && <Route
        path="/reptiles-everywhere/:category/EmbeddedBook/:id"
        render={({ match }) => {
          const { id, category } = match.params
          const bookToRender = books.find(
            (book) => book.id === id
          ) 
          if(!bookToRender) {
            searchBooks(category)
          }
          return (
          <EmbeddedBook 
            bookToRender={bookToRender} 
            getSingleBook={getSingleBook}/>)
        }}
      />}
      <Route path='/'>
        <Redirect to='/reptiles-everywhere/reptiles/SummaryView' />
      </Route>
    </main>
  );
}

export default App
