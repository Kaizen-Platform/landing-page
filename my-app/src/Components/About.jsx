import React from 'react'

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt='' />
            </div>
            <div className='about-text'>
                <h2>{props.title} </h2>
                <p>Ideation is the act of forming ideas. It is a creative process that encompasses the generation, development and communication of new thoughts and concepts, which become the basis of your innovation strategy.

                    As an individual activity, idea generation techniques are a great way to shake up your routine and spark new thoughts. As a collective or organization, structured ideation can be transformed as a tool for problem solving and collaboration.</p>
                <button>{props.button} </button>

                
            </div>
        </div>
        
    )
}

export default About