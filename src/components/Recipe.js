import React, { Component } from "react";
import { connect } from "react-redux";
import { addShipping, subShipping } from "../actions/cart_actions";
import { Elements } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

class Recipe extends Component {
  state = {
    disabled: true,

    fName: "",
    lName: "",
    email: "",
    phone: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleChecked = e => {
    if (e.target.checked) {
      this.props.addShipping();
      this.setState({ disabled: false });
    } else {
      this.props.substractShipping();
      this.setState({ disabled: true });
    }
  };

  render() {
    return (
      <form className="form-group">
        <div className="form-group">
          <label htmlFor="FName">First Name</label>
          <input
            type="text"
            className="form-control"
            id="FName"
            aria-describedby="nameHelp"
            placeholder="Enter firstname"
            name="fName"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="LName">Last Name</label>
          <input
            type="text"
            className="form-control"
            id="LName"
            aria-describedby="nameHelp"
            placeholder="Enter lastname"
            name="lName"
            onChange={this.handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="Email1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="Email1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={this.handleChange}
            name="email"
          />
          <small id="emailHelp" className="form-text text-muted">
            Please input an email to contact you
          </small>
        </div>

        <div className="form-group">
          <label htmlFor="tel">Telephone</label>
          <input
            className="form-control"
            type="tel"
            placeholder="1-(555)-555-5555"
            pattern="[0-9]+"
            id="tel"
            name="phone"
            onChange={this.handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            Please input a Phone number to contact you
          </small>
        </div>

        <div className="mb-2">Add Delivery +6$</div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for delivery"
                ref="shipping"
                onChange={this.handleChecked}
              />
            </div>
          </div>

          <input
            type="text"
            className="form-control"
            placeholder="Address"
            disabled={this.state.disabled}
          />
        </div>

        <div>
          <b>Total: US $ {this.props.total} </b>
        </div>

        <div className="form-check">
          <hr />
          <Elements>
            <CheckoutForm formData={this.state} />
          </Elements>
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    addedItems: state.addedItems,
    total: state.total
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addShipping: () => {
      dispatch(addShipping());
    },
    substractShipping: () => {
      dispatch(subShipping());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recipe);
