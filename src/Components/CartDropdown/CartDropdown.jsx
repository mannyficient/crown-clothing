import React from "react";
import { connect } from "react-redux";
import CustomButton from "../CustomButton/CustomButton";
import { createStructuredSelector } from "reselect";
import CartItem from "../CartItem/CartItem";
import { withRouter } from "react-router";
import toggleCartHidden from "../../Redux/Cart/cart.actions";

import { selectCartItems } from "../../Redux/Cart/Cart.selector";
import "./CartDropdown.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message"> Your Cart is Empty</span>
      )}
    </div>
    <CustomButton
      cartbutton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
