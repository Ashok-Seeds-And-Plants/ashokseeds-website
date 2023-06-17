import Link from 'next/link'
import SocialLinks from "@components/SocialLinks";
import JsLoader from "@components/JsLoader";

export default function Header() {
    return (
      <>

          <div className="switch-theme-mode">
              <label id="switch" className="switch">
                  <input type="checkbox" onChange="toggleTheme()" id="slider"/>
                      <span className="slider round"></span>
              </label>
          </div>

          <header className="header-wrap">
              <div className="header-top d-none d-lg-block">
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

                                  <SocialLinks style={'style1'}/>

                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="header-bottom">
                  <div className="container">
                      <nav className="navbar navbar-expand-md navbar-light">
                          <a className="navbar-brand" href="https://www.ashokseedplant.com/">
                              <img className="logo-light" src="/img/logo.png" alt="Ashok seeds and plants"/>
                                  <img className="logo-dark" src="/img/logo-white.png" alt="Ashok seeds and plants"/>
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
                                              <Link href={`/about/`}>
                                              <a className="nav-link">About Us</a>
                                              </Link>
                                          </li>
                                          <li className="nav-item">
                                              <a href="/about/mission-vision/" className="nav-link">Mission & Vision</a>
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
                                              <a href="/initiatives/tree-plantation/" className="nav-link">Tree Plantation</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="/initiatives/miyawaki-forest/" className="nav-link">Miyawaki Forest</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="/initiatives/bkg-kitchen-garden/" className="nav-link">BKG / Kitchen Garden</a>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">
                                                  Agroforestry
                                                  <i className="ri-add-line"></i>
                                              </a>
                                              <ul className="dropdown-menu">
                                                  <li className="nav-item">
                                                      <a href="/initiatives/agroforestry/strawberry/" className="nav-link">Strawberry</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="/initiatives/agroforestry/apple/" className="nav-link">Apple</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="/initiatives/agroforestry/amrood-guava/" className="nav-link">Amrood (Guava)</a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a href="/initiatives/agroforestry/amla-indian-gooseberry/" className="nav-link">Amla (Indian gooseberry)</a>
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="nav-item">
                                      <Link href={`/project/`}>
                                          <a className="nav-link">Projects</a>
                                      </Link>

                                  </li>
                                 <li className="nav-item">
                                      <a href="#" className="nav-link">
                                          Green News
                                          <i className="ri-add-line"></i>
                                      </a>
                                      <ul className="dropdown-menu">
                                          <li className="nav-item">
                                              <Link href={'/blog/'}>
                                                  <a className="nav-link">News and Updates</a>
                                              </Link>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="nav-item">
                                      <Link href={'/contact-us/'}>
                                      <a className={"nav-link"}>Contact Us</a>
                                      </Link>
                                  </li>
                              </ul>
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
