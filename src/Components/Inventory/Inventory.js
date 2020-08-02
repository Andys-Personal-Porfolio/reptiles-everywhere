import React, { useState, useEffect } from 'react'
import './Inventory.scss'
import { Link } from 'react-router-dom'
import BookCard from '../BookCard/BookCard'

const Inventory = ({ books, category, images, getSingleBooks, viewType}) => {
  return (
    <>
      {viewType === 'SummaryView' && <Link to= {`/${category}/CoverView`}>
        <button className="cover-btn" onClick={getSingleBooks}>Book Covers</button>
      </Link>}
      {viewType === 'CoverView' && <Link to= {`/${category}/SummaryView`}>
        <button className="cover-btn">Summaries</button>
      </Link>}
      <div className="book-container" >
        {books.length && <BookCard books={books} category={category} images={images} viewType={viewType} />}
      </div>
    </>
  )
}

export default Inventory