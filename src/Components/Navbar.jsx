import React from "react";
import './Navbar.css';
import logo from '../img/topshelflogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";



const Navbar = () => {
    return(
        <div className = "navbar">
            <Link to='/'><img className="logo" src={logo} alt='logo'/></Link>
            <div className="searchBar">
                <input type='search'  placeholder="Search..." className="searchBox"/>
                <Link to='/products' className="link">
                    <FontAwesomeIcon icon={faSearch} className='searchIcon'></FontAwesomeIcon>
                </Link>
            </div>
            <div className='push'>
                <Link to='/login' className="link">
                <h2 className="login"><FontAwesomeIcon icon={faUser} className='icon' /> Sign In</h2>
                </Link>
                <Link to='/cart'>
                <h2 className="cart">
                    <span className="fa-layers">
                        <FontAwesomeIcon icon={faShoppingCart}  className='icon' />
                        <span className="fa-layers-counter">2</span>
                    </span>
                </h2>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;