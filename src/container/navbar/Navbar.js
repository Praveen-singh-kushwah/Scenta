import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { MdOutlineAccountCircle } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import logo from './nav_images/logo.png'
import './navbar.css';
import AddToCart from '../addTocart/AddToCart';
import Login from '../login/Login';


export default function Navbar( ) {
    
    const [opencart, setOpencart] = useState(false)
    const [openlogin, setOpenlogin] = useState(false)
    const [opensearch, setOpensearch] = useState(false)
    
    const [navsearch , setnavsearch] = useState('Search here')
    
    return (
        <>
        <div className='nav_outerContainer'>
            <div className="nav_innerContainer">
                <div className="nav_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav_linkContainer">
                    <li id='home'>Home</li>
                    <li id='products'>Our Products</li>
                    <li id='aboutUs'>About Us</li>
                    <li id='products'>Contact Us</li>
                </div>

                {opensearch?<div className='nav_searchbar'>
                    <input type='text' id='searbar' value={navsearch} onChange={(e)=>{setnavsearch(e.target.value)}}/>
                </div>: ""}

                <div className="nav_icons">
                    <IoSearch onClick={()=>{setOpensearch(!opensearch)}}/>
                    <MdOutlineAccountCircle onClick={()=> setOpenlogin(!openlogin)} />
                    <GrCart onClick={()=> setOpencart(!opencart)}/>
                </div>
            </div>
        </div>
        {opencart?<div className='nav_cart_container'>
            <AddToCart opencart={opencart} setOpencart={setOpencart}/>
        </div>:""}

        {openlogin?<div className='nav_login_container'>
            <Login openlogin={openlogin} setOpenlogin={setOpenlogin}/>
        </div>:""}
        </>
    )
}
