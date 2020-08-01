import React, { useState } from 'react'

const Header = ({searchBooks}) => {

  return (
    <header>
      <h2>Reptiles Everywhere!</h2>
      <p> Reptiles are turtles, snakes, lizards, alligators and crocodiles. </p>
      <input type="text" onChange={(event) => searchBooks(event)}/>
    </header>
  )
}

export default Header