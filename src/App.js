import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StripeProvider } from 'react-stripe-elements';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Shop from "./components/Shop";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <StripeProvider apiKey={process.env.REACT_APP_PUB_KEY}>
              <Route path="/cart" component={Cart} />
            </StripeProvider>
            <Route component={() => <>what the fuck are you looking for ? </>} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
export default App
