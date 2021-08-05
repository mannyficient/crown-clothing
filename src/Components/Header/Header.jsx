import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../Firebase/Firebase.utils";
import CartIcon from "../CartIcon/CartIcon";

import { ReactComponent as Logo } from "../../Assets/crown.svg";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCartHidden } from "../../Redux/Cart/Cart.selector";
import { selectCurrentUser } from "../../Redux/User/user.selector";

import {
  HeaderContianer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./Header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContianer>
      <LogoContainer to='/'>
        <Logo className='logo'></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        )}
        <CartIcon></CartIcon>
      </OptionsContainer>
      {hidden ? null : <CartDropdown></CartDropdown>}
    </HeaderContianer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
