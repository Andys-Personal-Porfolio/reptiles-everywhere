import React from 'react'
import './Inventory.css'

const Inventory = ({ childrensBooks }) => {

  const createBookElement = () => {
    // console.log(childrensBooks.map(book => book))
    return childrensBooks.map((book, i) => {
      return (
        <div key={i} className="book-container">
          <h2>{book.title}</h2>
          <img src={`http://covers.openlibrary.org/b/ID/${book.cover_id}-M.jpg`} alt={book.title + " cover"} />
        </div>
      )
    })
  }

  return (
    <>
    { childrensBooks.length && createBookElement()}
    </>
  )

}

export default Inventory