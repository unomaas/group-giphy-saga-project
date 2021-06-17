import React from 'react'
import './Header.css';

export default function Header() {
  return (
    <div>
      <header className='header'>
        <img src="./images/GenocchioW.svg" height="60"></img>
        <div className="header-main">
          <p className='header-title'>GIPHY API App</p>
          <p className="header-subtitle"> v1.0</p>
        </div>

      </header>
    </div>
  )
}
