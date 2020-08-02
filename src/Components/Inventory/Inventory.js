import React, { useState, useEffect } from 'react'
import './Inventory.scss'
import { Link } from 'react-router-dom'
import BookCard from '../BookCard/BookCard'

const Inventory = ({ books, category, images, getSingleBooks, viewType}) => {
  console.log(books)
  return (
    <>
      <div className="book-container" >
        <Link to= {`/${category}/CoverView`}>
          <button onClick={getSingleBooks}>Only Show Covers</button>
        </Link>
        {books.length && <BookCard books={books} category={category} images={images} viewType={viewType} />}
      </div>
    </>
  )
}

export default Inventory