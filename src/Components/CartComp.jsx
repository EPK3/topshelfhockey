import React, { useRef } from 'react'
import './CartComp.css';
import { useStateContext } from '../context/StateContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMinus, faPlus, faArrowAltCircleLeft, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import toast from 'react-hot-toast';
import { urlFor } from '../lib/client';



const Cart = () => {
  const { totalPrice, totalQuantities, cartItems, setShowCart } = useStateContext();
  const cartRef = useRef();
  

  return (
    <div className='cartWrapper' ref={cartRef}>
      <div className='cartContainer'>
        <button type='button' onClick={()=> setShowCart(false)} className='cartButton'>
          <FontAwesomeIcon icon={faArrowAltCircleLeft} className='arrowIcon'/>
          <span className='heading'>Your Cart ({totalQuantities})</span>
        </button>
        {cartItems.length < 1 &&(
          <div className='empty'>
            <FontAwesomeIcon icon={faShoppingCart} className='cartIcon'/>
            <h1 className='emptyHeader'>Your Cart Is Empty...</h1>
            <button type='button' onClick={()=> setShowCart(false)} className='continueShopping'>
              Continue Shopping
            </button>
          </div>
        )}

        <div className='productCart'>
          {cartItems.length >= 1 && cartItems.map((item)=> (
            <div className='product' key={item._id}>
              <img src={urlFor(item?.image[0])} className='cartProductImage'/>
              <div className='itemDesc'>
                <div className='nameQty'>
                  <h4 className='itemName'>{item.name}</h4>
                  <div className='qtyDiv'>
                    <span className='minusQty' onClick=""><FontAwesomeIcon icon={faMinus} className='plusMinus' /></span>
                    <span className='numQty'>1</span>
                    <span className='plusQty' onClick=''><FontAwesomeIcon icon={faPlus} className='plusMinus' /></span>
                  </div>
                </div>
                <div className='priceRemove'>
                  <h5 className='itemPrice'>${item.sale_price}</h5>
                  <button type='button' className='remove' onClick='' >Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      {cartItems.length >= 1 && (
        <div className='cartBottom'>
          <div className='total'>
            <h3>Subtotal:</h3>
            <h3>${totalPrice}</h3>
          </div>
          <button type='button' className='checkout' onClick='' >Checkout</button>
        </div>
      )}
      </div>
    </div>
  )
}

export default Cart