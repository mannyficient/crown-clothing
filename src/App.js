import { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import { connect } from "react-redux";
import Homepage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";
import Contact from "./Pages/Contact/Contact";

import {
  auth,
  createUserProfiledDocument,
  addCollectionAndDocuments,
} from "./Firebase/Firebase.utils";
import { setCurrentUser } from "./Redux/User/user.actions";
import { selectCurrentUser } from "./Redux/User/user.selector";
import { createStructuredSelector } from "reselect";
import Header from "./Components/Header/Header";
import { selectCollectionForPreview } from "./Redux/Shop/shop.selector";
import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfiledDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
        addCollectionAndDocuments(
          "collections",
          collectionsArray.map(({ title, items }) => ({ title, items }))
        );
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path='/' component={Homepage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/contact' component={Contact}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/'></Redirect>
              ) : (
                <SignInAndSignUp></SignInAndSignUp>
              )
            }
          ></Route>
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
