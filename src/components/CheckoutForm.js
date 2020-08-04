import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { connect } from "react-redux";
import {NotificationContainer, NotificationManager} from "react-notifications";

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false, success: false };
  }

  submit = async (e) => {
    e.preventDefault();

    const userData = this.props.userData
    // TODO: remove all added items when purchase or error
    // TODO: do we need item.title? no
    const items = this.props.items.map(item => ({ id: item.id }));
    let { token } = await this.props.stripe.createToken({ name: userData.fName });
    console.log({ token: token.id, items, userData })

    try {
      let response = await fetch("/.netlify/functions/payment", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ token: token.id, items, userData })
      });

      let data = await response.json();
      console.log(data);

      if (response.ok) {
        this.setState({ complete: true, success: true });

        NotificationManager.success(`Successfully submitted!`, "PURCHASE")
        setTimeout(()=> {
          this.props.history.push("/");
        }, 5000)
      }
      else { this.setState({ complete: true, success:false }) }

    } catch (e) {
      console.log("GOT Error:", e);
      NotificationManager.error(`Something went wrong!`, "Error")
      setTimeout(()=> {
        this.props.history.push("/");
      }, 5000)
    }
  }


  render() {

    return (
      <div className="checkout mt-4 mb-5">
        <NotificationContainer />
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
