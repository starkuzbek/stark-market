import React from 'react'
import "./Navbar.css"
import NavbarTop from './NavbarTop'
import NavbarMain from './NavbarMain'

function Navbar() {
  return (
    <div className='navbar'>
      <NavbarTop/>
      <NavbarMain/>
    </div>
  )
}

export default Navbar