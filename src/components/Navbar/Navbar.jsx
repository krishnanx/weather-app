import React from 'react';
import './navbar.css';
import logo from './icons/white_logo.png';
const Navbar = () => {
  return (
    <div className="nav">
       <div className='Left-icons'>
            <img src={logo}></img>
       </div>
    </div>
  )
}

export default Navbar