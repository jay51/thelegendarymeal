import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions/cart_actions'

// TODO: refactore to functional component instead of class
class Shop extends Component {

  handleClick = (id) => { this.props.addToCart(id); }

  render() {
    let itemList = this.props.items.map(item =>
      (<div className="col mt-3 mb-5" key={item.id}>
        <div className="card" style={{ "width": "20rem" }}>
          <img src={item.img} className="card-img-top" alt={item.title} />
          <div className="card-body">

            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.desc}</p>
            <button className="btn btn-dark m-2" onClick={() => { this.handleClick(item.id) }}>ADD</button>
            <p className="card-text">Price: {item.price}$</p>

          </div>
        </div>
      </div>
      )
    );

    return (
      <div className="row">
        {itemList}
        <hr />
        <h2>What the fuck!</h2>
        {
          this.props.addedItems.map(item => <div key={item.title}>{item.title}</div>)
        }
      </div>
    );
  }
}
// Taking items from store
const mapStateToProps = (state) => {
  return {
    items: state.items,
    addedItems: state.addedItems
  }
}
// Adding function to props
const mapDispatchToProps = (dispatch) => {
  return { addToCart: (id) => { dispatch(addToCart(id)) } }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
