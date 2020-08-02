import React, { useState } from 'react'
import './BookCard.scss'
import { Link } from 'react-router-dom'

const BookCard = ({ books, category, images, getSingleBooks, viewType }) => {
  const filteredBooks = books.filter(book => book.accessInfo.embeddable === true)

  const createSummaryView = (book, textSnippet) => {
    return (
    <div>
      <h2 className={`book-title ${book.volumeInfo.title.length}`}>{book.volumeInfo.title}</h2>
      <section className="book-description">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title + " cover"}
        />
        <p className="text-snippet"
          dangerouslySetInnerHTML={{ __html: textSnippet }} />
      </section>
      <p>{book.volumeInfo.authors}</p>
    </div>)
  }

  const createCoverView = (book,i) => {
    return (
      <img
        src={images[i].medium}
        alt={book.volumeInfo.title + " cover"}
      />
    )
  }

  return filteredBooks.map((book, i) => {
    const textSnippet = book.searchInfo ? book.searchInfo.textSnippet : "No description available!";
    return (
      <div key={i} className="book-info">

        {viewType === 'CoverView' && images[i] && createCoverView(book,i)}
        {viewType === 'SummaryView' && createSummaryView(book, textSnippet)}

        <Link to={`/${category}/EmbeddedBook/${book.id}`} style={{textDecoration: "none"}}>
          <button aria-label={`Start Reading ${book.volumeInfo.title}`}>START READING</button>
        </Link>
      </div>
    )
  })
}

export default BookCard