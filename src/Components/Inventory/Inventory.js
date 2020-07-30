import React from 'react'
import './Inventory.css'

const Inventory = ({ books }) => {

  const createBookElement = () => {
    return books.map((book, i) => {
      return (
        <div key={i} className="book-info">
          <h3 className="book-title">{book.volumeInfo.title}</h3>
          <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title + " cover"} />
        </div>
      )
    })
  }

  return (
    <>
    <div className="book-container" >
      { books.length && createBookElement()}
    </div>
    </>
  )

}

export default Inventory