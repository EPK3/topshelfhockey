import React from "react";
import './Navbar.css';
import logo from '../img/topshelflogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {
    return(
        <div className = "navbar">
            <img className="logo" src={logo} alt='logo'/>
            <div className="searchBar">
                <input type='search'  placeholder="Search..." className="searchBox"/>
                <FontAwesomeIcon icon={faSearch} className='searchIcon'></FontAwesomeIcon>
            </div>
            <div className='push'>
                <h2 className="login"><FontAwesomeIcon icon={faUser} className='icon' /> Sign In</h2>
                <h2 className="cart">
                    <span className="fa-layers">
                        <FontAwesomeIcon icon={faShoppingCart}  className='icon' />
                        <span className="fa-layers-counter">2</span>
                    </span>
                </h2>
            </div>
        </div>
    );
}

export default Navbar;