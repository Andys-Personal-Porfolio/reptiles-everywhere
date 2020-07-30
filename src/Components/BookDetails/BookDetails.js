import React from 'react'

const BookDetails = ({bookToRender}) => {
  // console.log(bookToRender)
  const previewLink = bookToRender.volumeInfo.previewLink + '&output=embed'
  // const previewLink = 'http://books.google.com/books?id=TtA4DwAAQBAJ&printsec=frontcover&dq=reptiles+children+books&hl=&as_pt=BOOKS&cd=1&source=gbs_api&output=embed'
  return (
    <>
      {previewLink.length && <iframe frameBorder="0" scrolling="no" style={{ border: 0 }} src={previewLink} width="500" height="500" title="title"></iframe> }
    </>
  )
  
}

export default BookDetails