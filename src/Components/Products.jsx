import React from 'react';
import './Products.css';
import { popularProducts } from '../data';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className='productsContainer'>
        {popularProducts.map(item=>(
            <ProductCard item={item} key={item.id}/>
        ))}
    </div>
  )
};

export default Products;