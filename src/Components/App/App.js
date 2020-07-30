import React, { useEffect, useState } from 'react'
import './App.css'
import { getBooks } from '../../ApiCalls'
import Inventory from '../Inventory/Inventory'
import Header from '../Header/Header'

function App() {
  const [books, setBooks] = useState({})
  const [error, setError] = useState({})

  useEffect(() => {
    const findBooks = async () => {
      try {
        const data = await getBooks()
        setBooks(data.items)
      } catch (error) {
        setError(error)
      }
    }
    findBooks()
  }, [])

  return (
    <div className="App">
      <Header />
      {books.length && <Inventory books={books}/> }
      {error && <div>{error.message}</div>}
    </div>
  );
}

export default App
