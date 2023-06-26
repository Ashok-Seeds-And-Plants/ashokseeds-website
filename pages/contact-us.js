import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'

import Footer from '@components/Footer'
import Js from '@components/Js'

import SocialLinks from "@components/SocialLinks";

import React from "react";
import axios from "axios";

const handleSubmit = (e) => {
  // We don't want the page to refresh
 e.preventDefault();

    let formData = new FormData();

  // Turn our formData state into data we can use with a form submission
  Object.entries(formData).forEach(([key, value]) => {
    formData.append(key, value);
  })

  console.log(formData);
  // POST the data to the URL of the form
 
}

const Contact = () => {

    return (
        <>
            <Meta />
            <Head>
                <title>Contact | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">
                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Contact Us</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>Contact Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="contact-us-wrap ptb-100">
                        <div className="container">
                            <div className="section-title style1 text-center mb-40">
                                <span>Contact Us<img src="/img/section-shape.png" alt="Image"/></span>
                                <h2>Get In Touch With Us</h2>
                            </div>
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-8">
                                    <div className="contact-form">
                                        <form className="form-wrap" name='contactForm' id="contactForm" onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" name="name" placeholder="Name*" id="name"
                                                               required data-error="Please enter your name"/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="email" name="email" id="email" required
                                                               placeholder="Email*"
                                                               data-error="Please enter your email"/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" name="phone" id="phone" required
                                                               placeholder="Phone*"
                                                               data-error="Please enter your phone"/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" name="msg_subject" placeholder="Subject*"
                                                               id="msg_subject" required
                                                               data-error="Please enter your subject"/>
                                                            <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group v1">
                                                        <textarea name="message" id="message"
                                                                  placeholder="Your Messages.." cols="30" rows="10"
                                                                  required
                                                                  data-error="Please enter your message"/>
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <div className="form-check checkbox">
                                                            <input
                                                                name="gridCheck"
                                                                value="I agree to the terms and privacy policy."
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="gridCheck"
                                                                required
                                                            />
                                                                <label className="form-check-label" htmlFor="gridCheck">
                                                                    I agree to the <a className="link style1"
                                                                                      href="#">Terms &amp; Conditions</a> and <a
                                                                    className="link style1" href="#">Privacy
                                                                    Policy</a>
                                                                </label>
                                                                <div
                                                                    className="help-block with-errors gridCheck-error"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn style1 w-100 d-block">Send
                                                        Message
                                                    </button>
                                                    <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                    <div className="clearfix"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="contact-item-wrap">
                                        <div className="contact-item">
                                            <h3>Our Address</h3>
                                            <p>506, Ashok Chauraha, Bargarh Chitrakoot UP-210208</p>
                                        </div>
                                        <div className="contact-item">
                                            <h3>Email Address</h3>
                                            <a href="mailto:contact@ashokseedplant.com">contact@ashokseedplant.com</a>
                                        </div>
                                        <div className="contact-item">
                                            <h3>24/7 Support</h3>
                                            <a href="tel:+91-9453-111-377">+91-9453-111-377</a>
                                        </div>
                                        <div className="contact-item">
                                            <h3>Follow us</h3>

                                            <SocialLinks style={'style2'}/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>


                <Footer />
            </div>
            <Js />
        </>
    )
}


export default Contact;