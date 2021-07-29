import React, { Component } from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./CartDropdown.scss";

class CartDropdown extends Component {
  render() {
    return (
      <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
      </div>
    );
  }
}

export default CartDropdown;
