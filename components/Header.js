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
                                      <a href="about.html" className="nav-link">
                                          About Us
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#" className="nav-link">
                                          Projects
                                          <i className="ri-add-line"></i>
                                      </a>
                                      <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <a href="project-one.html" className="nav-link">Project One</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="project-two.html" className="nav-link">Project Two</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="project-details.html" className="nav-link">Single Project</a>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#" className="nav-link">
                                          Pages
                                          <i className="ri-add-line"></i>
                                      </a>
                                      <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">
                                                  Events
                                                  <i className="ri-add-line"></i>
                                              </a>
                                              <ul className="dropdown-menu">
                                                  <li className="nav-item">
                                                      <a href="event.html" className="nav-link">Events</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="event-details.html" className="nav-link">Single
                                                          Events</a>
                                                  </li>
                                              </ul>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">
                                                  Volunteer
                                                  <i className="ri-add-line"></i>
                                              </a>
                                              <ul className="dropdown-menu">
                                                  <li className="nav-item">
                                                      <a href="team.html" className="nav-link">Our Volunteer</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="team-details.html" className="nav-link">Volunteer
                                                          Profile</a>
                                                  </li>
                                              </ul>
                                          </li>
                                          <li className="nav-item">
                                              <a href="donation.html" className="nav-link">Make Donation</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="faq.html" className="nav-link">FAQ</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">
                                                  User Pages
                                                  <i className="ri-add-line"></i>
                                              </a>
                                              <ul className="dropdown-menu">
                                                  <li className="nav-item">
                                                      <a href="login.html" className="nav-link">Login</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="register.html" className="nav-link">Register</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="recover-password.html" className="nav-link">Recover
                                                          Password</a>
                                                  </li>
                                              </ul>
                                          </li>
                                          <li className="nav-item">
                                              <a href="terms-of-service.html" className="nav-link">Terms of Service</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="error-404.html" className="nav-link">404 Error Page</a>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="nav-item">
                                      <a href="#" className="nav-link">
                                          Blog
                                          <i className="ri-add-line"></i>
                                      </a>
                                      <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">
                                                  Blog Layout
                                                  <i className="ri-add-line"></i>
                                              </a>
                                              <ul className="dropdown-menu">
                                                  <li className="nav-item">
                                                      <a href="blog-no-sidebar.html" className="nav-link">Blog Grid</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="blog-left-sidebar.html" className="nav-link">Blog Left
                                                          Sidebar</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="blog-right-sidebar.html" className="nav-link">Blog Right
                                                          Sidebar</a>
                                                  </li>
                                              </ul>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">
                                                  Single Blog
                                                  <i className="ri-add-line"></i>
                                              </a>
                                              <ul className="dropdown-menu">
                                                  <li className="nav-item">
                                                      <a href="blog-details-no-sidebar.html" className="nav-link">Blog
                                                          Details No Sidebar</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="blog-details-left-sidebar.html" className="nav-link">Blog
                                                          Details Left Sidebar</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="blog-details-right-sidebar.html" className="nav-link">Blog
                                                          Details Right Sidebar</a>
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="nav-item">
                                      <a href="contact.html" className="nav-link">Contact Us</a>
                                  </li>
                                  <li className="nav-item d-lg-none">
                                      <a href="donation.html" className="nav-link btn style1">Donate Now</a>
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
                          <button className="searchbtn d-lg-none"><i className="ri-search-line"></i></button>
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
