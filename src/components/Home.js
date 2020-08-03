import React from "react";
import Img1 from "../images/homepage/item1.jpg";

export default class Home extends React.Component {

  render() {

    return (
      <>
        <header className="masthead">
          <div className="container">
            <div className="intro-text">
              <div className="intro-lead-in">Welcome To Our Studio!</div>
              <div className="intro-heading text-uppercase">It's Nice To Meet You</div>
              <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
            </div>
          </div>
        </header>

        <section className="bg-light page-section" id="portfolio">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Img1} alt="" />
                </a>
                <div className="portfolio-caption">
                  <h4>Threads</h4>
                  <p className="text-muted">Illustration</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Img1} alt="" />
                </a>
                <div className="portfolio-caption">
                  <h4>Explore</h4>
                  <p className="text-muted">Graphic Design</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Img1} alt="" />
                </a>
                <div className="portfolio-caption">
                  <h4>Finish</h4>
                  <p className="text-muted">Identity</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Img1} alt="" />
                </a>
                <div className="portfolio-caption">
                  <h4>Lines</h4>
                  <p className="text-muted">Branding</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Img1} alt="" />
                </a>
                <div className="portfolio-caption">
                  <h4>Southwest</h4>
                  <p className="text-muted">Website Design</p>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 portfolio-item">
                <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Img1} alt="" />
                </a>
                <div className="portfolio-caption">
                  <h4>Window</h4>
                  <p className="text-muted">Photography</p>
                </div>
              </div>
            </div>
          </div>
        </section>




        {/* <!-- Contact --> */}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <form id="contactForm" name="sentMessage" noValidate="novalidate">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name." />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address." />
                        <p className="help-block text-danger"></p>
                      </div>
                      <div className="form-group">
                        <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number." />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                      <div id="success"></div>
                      <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Footer --> */}
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4">
                <span className="copyright">Copyright &copy; Your Website 2019</span>
              </div>
              <div className="col-md-4">
                <ul className="list-inline social-buttons">
                  <li className="list-inline-item">
                    <a href="#">
                      {/* I need link to facebook page and facebook icon  */}
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <ul className="list-inline quicklinks">
                  <li className="list-inline-item">
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        {/* When you click on an image this will load */}
        {/* <!-- Modal 1 --> */}
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
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
                      <h2 className="text-uppercase">Food Name</h2>
                      <p className="item-intro text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </p>
                      <img className="img-fluid d-block mx-auto" src={Img1} alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal 2 --> */}
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
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
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src={Img1} alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Explore</li>
                        <li>Category: Graphic Design</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal 3 --> */}
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
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
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src={Img1} alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Finish</li>
                        <li>Category: Identity</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal 4 --> */}
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
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
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src={Img1} alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Lines</li>
                        <li>Category: Branding</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal 5 --> */}
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
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
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src={Img1} alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Southwest</li>
                        <li>Category: Website Design</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
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
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src={Img1} alt="" />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2017</li>
                        <li>Client: Window</li>
                        <li>Category: Photography</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times"></i>
                        Close Project</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}
