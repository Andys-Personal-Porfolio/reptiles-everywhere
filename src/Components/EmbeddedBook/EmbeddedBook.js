import React from 'react'
import { Link } from 'react-router-dom' 

const EmbeddedBook = ({bookToRender}) => {
  const previewLink = bookToRender.volumeInfo.previewLink + '&output=embed'
  return (
    <>
      <Link to={`/`}>
        <button aria-label={`Go Back To Home Page`}>⬅ GO BACK</button>
      </Link>
      {previewLink.length && 
      <iframe 
        frameBorder="0" 
        scrolling="no" 
        style={{ border: 0 }} 
        src={previewLink} 
        width="600"
        height="600" 
        role="document"
        title={bookToRender.volumeInfo.title}
      ></iframe> }
    </>
  )
  
}

export default EmbeddedBook