import Link from 'next/link'
export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

  return (
    <>

        <footer className="footer-wrap">
            <div className="footer-top">
                <img src="/img/footer-shape-2.png" alt="Image" className="footer-shape-one moveHorizontal"/>
                    <img src="/img/sun-2.png" alt="Image" className="footer-shape-two rotate"/>
                        <img src="/img/bird.png" alt="Image" className="footer-shape-three flyLeft"/>
                            <div className="container">
                                <div className="row pt-100 pb-75">
                                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 pe-xl-5">
                                        <div className="footer-widget">
                                            <a href="https://www.ashokseedplant.com/" className="footer-logo">
                                                <img src="/img/logo-white.png" alt="Image"/>
                                            </a>
                                            <p className="comp-desc">Ashok Seeds and Plants is a leading Indian environmental group working towards the achievement of the Sustainable Development Goals (SDGs) through tree planting.</p>
                                            <p className="comp-desc">Subscribe to our newsletter for our environmental updates.</p>
                                            <div className="newsletter-form">
                                                <input type="email" placeholder="Email Address"/>
                                                    <button type="button">Subscribe Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-5 ps-lg-4 ps-md-5">
                                        <div className="footer-widget">
                                            <h3 className="footer-widget-title">Explore</h3>
                                            <ul className="footer-menu list-style">
                                                <li>
                                                    <a href="event-details.html">
                                                        Fundraise For Health
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="event-details.html">
                                                        Shelter For Refuge
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="event-details.html">
                                                        Adopt Orphan Child
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="event-details.html">
                                                        Education For Poor
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="event-details.html">
                                                        Clean Water Project
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 ">
                                        <div className="footer-widget">
                                            <h3 className="footer-widget-title">Other Pages</h3>
                                            <ul className="footer-menu list-style">
                                                <li>
                                                    <a href="about.html">
                                                        About us
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="team.html">
                                                        Our Team
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="event.html">
                                                        Recent Events
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="donation.html">
                                                        Make Donation
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="contact.html">
                                                        Get In Touch
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-md-5">
                                        <div className="footer-widget">
                                            <h3 className="footer-widget-title">Official Info</h3>
                                            <ul className="contact-info list-style">
                                                <li>
                                                    <i className="flaticon-pin"></i>
                                                    <h6>Location</h6>
                                                    <p>506, Ashok Chauraha, Bargarh Chitrakoot UP-210208</p>
                                                </li>
                                                <li>
                                                    <i className="flaticon-mail"></i>
                                                    <h6>Email</h6>
                                                    <a href="mailto:contact@ashokseedplant.com
">contact@ashokseedplant.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="flaticon-phone-call"></i>
                                                    <h6>Phone</h6>
                                                    <a href="tel:+91-9453-111-377">
                                                        +91-9453-111-377</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-6 col-sm-7">
                            <p className="copyright-text"><i className="ri-copyright-line"></i> © 2023 Ashok Seeds and Plants, All Rights Reserved.

                                by <a href="https://hibotheme.com/">HiboTheme</a></p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-5">
                            <ul className="social-profile style1 list-style">
                                <li>
                                    <a href="https://facebook.com">
                                        <i className="ri-facebook-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com">
                                        <i className="ri-twitter-fill"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://instagram.com">
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://linkedin.com">
                                        <i className="ri-linkedin-fill"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <a href="javascript:void(0)" className="back-to-top bounce"><i className="ri-arrow-up-s-line"></i></a>

    </>
  )
}
