import React from 'react'
import './Navbar.css'
import logo from '/images/vite.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='logo'>
        <img src={logo} alt="Logo" />
        <p>Novalya <br /> University</p>
      </div>

    <div className='menu'>
      <ul>
        <li><Link to= "/">Home</Link></li>
        <li><Link to= "/Academics">Academics</Link></li>
        <li><Link to= "/Blog">Blog</Link></li>
        <li><Link to= "/Admission">Admission</Link></li>
        <li><Link to= "/Contect">Contect</Link></li>
      </ul>
    </div>

     <div>
      <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navbar