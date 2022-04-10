import React from 'react';
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch,  faHeart} from '@fortawesome/free-solid-svg-icons';


const ProductCard = ({item}) => {
  return (
    <div className='productCard'>
        <div className='productImage'>
            <img src={item.img}/>
        </div>
        <div className='infoContainer'>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={faShoppingCart} className="productIcon" />
            </div>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={faSearch} className="productIcon" />
            </div>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={faHeart} className="productIcon" />
            </div>
        </div>
    </div>
  )
}

export default ProductCard