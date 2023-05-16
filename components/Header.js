import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
      <>
          <header className="header-three header--sticky">
              <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="header-three-wrapper">
                              <div className="logo-area">
                                  <a href="https://www.waveearthinfratech.com/" className="thumbnail">
                                      <img src="/images/logo/02.png" alt="logo-area"/>
                                  </a>
                                  <a href="https://www.waveearthinfratech.com/" className="thumbnail-2">
                                      <img src="/images/logo/01.png" alt="logo-area"/>
                                  </a>
                              </div>

                              <div className="main-nav-desk nav-area">
                                  <nav>
                                      <ul>
                                          <li className="menu-item">
                                              <Link className="nav-link" href="https://www.waveearthinfratech.com/">Home</Link>
                                          </li>
                                          <li className="has-droupdown pages">
                                              <a className="nav-link" href="#">Service</a>
                                              <ul className="submenu inner-page">
                                                  <li><a href="service.html">Service Style 1</a></li>
                                                  <li><a href="service-2.html">Service Style 2</a></li>
                                                  <li><a href="service-3.html">Service Style 3</a></li>
                                                  <li><a href="service-details.html">Service Details</a></li>
                                              </ul>
                                          </li>
                                          <li className="has-droupdown pages">
                                              <a className="nav-link" href="#">Portfolio</a>
                                              <ul className="submenu inner-page">
                                                  <li><Link href="https://www.waveearthinfratech.com/our-projects/">Our Projects</Link></li>
                                              </ul>
                                          </li>
                                          <li className="has-droupdown pages">
                                              <a className="nav-link" href="#">Company</a>
                                              <ul className="submenu inner-page">
                                                  <li><Link href="https://www.waveearthinfratech.com/about-wave-earth/">About Us</Link></li>
                                                  <li><Link href="https://www.waveearthinfratech.com/contact-us/">Contact Us</Link></li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </nav>
                              </div>
                              <div className="rts-button-area">
                                  <a href="https://www.waveearthinfratech.com/contact-us/" className="rts-btn btn-seconday">Get Quotation</a>
                                  <div className="menu-area" id="menu-btn">
                                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16"
                                           fill="none">
                                          <rect width="18" height="2" fill="#0C0A0A"/>
                                          <rect y="7" width="18" height="2" fill="#0C0A0A"/>
                                          <rect y="14" width="18" height="2" fill="#0C0A0A"/>
                                      </svg>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </header>


      </>
  )
}
