import React, { Component } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {StripeProvider} from 'react-stripe-elements';
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
              <StripeProvider apiKey="pk_test_6k2KjDMoeLgFqiEOtCA9V9VH00S1u05rkN">
                <Route path="/cart" component={Cart}/>
              </StripeProvider>
              <Route component={()=> <>what the fuck are you looking for ? </>}/>
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
