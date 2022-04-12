import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Select from 'react-dropdown-select';
import './ProductDescription.css';

const handOptions = [
  { value: 'left', label: 'Left'},
  { value: 'right', label: 'Right' }
]

const flexOptions = [
  { value: '65', label: '65'},
  { value: '75', label: '75' },
  { value: '85', label: '85' },
  { value: '100', label: '100' }
]

const ProductDescription = () => {
  return (
    <div className='productContainer'>
      <div className='imgContainer'>
          <img src='https://i.ibb.co/mS9B4kC/warrior-hockey-stick.png' />
      </div>
      <div className='descContainer'>
          <h2>Warrior Covert QR Edge Grip</h2>
          <h3>Covert QR Edge technology is unlike anything seen before in a hockey stick. We created the Edge Taper which maximizes the energy transfer by focusing the energy down into the blade for our fastest release yet.</h3>
          <h4>As low as <h4 className='price'>$189.98</h4></h4>
          <h5>Original Price <h5 className='originalPrice'>$259.99</h5></h5>
          <div className='dropDownContainer'>
            <div className='stickFilter'>
              <Select options={handOptions} placeholder='Choose Hockey Stick Hand' className='stickDropdown'/>
            </div>
            <div className='stickFilter'>
              <Select options={flexOptions} placeholder='Choose Hockey Flex' className='stickDropdown'/>
            </div>
          </div>
          <div className='addCart'>
            <div className='quantity'>
              <h5>Qty:</h5>
              <input type='text' id='quantity' className='productQuantity' placeholder='1' required />
            </div>
            <div className='addToCart'>
              <div id='addToCart'><FontAwesomeIcon icon={faLock} className='lock' />Add To Cart</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductDescription