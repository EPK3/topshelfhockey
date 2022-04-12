import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Promo from '../Components/Promo'
import Products from '../Components/Products'
import Subscribe from '../Components/Subscribe'
import Footer from '../Components/Footer'
import ShippingBanner from '../Components/ShippingBanner'

const Home = () => {
  return (
    <div>
      <ShippingBanner/>
        <Navbar />
        <Banner />
        <Promo />
        <Products />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default Home