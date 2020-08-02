import React, { useEffect, useState } from 'react'
import './App.scss'
import { fetchBooks, fetchSingleBook } from '../../ApiCalls'
import Inventory from '../Inventory/Inventory'
import EmbeddedBook from '../EmbeddedBook/EmbeddedBook'
import Header from '../Header/Header'
import { Route, Redirect, useLocation} from 'react-router-dom' 

function App() {
  const location = useLocation();
  const category = location ? location.pathname.split('/')[1] : 'reptiles'
  const [books, setBooks] = useState({})
  const [singleBooks, setSingleBooks] = useState([])
  const [error, setError] = useState('')
  const [searchCritera, setSearchCriteria] = useState(category || 'reptiles')
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

  

  const getSingleBooks = () => {
    const urls = books.map(book => book.selfLink)
    urls.forEach(async (url) => await getSingleBook(url))
  }

  const getSingleBook = async (url) => {
    try {
      const singleBook = await fetchSingleBook(url)
      setSingleBooks(s => [...s, singleBook])
    } catch (error) {
      setError(error)
    }
  }

  const searchBooks = (id) => {
    setSearchCriteria(id) 
  }

  return (
    <main className="App">
    {error && <h2 className="error-message">{error.message}</h2>}
      <Header 
      setSingleBooks={setSingleBooks}
      getSingleBooks={getSingleBooks}
      searchBooks = {searchBooks}/>
      {books.length && (
        <Route
          path="/:category/:viewType"
          render={({ match }) => {
            const { category } = match.params
            const { viewType } = match.params
            if (viewType !== "EmbeddedBook"){
              return (
              <Inventory 
              singleBooks={singleBooks}
              books={books} 
              category={category}
              getSingleBooks={getSingleBooks}
              viewType = {viewType}
              /> )
            }
          }}
        />
      )}
      {books.length && <Route
        path="/:category/EmbeddedBook/:id"
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
        <Redirect to='/reptiles/SummaryView' />
      </Route>
      {loading && !error && <section>Loading...</section>}
    </main>
  );
}

export default App
