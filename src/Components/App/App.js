import React, { useEffect, useState } from 'react'
import './App.scss'
import { getBooks } from '../../ApiCalls'
import Inventory from '../Inventory/Inventory'
import Header from '../Header/Header'

function App() {
  const [books, setBooks] = useState({})
  const [error, setError] = useState({})
  const [searchCritera, setSearchCriteria] = useState('reptiles')

  useEffect(() => {
    const findBooks = async () => {
      try {
        const data = await getBooks(searchCritera)
        setBooks(data.items)
      } catch (error) {
        setError(error)
      }
    }
    findBooks()
  }, [searchCritera])

  const searchBooks = (event) => {
    if (event.target.value) {
      setSearchCriteria(event.target.value.replace(/ /, '+')) 
    }
  }

  return (
    <div className="App">

      <Header searchBooks = {searchBooks}/>
      {books.length && <Inventory books={books}/> }
      {error && <div>{error.message}</div>}
      <div className="parasol"></div>
    </div>
  );
}

export default App
