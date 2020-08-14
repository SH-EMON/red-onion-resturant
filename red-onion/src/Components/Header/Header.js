import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header-wrapper">
            <div className="header-left">
                <img src={logo} alt="" />
            </div>
            <div className="header-right">
                <FontAwesomeIcon className="scart" icon={faShoppingCart} />
                <a>Login</a>
                <button className="signup-btn">Sign up</button>
            </div>
        </div>
    );
};

export default Header;