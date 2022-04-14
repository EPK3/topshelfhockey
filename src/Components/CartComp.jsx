import React from 'react'
import './CartComp.css'

const Cart = () => {
  return (
    <div className='cartContainer'>
      <div className='cartHeader'>
        <h1>Your Cart</h1>
        <div className='cartWishlist'>
          <h2>Cart (2)</h2>
          <h2>Wishlist (0)</h2>
        </div>
        <div className='contCheck'>
          <h3>Continue Shopping</h3>
          <h3>Checkout Now</h3>
        </div>
      </div>
      <div className='cartWrapper'>
        <div className='cartItems'>
          <div className='cartProduct'>
            <div className='itemImg'>
              <img src='https://i.ibb.co/mS9B4kC/warrior-hockey-stick.png' /> 
            </div>
            <div className='itemSummaryWrapper'>
              <div className='itemSummary'>
                <h5>Product: </h5><p className='itemName'>Warrior Covert Edge Grip</p>
              </div>
              <div className='itemSummary'>
                <h5>ID: </h5><p className='itemId'>984907119</p>
              </div>
              <div className='itemSummary'>
                <h5>Size: </h5><p className='itemSize'>Right 85</p>
              </div>
            </div>
            <div className='itemPriceCont'>
              <p className='itemPrice'>$189.99</p>
              <p className='itemQuantity'>Qty: 1</p>
            </div>
            <p className='removeItem'>Remove</p>
          </div>
          <div className='cartProduct'>
            <div className='itemImg'>
              <img src='https://i.ibb.co/Jj4kr63/ccm-hockey-helmet.png' /> 
            </div>
            <div className='itemSummaryWrapper'>
              <div className='itemSummary'>
                <h5>Product: </h5><p className='itemName'>CCM Tacks 910 Hockey Helmet</p>
              </div>
              <div className='itemSummary'>
                <h5>ID: </h5><p className='itemId'>759275927</p>
              </div>
              <div className='itemSummary'>
                <h5>Size: </h5><p className='itemSize'>M</p>
              </div>
            </div>
            <div className='itemPriceCont'>
              <p className='itemPrice'>$229.99</p>
              <p className='itemQuantity'>Qty: 1</p>
            </div>
            <p className='removeItem'>Remove</p>
          </div>
        </div>
        <div className='cartSummary'>
          Summary
        </div>
      </div>
    </div>
  )
}

export default Cart