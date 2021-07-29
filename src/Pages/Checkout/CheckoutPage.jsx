import React from "react";
import CheckoutItem from "../../Components/Checkout/CheckoutItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/Cart/Cart.selector";

import "./CheckoutPage.scss";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-blocks">
          <span>Product</span>
        </div>
        <div className="header-blocks">
          <span>Description</span>
        </div>
        <div className="header-blocks">
          <span>Quantity</span>
        </div>
        <div className="header-blocks">
          <span>Price</span>
        </div>
        <div className="header-blocks">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem}></CheckoutItem>
      ))}
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
