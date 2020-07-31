import React, { useEffect, useState } from 'react'
import './App.scss'
import { fetchBooks, fetchSingleBook } from '../../ApiCalls'
import Inventory from '../Inventory/Inventory'
import BookDetails from '../BookDetails/BookDetails'
import Header from '../Header/Header'
import { Route } from 'react-router-dom' 

function App() {
  const [books, setBooks] = useState({})
  const [error, setError] = useState({})
  const [searchCritera, setSearchCriteria] = useState('reptiles')

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks(searchCritera)
        setBooks(data.items)
      } catch (error) {
        setError(error)
      }
    }
    getBooks()
  }, [searchCritera])

  const searchBooks = (event) => {
    if (event.target.value) {
      setSearchCriteria(event.target.value.replace(/ /, '+')) 
    }
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
            <Inventory books={books} /> 
          )}
        />
      )}
      {books.length && <Route
        path="/BookDetails/:id"
        render={({ match }) => {
          const { id } = match.params
          const bookToRender = books.find(
            (book) => book.id === id
          );
          return (<BookDetails bookToRender={bookToRender} getSingleBook={getSingleBook}/>)
        }}
      />}
      {error && <div>{error.message}</div>}
      <div className="parasol"></div>
    </div>
  );
}

export default App
