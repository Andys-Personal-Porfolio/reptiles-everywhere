import React from 'react'
import { useHistory} from 'react-router-dom' 
import './EmbeddedBook.scss'
import PropTypes from 'prop-types'
const EmbeddedBook = ({bookToRender}) => {
  const previewLink = bookToRender.volumeInfo.previewLink + '&output=embed'
  const secureLink = previewLink.slice(0, 4) + "s" + previewLink.slice(4)
  let history = useHistory();

  return (
    <section className="embedded-book-section">
        <button 
        aria-label={`Go Back To Home Page`}
        onClick= {() => history.goBack()}>
        ⬅ GO BACK
        </button>
      {previewLink.length && 
      <iframe 
        frameBorder="0" 
        scrolling="no" 
        style={{ border: 0 }} 
        src={secureLink} 
        width="600"
        height="700 " 
        role="document"
        title={bookToRender.volumeInfo.title}
      ></iframe> }
    </section>
  )
  
}

EmbeddedBook.propTypes = {
  bookToRender: PropTypes.object
};

export default EmbeddedBook