import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_logo from '../Assets/cart_icon.png'
function Navbar() {
  const [menu,setMenu]=useState("shop");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPEE</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}>Shop {menu=="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}>Men {menu=="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}>Women{menu=="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}>Kids{menu=="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_logo} alt="" />
        <div className="nav-cart-counter">0</div>
      </div>
    </div>
  )
}

export default Navbar
