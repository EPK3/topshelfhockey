import React, { useState, useEffect } from 'react';
import './Products.css';
import { popularProducts } from '../data';
import ProductCard from './ProductCard';
import { client } from '../lib/client';


const Products = () => {

  const [productData, setProductData] = useState(null);

  useEffect(()=>{
    client.fetch(
      `*[_type == "product"]{
        image,
        name,
        slug,
        sale_price,
      }`
    )
    .then((data) => setProductData(data))
  }, []);

  console.log(productData);

  return (
    <div className='productsContainer'>
        {productData?.map((product) => product.name)}
    </div>
  )
};

export default Products;