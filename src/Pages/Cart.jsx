import React from 'react'
import Navbar from '../Components/Navbar'
import ShippingBanner from '../Components/ShippingBanner'
import CartComp from '../Components/CartComp'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'

const Cart = () => {
  return (
    <div>
        <Navbar/>
        <ShippingBanner/>
        <CartComp/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default Cart