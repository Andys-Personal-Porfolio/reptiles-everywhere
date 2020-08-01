import React, { useState } from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

const Header = ({searchBooks}) => {
  
  const makeNavLinks = () => {
    const categories = ['crocodiles', 'lizards', 'reptiles', 'snakes','tuataras', 'turtles']
    const navLinks = categories.map(category => {
      return (
        <NavLink 
          to={`/${category}`} 
          key={category + 'button'}
          activeClassName='active'>
          <button onClick={() => searchBooks(category)}>{category}</button>
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
      { makeNavLinks()}
    </header>
  )
}

export default Header