import React, { useState, useEffect } from 'react'
import './Inventory.scss'
import { Link } from 'react-router-dom'
import BookCard from '../BookCard/BookCard'

const Inventory = ({ books, category, singleBooks, getSingleBooks, viewType, setBooks}) => {
  const upperCaseCategory = category[0].toUpperCase() + category.slice(1) 
  const categorySingular = upperCaseCategory.slice(0, upperCaseCategory.length -1)

  return (
    <>
      <h2> {categorySingular} books:</h2>
      {viewType === 'SummaryView' && <Link to= {`/${category}/CoverView`}>
        <button 
        className="cover-btn" 
        onClick={() => {
          setBooks([])
          getSingleBooks()
        }}>
        Book Covers</button>
      </Link>}
      {viewType === 'CoverView' && <Link to= {`/${category}/SummaryView`}>
        <button className="cover-btn">Summaries</button>
      </Link>}
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

export default Inventory