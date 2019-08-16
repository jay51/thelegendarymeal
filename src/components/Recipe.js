import React, { Component } from "react"
import { connect } from "react-redux"
import { addShipping, subShipping} from "../actions/cart_actions"
import {Elements} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';


class Recipe extends Component{
    
    componentWillUnmount() {
        if(this.refs.shipping.checked)
        this.props.substractShipping()
    }

    handleChecked = (e)=>{
        if(e.target.checked){
          this.props.addShipping();
        } else {
          this.props.substractShipping();
        }
    }

    render(){
  
        return(
          <div>
            <div className="mb-2">Add Delivery +6$</div>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <input type="checkbox" 
                    aria-label="Checkbox for delivery"
                    ref="shipping" onChange= {this.handleChecked}
                  />
                </div>
              </div>
              <input type="text" className="form-control" placeholder="Address" aria-label="delivery address"/>
            </div>
            <div className=""><b>Total: {this.props.total} $</b></div>

            <div className="form-check">
              <hr/>
                <Elements>
                  <CheckoutForm/>
                </Elements>
            </div>
          </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
        addedItems: state.addedItems,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        addShipping: ()=>{dispatch(addShipping())},
        substractShipping: ()=>{dispatch(subShipping())}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Recipe)
