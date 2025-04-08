import React from 'react'
import "./Navbar.css";
import logo from "../../assets/react.svg";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    
    <div className='navbar'>

      <div className='logo'>
          <img src={logo} alt="img" /> 
          <p>Novalyn <br /> University</p>
      </div>

    <div className='menu'>
        <ul>
            <li><Link to="/">Home</Link> </li>
            <li><Link to ="/academics">Academics</Link></li>
            <li><Link to ="blog">Blog</Link></li>
            <li><Link to ="admission">Admission</Link></li>
            <li><Link to = "contect">Contect</Link></li>
        </ul>
    </div>

    <div className='search-btn'>
        <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    </div>

  
   
  )
}

export default Navbar