import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage from '../images/feature_1.png';
import featureimage1 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';

function Feature() {
  return (
    <div id='features'>
        <div className='a-container'>
            <FeatureBox image={featureimage} title='Generate Ideas'/>
            <FeatureBox image={featureimage1} title='Manage Ideas'/>
            <FeatureBox image={featureimage3} title='Deploy Ideas'/>
        </div>

    </div>
  )
}

export default Feature