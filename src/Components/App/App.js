import React, { useEffect, useState } from 'react'
import './App.scss'
import { fetchBooks, fetchSingleBook } from '../../ApiCalls'
import Inventory from '../Inventory/Inventory'
import EmbeddedBook from '../EmbeddedBook/EmbeddedBook'
import Header from '../Header/Header'
import { Route } from 'react-router-dom' 

function App() {
  const [books, setBooks] = useState({})
  const [singleBooks, setSingleBooks] = useState({})
  const [error, setError] = useState({})
  const [searchCritera, setSearchCriteria] = useState('reptiles')

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
    console.log(id)
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
          path="/"
          render={() => (
            <Inventory books={books} category={searchCritera}/> 
          )}
        />
      )}
      {books.length && <Route
        path="/:category/:id"
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
