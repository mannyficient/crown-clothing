import "./App.css";
import { Switch, Route } from "react-router";
import Homepage from "./Pages/Homepage/Homepage.component";
import ShopPage from "./Pages/Shop/ShopPage";
import Header from "./Components/Header/Header";

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>HatsPage</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
