import Link from 'next/link'
export default function Footer() {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

  return (
    <>

        <div class="rts-footer-area-start fooetr-bg-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="left-footer-wrapper-3 pt--120 pb--80">
                            <h3 class="title" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                Let's Build Something <br/>
                                Great Together!
                            </h3>
                            <div class="button-group-footer" data-sal="slide-up" data-sal-delay="350" data-sal-duration="800">
                                <a href="#" class="rts-btn btn-primary">Portfolio</a>
                                <a href="#" class="rts-btn btn-seconday">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="right-footer-wrapper-3 pt--120 pb--80 pl--120 pr--120 pl_md--0 pt_md--30 pl_sm--0 pt_sm--30">
                            <div class="single-information">
                                <h5 class="title" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                    Address
                                </h5>
                                <a href="#" class="address" data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" >
                                    Wave earth infratech private limited <br/>
                                    506, Ashok Chauraha<br/>
                                    Bargarh, Chitrakoot<br/>
                                    UP 210208
                                </a>
                                <div class="rts-social-wrapper-three">
                                    <ul>
                                        <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="800"><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                                        <li data-sal="slide-up" data-sal-delay="200" data-sal-duration="800"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                        <li data-sal="slide-up" data-sal-delay="300" data-sal-duration="800"><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                                        <li data-sal="slide-up" data-sal-delay="400" data-sal-duration="800"><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="single-information">
                                <h5 class="title" data-sal="slide-up" data-sal-delay="150" data-sal-duration="800">
                                    Say Hello
                                </h5>
                                <a href="mailto:contact@waveearthinfratech.com" class="mail" data-sal="slide-up" data-sal-delay="350" data-sal-duration="800" >
                                    cont<span className="d-none"></span>act@waveear<span className="d-none"></span>thinf<span className="d-none"></span>ratech.com
                                </a>
                                <a href="tel:+18475555555" class="number" data-sal="slide-up" data-sal-delay="550" data-sal-duration="800">
                                    +91 258 368 3158
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-area-three">
                            <div class="menu-area-copyright">
                                <ul>
                                    <li>
                                        <Link href="https://www.waveearthinfratech.com/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.waveearthinfratech.com/">Project</Link>
                                    </li>
                                    <li>
                                        <Link href="https://www.waveearthinfratech.com/contact-us/">Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div class="condition">
                                <ul>
                                    <li><Link href="https://www.waveearthinfratech.com/terms-and-conditions/">Terms and Conditions</Link></li>
                                    <li><Link href="https://www.waveearthinfratech.com/privacy-policy/">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div id="elevate-load">
            <div class="loader-wrapper">
                <div class="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>


    </>
  )
}
