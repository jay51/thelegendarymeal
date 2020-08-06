import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";
import { removeAllItems } from '../redux/actions/cart_actions'
import { connect } from "react-redux";
import {NotificationContainer, NotificationManager} from "react-notifications";

class CheckoutForm extends Component {

  submit = async (e) => {
    e.preventDefault();

    const userData = this.props.userData
    const items = this.props.items.map(item => ({ id: item.id, quantity: item.quantity }));
    let { token } = await this.props.stripe.createToken({ name: userData.fName });

    try {
        console.log({ token: token.id, items, userData })
        let response = await fetch("/.netlify/functions/payment", {
            method: "POST",
            headers: { "Content-Type": "text/plain" },
            body: JSON.stringify({ token: token.id, items, userData })
        });

        let data = await response.json();
        console.log(data);

        if (response.ok) {
            this.props.removeAllItems();
            NotificationManager.success(`Successfully submitted!`, "PURCHASE")

            setTimeout(()=> {
                this.props.history.push("/");
            }, 5000)
        }
        else {
            console.log("GOT Error:", e);
            NotificationManager.error(`Something went wrong!`, "Error")
        }

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

const mapDispatchToProps = dispatch => {
  return {
    removeAllItems: () => dispatch(removeAllItems())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(injectStripe(CheckoutForm));
