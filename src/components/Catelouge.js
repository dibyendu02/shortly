import React from 'react'

import logo1 from '../images/icon-brand-recognition.svg';
import logo2 from '../images/icon-detailed-records.svg';
import logo3 from '../images/icon-fully-customizable.svg';

const Catelouge = () => {
  return (
    <div className='catelouge'>
        <div className='top-bar'>
            <h1 className='catelouge-title'>Advanced Statistics</h1>
            <p className='catelouge-desc'>Track how your links are performing accross the web with our advanced statistics dashboard.</p>
        </div>
        
        <div className='cards'>
            <div className='card'>
                <div className='circle'>
                    <img src={logo1} />
                </div>
                <h3>Brand Recognition</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing.
                Branded links help instil confidence in your content.</p>
            </div>
            <div className='card'>
                <div className='circle'>
                    <img src={logo2} />
                </div>
                <h3>Detailed Records</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing.
                Branded links help instil confidence in your content.</p>
            </div>
            <div className='card'>
                <div className='circle'>
                    <img src={logo3} />
                </div>
                <h3>Fully Customizable</h3>
                <p>Boost your brand recognition with each click. Generic links don't mean a thing.
                Branded links help instil confidence in your content.</p>
            </div>
        </div>
    </div>
  )
}

export default Catelouge