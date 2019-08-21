import React, {Component} from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {complete: false};
    this.submit = this.submit.bind(this);
  }
  async submit(e) {
    e.preventDefault();
    let {token} = await this.props.stripe.createToken({name: "Name"});
    console.log(token.id)
    //TODO:Make sure we have a token before send request
    //TODO:Add the delivery address to post request
    try{
      let response = await fetch("/.netlify/functions/payment", {
          method: "POST",
          headers: {"Content-Type": "text/plain"},
          body: JSON.stringify({token: token.id})
        });
      let data = await response.json();
      console.log(data);

      if (response.ok){
        console.log("Purchase Complete!")
        this.setState({complete: true});
      } 
    } catch (e){
      console.log(e);
    }

  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
          <div className="checkout mt-4 mb-5">
            <p className="mb-4">COMPLETE YOUR PURCHASE</p>
            <CardElement />
            <button className="mt-4 btn btn-success" onClick={this.submit}>Checkout</button>
          </div>
        );
  }
}

export default injectStripe(CheckoutForm);
