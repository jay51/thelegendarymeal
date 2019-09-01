import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { connect } from "react-redux";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(e) {
    e.preventDefault();

    const userData = this.props.userData
    const items = this.props.items.map(item => ({ id: item.id, title: item.title }));
    // console.log(items)

    //TODO:Make sure we have a token before send request
    let { token } = await this.props.stripe.createToken({ name: userData.fName });
    console.log(token);

    try {
      let response = await fetch("/.netlify/functions/payment", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ token: token.id, items, userData })
      });

      let data = await response.json();
      console.log(data);
      if (response.ok) {
        this.setState({ complete: true });
      }
    } catch (e) {
      console.log("INVALID CARD NUMBER")
      console.log("GOT Error:", e);
    }
  }

  render() {
    if (this.state.complete) return <h1>Purchase Complete</h1>;
    return (
      <div className="checkout mt-4 mb-5">
        <p className="mb-4">COMPLETE YOUR PURCHASE</p>
        <CardElement />
        <button className="mt-4 btn btn-success" onClick={this.submit}>
          Checkout
        </button>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    items: state.addedItems
  };
};

export default connect(mapStateToProps)(injectStripe(CheckoutForm));
