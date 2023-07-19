import React from 'react'
import working from '../images/illustration-working.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h1 className='hero-title'>More than just shorter links</h1>
            <p className='hero-desc'>Build your brand recognition and get detailed insights on how your links are performing</p>
            <button className='button hero-button'>Get Started</button>
        </div>
        <div className='hero-right'>
            <img className='hero-image' src={working} />
        </div>
    </div>
  )
}

export default Hero