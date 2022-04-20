import React from "react";
import { Link } from "react-router-dom";
import './Promo.css'

const Promo = () => {
    return(
        <div className='promoMain'>
            <div className='promoCard hockeySticks'>
                <h2>Hockey Sticks</h2>
                <Link to='/products' className="link">
                    <h3>Shop Now</h3>
                </Link>  
            </div>
            <div className='promoCard hockeySkates'>
                <h2>Ice Hockey Skates</h2>
                <Link to='/products' className="link">
                    <h3>Shop Now</h3>
                </Link> 
            </div>
            <div className='promoCard hockeyGear'>
                <h2>Ice Hockey Gear</h2>
                <Link to='/products' className="link">
                    <h3>Shop Now</h3>
                </Link> 
            </div>
        </div>
            
    );
}


export default Promo;