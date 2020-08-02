import React from 'react'
import './Header.scss'
import { NavLink, useLocation } from 'react-router-dom'

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
      "https://lh3.googleusercontent.com/proxy/7OLEZa9ujsqEgYby4Oky0enGQYjDbXvIKGr4mpUfx1sadr6J80f85gCwieH0g9oM8BVZ1guhS3OCicVa4su_lLNnVFJRmOgj8wAyn9wXVoRWcb0tWUB6VwXUNdsHOQ0a"
    ]
    const navLinks = categories.map((category,i) => {
      return (
        <section className="button-and-image" key={category + 'button'}>
        <img src={imgSrcs[i]} alt={category} />
        <NavLink 
          to={`/${category}/${viewType}`} 
          activeClassName='active'>
          <button 
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

export default Header