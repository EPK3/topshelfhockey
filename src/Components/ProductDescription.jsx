import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './ProductDescription.css';
import { client, urlFor } from '../lib/client';
import { useParams } from 'react-router';
import { useStateContext } from '../context/StateContext';




const sizeOptions = [
  { value: 'S', label: 'Small'},
  { value: 'M', label: 'Medium' },
  { value: 'L', label: 'Large' },
  { value: 'XL', label: 'X-Large' }
]

const ProductDescription = () => {
  const { decQty, incQty, qty, onAdd } = useStateContext();
  const [productData, setProductData] = useState(null);
  const { slug } = useParams();

  useEffect(()=>{
    client.fetch(
      `*[slug.current == $slug]{
        image,
        name,
        slug,
        sale_price,
        og_price,
        details
      }`,
      { slug }
    )
    .then((data) => setProductData(data[0]))
  }, [slug]);

  if (!productData) return <div className='loadingData'><h1>Loading...</h1></div>

  

  return (
    <div className='productContainer'>
      <div className='imgContainer'>
          <img src={urlFor(productData.image && productData.image[0])} />
      </div>
      <div className='descContainer'>
          <h2>{productData.name}</h2>
          <h3>{productData.details}</h3>
          <h4>As low as <p className='price'>{productData.sale_price}</p></h4>
          <h5>Original Price <p className='originalPrice'>{productData.og_price}</p></h5>
          <div className='quantity'>
              <h5>Qty:</h5>
              <div className='qtyDiv'>
                <span className='minusQty' onClick={decQty}><FontAwesomeIcon icon={faMinus} className='plusMinus' /></span>
                <span className='numQty'>{qty}</span>
                <span className='plusQty' onClick={incQty}><FontAwesomeIcon icon={faPlus} className='plusMinus' /></span>
              </div>
              <div className='dropDownContainer'>
                <div className='stickFilter'>
                  <Select options={sizeOptions} placeholder='Choose Size...' className='stickDropdown'/>
                </div>
              </div>
            </div>
          <div className='addCart'>
            <div className='addToCart'>
              <div id='addToCart' onClick={() => onAdd(productData, qty)}><FontAwesomeIcon icon={faLock} className='lock' />Add To Cart</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default ProductDescription