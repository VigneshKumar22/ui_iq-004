import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter
} from 'react-icons/fa';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Trade in your iMac for credit.
        </p>
        <p className='footer-subscription-text'>
        The easiest way to upgrade to the latest iMac Devices.
        </p>
        <div className='input-areas'>
          
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Shop and Learn</h2>
            <Link to='/sign-up'>Store</Link>
            <Link to='/'>Mac</Link>
            <Link to='/'>iPad</Link>
            <Link to='/'>iPhone</Link>
            <Link to='/'>Watch</Link>
            <Link to='/'>AirPods</Link>
            <Link to='/'>Tv&Home</Link>
            <Link to='/'>iPod touch</Link>
            <Link to='/'>AirTag</Link>
            <Link to='/'>Accessories</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Apple Store</h2>
            <Link to='/'>Find a Store</Link>
            <Link to='/'>Genius Bar</Link>
            <Link to='/'>Today at Apple</Link>
            <Link to='/'>Apple Camp</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Services</h2>
            <Link to='/'>Apple Music</Link>
            <Link to='/'>Apple TV+</Link>
            <Link to='/'>Apple Fitness+</Link>
            <Link to='/'>Apple Arcade</Link>
            <Link to='/'>iCloud</Link>
            <Link to='/'>Apple One</Link>
            <Link to='/'>Apple Card</Link>
            <Link to='/'>Apple Books</Link>
            <Link to='/'>Apple Podcasts</Link>
            <Link to='/'>Apple Store</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Account</h2>
            <Link to='/'>Manage your Apple ID</Link>
            <Link to='/'>Apple Store Account</Link>
            <Link to='/'>iCloud.com</Link>
            
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              
              Mac
            </Link>
          </div>
          <small className='website-rights'>iMac 24-inch</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
