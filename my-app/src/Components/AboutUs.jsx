import React from 'react';
import Navbar from './Navbar';
function Top() {
    return (
        <div id="mainss">
            <Navbar />
            <div className='name'>
                <h1><span>The Ideation Platform </span>You Need</h1>
                <p className='details'>Ideation is the act of forming ideas. It is a creative process that encompasses the generation, development and communication of new thoughts and concepts, which become the basis of your innovation strategy.

                    As an individual activity, idea generation techniques are a great way to shake up your routine and spark new thoughts. As a collective or organization, structured ideation can be transformed as a tool for problem solving and collaboration.
                </p>
            </div>
        </div>
    )
}

export default Top;