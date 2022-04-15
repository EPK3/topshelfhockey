import React from 'react';
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch,  faHeart} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


const ProductCard = ({item}) => {
  return (
    <div className='productCard'>
        <div className='productImage'>
            <img src={item.img}/>
        </div>
        <div className='infoContainer'>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={faCartPlus} className="productIcon" />
            </div>
            <div className='iconContainer'>
            <Link to='/product'>
                <FontAwesomeIcon icon={faSearch} className="productIcon" />
            </Link>
            </div>
            <div className='iconContainer'>
                <FontAwesomeIcon icon={faHeart} className="productIcon" />
            </div>
        </div>
    </div>
  )
}

export default ProductCard