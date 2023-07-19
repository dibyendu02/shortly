import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navbar-left'>
            <h3 className='title'>Shortly</h3>
            <ul className='navbar-items'>
                <li className='navbar-item'>Features</li>
                <li className='navbar-item'>Pricing</li>
                <li className='navbar-item'>Resources</li>
            </ul>
        </div>
        <div className='navbar-right'>
            <button className='login button'>Login</button>
            <button className='signup button'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar