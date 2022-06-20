import React from "react";
import './Navbar.css';
import logo from '../img/topshelflogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStateContext } from "../context/StateContext";
import CartComp from './CartComp';



const Navbar = () => {
    const { showCart, setShowCart, totalQuantities } = useStateContext();
    return(
        <div className = "navbar">
        <div className="navContainer">
            <div className="logoContainer">
                <Link to='/topshelfhockey'><img className="logo" src={logo} alt='logo'/></Link>
            </div>
            {/* <div className="searchBar">
                <label for='productSearch'/>
                <input type='search' id="productSearch" placeholder="Search..." className="searchBox"/>
                <Link to='/products' className="link" aria-label="searchProducts">
                    <FontAwesomeIcon icon={faSearch} className='searchIcon'></FontAwesomeIcon>
                </Link>
            </div> */}
            <div className='push'>
                <Link to='/login' className="link">
                <h2 className="login"><FontAwesomeIcon icon={faUser} className='icon' /> Sign In</h2>
                </Link>
                <h2 className="cart">
                    <span className="fa-layers" onClick={() => setShowCart(true)}>
                        <FontAwesomeIcon icon={faShoppingCart}  className='icon' />
                        <span className="fa-layers-counter">{totalQuantities}</span>
                    </span>
                </h2>
            </div>
        </div>
            {showCart && <CartComp/>}
        </div>
    );
}

export default Navbar;