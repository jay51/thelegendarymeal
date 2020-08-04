import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/cart_actions'
import {NotificationContainer, NotificationManager} from "react-notifications";

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


class Shop extends Component {

  addToCart = (id) => {
    this.props.addToCart(id);
    const itemObj = this.props.items.find(item => item.id === id);
    if(itemObj)
      NotificationManager.success(`Added ${itemObj.title} to your cart`, "Add To Cart")
  }

  render() {
    let itemList = this.props.items.map(food =>
      (<div className="col mt-3 mb-5" key={food.id}>
        <div className="card" style={{ "width": "20rem" }}>
          <img src={food.img} className="card-img-top" alt={food.title} />
          <div className="card-body">

            <h5 className="card-title">{food.title}</h5>
            <p className="card-text">{food.desc}</p>
            <button className="btn btn-dark m-2" onClick={() => { this.addToCart(food.id) }}>Add</button>
            <a className="portfolio-link ml-2" data-toggle="modal" href={"#" + food.title.replace(/ /g,'')}>
              Details
            </a>
            <p className="card-text">Price: {food.price}$</p>

          </div>
        </div>
      </div>
      )
    );

    return (
      <section className="bg-light page-section" id="services">
        <NotificationContainer />
        <div className="container">
          <div className="row">
            {itemList}
          </div>
           {
              this.props.items.map(food => {
                return (
                  <div key={food.id} className="portfolio-modal modal fade" id={food.title.replace(/ /g,'')} tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="close-modal" data-dismiss="modal">
                          <div className="lr">
                            <div className="rl"></div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row">
                            <div className="col-lg-8 mx-auto">
                              <div className="modal-body">
                                {/* <!-- Project Details Go Here --> */}
                                <h2 className="text-uppercase">{food.title}</h2>
                                <p className="item-intro text-muted">
                                  Category: Not Know yet
                                </p>
                                <img className="img-fluid d-block mx-auto" src={food.img} alt="" />
                                <p>{food.dec}</p>
                                <p className="text-yellow">INGREDIENTS</p>
                                <ul className="list-inline">
                                  <li>meat</li>
                                  <li>meat</li>
                                  <li>meat</li>
                                </ul>
                                <button className="btn btn-primary" onClick={e =>this.addToCart(food.id)} data-dismiss="modal" type="button">
                                  <i className="fas fa-times"></i>
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>
      </ section>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop)
