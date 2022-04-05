import React from "react";
import './Navbar.css';
import logo from './img/topshelflogo.png'

const Navbar = () => {
    return(
        <div className = "navbar">
            <img className="logo" src={logo} />
            <div className='push'>
                <h2 className="login">Login</h2>
                <h2 className="cart">Cart</h2>
            </div>
        </div>
    );
}

export default Navbar;