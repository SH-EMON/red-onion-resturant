import React from 'react';
import './Food-content.css';

const FoodContent = () => {
    return (
        <div className="food-content-wrapper">
            <div className="why-part">
                <h2>Why you choose us</h2>
                <p>Barton waited twenty always repair in with we do.An delighted offending curiousity my is dashwoods.Boy prosperous is increasing surrounded.</p>
            </div>
            <div className="food-cart">
                <div className="food-cart-item">
                    <img src="/img/fcontent-one.png" alt=""/>
                    <h2>Fast Delivery</h2>
                    <p>Keep your system in sync automated web hook based notifiction each time link is paid and how we dream about our future</p>
                    <a href="#">See more</a>
                </div>
                <div className="food-cart-item">
                    <img src="/img/fcontent-two.png" alt=""/>
                    <h2>&nbsp;&nbsp;&nbsp;&nbsp;  Auto Responder</h2>
                    <p>Keep your system in sync automated web hook based notifiction each time link is paid and how we dream about our future</p>
                    <a href="#">See more</a>
                </div>  
                <div className="food-cart-item different">
                    <img src="/img/fcontent3.png" alt=""/>
                    <h2>&nbsp;&nbsp; Home Delivery</h2>
                    <p>Keep your system in sync automated web hook based notifiction each time link is paid and how we dream about our future</p>
                    <a href="#">See more</a>
                </div>
            </div>
        </div>
    );
};

export default FoodContent;