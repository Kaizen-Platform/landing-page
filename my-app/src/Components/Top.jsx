import React from 'react';
import Navbar from './Navbar';
function Top() {
  return (
    <div id="mains">
      <Navbar />
      <div className='name'>
        <h1><span>Join the </span>Kaizen Community!!</h1>
        <p className='details'>Kaizen Platform allows you to share your ideas and get a glimpse of the Kaizen Community where you can see the different ideas posted by the users and interact with them over this platform.
        </p>
      </div>
    </div>
  )
}

export default Top;