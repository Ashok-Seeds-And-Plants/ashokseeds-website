import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
            <title>Contact | Wave Earth Infratech</title>
            <meta name="description" content="" />

            </Head>

            <Header />


            <div className="rts-bread-crumb-area ptb--150 ptb_sm--100 bg-breadcrumb bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="breadcrumb-inner text-center">
                                <h1 className="title">Contact Us</h1>
                                <div className="meta">
                                    <a href="https://www.waveearthinfratech.com/" className="prev">Home /</a>
                                    <a href="https://www.waveearthinfratech.com/contact-us/" className="next">Contact Us</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-contact-area-m rts-section-gap">
                <div className="container">
                    <div className="row g-24">

                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="/images/contact/01.jpg" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="/images/contact/shape/01.svg" alt=""/>
                                    </div>
                                    <div className="info">
                                        <span>Call Us 24/7</span>
                                        <a href="tel:+18475555555">
                                            <h5>+584 (25) 21453</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="/images/contact/02.jpg" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="/images/contact/shape/02.svg" alt=""/>
                                    </div>
                                    <div className="info">
                                        <span>MAke A Quote</span>
                                        <a href="mailto:someone@example.com">
                                            <h5>info@finbiz.com</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
                            <div className="single-contact-one-inner">
                                <div className="thumbnail">
                                    <img src="/images/contact/03.jpg" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="icone">
                                        <img src="/images/contact/shape/03.svg" alt=""/>
                                    </div>
                                    <div className="info">
                                        <span>Service Station</span>
                                        <a href="#">
                                            <h5>25 Hilton Street.</h5>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="rts-contact-page-form-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="mian-wrapper-form">
                            <div className="title-mid-wrapper-home-two" data-sal="slide-up" data-sal-delay="150"
                                 data-sal-duration="800">
                                <span className="pre">Get In Touch</span>
                                <h2 className="title">Needs Help? Let’s Get in Touch</h2>
                            </div>
                            <div id="form-messages"></div>
                            <form id="my-form" className="contact-form-contact" action="https://formspree.io/f/mayzlgke" method="post">
                                <div className="name-email">
                                    <input type="text" name="name" placeholder="Your Name" required=""/>
                                        <input type="email" name="email" placeholder="Email Address" required=""/>
                                </div>
                                <input type="text" name="subject" placeholder="Your Subject"/>
                                    <textarea placeholder="Type Your Message" name="message"></textarea>
                                    <button type="submit" className="rts-btn btn-primary" id="my-form-button">Send Message</button>
                                <p id="my-form-status"></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
            <script src="https://www.waveearthinfratech.com/js/formspree.js"></script>
            <Js />
        </>
    )
}