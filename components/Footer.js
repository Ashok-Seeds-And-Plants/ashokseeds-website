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
                                            <p className="comp-desc">
                                                Lorem ipsum dolor sit amet consc tetur adicing elit. Dolor emque dicta
                                                molest enim beatae ame consequ atur tempo pretium auctor nam.
                                            </p>
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
                                                    <p>2767 Sunrise Street, NY 1002, USA</p>
                                                </li>
                                                <li>
                                                    <i className="flaticon-mail"></i>
                                                    <h6>Email</h6>
                                                    <a href="mailto:hello@clim.com">hello@clim.com</a>
                                                </li>
                                                <li>
                                                    <i className="flaticon-phone-call"></i>
                                                    <h6>Phone</h6>
                                                    <a href="tel:13454567877">+1-3454-5678-77</a>
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
                            <p className="copyright-text"><i className="ri-copyright-line"></i> Clim is proudly owned
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
