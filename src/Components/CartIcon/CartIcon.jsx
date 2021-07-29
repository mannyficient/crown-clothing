import { connect } from "react-redux";
import toggleCartHidden from "../../Redux/Cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import "./CartIcon.scss";

import React from "react";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shoppin-icon"></ShoppingIcon>
      <span className="item-count">0</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
