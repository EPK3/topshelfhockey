import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from "@fortawesome/free-solid-svg-icons";
import React from 'react';
import Select from 'react-select';
import './ProductDescription.css';
import { popularProducts } from '../data';
import { useLocation } from 'react-router';



const sizeOptions = [
  { value: 'S', label: 'Small'},
  { value: 'M', label: 'Medium' },
  { value: 'L', label: 'Large' },
  { value: 'XL', label: 'X-Large' }
]

const ProductDescription = () => {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = popularProducts.find(object => object.id === Number(productId));
  
  console.log(product);

  return (
    <div className='productContainer'>
      <div className='imgContainer'>
          <img src={product.img} />
      </div>
      <div className='descContainer'>
          <h2>{product.name}</h2>
          <h3>{product.desc}</h3>
          <h4>As low as <p className='price'>{product.sale_price}</p></h4>
          <h5>Original Price <p className='originalPrice'>{product.og_price}</p></h5>
          <div className='dropDownContainer'>
            <div className='stickFilter'>
              <Select options={sizeOptions} placeholder='Choose Size...' className='stickDropdown'/>
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