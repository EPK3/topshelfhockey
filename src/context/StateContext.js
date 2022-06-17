import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantities, setTotalQuantities] = useState(0);
    const [qty, setQty] = useState(1);

    let foundProduct;
    let index;

    const onAdd = (product, quantity) => {
        const checkProductInCart = cartItems.find((item) => item.slug.current === product.slug.current);
        
        setTotalPrice((prevTotalPrice) => prevTotalPrice + product.sale_price * quantity);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
        
        if(checkProductInCart) {
          const updatedCartItems = cartItems.map((cartProduct) => {
            if(cartProduct.slug.current === product.slug.current) return {
              ...cartProduct,
              quantity: cartProduct.quantity + quantity
            }
          })
    
          setCartItems(updatedCartItems);
        } else {
          product.quantity = quantity;
          
          setCartItems([...cartItems, { ...product }]);
        }
    
        toast.success(`${qty} ${product.name} added to the cart.`);
      } 

      const onRemove = (product) => {
        foundProduct = cartItems.find((item) => item.slug.current === product.slug.current);
        const newCartItems = cartItems.filter((item) => item.slug.current !== product.slug.current);
    
        setTotalPrice((prevTotalPrice) => prevTotalPrice -foundProduct.sale_price * foundProduct.quantity);
        setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity);
        setCartItems(newCartItems);
      }

      const toggleCartItemQuantity = (slug, value) => {
        foundProduct = cartItems.find((item) => item.slug.current === slug)
        index = cartItems.findIndex((product) => product.slug.current === slug)
        const newCartItems = cartItems.filter((item)=> item.slug.current !== slug)
        let newCartItems1 = cartItems.slice(0, index);
        let newCartItems2 = cartItems.slice(index + 1, cartItems.length);

        if(value === 'inc') {
          setCartItems([...newCartItems1, { ...foundProduct, quantity: foundProduct.quantity + 1 }, ...newCartItems2]);
          setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.sale_price);
          setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1);

        } else if(value === 'dec'){
          if (foundProduct.quantity > 1) {
            setCartItems([...newCartItems1, { ...foundProduct, quantity: foundProduct.quantity - 1 }, ...newCartItems2]);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.sale_price);
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1);
          }
        }
      }

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
    }

    const decQty = () => {
        setQty((prevQty) => {
            if(prevQty -1 < 1) return 1;
            return prevQty - 1
        });
    }


    return (
        <Context.Provider
        value={{
            showCart,
            setShowCart,
            cartItems,
            totalPrice,
            totalQuantities,
            qty,
            incQty,
            decQty,
            onAdd,
            setCartItems,
            setTotalPrice,
            setTotalQuantities,
            toggleCartItemQuantity,
            onRemove
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);