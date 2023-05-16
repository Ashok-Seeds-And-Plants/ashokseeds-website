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
            <title>Wave Earth Infratech</title>
            <meta name="description" content="" />

            </Head>

            <Header />

            <Sidebar />

            <div className="rts-banner-main-area-swiper home-seven">
                <div className="banner-social-area">
                    <div className="inner">
                        <ul className="social-wrapper">
                            <li data-sal="slide-up" data-sal-delay="100" data-sal-duration="800"><a href="#"><i
                                className="fa-brands fa-facebook-f"></i></a></li>
                            <li data-sal="slide-up" data-sal-delay="200" data-sal-duration="800"><a href="#"><i
                                className="fa-brands fa-twitter"></i></a></li>
                            <li data-sal="slide-up" data-sal-delay="300" data-sal-duration="800"><a href="#"><i
                                className="fa-brands fa-youtube"></i></a></li>
                            <li data-sal="slide-up" data-sal-delay="400" data-sal-duration="800"><a href="#"><i
                                className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                        <p className="divider"></p>
                        <p className="content"><span>Follow</span> <span>Us</span></p>
                    </div>
                </div>

                <div className="swiper-container-h2">


                    <div className="swiper-pagination"></div>

                    <div className="swiper-wrapper">

                        <div className="swiper-slide">

                            <div className="rts-section-gap3Top ptb_sm-20 rts-banner-one bg_image bg_image--1">
                                <div className="banner-shape-area">
                                    <img src="/images/banner/shape/01.png" alt="banner-shape"
                                         className="shape shape-1"/>
                                        <img src="/images/banner/shape/02.png" alt="banner-shape"
                                             className="shape shape-2"/>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="banner-one-wrapper ptb--110">
                                        <span className="b_one-pre" data-sal="slide-up" data-sal-delay="50"
                                              data-sal-duration="800">
                                            Hospitality & Leisure
                                        </span>
                                                <h1 className="title-banner" data-sal="slide-up" data-sal-delay="150"
                                                    data-sal-duration="800">
                                                    Excellence and <br/>
                                                    built into every <br/>
                                                    design.
                                                </h1>
                                                <p className="desc" data-sal="slide-up" data-sal-delay="200"
                                                   data-sal-duration="800">Factory companies employ a large number of
                                                    people from factory workers & <br/>
                                                        supervisors to managers and executives.</p>
                                                <div className="button-group-area mt--40" data-sal="slide-up"
                                                     data-sal-delay="300" data-sal-duration="800">
                                                    <a href="#" className="rts-btn btn-seconday p-short">
                                                        See Projects <i className="fa-regular fa-arrow-up-right"></i>
                                                    </a>
                                                    <a href="#" className="rts-btn btn-seconday">
                                                        Our Service
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="rts-section-gap3Top ptb_sm-20 rts-banner-one bg_image bg_image--2">
                                <div className="banner-shape-area">
                                    <img src="/images/banner/shape/01.png" alt="banner-shape"
                                         className="shape shape-1"/>
                                        <img src="/images/banner/shape/02.png" alt="banner-shape"
                                             className="shape shape-2"/>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="banner-one-wrapper ptb--110">
                                        <span className="b_one-pre" data-sal="slide-up" data-sal-delay="50"
                                              data-sal-duration="800">
                                            Hospitality & Leisure
                                        </span>
                                                <h1 className="title-banner" data-sal="slide-up" data-sal-delay="150"
                                                    data-sal-duration="800">
                                                    We’re Providing <br/>
                                                    Industry Roofing <br/>
                                                    Solution
                                                </h1>
                                                <p className="desc" data-sal="slide-up" data-sal-delay="200"
                                                   data-sal-duration="800">Factory companies employ a large number of
                                                    people from factory workers & <br/>
                                                        supervisors to managers and executives.</p>
                                                <div className="button-group-area mt--40" data-sal="slide-up"
                                                     data-sal-delay="300" data-sal-duration="800">
                                                    <a href="#" className="rts-btn btn-seconday p-short">
                                                        See Projects <i className="fa-regular fa-arrow-up-right"></i>
                                                    </a>
                                                    <a href="#" className="rts-btn btn-seconday">
                                                        Our Service
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="rts-section-gap3Top ptb_sm-20 rts-banner-one bg_image bg_image--3">
                                <div className="banner-shape-area">
                                    <img src="/images/banner/shape/01.png" alt="banner-shape"
                                         className="shape shape-1"/>
                                        <img src="/images/banner/shape/02.png" alt="banner-shape"
                                             className="shape shape-2"/>
                                </div>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="banner-one-wrapper ptb--110">
                                        <span className="b_one-pre" data-sal="slide-up" data-sal-delay="50"
                                              data-sal-duration="800">
                                            Hospitality & Leisure
                                        </span>
                                                <h1 className="title-banner" data-sal="slide-up" data-sal-delay="150"
                                                    data-sal-duration="800">
                                                    We’re Providing <br/>
                                                    Building Leading <br/>
                                                    Solution
                                                </h1>
                                                <p className="desc" data-sal="slide-up" data-sal-delay="200"
                                                   data-sal-duration="800">Factory companies employ a large number of
                                                    people from factory workers & <br/>
                                                        supervisors to managers and executives.</p>
                                                <div className="button-group-area mt--40" data-sal="slide-up"
                                                     data-sal-delay="300" data-sal-duration="800">
                                                    <a href="#" className="rts-btn btn-seconday p-short">
                                                        See Projects <i className="fa-regular fa-arrow-up-right"></i>
                                                    </a>
                                                    <a href="#" className="rts-btn btn-seconday">
                                                        Our Service
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-service-area rts-section-gap2">
                <div className="container">
                    <div className="row g-24">
                        <div className="col-lg-4 col-md-6" data-sal="slide-up" data-sal-delay="150"
                             data-sal-duration="800">

                            <div className="rts-single-service-two">
                                <h2 className="title-main"><span className="counter">400</span></h2>
                                <a href="#">
                                    <h4 className="title">Drilling Fields</h4>
                                </a>
                                <p className="disc">
                                    Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6" data-sal="slide-up" data-sal-delay="350"
                             data-sal-duration="800">

                            <div className="rts-single-service-two">
                                <h2 className="title-main"><span className="counter">290</span></h2>
                                <a href="#">
                                    <h4 className="title">Expert Workers</h4>
                                </a>
                                <p className="disc">
                                    Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan
                                </p>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6" data-sal="slide-up" data-sal-delay="550"
                             data-sal-duration="800">

                            <div className="rts-single-service-two">
                                <h2 className="title-main"><span className="counter">40</span></h2>
                                <a href="#">
                                    <h4 className="title">Award Winner</h4>
                                </a>
                                <p className="disc">
                                    Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="rts-service-two-col rts-section-gap2Bottom">
                <div className="container-full">
                    <div className="main-wrapper-sevice-col-2">
                        <div className="left-image">
                            <img src="/images/service/11.png" alt="image"/>
                        </div>
                        <div className="path-right">
                            <div className="content-wrapper">
                                <div className="title-mid-wrapper-home-two left">
                                    <span className="pre" data-sal="slide-up" data-sal-delay="150"
                                          data-sal-duration="800">What we Prove for you</span>
                                    <h2 className="title" data-sal="slide-up" data-sal-delay="350"
                                        data-sal-duration="800">We Building Everything That You <br/> Needed</h2>
                                </div>
                                <div className="single-wrapper">

                                    <div className="single" data-sal="slide-up" data-sal-delay="450"
                                         data-sal-duration="800">
                                        <i className="fa-solid fa-badge-check"></i>
                                        <div className="info">
                                            <h6 className="title">Bridge Construction</h6>
                                            <span>Ubilia varius malesuada felis  dictum</span>
                                        </div>
                                    </div>

                                    <div className="single" data-sal="slide-up" data-sal-delay="650"
                                         data-sal-duration="800">
                                        <i className="fa-solid fa-badge-check"></i>
                                        <div className="info">
                                            <h6 className="title">Building Renovation</h6>
                                            <span>Ubilia varius malesuada felis  dictum</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="rts-offer-provide-section rts-section-gap2Bottom">
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
                        <div className="col-lg-4 col-md-6">

                            <div className="rts-single-offer">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="/images/service/07.jpg" alt="service"/>
                                </a>
                                <div className="content-wrapper">
                                    <a href="service-details.html">
                                        <h5 className="title">
                                            Building construction
                                        </h5>
                                    </a>
                                    <p className="disc">
                                        Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan
                                    </p>
                                    <a href="service-details.html" className="rts-btn btn-transparent-service">View All
                                        Projects<i className="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">

                            <div className="rts-single-offer">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="/images/service/08.jpg" alt="service"/>
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
                                    <a href="service-details.html" className="rts-btn btn-transparent-service">View All
                                        Projects<i className="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-md-6">

                            <div className="rts-single-offer">
                                <a href="service-details.html" className="thumbnail">
                                    <img src="/images/service/07.jpg" alt="service"/>
                                </a>
                                <div className="content-wrapper">
                                    <a href="service-details.html">
                                        <h5 className="title">
                                            Bridge construction
                                        </h5>
                                    </a>
                                    <p className="disc">
                                        Dui lobortis scelerisque magna curabitur duis purus platea massa accumsan
                                    </p>
                                    <a href="service-details.html" className="rts-btn btn-transparent-service">View All
                                        Projects<i className="fa-light fa-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-case-studies-area rts-section-gap2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="title-wrapper-2-case">
                                <div className="title-mid-wrapper-home-two left" data-sal="slide-up"
                                     data-sal-delay="150" data-sal-duration="800">
                                    <span className="pre">Our All Products</span>
                                    <h2 className="title">Checkout Our Latest <br/> Case Studies</h2>
                                </div>
                                <div className="button-area" data-sal="slide-up" data-sal-delay="350"
                                     data-sal-duration="800">
                                    <a href="#" className="rts-view-more">VIEW ALL PROJECTS<i
                                        className="fa-regular fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-full-screen mt--40">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="swiper-wrapper-case-studies-2">

                                <div className="swiper case-two">
                                    <div className="swiper-wrapper">

                                        <div className="swiper-slide">

                                            <a href="project-details.html" className="cse-two-wrapper">
                                                <img className="main" src="/images/project/07.jpg" alt="project"/>
                                                    <div className="icon">
                                                        <img src="/images/project/icon/01.png" alt="project"/>
                                                    </div>
                                            </a>

                                        </div>
                                        <div className="swiper-slide">

                                            <a href="project-details.html" className="cse-two-wrapper">
                                                <img className="main" src="/images/project/08.jpg" alt="project"/>
                                                    <div className="icon">
                                                        <img src="/images/project/icon/01.png" alt="project"/>
                                                    </div>
                                            </a>

                                        </div>
                                        <div className="swiper-slide">

                                            <a href="project-details.html" className="cse-two-wrapper">
                                                <img className="main" src="/images/project/09.jpg" alt="project"/>
                                                    <div className="icon">
                                                        <img src="/images/project/icon/01.png" alt="project"/>
                                                    </div>
                                            </a>

                                        </div>

                                        <div className="swiper-slide">

                                            <a href="project-details.html" className="cse-two-wrapper">
                                                <img className="main" src="/images/project/07.jpg" alt="project"/>
                                                    <div className="icon">
                                                        <img src="/images/project/icon/01.png" alt="project"/>
                                                    </div>
                                            </a>

                                        </div>
                                        <div className="swiper-slide">

                                            <a href="project-details.html" className="cse-two-wrapper">
                                                <img className="main" src="/images/project/08.jpg" alt="project"/>
                                                    <div className="icon">
                                                        <img src="/images/project/icon/01.png" alt="project"/>
                                                    </div>
                                            </a>

                                        </div>
                                        <div className="swiper-slide">

                                            <a href="project-details.html" className="cse-two-wrapper">
                                                <img className="main" src="/images/project/09.jpg" alt="project"/>
                                                    <div className="icon">
                                                        <img src="/images/project/icon/01.png" alt="project"/>
                                                    </div>
                                            </a>

                                        </div>

                                    </div>
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