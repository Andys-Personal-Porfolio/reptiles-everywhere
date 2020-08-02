import React from 'react'
import './Header.scss'
import { NavLink, useLocation } from 'react-router-dom'

const Header = ({ searchBooks, getSingleBooks, setSingleBooks}) => {
  const location = useLocation()
  const viewType = location.pathname.split('/')[2]

  const updateLocation = (event) => {
    setSingleBooks([])
    const category = event.target.innerHTML
    viewType === "CoverView" ? getSingleBooks(category) : searchBooks(category)
  }

  const makeNavLinks = (images) => {
    const categories = ['crocodiles', 'lizards', 'reptiles', 'snakes', 'turtles']
    const imgSrcs = [
      "https://lh3.googleusercontent.com/proxy/HYkDygpJ8qziCEoskv_KhBaX9tuM_eDJLCgZXxBABWa_-lpKaA6EDHXdOriGODfzfRobGxBRytefhQ07CP6fj0qeC-kWWqPoyFiD_bw1-1rCAEme_FXdvs46m-aYjR1mE6ec0aU",
      "https://www.pngmart.com/files/3/Lizard-PNG-Transparent-Image.png",
      "http://www.pngmart.com/files/6/Horned-Lizard-Transparent-PNG.png",
      "https://i1.wp.com/freepngimages.com/wp-content/uploads/2015/10/cobra-snake-transparent-image.png?fit=1399%2C1248",
      "https://lh3.googleusercontent.com/proxy/7OLEZa9ujsqEgYby4Oky0enGQYjDbXvIKGr4mpUfx1sadr6J80f85gCwieH0g9oM8BVZ1guhS3OCicVa4su_lLNnVFJRmOgj8wAyn9wXVoRWcb0tWUB6VwXUNdsHOQ0a"

    ]
    const navLinks = categories.map((category,i) => {
      return (
        <section className="button-and-image">
        <NavLink 
          to={`/${category}/${viewType}`} 
          key={category + 'button'}
          activeClassName='active'>
          <button 
          onClick={(event) => updateLocation(event)}>
          {category}
          </button>
        </NavLink>
        <img src={imgSrcs[i]} alt={category} />
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