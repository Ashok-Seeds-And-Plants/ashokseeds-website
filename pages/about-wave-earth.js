import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
            <title>About Wave Earth Infratech</title>
            <meta name="description" content="" />

            </Head>

            <Header />

            <div className="rts-bread-crumb-area ptb--150 ptb_sm--100 bg-breadcrumb bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                            <div className="breadcrumb-inner text-center">
                                <h1 className="title">About Us</h1>
                                <div className="meta">
                                    <a href="https://www.waveearthinfratech.com/" className="prev">Home /</a>
                                    <a href="https://www.waveearthinfratech.com/about-wave-earth/" className="next">About Us</a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-about-area-about rts-section-gap">
                <div className="container pb--45 plr_sm--15">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="thumbnail-area-about">
                                <img src="/images/about/04.jpg" alt="about-area"/>
                                    <img src="/images/about/05.jpg" alt="about-sm" className="small"/>
                                        <a className="rts-btn btn-primary" href="#">Elevate Profile</a>
                            </div>
                        </div>
                        <div className="col-lg-7 about-a-p-cont">
                            <div className="about-inner-wrapper-inner">
                                <div className="title-three-left">
                            <span className="pre-title" data-sal="slide-up" data-sal-delay="100" data-sal-duration="800"
                                  >
                                Renovation Company
                            </span>
                                    <h3 className="title" data-sal="slide-up" data-sal-delay="100"
                                        data-sal-duration="800">
                                        Our thoughts for developing <br/>
                                        your stylish life Level.
                                    </h3>
                                </div>
                                <div className="main-content-area-about-p">
                                    <p className="disc">
                                        Varius dis malesuada nisi ligulavel senectus habitant aliquam, augue natoque sem
                                        nascetur quis himenaeos volutpat facilisis orco morbi mattis sagittis atu
                                        commodo pharetra fermentum. Primis risus diam himenaeos viverra rat habitant
                                    </p>
                                    <div className="service-wrapper">
                                        <div className="left">
                                            
                                            <div className="single-service">
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p>Best Quality Support</p>
                                            </div>
                                            
                                            <div className="single-service">
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p>100% Quality Design</p>
                                            </div>
                                           
                                        </div>

                                        <div className="right">
                                           
                                            <div className="single-service">
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p>Professional Expertise</p>
                                            </div>
                                        
                                            <div className="single-service">
                                                <i className="fa-regular fa-circle-check"></i>
                                                <p>100% Quality Design</p>
                                            </div>
                                      
                                        </div>
                                    </div>

                                    <div className="authore-artea-wrapper">
                                       
                                        <div className="main-authore-wrapper">
                                            <div className="author">
                                                <img src="/images/about/06.jpg" alt=""/>
                                            </div>
                                            <div className="info">
                                                <h6 className="title">Daniel H. Smith</h6>
                                                <span className="desig">Founder & Ceo</span>
                                            </div>
                                        </div>
                                        
                                        <a href="contact.html" className="rts-btn btn-primary">Get More Info</a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-text">
                        <h2 className="title">About Company</h2>
                    </div>
                </div>
            </div>
      
            <div className="service-abot-area rts-section-gap service-about-bg bg_image">
                <div className="container-210">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-12  plr-sm">
                            <div className="thumbnail-service-about">
                                <img src="/images/service/13.jpg" alt="service-image"/>
                                    <div className="vedio-icone">
                                        <a id="play-video" className="video-play-button" href="#">
                                            <span></span>
                                        </a>
                                        <div id="video-overlay" className="video-overlay">
                                            <a className="video-overlay-close">×</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 pading-controler">
                            <div className="service-about-wrapper">
                                <div className="title-three-left">
                            <span className="pre-title" data-sal="slide-up" data-sal-delay="100" data-sal-duration="800"
                                  >
                                Core Features
                            </span>
                                    <h3 className="title" data-sal="slide-up" data-sal-delay="100"
                                        data-sal-duration="800">
                                        Why Choose Us
                                    </h3>
                                </div>
                                <div className="row mt--15 g-24">
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-service-sm">
                                            <div className="icon">
                                                <img src="/images/service/icon/01.svg" alt=""/>
                                            </div>
                                            <p>Expert Teams</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-service-sm">
                                            <div className="icon">
                                                <img src="/images/service/icon/02.svg" alt=""/>
                                            </div>
                                            <p>Timely Delivery</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-service-sm">
                                            <div className="icon">
                                                <img src="/images/service/icon/03.svg" alt=""/>
                                            </div>
                                            <p>24/7 Support</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-service-sm">
                                            <div className="icon">
                                                <img src="/images/service/icon/04.svg" alt=""/>
                                            </div>
                                            <p>Best Equipment</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-service-sm">
                                            <div className="icon">
                                                <img src="/images/service/icon/05.svg" alt=""/>
                                            </div>
                                            <p>100% Guranty</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                        <div className="single-service-sm">
                                            <div className="icon">
                                                <img src="/images/service/icon/06.svg" alt=""/>
                                            </div>
                                            <p>Timely Delivery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-offer-provide-section rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-mid-wrapper-home-two" data-sal="slide-up" data-sal-delay="150"
                                 data-sal-duration="800">
                                <span className="pre">Our Services</span>
                                <h2 className="title">What We Offer</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--15 g-24">
                        <div className="col-lg-4">
                          
                            <div className="rts-single-offer">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="/images/service/07.jpg" alt="service"/>
                                </a>
                                <div className="content-wrapper">
                                    <a href="service-details.html">
                                        <h5 className="title">
                                            General construction
                                        </h5>
                                    </a>
                                    <p className="disc">
                                        Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan
                                    </p>
                                    <a href="service-details.html" className="rts-btn btn-transparent-service">View
                                        Services<i className="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-lg-4">
                            
                            <div className="rts-single-offer">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="/images/service/08.jpg" alt="service"/>
                                </a>
                                <div className="content-wrapper">
                                    <a href="service-details.html">
                                        <h5 className="title">
                                            Property maintenance
                                        </h5>
                                    </a>
                                    <p className="disc">
                                        Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan
                                    </p>
                                    <a href="service-details.html" className="rts-btn btn-transparent-service">View
                                        Services<i className="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-4">
                           
                            <div className="rts-single-offer">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="/images/service/07.jpg" alt="service"/>
                                </a>
                                <div className="content-wrapper">
                                    <a href="service-details.html">
                                        <h5 className="title">
                                            Virtual design & build
                                        </h5>
                                    </a>
                                    <p className="disc">
                                        Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan
                                    </p>
                                    <a href="service-details.html" className="rts-btn btn-transparent-service">View
                                        Services<i className="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="rts-about-fun-facts rts-section-gap bg_about-f">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="about-fun-facts-wrapper">
                                
                                <div className="single-funfacts-about">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="/images/fun-facts/icon/06.svg" alt="fun-facts"/>
                                        </div>
                                        <h2 className="title plus"><span className="counter">25</span></h2>
                                    </div>
                                    <p className="disc">
                                        Years of Experience. Urban design draws together the many standers of
                                        place-making
                                    </p>
                                </div>
                           
                                <div className="single-funfacts-about">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="/images/fun-facts/icon/08.svg" alt="fun-facts"/>
                                        </div>
                                        <h2 className="title percent"><span className="counter">80</span></h2>
                                    </div>
                                    <p className="disc">
                                        Projects completed Successfully. Urban design draws together the many standers
                                        of place-making
                                    </p>
                                </div>
                      
                                <div className="single-funfacts-about">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="/images/fun-facts/icon/09.svg" alt="fun-facts"/>
                                        </div>
                                        <h2 className="title plus"><span className="counter">100</span></h2>
                                    </div>
                                    <p className="disc">
                                        Team members for 24/7 Support. Urban design draws together the many standers of
                                        place-making
                                    </p>
                                </div>
                            
                                <div className="single-funfacts-about">
                                    <div className="top">
                                        <div className="icon">
                                            <img src="/images/fun-facts/icon/07.svg" alt="fun-facts"/>
                                        </div>
                                        <h2 className="title plus"><span className="counter">38</span></h2>
                                    </div>
                                    <p className="disc">
                                        Countries, We Worked. Urban design draws together the many standers of
                                        place-making
                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className="rts-testimonials-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="main-wrapper-testimonials">

                                <div className="swiper swiper-testimonials-1">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            
                                            <div className="testimonials-mian-wrapepr">
                                                <div className="image-area">
                                                    <h4 className="title">
                                                        TRUSTED FROM OVER <br/>
                                                        1,500 CLIENTS
                                                    </h4>
                                                    <div className="thumbnail">
                                                        <img src="/images/testimonials/01.png" alt="testimonials"/>
                                                    </div>
                                                </div>
                                                <div className="testimonials-right">
                                                    <h3 className="title">
                                                        The group at Baroque is unimaginably committed, educated, and
                                                        supportive. The completed item was delightful, and worth each
                                                        penny. I would totally suggest Baroque...
                                                    </h3>
                                                    <a href="#" className="name">Bargman ,<span>ENVATO LLC</span></a>
                                                </div>
                                            </div>
                                           
                                        </div>
                                        <div className="swiper-slide">
                                           
                                            <div className="testimonials-mian-wrapepr">
                                                <div className="image-area">
                                                    <h4 className="title">
                                                        TRUSTED FROM OVER <br/>
                                                        1,500 CLIENTS
                                                    </h4>
                                                    <div className="thumbnail">
                                                        <img src="/images/testimonials/01.png" alt="testimonials"/>
                                                    </div>
                                                </div>
                                                <div className="testimonials-right">
                                                    <h3 className="title">
                                                        The group at Baroque is unimaginably committed, educated, and
                                                        supportive. The completed item was delightful, and worth each
                                                        penny. I would totally suggest Baroque...
                                                    </h3>
                                                    <a href="#" className="name">Bargman ,<span>ENVATO LLC</span></a>
                                                </div>
                                            </div>
                                          
                                        </div>
                                        <div className="swiper-slide">
                                            
                                            <div className="testimonials-mian-wrapepr">
                                                <div className="image-area">
                                                    <h4 className="title">
                                                        TRUSTED FROM OVER <br/>
                                                        1,500 CLIENTS
                                                    </h4>
                                                    <div className="thumbnail">
                                                        <img src="/images/testimonials/01.png" alt="testimonials"/>
                                                    </div>
                                                </div>
                                                <div className="testimonials-right">
                                                    <h3 className="title">
                                                        The group at Baroque is unimaginably committed, educated, and
                                                        supportive. The completed item was delightful, and worth each
                                                        penny. I would totally suggest Baroque...
                                                    </h3>
                                                    <a href="#" className="name">Bargman ,<span>ENVATO LLC</span></a>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="button-wrapper">

                                    <div className="swiper-button-next"><i className="fa-regular fa-arrow-right"></i>
                                    </div>
                                    <div className="swiper-button-prev"><i className="fa-regular fa-arrow-left"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="rts-blog-area rts-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-mid-wrapper-home-two" data-sal="slide-up" data-sal-delay="150"
                                 data-sal-duration="900">
                                <span className="pre">Our latest Blog</span>
                                <h2 className="title">Blog & Insights</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-24 mt--10">
                        <div className="col-lg-4">

                            <div className="blog-single-two-wrapper">
                                <div className="image-area">
                                    <a href="blog-details.html" className="thumbnail">
                                        <img src="/images/blog/04.jpg" alt="blog-image"/>
                                    </a>
                                    <div className="date-area">
                                        <div className="date">
                                            <span className="day">03</span>
                                            <span className="month">DEC</span>
                                        </div>
                                        <div className="year">
                                            <span className="year">2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                            <span className="pre-tag">
                                Construction
                            </span>
                                    <a href="blog-details.html">
                                        <h5 className="title">
                                            One of the World Largest Passive
                                            House Buildings
                                        </h5>
                                    </a>
                                    <a href="blog-details.html" className="btn-read-more-blog">Read Details <i
                                        className="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-4">
                            
                            <div className="blog-single-two-wrapper">
                                <div className="image-area">
                                    <a href="blog-details.html" className="thumbnail">
                                        <img src="/images/blog/05.jpg" alt="blog-image"/>
                                    </a>
                                    <div className="date-area">
                                        <div className="date">
                                            <span className="day">01</span>
                                            <span className="month">DEC</span>
                                        </div>
                                        <div className="year">
                                            <span className="year">2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                            <span className="pre-tag">
                                Construction
                            </span>
                                    <a href="blog-details.html">
                                        <h5 className="title">
                                            Where the World Largest Passive
                                            House Buildings
                                        </h5>
                                    </a>
                                    <a href="blog-details.html" className="btn-read-more-blog">Read Details <i
                                        className="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4">

                            <div className="blog-single-two-wrapper">
                                <div className="image-area">
                                    <a href="blog-details.html" className="thumbnail">
                                        <img src="/images/blog/06.jpg" alt="blog-image"/>
                                    </a>
                                    <div className="date-area">
                                        <div className="date">
                                            <span className="day">07</span>
                                            <span className="month">DEC</span>
                                        </div>
                                        <div className="year">
                                            <span className="year">2023</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="inner">
                            <span className="pre-tag">
                                Construction
                            </span>
                                    <a href="blog-details.html">
                                        <h5 className="title">
                                            Best the World Largest Passive
                                            House Buildings
                                        </h5>
                                    </a>
                                    <a href="blog-details.html" className="btn-read-more-blog">Read Details <i
                                        className="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <Js />
        </>
    )
}