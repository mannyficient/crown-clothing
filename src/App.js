import { Component } from "react";
import { Switch, Route } from "react-router";
import Homepage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInAndSignUp from "./Pages/sign-in-and-sign-up/sign-in-and-sign-up";

import { auth } from "./Firebase/Firebase.utils";
import Header from "./Components/Header/Header";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={Homepage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route path="/signin" component={SignInAndSignUp}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
