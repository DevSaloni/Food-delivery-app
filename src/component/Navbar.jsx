import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
const Navbar = () => {
  return (
    <nav>
        <div className='nav-Container'>
            <div className='logo-heading'>
                <h1>Radha Rasoi</h1>
            </div>
            <div className='nav-links'>
                <Link to="">Home</Link>
                <Link to="/searchPage">Online Order</Link>
                 <Link to="/menu">Menu</Link>
                <Link to="/team">Team</Link>
                <Link to="/myorder">My Order</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </div>
    </nav>
  )
}

export default Navbar