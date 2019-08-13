import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Shop from "./components/Shop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={() => <> what the fuck! what the fuck!</>}/>
            <Route exact path="/shop" component={Shop}/>
            <Route path="/cart" component={Cart}/>
            <Route component={()=> <>what the fuck are you looking for ? </>}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
