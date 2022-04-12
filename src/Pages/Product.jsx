import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Subscribe from '../Components/Subscribe'
import ProductDescription from '../Components/ProductDescription'
import ShippingBanner from '../Components/ShippingBanner'

const ProductPage = () => {
  return (
    <div>
        <Navbar/>
        <ShippingBanner/>
        <ProductDescription/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default ProductPage