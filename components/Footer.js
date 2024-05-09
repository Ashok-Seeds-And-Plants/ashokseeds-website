import Link from 'next/link'
import SocialLinks from "@components/SocialLinks";
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
                                            <Link href={'/'}>
                                            <a className="footer-logo">
                                                <img src="/img/logo-white.png" alt="Image"/>
                                            </a>
                                            </Link>
                                            <p className="comp-desc">Ashok Seeds and Plants is a leading Indian seed provider and environmental group working to achieve sustainable development goals through tree planting.</p>
                                            <div className="newsletter-form">
                                                <input type="email" placeholder="Email Address"/>
                                                    <button type="button">Subscribe Now</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 ps-xl-5 ps-lg-4 ps-md-5">
                                        <div className="footer-widget">
                                            <h3 className="footer-widget-title">About Us</h3>
                                            <ul className="footer-menu list-style">
                                                <li>
                                                    <Link href="/about/">
                                                        About Us
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about/mission-vision/">
                                                        Mission & Vision
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/about/our-team/">
                                                        Our Team
                                                    </Link>
                                                </li>

                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6 ">
                                        <div className="footer-widget">
                                            <h3 className="footer-widget-title">Quick Links</h3>
                                            <ul className="footer-menu list-style">
                                                <li>
                                                    <Link href="/initiatives/miyawaki-forest/">
                                                        Miyawaki Forest
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/initiatives/bkg-kitchen-garden/">
                                                        BKG / Kitchen Garden
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog/">
                                                        News and Updates
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/terms-conditions/">
                                                        Terms & Conditions
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/privacy-policy/">
                                                        Privacy Policy
                                                    </Link>
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
                            <p className="copyright-text">Ashok Seeds <i className="ri-copyright-line"></i> 2022- {getCurrentYear()}, All Rights Reserved.

                                </p>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-5">

                            <p class="text-end">Powered by <a target="_blank" href="https://www.srapsware.com/">Srapsware</a></p>

                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <a href="javascript:void(0)" className="back-to-top bounce"><i className="ri-arrow-up-s-line"></i></a>

    </>
  )
}
