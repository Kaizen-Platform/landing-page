import React, {useState} from 'react';
import logo from '../images/logo.png';
import { NavLink } from "react-router-dom";

function Navbar() {

    const[nav,setNav]=useState(false);

    const changeBackground = () =>{
        if(window.scrollY>=50){
            setNav(true);
        }
        else{
            setNav(false);
        }
    }
  window.addEventListener('scroll',changeBackground);  
  return (
    <nav className={nav ? 'nav active': nav}>
        <a href='/' className='logo'>
            <img src={logo} alt=''/>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><NavLink className='nav-link'to="/">Home</NavLink></li>
            <li><NavLink className='nav-link' to="/AboutUs">About</NavLink></li>
            <li><NavLink className='nav-link'to="/ContactUs">Contact</NavLink></li>
            <li><NavLink className='nav-link'to="/Multiuser_Login_Page">Login</NavLink></li>
            <li><NavLink to="/Login">Sign Up</NavLink></li>
        </ul>
        

    </nav>
  )
}

export default Navbar