import React from 'react'
import './BookCard.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const BookCard = ({ books, category, viewType }) => {
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
        <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', '): ''}</p>
    </div>)
  }

  

  const createCoverView = (book) => {
    if(book.coverImg) {
      return (
        <img
          src={book.coverImg.medium}
          alt={book.volumeInfo.title + " cover"}
        />
      )
    } else {
      return (
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title + " cover"}
        />
      )
    }
  }

  return filteredBooks.map((book, i) => {
    const textSnippet = book.searchInfo ? book.searchInfo.textSnippet : "No description available!";
    return (
      <div key={i+ 'book-info'} className="book-info">
        {viewType === 'CoverView' && createCoverView(book,i)}
        {viewType === 'SummaryView' && createSummaryView(book, textSnippet)}

        <Link to={`/reptiles-everywhere/${category}/EmbeddedBook/${book.id}`} style={{textDecoration: "none"}}>
          <button aria-label={`Start Reading ${book.volumeInfo.title}`}>START READING</button>
        </Link>
      </div>
    )
  })
}


BookCard.propTypes = {
  books: PropTypes.array,
  category: PropTypes.string,
  viewType: PropTypes.string
};


export default BookCard