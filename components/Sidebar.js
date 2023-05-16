import Link from 'next/link'
import Image from 'next/image'

export default function Sidebar() {
    return (
        <>
            <div id="side-bar" className="side-bar header-three">
                <button className="close-icon-menu"><i className="far fa-times"></i></button>
                <div className="inner-main-wrapper-desk">
                    <div className="thumbnail">
                        <img src="/images/banner/04.jpg" alt="elevate"/>
                    </div>
                    <div className="inner-content">
                        <h4 className="title">We Build Building and Great Constructive Homes.</h4>
                        <p className="disc">
                            We successfully cope with tasks of varying complexity, provide long-term guarantees and
                            regularly master new technologies.
                        </p>
                        <div className="footer">
                            <h4 className="title">Got a project in mind?</h4>
                            <a href="contact.html" className="rts-btn btn-seconday">Let's talk</a>
                        </div>
                    </div>
                </div>
                <div className="mobile-menu d-block d-xl-none">
                    <nav className="nav-main mainmenu-nav mt--30">
                        <ul className="mainmenu" id="mobile-menu-active">
                            <li className="has-droupdown">
                                <a href="#" className="main">Home</a>
                                <ul className="submenu">
                                    <a href="#" className="tag">Multipage</a>
                                    <li><a className="mobile-menu-link" href="index.html">Main Construction</a></li>
                                    <li><a className="mobile-menu-link" href="index-two.html">Construction Home</a></li>
                                    <li><a className="mobile-menu-link" href="index-three.html">Renovation Home</a></li>
                                    <li><a className="mobile-menu-link" href="index-four.html">Construction Home</a>
                                    </li>
                                    <li><a className="mobile-menu-link" href="index-five.html">Construction Home</a>
                                    </li>
                                    <li><a className="mobile-menu-link" href="index-six.html">Renovation Home</a></li>
                                    <li><a className="mobile-menu-link" href="index-seven.html">Engineering Home</a>
                                    </li>
                                    <li><a className="mobile-menu-link" href="index-eight.html">Handyman Home</a></li>
                                    <li><a className="mobile-menu-link" href="index-nine.html">Industrial Home</a></li>
                                </ul>
                                <ul className="submenu">
                                    <a href="#" className="tag">Onepage</a>
                                    <li><a className="mobile-menu-link" href="onepage-one.html">Main Construction
                                        Onepage</a></li>
                                    <li><a className="mobile-menu-link" href="onepage-two.html">Construction Onepage</a>
                                    </li>
                                    <li><a className="mobile-menu-link" href="onepage-three.html">Renovation Onepage</a>
                                    </li>
                                    <li><a className="mobile-menu-link" href="onepage-four.html">Construction
                                        Onepage</a></li>
                                    <li><a className="mobile-menu-link" href="onepage-five.html">Construction
                                        Onepage</a></li>
                                    <li><a className="mobile-menu-link" href="onepage-six.html">Renovation Onepage</a>
                                    </li>
                                    <li><a className="mobile-menu-link" href="onepage-eight.html">Handyman Onepage</a>
                                    </li>
                                    <li><a className="mobile-menu-link" href="onepage-seven.html">Engineering
                                        Onepage</a></li>
                                    <li><a className="mobile-menu-link" href="onepage-nine.html">Industrial Onepage</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <a href="#" className="main">Pages</a>
                                <ul className="submenu">
                                    <li className="has-droupdown third-lvl">
                                        <a className="main" href="#">Who We Are</a>
                                        <ul className="submenu-third-lvl">
                                            <li><a href="about.html"></a>About Us</li>
                                            <li><a href="vision.html"></a>Vision</li>
                                            <li><a href="careers.html"></a>Careers</li>
                                            <li><a href="safety.html"></a>Safety</li>
                                            <li><a href="sustainability.html"></a>Sustainability</li>
                                        </ul>
                                    </li>
                                    <li><a className="mobile-menu-link" href="company-story.html">Our History</a></li>
                                    <li><a className="mobile-menu-link" href="team.html">Team</a></li>
                                    <li><a className="mobile-menu-link" href="team-details.html">Team Details</a></li>
                                    <li><a className="mobile-menu-link" href="appoinment.html">Appoinment</a></li>
                                    <li><a className="mobile-menu-link" href="404.html">Error 404</a></li>
                                    <li className="has-droupdown third-lvl">
                                        <a className="main" href="#">Shop</a>
                                        <ul className="submenu-third-lvl">
                                            <li><a href="shop.html"></a>Shop</li>
                                            <li><a href="single-product.html"></a>Single Product</li>
                                            <li><a href="cart.html"></a>Cart</li>
                                            <li><a href="checkout.html"></a>Checkout</li>
                                            <li><a href="account.html"></a>Account</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <a href="#" className="main">Services</a>
                                <ul className="submenu">
                                    <li><a className="mobile-menu-link" href="service.html">Service</a></li>
                                    <li><a className="mobile-menu-link" href="service-details.html">Service Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <a href="#" className="main">Portfolio</a>
                                <ul className="submenu">
                                    <li><a className="mobile-menu-link" href="project.html">Project</a></li>
                                    <li><a className="mobile-menu-link" href="project-details.html">Project Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-droupdown">
                                <a href="#" className="main">Blog</a>
                                <ul className="submenu">
                                    <li><a className="mobile-menu-link" href="blog-list.html">Blog List</a></li>
                                    <li><a className="mobile-menu-link" href="blog-grid.html">Blog Grid</a></li>
                                    <li><a className="mobile-menu-link" href="blog-details.html">Blog Details</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="contactus.html" className="main">Contact Us</a>
                            </li>
                        </ul>
                    </nav>

                    <div className="social-wrapper-one">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-facebook-f"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-youtube"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fa-brands fa-linkedin-in"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}