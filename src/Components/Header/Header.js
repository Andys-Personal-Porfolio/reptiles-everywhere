import React, { useState } from 'react'
import './Header.scss'

const Header = ({searchBooks}) => {
  const categories = ['crocodiles', 'lizards', 'reptiles', 'snakes','tuatara', 'turtles']
  const makeRadioBtns = () => {
    const radioBtns = categories.map(category => {
      return (
      <label htmlFor={category} key={category + ' radio-btn'}>
        <input 
          type="radio" 
          name="search-criteria" 
          id={category}
          onChange={(event) => searchBooks(event.target.id)} />
      {category}
      </label>
      )
    })
    return (
      radioBtns
    )
  }

  return (
    <header>
      <h2>Reptiles Everywhere!</h2>
      {searchBooks.length && makeRadioBtns()}
    </header>
  )
}

export default Header