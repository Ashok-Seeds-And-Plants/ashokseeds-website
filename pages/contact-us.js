import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'

import Footer from '@components/Footer'
import Js from '@components/Js'

import SocialLinks from "@components/SocialLinks";

import React from "react";
import { useState } from "react";
import axios from "axios";

const Contact = () => {

    const [candidat, setCandidat] = useState({
        name: "",
        email: "",
        phone: "",
        msg_subject: "",
        message: "",
    });
    const [user, setUser] = useState()

    const onSubmit = async (e) => {
        e.preventDefault();
        if (candidat.name === "")
            return alert("Your name is empty.");


        let token = 'recaptcha token';
        let formName = 'Contact page';

        axios.post('https://crm.ashokseedplant.com/api/ezforms/submit', { token, formData: JSON.stringify(candidat) })
            .then((res) => {
                // console.log(res)
            })
            .catch((error) => {
                // error.response.status Check status code
            }).finally(() => {
                //Perform action in always
            });


    };


    return (
        <>
            <Meta />
            <Head>
                <title>Contact | Ashok Seeds and Plants</title>
                <meta name="description" content="We are India's leading Seeds and Plants Provider. We are working to achieve sustainable development goals through tree planting." />

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
                                <span>Contact Us<img src="/img/section-shape.png" alt="Image" /></span>
                                <h2>Get In Touch With Us</h2>
                            </div>
                            <div className="row gx-5 justify-content-center">
                                <div className="col-lg-8">
                                    <div className="contact-form">
                                        <form className="form-wrap" name='contactForm' id="contactForm" onSubmit={onSubmit}>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" name="name" placeholder="Name*" id="name"
                                                            required data-error="Please enter your name" onChange={() => {
                                                                setCandidat({ ...candidat, name: event.target.value });
                                                            }} />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="email" name="email" id="email" required
                                                            placeholder="Email*"
                                                            data-error="Please enter your email" onChange={() => {
                                                                setCandidat({ ...candidat, email: event.target.value });
                                                            }} />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" name="phone" id="phone" required
                                                            placeholder="Phone*"
                                                            data-error="Please enter your phone" onChange={() => {
                                                                setCandidat({ ...candidat, phone: event.target.value });
                                                            }} />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <input type="text" name="msg_subject" placeholder="Subject*"
                                                            id="msg_subject" required
                                                            data-error="Please enter your subject" onChange={() => {
                                                                setCandidat({ ...candidat, msg_subject: event.target.value });
                                                            }} />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group v1">
                                                        <textarea name="message" id="message"
                                                            placeholder="Your Messages.." cols="30" rows="10"
                                                            required
                                                            data-error="Please enter your message" onChange={() => {
                                                                setCandidat({ ...candidat, message: event.target.value });
                                                            }} />
                                                        <div className="help-block with-errors"></div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <div className="form-check checkbox">
                                                            <input
                                                                name="gridCheck"
                                                                value="Agree to tos."
                                                                className="form-check-input"
                                                                type="checkbox"
                                                                id="gridCheck"
                                                                required onChange={() => {
                                                                    setCandidat({ ...candidat, gridCheck: event.target.value });
                                                                }}
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
                                            <h3>Support (India Working Time)</h3>
                                            <a href="tel:+91-9453-111-377">+91-9453-111-377</a>
                                        </div>
                                        <div className="contact-item">
                                            <h3>Follow us</h3>

                                            <SocialLinks style={'style2'} />

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