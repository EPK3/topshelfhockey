import React from 'react'
import './Subscribe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Subscribe = () => {
  return (
    <div className='subContainer'>
        <div className='subHeader'>
            <h2>Get Our Latest Deals</h2>
        </div>
        <div className='subInput'>
        <label for='subBox'/>
        <input type='email' id='subBox' className="subBox"/>
        <h3>Subscribe</h3>
        </div>

        <div className='socialContainer'>
            <h2>Follow Us</h2>
            <FontAwesomeIcon icon={faFacebook} className='socialIcon' />
            <FontAwesomeIcon icon={faTwitter} className='socialIcon' />
            <FontAwesomeIcon icon={faYoutube} className='socialIcon' />
            <FontAwesomeIcon icon={faInstagram} className='socialIcon' />
        </div>
    </div>
  )
}

export default Subscribe