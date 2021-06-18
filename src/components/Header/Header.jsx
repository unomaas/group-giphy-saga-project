import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
      <header className='header'>
        <img className='header-image' src="./images/GenLogoW.svg" height="60"></img>
        <nav>
          <ul className="Header-nav">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/favorites'>Favorites</Link>
            </li>
          </ul>
        </nav>
        <div className="header-main">
          <p className='header-title'>GIPHY API App</p>
          <p className="header-subtitle"> v1.0</p>
        </div>

      </header>
    </div>
  )
}
