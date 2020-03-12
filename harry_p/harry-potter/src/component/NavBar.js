import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return <nav className="navbar">
    <div className="container">
      <div className="navbar-menu is-active">
        <div className="navbar-start">
          <div className="navbar-item">
            <Link to="/">Home</Link>
          </div>
          <div className="navbar-item">
            <Link to="/houses">Houses</Link>
          </div>
          <div className="navbar-item">
            <Link to="/characters">Characters</Link>
          </div>
          <div className="navbar-item">
            <Link to="/spells">Spells</Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
}
export default NavBar