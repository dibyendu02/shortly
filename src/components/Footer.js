import React from 'react'
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import printerest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-left'>
            <h3 className='footer-title'>Shortly</h3>
        </div>
        <div className='footer-mid'>
            <div  className='footer-col'>
                <h4>Features</h4>
                <ul>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Resources</h4>
                <ul>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Company</h4>
                <ul>
                    <li>About</li>
                    <li>Our Team</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
        <div className='footer-right'>
            <img src={facebook} />
            <img src={twitter} />
            <img src={instagram} />
            <img src={printerest} />
        </div>
    </div>
  )
}

export default Footer