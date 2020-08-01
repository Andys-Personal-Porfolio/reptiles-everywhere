import React, { useEffect, useState } from 'react'
import './App.scss'
import { fetchBooks, fetchSingleBook } from '../../ApiCalls'
import Inventory from '../Inventory/Inventory'
import EmbeddedBook from '../EmbeddedBook/EmbeddedBook'
import Header from '../Header/Header'
import { Route, useLocation} from 'react-router-dom' 

function App() {
  const location = useLocation();
  const category = location.pathname.split('/')[1]
  const [books, setBooks] = useState({})
  const [singleBooks, setSingleBooks] = useState({})
  const [error, setError] = useState({})
  const [searchCritera, setSearchCriteria] = useState(category || 'reptiles')

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks(searchCritera)
        setBooks(data.items)
        // const singleBooks = books.map(async (book) => {
        //   const singleBook = await fetchSingleBook()
        //   return singleBook
        // })

        // setSingleBooks(singleBooks)
      } catch (error) {
        setError(error)
      }
    }
    getBooks()
  }, [searchCritera])

  const searchBooks = (id) => {
    setSearchCriteria(id) 
  }

  const getSingleBook = async () => {
    console.log('no')
    const singleBook = await fetchSingleBook();
    return singleBook
  }

  return (
    <div className="App">
      <Header searchBooks = {searchBooks}/>
      {books.length && (
        <Route
          exact
          path="/:category"
          render={({ match }) => {
            const { category } = match.params
            return <Inventory books={books} category={category}/> 
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
          return (<EmbeddedBook bookToRender={bookToRender} getSingleBook={getSingleBook}/>)
        }}
      />}
      {error && <h2 className="error-message">{error.message}</h2>}
      <div className="parasol"></div>
    </div>
  );
}

export default App
