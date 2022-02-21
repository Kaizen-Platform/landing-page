import React from 'react'
import Navbar from './Navbar';

function Header() {
  return (
    <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>KAIZEN PLATFORM</span>Welcomes You!!</h1>
            <p className='details'>The intent of this project is to create an ideation platform that can be leveraged by the CData 
            employees across the globe to -
            Generate / Add ideas.
            Manage workflows - Review / Approve / Select for Development / Under Development / Under 
            Production.
            </p>
            <a href='www' className='cv-btn'>Read More</a>
        </div>
    </div>
  )
}

export default Header;