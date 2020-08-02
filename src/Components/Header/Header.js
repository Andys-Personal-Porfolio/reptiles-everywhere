import React from 'react'
import './Header.scss'
import { NavLink, useLocation } from 'react-router-dom'

const Header = ({ searchBooks, getSingleBooks, setSingleBooks}) => {
  const location = useLocation()
  const viewType = location.pathname.split('/')[2]
  
  const updateLocation = async (event) => {
    setSingleBooks([])
    const category = event.target.innerHTML
    viewType === "CoverView" ? getSingleBooks(category) : searchBooks(category)
  }

  const makeNavLinks = () => {
    const categories = ['crocodiles', 'lizards', 'reptiles', 'snakes','tuataras', 'turtles']
    const navLinks = categories.map(category => {
      return (
        <NavLink 
          to={`/${category}/${viewType}`} 
          key={category + 'button'}
          activeClassName='active'>
          <button onClick={(event) => updateLocation(event)}>{category}</button>
        </NavLink>
      ) 
    })
    return (
      navLinks
    )
  }

  return (
    <header>
      <h1>Reptiles Everywhere!</h1>
      {makeNavLinks()}
    </header>
  )
}

export default Header