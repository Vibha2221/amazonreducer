import React from "react";
import image from "./logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCartPlus,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "../StateProvider/StateProvider";
import { useState } from "react";

function Header() {
  const [state, setState] = useState("");
  const [{ basket }, dispatch] = useStateValue("");
  console.log(basket);
  console.log(dispatch);

  return (
    <div>
      <div className="navbar__component">
        <Link to="/">
          <div className="navbar__logo"></div>
        </Link>
        <div className="navbar__locator">
          <div className="navbar__locatorImage"></div>
          <div className="navbar__location"> Bangalore</div>
        </div>
        <div className="navbar__searchcomponent">
          <div>
            <select className="nav__dropdown">
              <option value="All">All</option>
              <option value="Alexa">Alexa</option>
              <option value="Books">Books</option>
              <option value="Baby">Baby</option>
              <option value="Beauty">Beauty</option>
              <option value="Clothes">Clothes</option>
            </select>
          </div>
          <div>
            <input type="text" className="navbar__searchbox" />
          </div>
          <div className="navbar__seaarchboxdiv">
            <div className="navbar__searchicon" />
          </div>
        </div>
        <Link to="/login">
          <div className="navbar_text navbar__signin">
            <div style={{ fontSize: "14px" }}>Hello, Sign In</div>
            <div style={{ fontWeight: "bold" }}>Account & List</div>
          </div>
        </Link>

        <div className="navbar_text navbar__returns">
          <div style={{ fontSize: "14px" }}>Returns</div>
          <div style={{ fontWeight: "bold" }}> & Order</div>
        </div>

        <Link to="/checkout">
          <div className="navbar_text navbar__cart">
            <div src="" className="cart__image"></div>
            <div className="cart__item"> {basket.length} </div>
            <div className="navbar_text_cart">Cart</div>
          </div>
        </Link>
      </div>
      <div className="navbar__footer">
        <div className="navbar__footer_text">Best Seller</div>
        <div className="navbar__footer_text">Mobile</div>
        <div className="navbar__footer_text">Amazon Pay</div>
        <div className="navbar__footer_text">Fashion</div>
        <div className="navbar__footer_text">Electronics</div>
        <div className="navbar__footer_text">Prime</div>
        <div className="navbar__footer_text">New Release</div>
        <div className="navbar__footer_text">Customer Service</div>
        <div className="navbar__footer_text">Computers</div>
        <div className="navbar__footer_text">Home & Kitchen</div>
      </div>
    </div>
    // <div className="header">
    //   {/* logo on the left */}
    //   <Link to="/">
    //     <img className="headerLogo" src={image} alt="" />
    //   </Link>
    //   {/*Searchbox */}
    //   <div className="searchBar">
    //     <input
    //       type="text"
    //       className="searchInput"
    //       vlaue={state}
    //       onChange={(event) => {
    //         setState(event.target.value);
    //       }}
    //     />

    //     <FontAwesomeIcon
    //       icon={faMagnifyingGlass}
    //       className="searchIcon"
    //     ></FontAwesomeIcon>
    //   </div>
    //   <div className="template_container">
    //     {basket
    //       .filter((item) => {
    //         if (state == "") {
    //           return item;
    //         } else if (item.title.toLowerCase().includes(state.toLowerCase())) {
    //           return item;
    //         }
    //         console.log(item);
    //       })
    //       .map((item) => {
    //         return (
    //           <div className="template" key={item.id}>
    //             <img src={item.image} alt="#" />
    //             <h3>{item.title}</h3>
    //             <p className="price">${item.price}</p>
    //           </div>
    //         );
    //       })}
    //   </div>
    //   <div className="headNavBar">
    //     {/*  1st Link */}

    //     <Link to="/login" className="headerLink">
    //       <div className="headerOption">
    //         <span className="headerOption1">Hello, </span>
    //         <span className="headerOption2">Sign In</span>
    //       </div>
    //     </Link>
    //     {/*  2nd Link */}
    //     <Link to="/" className="headerLink">
    //       <div className="headerOption">
    //         <span className="headerOption1">Returns</span>
    //         <span className="headerOption2">& Orders</span>
    //       </div>
    //     </Link>
    //     {/* 3rd Link */}
    //     <Link to="/" className="headerLink">
    //       <div className="headerOption">
    //         <span className="headerOption1">Your </span>
    //         <span className="headerOption2">Prime</span>
    //       </div>
    //     </Link>
    //     {/* 4th Link */}
    //     <Link to="/checkout" className="headerLink">
    //       <div className="headerBasket">
    //         {/* Shopping basket icon */}
    //         <FontAwesomeIcon
    //           icon={faCartPlus}
    //           className="cartIcon"
    //         ></FontAwesomeIcon>
    //         {/*Number of items in the basket */}
    //         <span className="headerOption2 headerBasketCount">
    //           {basket.length}
    //         </span>
    //       </div>
    //     </Link>
    //   </div>
    //   {/*Basket icon with number */}
    // </div>
  );
}
export default Header;
