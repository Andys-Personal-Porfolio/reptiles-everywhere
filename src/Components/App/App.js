import React, { useEffect, useState } from 'react'
import './App.scss'
import { fetchBooks, fetchSingleBook } from '../../ApiCalls'
import Inventory from '../Inventory/Inventory'
import EmbeddedBook from '../EmbeddedBook/EmbeddedBook'
import Header from '../Header/Header'
import { Route, Redirect, useLocation} from 'react-router-dom' 

function App() {
  const location = useLocation();
  const category = location.pathname.split('/')[1]
  const [books, setBooks] = useState({})
  const [singleBooks, setSingleBooks] = useState([])
  const [error, setError] = useState('')
  const [searchCritera, setSearchCriteria] = useState(category || 'reptiles')
  useEffect(() => {
    getBooks()
  }, [searchCritera])

  const getBooks = async () => {
    try {
      const data = await fetchBooks(searchCritera)
      setBooks(data.items)
    } catch (error) {
      setError(error)
    }
  }

  const getSingleBooks = () => {
    const urls = books.map(book => book.selfLink)
    urls.forEach(url => getSingleBook(url))
  }

  const getSingleBook = async (url) => {
    try {
      const singleBook = await fetchSingleBook(url)
      setSingleBooks(s => [...s, singleBook.volumeInfo.imageLinks])
    } catch (error) {
      setError(error)
    }
  }

  const searchBooks = (id) => {
    setSearchCriteria(id) 
  }

  return (
    <div className="App">
      <Header searchBooks = {searchBooks}/>
      {books.length && (
        <Route
          path="/:category/:viewType"
          render={({ match }) => {
            const { category } = match.params
            const { viewType } = match.params
            if (viewType !== "EmbeddedBook"){
              return (
              <Inventory 
              images={singleBooks}
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
      {error && <h2 className="error-message">{error.message}</h2>}
      <div className="parasol"></div>
    </div>
  );
}

export default App
