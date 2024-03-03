import React from 'react';
import background from './home_img/background3.jpg';
import home_productimg1 from '../addTocart/cart_img/1.png'
import home_productimg2 from '../addTocart/cart_img/2.png'
import home_productimg3 from '../addTocart/cart_img/3.png'
import home_productimg4 from '../addTocart/cart_img/4.png'
import home_productimg5 from '../addTocart/cart_img/5.png'
import home_productimg6 from '../addTocart/cart_img/6.png'

import './homemain.css';

export default function Homemain() {
    return (
        <div className='outer_homemain'>
            <div className="main_homemain">
                <div className="home_content">
                    <h1>Discover Your <br /> New Signature Scent</h1>
                    <p>A new Range of Luxurious Looking Bottles That <br /> Are Filled With Premium Unique Ingridients <br />
                        Gives You A Royal Feeling</p>
                    <button>Shop Now</button>
                </div>
                <div className="home_imgCrousal">
                </div>
            </div>
            <div className="home_backgroung">
                <img src={background} alt="" />
            </div>
        </div>
    )
}
