import React from 'react'
import './Footer.css'
import miniLogo from '../img/whiteIcon.png'

const Footer = () => {
  return (
    <div className='footerContainer'>
        <div className='contactInfo'>
            <h3>TopShelf Hockey, Inc.</h3>
            <h3>P.O. Box 12345</h3>
            <h3>Champaign, IL 61826</h3>
        </div>
        <img src={miniLogo} className='miniLogo'/>
        <div className='aboutUs'>
            <h3>Cart</h3>
            <h3>Wishlist</h3>
            <h3>About Us</h3>
        </div>
    </div>
  )
}

export default Footer