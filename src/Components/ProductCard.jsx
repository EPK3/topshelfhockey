import React from 'react';
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch,  faHeart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { urlFor } from '../lib/client';


const ProductCard = ({product: { image, name, slug, sale_price }}) => {
  return (
    <div className='productCard'>
        <div className='productImage'>
            <img src={urlFor(image && image[0])} alt='Something went wrong..'/>
        </div>
        <div className='infoContainer'>
            <div className='productName'>
                <h1>{name}</h1>
            </div>
            <div className='icons'>
                <div className='iconContainer'>
                    <FontAwesomeIcon icon={faCartPlus} className="productIcon" />
                </div>
                <div className='iconContainer'>
                <Link to={`/product/${slug.current}`} aria-label='productLink'>
                    <FontAwesomeIcon icon={faSearch} className="productIcon" />
                </Link>
                </div>
                <div className='iconContainer'>
                    <FontAwesomeIcon icon={faHeart} className="productIcon" />
                </div>
            </div>
            <div className='productSalePrice'>
                <h2>${sale_price}</h2>
            </div>
        </div>
    </div>
  )
}

export default ProductCard