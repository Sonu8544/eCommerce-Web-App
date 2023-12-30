import React, { useState } from 'react'
import "./Navbar.css"
// import logo from "../Assets/logo.png"
import cart_icon from '../Assets/cart_icon.png'
import shop_logo from '../Assets/shop_logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [menu, setMenu] = useState("shop")
  return (
    <>
      <div className="page-width navbar">
        <div className="nav-logo">
          <img className='nav-logo-img' src={shop_logo} alt="Nav logo" />
          <p>eCom</p>
        </div>

        <ul className="nav-menu">
          <li onClick={() => { setMenu("shop") }}> <Link to='/'> Shop</Link> {menu === "shop" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("mens") }}> <Link to='/mens'> Men</Link> {menu === "mens" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("women") }}> <Link to='/women'> Women</Link> {menu === "women" ? <hr /> : <></>}</li>
          <li onClick={() => { setMenu("kids") }}> <Link to='/kids'> Kids</Link> {menu === "kids" ? <hr /> : <></>}</li>
        </ul>

        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="" />
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  )
}

export default Navbar