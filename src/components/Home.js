import React from "react";
import { connect } from 'react-redux'
import { addToCart } from '../redux/actions/cart_actions'
import ContactForm from "./ContactForm";
import {NotificationContainer, NotificationManager} from "react-notifications";

const mapStateToProps = (state) => {
  return {
    items: state.items,
    addedItems: state.addedItems.slice(0, 6)
  }
}

const mapDispatchToProps = (dispatch) => {
  return { addToCart: (id) => { dispatch(addToCart(id)) } }
}


class Home extends React.Component {

  addToCart = id => {
    this.props.addToCart(id);
    const itemObj = this.props.items.find(item => item.id == id);
    if(itemObj)
      NotificationManager.success(`Added ${itemObj.title} to your cart`, "Add To Cart")
  }

  render() {
    return (
      <React.Fragment>
        <NotificationContainer />
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-heading intro-lead-in">The Legendary Meal</div>
                <div className="intro-lead-in text-uppercase">
                  We offer Bulking, Keto, Low Carb, Vegan meals Daily, Weekly and Monthly
                </div>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
          </div>
        </header>

        <section className="bg-light page-section" id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Our Meals</h2>
                <h3 className="section-subheading text-muted">
                  The legendary Meal is a healthy, delicious, high quality, homemade style meals. Customized not just for athletes and professionals but also for regular individuals who aspire to be healthier. 
                </h3>
                <h3 className="text-yellow">Business Days</h3>
                <p>Monday - Sunday 6AM - 12AM</p>
              </div>
            </div>

            <div className="row">
              {
                this.props.items.map(food => {
                  return (
                    <div key={food.id} className="col-md-4 col-sm-6 portfolio-item">
                      <a className="portfolio-link" data-toggle="modal" href={"#" + food.title.replace(/ /g,'')}>
                        <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                            <i className="fas fa-plus fa-3x"></i>
                          </div>
                        </div>
                        <img className="img-fluid" src={food.img} alt="" />
                      </a>
                      <div className="portfolio-caption">
                        <h4>{food.title}</h4>
                        <p className="text-muted">{food.desc}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>

          </div>
        </section>

        <ContactForm />

        {/* <!-- Footer --> */}
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; The Legendary Meal 2019</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#placeholder">
                      {/* I need link to facebook page and facebook icon  */}
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.facebook.com/Thelegendarymeal/">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://www.instagram.com/thelegendarymeal/">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#placeholder">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#placeholder">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* When you click on an image this will load */}
        {/* <!-- Modal --> */}
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
                            <button className="btn btn-primary" onClick={e => this.addToCart(food.id)} data-dismiss="modal" type="button">
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
      </React.Fragment>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Home);