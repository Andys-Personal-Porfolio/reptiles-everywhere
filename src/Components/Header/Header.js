import React from 'react'
import './Header.scss'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ searchBooks, getSingleBooks}) => {
  const location = useLocation()
  const viewType = location.pathname.split('/')[2]
 

  const updateLocation = (event) => {
    const category = event.target.innerHTML
    viewType === "CoverView" ? getSingleBooks(category) : searchBooks(category)
  }

  const makeNavLinks = (images) => {
    const categories = ['crocodiles', 'lizards', 'reptiles', 'snakes', 'turtles']
    const imgSrcs = [
      "https://i.imgur.com/u7gTddx.png",
      "https://www.pngmart.com/files/3/Lizard-PNG-Transparent-Image.png",
      "http://www.pngmart.com/files/6/Horned-Lizard-Transparent-PNG.png",
      "https://i1.wp.com/freepngimages.com/wp-content/uploads/2015/10/cobra-snake-transparent-image.png?fit=1399%2C1248",
      "https://lh3.googleusercontent.com/proxy/p2kV7i1UX75GPTNH40D4xH9uOFCWHbJGjgVx5HN4lXQIlU-GVK5H3vpYHVBzZCvutcAe3OL8RDh7YMcjOi8S-AuBU4J5fE8G7Rj7VzU7mYGPHNUG3J0yyqV07bfOHpNj"
    ]
    const navLinks = categories.map((category,i) => {
      return (
        <section className="button-and-image" key={category + 'button'}>
        <img src={imgSrcs[i]} alt={category} />
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