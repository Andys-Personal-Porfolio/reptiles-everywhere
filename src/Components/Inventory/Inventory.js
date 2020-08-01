import React, { useState, useEffect } from 'react'
import './Inventory.scss'
import { Link } from 'react-router-dom'
const Inventory = ({ books }, { getSingleBook }) => {
  const [coverImg, setCoverImg] = useState()
  const createBookElement = () => {
    return books.map((book, i) => {
      const authors = book.volumeInfo.authors.map(author => author + '               ')
      return (
        <div key={i} className="book-info">
          <h3 className="book-title">{book.volumeInfo.title}</h3>
          {book.volumeInfo.imageLinks && 
          <img 
            src={book.volumeInfo.imageLinks.thumbnail} 
            alt={book.volumeInfo.title + " cover"} 
          />}
          <p>{authors}</p>
          {book.accessInfo.embeddable === true && 
          <Link to={`/EmbeddedBook/${book.id}`}>
            <button aria-label={`Start Reading ${book.volumeInfo.title}`}>Start Reading</button>
          </Link>}
        </div>
      )
    })
  }

  const waitSingleBook = async () => {
    const singleBook = await getSingleBook()
    console.log(singleBook)
  }

  return (
    <>
    <button onClick={waitSingleBook}>Get cover img</button>
    <div className="book-container" >
      { books.length && createBookElement()}
    </div>
    </>
  )

}

export default Inventory