import React from 'react'
import './Header.scss'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import crocodile from '../../Assets/crocodile-src.png'
import lizard from '../../Assets/lizard-src.png'
import reptile from '../../Assets/reptile-src.png'
import snake from '../../Assets/snake-src.png'
import turtle from '../../Assets/turtle-src.png'

const Header = ({ searchBooks, getSingleBooks}) => {
  const location = useLocation()
  const viewType = location.pathname.split('/')[2]
  const urlCategory = location.pathname.split('/')[1] 
 

  const updateLocation = (event) => {
    const category = event.target.innerHTML
    if(viewType === "CoverView" && category === urlCategory) {
      getSingleBooks(category)
    } else {
     searchBooks(category)
    }

  }

  const makeNavLinks = (images) => {
    const categories = ['crocodiles', 'lizards', 'reptiles', 'snakes', 'turtles']
    const imageSrcs = [crocodile, lizard, reptile, snake, turtle]
    const navLinks = categories.map((category,i) => {
      return (
        <section className="button-and-image" key={category + 'button'}>
          <img src={imageSrcs[i]} alt={category} />
        <NavLink 
          to={`/${category}/${viewType}`} 
          activeClassName='active'>
          <button className="nav-link-btn"
          onClick={(event) => updateLocation(event)}>
          {category}
          </button>
        </NavLink>
        </section>
      ) 
    })
    return (
      navLinks
    )
  }

  return (
    <header>
      <h1>Reptiles Everywhere!</h1>
      <div className="reptile-image">{makeNavLinks()}</div>
    </header>
  )
}

Header.propTypes = {
  searchBooks: PropTypes.func,
  getSingleBooks: PropTypes.func
};

export default Header