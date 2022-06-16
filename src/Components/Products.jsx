import React, { useState, useEffect } from 'react';
import './Products.css';
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
        og_price,
      }`
    )
    .then((data) => setProductData(data))
  }, []);

  return (
    <div className='productsContainer'>
        {productData?.map((product) => <ProductCard key={product._id} product={product} />)}
    </div>
  )
};

export default Products;