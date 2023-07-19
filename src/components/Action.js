import React from 'react'
import background from '../images/bg-boost-desktop.svg';
import mobBackground from '../images/bg-boost-mobile.svg';

const Action = () => {
  return (
    <div className='action'>
        {/* <img className='action-bg' src={background} />
        <img className='action-bg-mobile' src={mobBackground} /> */}
        <div className='action-elements'>
            <h2 className='action-title'>Boost your links today</h2>
            <button className='button action-button'>Get Started</button>
        </div>
    </div>
  )
}

export default Action