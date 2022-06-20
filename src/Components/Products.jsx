import React, { useState, useEffect } from 'react';
import './Products.css';
import ProductCard from './ProductCard';
import { useStateContext } from '../context/StateContext';


const Products = () => {

  const { filteredProducts } = useStateContext();


  return (
    <div className='productsContainer'>
        {filteredProducts?.map((product) => <ProductCard key={product.slug.current} product={product} />)}
    </div>
  )
};

export default Products;