import { connect } from "react-redux";
import toggleCartHidden from "../../Redux/Cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg";
import "./CartIcon.scss";

import React from "react";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../Redux/Cart/Cart.selector";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shoppin-icon"></ShoppingIcon>
      <span className="item-count">{itemCount}</span>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
