import React from "react";
import {NotificationContainer, NotificationManager} from "react-notifications";

export default class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.name = React.createRef();
        this.email = React.createRef();
        this.phone = React.createRef();
        this.message = React.createRef();
    }

    submit = async e => {
        e.preventDefault();
        let userInfo = {
            username: this.name.current.value,
            email: this.email.current.value,
            phone: this.phone.current.value,
            msg: this.message.current.value
        }

        try {

            let response = await fetch("/.netlify/functions/contactme", {
                method: "POST",
                headers: { "Content-Type": "text/plain" },
                body: JSON.stringify(userInfo)
            });

            if (response.ok) {
                NotificationManager.success(`Successfully submitted!`, "CONTACT US")

                this.name.current.value = "";
                this.email.current.value = "";
                this.phone.current.value = "";
                this.message.current.value = "";
            }
            else {
                console.log("GOT Error:", e);
                NotificationManager.error(`Something went wrong!`, "Error")
            }

        } catch (e) {
            console.log("GOT Error:", e);
            NotificationManager.error(`Something went wrong!`, "Error")
        }

    }

    render(){
        return (
            <section className="page-section" id="contact">
              <NotificationContainer />
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
                            <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" ref={this.name}/>
                            <p className="help-block text-danger"></p>
                          </div>

                          <div className="form-group">
                            <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" ref={this.email}/>
                            <p className="help-block text-danger"></p>
                          </div>

                          <div className="form-group">
                            <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" ref={this.phone} />
                            <p className="help-block text-danger"></p>
                          </div>

                        </div>

                        <div className="col-md-6">
                          <div className="form-group">
                            <textarea className="form-control" placeholder="Your Message" required="required" ref={this.message}></textarea>
                            <p className="help-block text-danger"></p>
                          </div>
                        </div>

                        <div className="clearfix"></div>
                        <div className="col-lg-12 text-center">
                          <div id="success"></div>
                          <button className="btn btn-primary btn-xl text-uppercase" type="submit" onClick={this.submit}>Send Message</button>
                        </div>

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
        );
    }
}
