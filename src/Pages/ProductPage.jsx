import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Subscribe from '../Components/Subscribe'
import ProductDescription from '../Components/ProductDescription'

const ProductPage = () => {
  return (
    <div>
        <Navbar/>
        <ProductDescription/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default ProductPage