import React from 'react';
import logo from '../../images/logo.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <div className="footer-top">
                <div className="f-top-left">
                    <img src={logo} alt=""/>
                </div>
                <div className="f-top-middle">
                    <ul>
                        <li><a href="#">About Online food</a></li>
                        <li><a href="#">Read our blog</a></li>
                        <li><a href="#">Sign up to deliver</a></li>
                        <li><a href="#">Add your restaurant</a></li>
                    </ul>
                </div>
                <div className="f-top-right">
                    <ul>
                        <li><a href="#">Get help </a></li>
                        <li><a href="#">Read FAQs</a></li>
                        <li><a href="#">View all cities</a></li>
                        <li><a href="#">Restaurant near me</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <p>Copyright &copy; 2020 online food</p>
                </div>
                <div className="footer-bottom-right">
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms of use</a>
                    <a href="#">Pricing</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;