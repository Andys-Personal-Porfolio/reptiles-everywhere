import React, { useState, useEffect } from 'react'
import './Inventory.scss'
import BookDetails from '../BookDetails/BookDetails'
import { getCoverImg } from '../../ApiCalls'
import { Link } from 'react-router-dom'
const Inventory = ({ books }) => {
  const [coverImg, setCoverImg] = useState('')
  const createBookElement = () => {
    return books.map((book, i) => {
      return (
        <div key={i} className="book-info">
          <h3 className="book-title">{book.volumeInfo.title}</h3>
          <p className="book-subtitle">{book.volumeInfo.subtitle}</p>
          {book.volumeInfo.imageLinks && 
          <img 
            src={book.volumeInfo.imageLinks.thumbnail} 
            alt={book.volumeInfo.title + " cover"} 
          />}
          {book.accessInfo.embeddable === true && <Link to={`/bookDetails/${book.id}`}>
            <button>Display Embedded Book</button>
          </Link>}
        </div>
      )
    })
  }


  const getCoverImg = async () => {
    const coverImg = await getCoverImg();
     //setCoverImg(coverImg)
     console.log(coverImg)
    return getCoverImg
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