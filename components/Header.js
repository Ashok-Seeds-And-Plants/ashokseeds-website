import Link from 'next/link'
import SocialLinks from "@components/SocialLinks";
import JsLoader from "@components/JsLoader";
import { useEffect } from "react";


const toggleTheme = (e) =>  {
    if (localStorage.getItem('clim_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

function setTheme(themeName) {
    //localStorage.setItem('clim_theme', themeName);
    //document.documentElement.className = themeName;
    console.log('Theme Changed');
}

export default function Header() {

    useEffect(() => {



// Immediately invoked function to set the theme on initial load


        //Preloader
        $(window).on('load', function (event) {
            $('.js-preloader').delay(500).fadeOut(500);
        });

        //Counter
        $(".odometer").appear(function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });

        //Progressbar
        $(window).scroll(function () {
            // if ($(window).scrollTop() > 100) { // scroll down abit and get the action
            $('.progress-bar').each(function () {
                $(this).find('.progress-content').animate({
                    width: $(this).attr('data-percentage')
                }, 2000);

                $(this).find('.progress-number-mark').animate({ left: $(this).attr('data-percentage') }, {
                    duration: 2000,
                    step: function (now, fx) {
                        var data = Math.round(now);
                        $(this).find('.percent').html(data + '%');
                    }
                });
            });
            // }
        });

        // Progressbar Animation on Scroll
        if ($('.skills').length) {
            var offsetTop = $('.skills').offset().top;
            $(window).scroll(function() {
                var height = $(window).height();
                if ($(window).scrollTop() + height > offsetTop) {
                    $('.skillbar').each(function() {
                        $(this).find('.skillbar-bar').animate({
                            width: $(this).attr('data-percent')
                        }, 1500);
                    });
                }
            });
        }

        //Tweenmax js
        $('.hero-wrap').mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $('.hero-content').each(function () {
                var speed = $(this).attr('data-speed');
                if ($(this).attr('data-revert')) speed *= -.4;
                TweenMax.to($(this), 1, { x: (1 - newx * speed), y: (1 - newy * speed) });
            });
        });


        //sticky Header
        var wind = $(window);
        var sticky = $('.header-wrap');
        wind.on('scroll', function () {
            var scroll = wind.scrollTop();
            if (scroll < 100) {
                sticky.removeClass('sticky');
            } else {
                sticky.addClass('sticky');
            }
        });

        // Responsive mmenu
        $(window).on('resize', function() {
            if($(window).width() <= 1199) {
                $('.collapse.navbar-collapse').removeClass('collapse');
            }else{
                $('.navbar-collapse').addClass('collapse');
            }
        });
        $('.mobile-menu a').on('click', function() {
            $('.main-menu-wrap').addClass('open');
            $('.collapse.navbar-collapse').removeClass('collapse');
        });

        $('.mobile_menu a').on('click', function () {
            $(this).parent().toggleClass('open');
            $('.main-menu-wrap').toggleClass('open');
        });

        $('.menu-close').on('click', function () {
            $('.main-menu-wrap').removeClass('open')
        });
        $('.mobile-top-bar').on('click', function () {
            $('.header-top').addClass('open')
        });
        $('.close-header-top button').on('click', function () {
            $('.header-top').removeClass('open')
        });
        var $offcanvasNav = $('.navbar-nav'),
            $offcanvasNavSubMenu = $offcanvasNav.find('.dropdown-menu');
        $offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="ri-arrow-down-s-line"></i></span>');
        $offcanvasNavSubMenu.slideUp();
        $offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {
            var $this = $(this);
            if (($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {
                e.preventDefault();
                if ($this.siblings('ul:visible').length) {
                    $this.siblings('ul').slideUp('slow');
                } else {
                    $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');
                    $this.siblings('ul').slideDown('slow');
                }
            }
            if ($this.is('a') || $this.is('span') || $this.attr('class').match(/\b(menu-expand)\b/)) {
                $this.parent().toggleClass('menu-open');
            } else if ($this.is('li') && $this.attr('class').match(/\b('dropdown-menu')\b/)) {
                $this.toggleClass('menu-open');
            }
        });

        // Scroll animation
        AOS.init();

        //Back To top
        function BackToTop() {
            $('.back-to-top').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                return false;
            });

            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if (y > 600) {
                    $('.back-to-top').fadeIn();
                    $('.back-to-top').addClass('open');
                } else {
                    $('.back-to-top').fadeOut();
                    $('.back-to-top').removeClass('open');
                }
            });
        }
        BackToTop();
    })



    return (
      <>

          <div className="switch-theme-mode">
              <label id="switch" className="switch">
                  <input type="checkbox" onChange={toggleTheme} id="slider"/>
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
                          <Link href={'/'}>
                          <a className="navbar-brand">
                              <img className="logo-light" src="/img/logo.png" alt="Ashok seeds and plants"/>
                                  <img className="logo-dark" src="/img/logo-white.png" alt="Ashok seeds and plants"/>
                          </a>
                          </Link>
                          <div className="collapse navbar-collapse main-menu-wrap" id="navbarSupportedContent">
                              <div className="menu-close d-lg-none">
                                  <a href="javascript:void(0)"> <i className="ri-close-line"></i></a>
                              </div>
                              <ul className="navbar-nav ms-auto">
                                  <li className="nav-item">
                                      <Link href={'/'}>
                                      <a className="nav-link">Home</a>
                                      </Link>
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
                                              <Link href={'/about/mission-vision/'}>
                                              <a className="nav-link">Mission & Vision</a>
                                              </Link>
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
                                              <Link href={'/initiatives/tree-plantation/'}>
                                              <a className="nav-link">Tree Plantation</a>
                                              </Link>
                                          </li>
                                          <li className="nav-item">
                                              <Link href={'/initiatives/miyawaki-forest/'}>
                                              <a className="nav-link">Miyawaki Forest</a>
                                              </Link>
                                          </li>
                                          <li className="nav-item">
                                              <Link href={'/initiatives/bkg-kitchen-garden/'}>
                                              <a className="nav-link">BKG / Kitchen Garden</a>
                                              </Link>
                                          </li>
                                          <li className="nav-item">
                                              <a href="#" className="nav-link">
                                                  Agroforestry
                                                  <i className="ri-add-line"></i>
                                              </a>
                                              <ul className="dropdown-menu">
                                                  <li className="nav-item">
                                                      <Link href={'/initiatives/agroforestry/strawberry/'}>
                                                      <a className="nav-link">Strawberry</a>
                                                      </Link>
                                                  </li>
                                                  <li className="nav-item">
                                                      <Link href={'/initiatives/agroforestry/apple/'}>
                                                      <a className="nav-link">Apple</a>
                                                      </Link>
                                                  </li>
                                                  <li className="nav-item">
                                                      <Link href={'/initiatives/agroforestry/amrood-guava/'}>
                                                      <a className="nav-link">Amrood (Guava)</a>
                                                      </Link>
                                                  </li>
                                                  <li className="nav-item">
                                                      <Link href={'/initiatives/agroforestry/amla-indian-gooseberry/'}>
                                                      <a className="nav-link">Amla (Indian gooseberry)</a>
                                                      </Link>
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
