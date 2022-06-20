import React from "react";
import { Link } from "react-router-dom";
import './Promo.css'
import { useStateContext } from "../context/StateContext";

const Promo = () => {
    const { setFilter } = useStateContext();
    return(
        <div className='promoMain'>
            <div className='promoCard hockeySticks'>
                <h2>Hockey Sticks</h2>
                <Link to='/products/sticks' className="link" onClick={()=> setFilter({category: 'sticks'})}>
                    <h3>Shop Now</h3>
                </Link>  
            </div>
            <div className='promoCard hockeySkates'>
                <h2>Ice Hockey Skates</h2>
                <Link to='/products/skates' className="link" onClick={()=> setFilter({category: 'skates'})}>
                    <h3>Shop Now</h3>
                </Link> 
            </div>
            <div className='promoCard hockeyGear'>
                <h2>Ice Hockey Gear</h2>
                <Link to='/products/gear' className="link" onClick={()=> setFilter({category: 'gear'})}>
                    <h3>Shop Now</h3>
                </Link> 
            </div>
        </div>
            
    );
}


export default Promo;