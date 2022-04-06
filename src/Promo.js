import React from "react";
import './Promo.css'

const Promo = () => {
    return(
        <div className='promoMain'>
            <div className='promoCard hockeySticks'>
                <h2>Hockey Sticks</h2>
                <h3>Shop Now</h3>
            </div>
            <div className='promoCard hockeySkates'>
                <h2>Ice Hockey Skates</h2>
                <h3>Shop Now</h3>
            </div>
            <div className='promoCard hockeyGear'>
                <h2>Ice Hockey Gear</h2>
                <h3>Shop Now</h3>
            </div>
        </div>
            
    );
}


export default Promo;