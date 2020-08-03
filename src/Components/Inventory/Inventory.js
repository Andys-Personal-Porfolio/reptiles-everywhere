import React from 'react'
import './Inventory.scss'
import { Link } from 'react-router-dom'
import BookCard from '../BookCard/BookCard'
import PropTypes from 'prop-types'

const Inventory = ({ books, category, singleBooks, getSingleBooks, viewType, setBooks}) => {
  const upperCaseCategory = category[0].toUpperCase() + category.slice(1) 
  const categorySingular = upperCaseCategory.slice(0, upperCaseCategory.length -1)

  return (
    <>
      {viewType === 'SummaryView' && 
      <Link to= {`/${category}/CoverView`}>
        <button 
        className="cover-btn" 
        onClick={() => {
          setBooks([])
          getSingleBooks()
        }}>
        Book Covers</button>
      </Link>}
      {viewType === 'CoverView' && 
      <Link to= {`/${category}/SummaryView`}>
        <button className="cover-btn">Summaries</button>
      </Link>}
      <h1> {categorySingular} books:</h1>
      <div className="book-container" >
        {books.length && 
        <BookCard 
        books={books} 
        category={category} 
        images={singleBooks} 
        viewType={viewType} />}
      </div>
    </>
  )
}

Inventory.propTypes = {
  books: PropTypes.array, 
  category: PropTypes.string, 
  singleBooks: PropTypes.func, 
  getSingleBooks: PropTypes.func, 
  viewType: PropTypes.string, 
  setBooks: PropTypes.func
};

export default Inventory