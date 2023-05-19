import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    return (
      <>
          <div className="loader js-preloader">
              <div></div>
              <div></div>
              <div></div>
          </div>

          <div className="switch-theme-mode">
              <label id="switch" className="switch">
                  <input type="checkbox" onChange="toggleTheme()" id="slider"/>
                      <span className="slider round"></span>
              </label>
          </div>

          <header className="header-wrap">
              <div className="header-top">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-lg-8 col-md-8">
                              <div className="header-top-left">
                                  <ul className="contact-info list-style">
                                      <li>
                                          <i className="flaticon-phone-call"></i>
                                          <a href="tel:+91-9453-111-377">+91-9453-111-377</a>
                                      </li>
                                      <li>
                                          <i className="flaticon-email-2"></i>
                                          <a href="mailto:contact@ashokseedplant.com">contact@ashokseedplant.com</a>
                                      </li>
                                      <li>
                                          <i className="flaticon-pin"></i>
                                          <p>506, Ashok Chauraha, Bargarh Chitrakoot UP-210208</p>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          <div className="col-lg-4 col-md-4">
                              <div className="header-top-right">
                                  <ul className="social-profile list-style style1">
                                      <li>
                                          <a href="https://facebook.com" target="_blank">
                                              <i className="ri-facebook-fill"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="https://twitter.com" target="_blank">
                                              <i className="ri-twitter-fill"></i>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="https://linkedin.com" target="_blank">
                                              <i className="ri-linkedin-fill"></i>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="header-bottom">
                  <div className="container">
                      <nav className="navbar navbar-expand-md navbar-light">
                          <a className="navbar-brand" href="https://www.ashokseedplant.com/">
                              <img className="logo-light" src="/img/logo.png" alt="logo"/>
                                  <img className="logo-dark" src="/img/logo-white.png" alt="logo"/>
                          </a>
                          <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                              <div className="menu-close d-lg-none">
                                  <a href="javascript:void(0)"> <i className="ri-close-line"></i></a>
                              </div>
                              <ul className="navbar-nav ms-auto">
                                  <li className="nav-item">
                                      <a href="https://www.ashokseedplant.com/" className="nav-link">
                                          Home</a>

                                  </li>

                                  <li className="nav-item">
                                      <a href="#" className="nav-link">
                                          About
                                          <i className="ri-add-line"></i>
                                      </a>
                                      <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">About Us</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">Mission & Vision</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">Our Team</a>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#" className="nav-link">
                                          Initiatives
                                          <i className="ri-add-line"></i>
                                      </a>
                                      <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">Tree Plantation</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">Miyawaki Forest</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">BKG / Kitchen Garden</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">
                                                  Agroforestry
                                                  <i className="ri-add-line"></i>
                                              </a>
                                              <ul className="dropdown-menu">
                                                  <li className="nav-item">
                                                      <a href="#" className="nav-link">Strawberry</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="#" className="nav-link">Apple</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="#" className="nav-link">Amroodh</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="#" className="nav-link">Aamla</a>
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#" className="nav-link">
                                          Get Involved
                                          <i className="ri-add-line"></i>
                                      </a>
                                      <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">Volunteer</a>
                                          </li>
                                      </ul>
                                  </li>
                                 <li className="nav-item">
                                      <a href="#" className="nav-link">
                                          Green News
                                          <i className="ri-add-line"></i>
                                      </a>
                                      <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <a href="project-one.html" className="nav-link">News and Updates</a>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="nav-item">
                                      <a href="contact.html" className="nav-link">Contact Us</a>
                                  </li>
                              </ul>
                              <div className="other-options md-none">

                                  <div className="option-item">
                                      <a href="donation.html" className="btn style1">Donate Now</a>
                                  </div>
                              </div>
                          </div>
                      </nav>
                      <div className="mobile-bar-wrap">
                          <div className="mobile-menu d-lg-none">
                              <a href="javascript:void(0)"><i className="ri-menu-line"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </header>

      </>
  )
}
