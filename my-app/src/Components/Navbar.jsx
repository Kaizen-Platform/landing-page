import React, {useState} from 'react';
import logo from '../images/logo.png';

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
        <a href='www' className='logo'>
            <img src={logo} alt=''/>
        </a>
        <input type='checkbox' className='menu-btn' id='menu-btn'/>
        <label className='menu-icon' for='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            <li><a href='www'className='active'>Home</a></li>
            <li><a href='www'>About</a></li>
            <li><a href='www'>Contact</a></li>
            <li><a href='www'>Login</a></li>
            <li><a href='www'>Sign Up</a></li>
        </ul>
        

    </nav>
  )
}

export default Navbar