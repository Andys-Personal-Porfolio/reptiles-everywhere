import React, { useState, useEffect } from 'react'
import './Inventory.scss'
import { Link } from 'react-router-dom'

const Inventory = ({ books, category, getSingleBook }) => {
  const [coverImg, setCoverImg] = useState()

  const createBookElement = () => {
    const filteredBooks = books.filter(book => book.accessInfo.embeddable === true)
    return filteredBooks.map((book, i) => {
      const textSnippet = book.searchInfo ? book.searchInfo.textSnippet : 'No description available!';
      return (
        <div key={i} className="book-info">
          <h2 className="book-title">{book.volumeInfo.title}</h2>
          <section className="book-description">
            {book.volumeInfo.imageLinks && 
            <img 
              src={book.volumeInfo.imageLinks.thumbnail} 
              alt={book.volumeInfo.title + " cover"} 
              />}
            <p className="text-snippet">{textSnippet}</p>
          </section>
          <p>{book.volumeInfo.authors}</p>
          <Link to={`/${category}/EmbeddedBook/${book.id}`}>
            <button aria-label={`Start Reading ${book.volumeInfo.title}`}>Start Reading</button>
          </Link>
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