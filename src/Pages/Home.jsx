import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Promo from '../Components/Promo'
import Products from '../Components/Products'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Banner />
        <Promo />
        <Products />
    </div>
  )
}

export default Home