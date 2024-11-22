import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
         <img src= {logo} alt =''/>
         < ul  className='nav-menu'>
         <li>Home</li>
         <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#mywork">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
         </ul>
         <div className='nav-connect'> Connect With Me

         </div>
    </div>
   
  )
}

export default Navbar