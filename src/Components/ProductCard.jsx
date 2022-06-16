import React from 'react';
import './ProductCard.css'
import { Link } from 'react-router-dom';
import { urlFor } from '../lib/client';


const ProductCard = ({product: { image, name, slug, sale_price, og_price }}) => {
    
  return (
    <div className='productCard'>
        <div className='productImage'>
            <img src={urlFor(image && image[0])} alt='Something went wrong..'/>
        </div>
        <div className='infoContainer'>
            <Link className="itemLink" to={`/product/${slug.current}`} aria-label='productLink'>
                <div className='productName'>
                    <h1>{name}</h1>
                    <div className='productSalePrice'>
                        <h2 className='ogPrice'>${og_price}</h2>
                        <h2 className='salePrice'>${sale_price}</h2>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default ProductCard