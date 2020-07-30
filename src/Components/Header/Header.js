import React, { useState } from 'react'

const Header = ({searchBooks}) => {

  return (
    <header>
      <h2>Reptiles</h2>
      <input type="text" onChange={(event) => searchBooks(event)}/>
    </header>
  )
}

export default Header