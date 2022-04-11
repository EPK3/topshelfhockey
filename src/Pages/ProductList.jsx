import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProductFilters from '../Components/ProductFilters'
import Products from '../Components/Products'
import Subscribe from '../Components/Subscribe'

const ProductList = () => {
  return (
    <div>
        <Navbar />
        <ProductFilters/>
        <Products/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default ProductList