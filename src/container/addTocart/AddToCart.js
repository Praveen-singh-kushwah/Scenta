import React, { useState } from "react";
import { GrCart } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import img1 from './cart_img/1.png';
import img2 from './cart_img/2.png'
import img3 from './cart_img/3.png'
import img4 from './cart_img/4.png'
import img5 from './cart_img/5.png'
import img6 from './cart_img/6.png'
import "./addtocart.css";


export default function AddToCart({opencart,setOpencart}) {


  const [addtocart_bestsprd , setaddtocart_bestsprd] = useState([
    {
      img : img1,
      heading : 'Shanaya Luxury Attar Perfume',
      price : 'Rs 3000 -/'
    },
    {
      img : img2,
      heading : 'Oudh Al Hashmi Perfume',
      price : 'Rs 3000 -/'
    },
    {
      img : img5,
      heading : 'Shanaya Luxury Attar Perfume',
      price : 'Rs 3000 -/'
    },
    {
      img : img6,
      heading : 'Shanaya Luxury Attar Perfume',
      price : 'Rs 3000 -/'
    }
  ])



  return (
    <div className="cart_outerContainer">
      <div className="cart_Container">
        <div className="cart_heading">
          <div className="cartsymbntxt">
            <div className="cart_symb">
              <GrCart />
            </div>
            <div className="cart_txt">
              <p>Cart</p>
            </div>
          </div>
          <div className="cart_cancel">
            <RxCross2 onClick={()=>{setOpencart(false)}}/>
          </div>
        </div>

        <div className="empty_cart">
          <p>Your cart is empty</p>
          <button>Start Shopping</button>
        </div>

        <div className="cart_bestsllingprdct">
          {
            addtocart_bestsprd.map((item)=>(
              <div className="cart_card">
                <div className="cart_imgCont">
                  <img src={item.img}/>
                </div>
                <div className="cart_productName">
                  <h3>{item.heading}</h3>
                </div>
                <div className="cart_itemPrice">
                  <h4>{item.price}</h4>
                </div>
                <div className="cart_button">
                  <button>Add to cart</button>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </div>
  );
}
