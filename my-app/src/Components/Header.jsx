import React from 'react'
import Navbar from './Navbar';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';

function Header() {
  return (
    <div>
        <div id='main'>
        <Navbar/>
        <div className='name'>
            <h1><span>KAIZEN PLATFORM</span>Welcomes You!!</h1>
            <p className='details'>The intent of this project is to create an ideation platform that can be leveraged by the CData 
            employees across the globe to -
            Generate / Add ideas.<br/>
            - Manage workflows - Review / Approve / Select for Development / Under Development / Under 
            Production.
            </p>
            <a href='www' className='cv-btn'>Read More</a>
        </div>
    </div>
    <div id='maine'>
        
        <div className='name'>
          <h1><span>Comes With All You Need For Daily Life</span></h1>
          <p className='details'>Ideation is the act of forming ideas. It is a creative process that encompasses the generation, development and communication of new thoughts and concepts, which become the basis of your innovation strategy. As an individual activity, idea generation techniques are a great way to shake up your routine and spark new thoughts. As a collective or organization, structured ideation can be transformed as a tool for problem solving and collaboration.
          </p>
          <a href='www' className='cv-btn'>Read More</a>
        </div>
      </div>
      <div id='features'>
        <div className='a-container'>
            <FeatureBox image={featureimage} title='Generate Ideas'/>
            <FeatureBox image={featureimage1} title='Manage Ideas'/>
            <FeatureBox image={featureimage3} title='Deploy Ideas'/>
        </div>

    </div>
    <div id='presentation'>
      
        <h1><span>User Friendly</span> Platform</h1>
        <p>Kaizen is a complete user friendly platform where you can post your great ideas and help us build our community a big and better place.</p>

    </div>
    </div>
    
    
    
  )
}

export default Header;