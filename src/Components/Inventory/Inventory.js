import React, { useState } from 'react'
import './Inventory.scss'
import BookDetails from '../BookDetails/BookDetails'
import { Link } from 'react-router-dom'
const Inventory = ({ books }) => {

  const createBookElement = () => {
    return books.map((book, i) => {
      let previewLink = '';
      if(book.volumeInfo.previewLink) {
        previewLink = book.volumeInfo.previewLink+'&output=embed'
      }
      return (
        <div key={i} className="book-info">
          <h3 className="book-title">{book.volumeInfo.title}</h3>
          <p className="book-subtitle">{book.volumeInfo.subtitle}</p>
          {book.volumeInfo.imageLinks && 
          <img 
            src={book.volumeInfo.imageLinks.smallThumbnail} 
            alt={book.volumeInfo.title + " cover"} 
          />}
          <Link to={`/bookDetails/${book.id}`}>
            <button>Display Embedded Book</button>
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