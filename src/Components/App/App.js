import React, { useEffect, useState } from 'react'
import './App.css'
import {getChildrensBooks} from '../../ApiCalls'
import Inventory from '../Inventory/Inventory'

function App() {
  const [childrensBooks, setChildrensBooks] = useState({})
  const [error, setError] = useState({})

  useEffect(() => {
    const findBooks = async () => {
      try {
        const data = await getChildrensBooks()
        setChildrensBooks(data.works)
      } catch (error) {
        setError(error)
      }
    }
    findBooks()
  }, [])

  return (
    <div className="App">
      {childrensBooks.length && <Inventory childrensBooks={childrensBooks}/> }
      <search>
        
      </search>
    </div>
  );
}

export default App
