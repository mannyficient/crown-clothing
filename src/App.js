import { Component } from "react";
import { Switch, Route } from "react-router";
import { connect } from "react-redux";
import Homepage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";

import { auth, createUserProfiledDocument } from "./Firebase/Firebase.utils";
import { setCurrentUser } from "./Redux/User/user.actions";
import Header from "./Components/Header/Header";
import "./App.css";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
