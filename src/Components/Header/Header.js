import React, { useState } from 'react'

const Header = ({searchBooks}) => {

  return (
    <header>
      <h2>Reptiles Everywhere!</h2>
      <p> Reptiles are turtles, snakes, lizards, alligators and crocodiles. </p>
      <input type="text" onChange={(event) => searchBooks(event)}/>
      <input type="radio" name="search-criteria" id="snakes"/>
      <label for="snakes">Snakes</label>
      <input type="radio" name="search-criteria" id="lizards"/>
      <label for="lizards">Lizards</label>
      <input type="radio" name="search-criteria" id="alligators"/>
      <label for="alligators">Alligators</label>
      <input type="radio" name="search-criteria" id="crocodiles"/>
      <label for="crocodiles">Crocodiles</label>
      <input type="radio" name="search-criteria" id="turtles"/>
      <label for="turtles">Turtles</label>
    </header>
  )
}

export default Header