import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  removeItem,
  addQuantity,
  subtractQuantity
} from "../actions/cart_actions";

import Recipe from "./Recipe";

class Cart extends Component {
  handleRemove = id => this.props.removeItem(id);
  handleAddQuantity = id => this.props.addQuantity(id);
  handleSubtractQuantity = id => this.props.subtractQuantity(id);

  render() {
    let addedItems = this.props.items.length ? (
      this.props.items.map(item => (
        <div className="card mb-3" key={item.id} style={{ maxWidth: "80rem" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src={item.img} alt={item.title} className="card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text mb-0">PRICE: {item.price}$</p>
                <p className="card-text mt-0">QUANTITY: {item.quantity}</p>
                <p className="card-text">{item.desc}</p>
                <div className="add-remove">
                  <button
                    className="btn btn-dark mr-2"
                    onClick={() => {
                      this.handleAddQuantity(item.id);
                    }}
                  >
                    ADD
                  </button>
                  <button
                    className="btn btn-dark"
                    onClick={() => {
                      this.handleSubtractQuantity(item.id);
                    }}
                  >
                    SUB
                  </button>
                </div>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => {
                    this.handleRemove(item.id);
                  }}
                >
                  Remove
                </button>
                <p className="card-text">
                  <small className="text-muted">
                    Made fresh within few hours from your ordere!
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="mt-5 mb-5">
        <Link to="/shop">YOUR CART IS EMPHTY. ADD MORE ITEMS? </Link>
      </div>
    );
    return (
      <div>
        <h5 className="mt-3">YOUR ITEMS:</h5>
        <hr />
        {addedItems}
        <hr />
        <Recipe />
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
    removeItem: id => {
      dispatch(removeItem(id));
    },
    addQuantity: id => {
      dispatch(addQuantity(id));
    },
    subtractQuantity: id => {
      dispatch(subtractQuantity(id));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
