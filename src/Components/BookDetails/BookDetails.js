import React from 'react'

const BookDetails = ({previewLink}) => {
  return (
    <>
    { previewLink.length && <iframe frameborder="0" scrolling="no" style={{ border: 0 }} src={previewLink} width="500" height="500" title="title"></iframe> }
    </>
  )
  
}

export default BookDetails