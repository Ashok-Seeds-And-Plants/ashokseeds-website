import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
            <title>Ashok Seeds and Plants</title>
            <meta name="description" content="" />
            <link rel="stylesheet" href="https://www.ashokseedplant.com/styles/css/home.css" />
            </Head>
            <div className="page-wrapper">
            <Header />

                <section className="hero-wrap style2">
                    <div className="hero-slider-one owl-carousel" data-slider-id="1">
                        <div className="hero-slide-item hero-slide-one bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  col-md-9">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>We'll Save Our Planet</span>
                                            <h1>Tree Plantation</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollic itudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu.</p>
                                            <a href="/initiatives/tree-plantation/" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide-item hero-slide-two bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-9">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>Save Our Soil</span>
                                            <h1>Miyawaki Forest</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu a duis. </p>
                                            <a href="/initiatives/miyawaki-forest/" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide-item hero-slide-three bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  col-md-10">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>We'll Save Our Planet</span>
                                            <h1>Kitchen Garden</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu a duis. </p>
                                            <a href="/initiatives/bkg-kitchen-garden/" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide-item hero-slide-four bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  col-md-10">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>Organic vegetables at home</span>
                                            <h1>Agroforestry</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu a duis. </p>
                                            <a href="#" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="about-wrap style2 ptb-100">
                    <img src="/img/about/about-shape-1.png" alt="Image"
                         className="about-shape-one moveHorizontal" />
                        <div className="container">
                            <div className="row align-items-center gx-5">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200"
                                     data-aos-delay="200">
                                    <div className="about-img-wrap">
                                        <img src="/img/about/about-img-2.png" alt="Image" className="bounce"/>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200"
                                     data-aos-delay="200">
                                    <div className="about-content">
                                        <div className="content-title style3">
                                            <span>A Little Introduction <span className="bl-text">About Us</span></span>
                                            <h2>Keeping our Earth safe from climate change.</h2>
                                            <p>Ashok Seeds and Plants in India are working towards achieving the Sustainable Development Goals (SDGs) through tree plantation, urban biodiversity conservation, water body restoration, sustainable solutions, and environmental research and awareness. We are a rare blend of traditional wisdom and modern and innovative technologies to help businesses achieve their net-zero goal.</p>
                                        </div>
                                        <ul className="content-feature-list list-style">
                                            <li><i className="ri-checkbox-circle-line"></i>Tree Plantation</li>
                                            <li><i className="ri-checkbox-circle-line"></i>Miyawaki Forest</li>
                                            <li><i className="ri-checkbox-circle-line"></i>BKG / Kitchen Garden</li>
                                            <li><i className="ri-checkbox-circle-line"></i>Agroforestry</li>
                                        </ul>
                                        <a href="/about/" className="btn style2">Find Out More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>


                <div className="promo-video bg-f style3 ptb-100">
                    <div className="container">
                        <div className="row gx-5">
                            <div className="col-xl-5 col-lg-5">
                                <div className="content-title style5 md-center">
                                    <span>Intro Video</span>
                                    <h2>Our journey so far</h2>
                                </div>
                                <a className="play-now" data-fancybox=""
                                   href="https://www.youtube.com/watch?v=UNSSuTSQI9I">
                                    <i className="ri-play-fill"></i>
                                    <span className="ripple"></span>
                                </a>
                            </div>
                            <div className="col-xl-7 col-lg-7">
                                <div className="counter-card-wrap style3">
                                    <div className="counter-card" data-aos="fade-up" data-aos-duration="1200"
                                         data-aos-delay="200">
                                    <span className="counter-icon">
                                        <i className="flaticon-coin"></i>
                                    </span>
                                        <div className="counter-text">
                                            <h2 className="counter-num">
                                                <span className="odometer" data-count="8705"></span>
                                            </h2>
                                            <p>Donations</p>
                                        </div>
                                    </div>
                                    <div className="counter-card" data-aos="fade-up" data-aos-duration="1200"
                                         data-aos-delay="300">
                                    <span className="counter-icon">
                                        <i className="flaticon-campaign"></i>
                                    </span>
                                        <div className="counter-text">
                                            <h2 className="counter-num">
                                                <span className="odometer" data-count="380"></span>
                                            </h2>
                                            <p>Campaigns</p>
                                        </div>
                                    </div>
                                    <div className="counter-card" data-aos="fade-up" data-aos-duration="1200"
                                         data-aos-delay="400">
                                    <span className="counter-icon">
                                        <i className="flaticon-money-box"></i>
                                    </span>
                                        <div className="counter-text">
                                            <h2 className="counter-num">
                                                <span className="odometer" data-count="9450"></span>
                                            </h2>
                                            <p>Fun Raised</p>
                                        </div>
                                    </div>
                                    <div className="counter-card" data-aos="fade-up" data-aos-duration="1200"
                                         data-aos-delay="500">
                                    <span className="counter-icon">
                                        <i className="flaticon-volunteer"></i>
                                    </span>
                                        <div className="counter-text">
                                            <h2 className="counter-num">
                                                <span className="odometer" data-count="707"></span>
                                            </h2>
                                            <p>Volunteers</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <section className="team-wrap ptb-100 bg-sand">
                <img src="/img/shape-11.png" alt="Image" className="team-shape-one"/>
                <div className="container">
                    <div className="section-title style1 text-center mb-40">
                        <span>Fruits of<img src="/img/section-shape.png" alt="Image"/></span>
                        <h2>Our Efforts</h2>
                    </div>
                    <div className="team-slider-two owl-carousel">
                        <div className="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                            <img src="/img/team/team-1.jpg" alt="Image"/>
                            <div className="team-info-wrap">
                                <img src="/img/team/team-shape-1.png" alt="IMage" className="team-card-shape"/>
                                <div className="team-info">
                                    <h3><a href="team-details.html">Kevin Thompson</a></h3>
                                    <span>Founder &amp; CEO</span>
                                </div>
                                <div className="social-link">
                                    <span><i className="ri-add-line"></i></span>
                                    <ul className="social-profile style1 list-style">
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
                                            <a href="https://instagram.com" target="_blank">
                                                <i className="ri-instagram-line"></i>
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
                        <div className="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
                            <img src="/img/team/team-2.jpg" alt="Image"/>
                            <div className="team-info-wrap">
                                <img src="/img/team/team-shape-1.png" alt="IMage" className="team-card-shape"/>
                                <div className="team-info">
                                    <h3><a href="team-details.html">Isabella Woods</a></h3>
                                    <span>Cheif Marketing Officer</span>
                                </div>
                                <div className="social-link">
                                    <span><i className="ri-add-line"></i></span>
                                    <ul className="social-profile style1 list-style">
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
                                            <a href="https://instagram.com" target="_blank">
                                                <i className="ri-instagram-line"></i>
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
                        <div className="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400">
                            <img src="/img/team/team-3.jpg" alt="Image"/>
                            <div className="team-info-wrap">
                                <img src="/img/team/team-shape-1.png" alt="IMage" className="team-card-shape"/>
                                <div className="team-info">
                                    <h3><a href="team-details.html">Liam Stokes</a></h3>
                                    <span>Senior Executive</span>
                                </div>
                                <div className="social-link">
                                    <span><i className="ri-add-line"></i></span>
                                    <ul className="social-profile style1 list-style">
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
                                            <a href="https://instagram.com" target="_blank">
                                                <i className="ri-instagram-line"></i>
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
                        <div className="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500">
                            <img src="/img/team/team-4.jpg" alt="Image"/>
                            <div className="team-info-wrap">
                                <img src="/img/team/team-shape-1.png" alt="IMage" className="team-card-shape"/>
                                <div className="team-info">
                                    <h3><a href="team-details.html">Lucy Floyd</a></h3>
                                    <span>Accounts Manager</span>
                                </div>
                                <div className="social-link">
                                    <span><i className="ri-add-line"></i></span>
                                    <ul className="social-profile style1 list-style">
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
                                            <a href="https://instagram.com" target="_blank">
                                                <i className="ri-instagram-line"></i>
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
                        <div className="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="600">
                            <img src="/img/team/team-5.jpg" alt="Image"/>
                            <div className="team-info-wrap">
                                <img src="/img/team/team-shape-1.png" alt="IMage" className="team-card-shape"/>
                                <div className="team-info">
                                    <h3><a href="team-details.html">Hannah Adison</a></h3>
                                    <span>Marketing Manager</span>
                                </div>
                                <div className="social-link">
                                    <span><i className="ri-add-line"></i></span>
                                    <ul className="social-profile style1 list-style">
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
                                            <a href="https://instagram.com" target="_blank">
                                                <i className="ri-instagram-line"></i>
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
                        <div className="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="700">
                            <img src="/img/team/team-6.jpg" alt="Image"/>
                            <div className="team-info-wrap">
                                <img src="/img/team/team-shape-1.png" alt="IMage" className="team-card-shape"/>
                                <div className="team-info">
                                    <h3><a href="team-details.html">Jaylen Mills </a></h3>
                                    <span>Senior Executive</span>
                                </div>
                                <div className="social-link">
                                    <span><i className="ri-add-line"></i></span>
                                    <ul className="social-profile style1 list-style">
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
                                            <a href="https://instagram.com" target="_blank">
                                                <i className="ri-instagram-line"></i>
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
                        <div className="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="800">
                            <img src="/img/team/team-7.jpg" alt="Image"/>
                            <div className="team-info-wrap">
                                <img src="/img/team/team-shape-1.png" alt="IMage" className="team-card-shape"/>
                                <div className="team-info">
                                    <h3><a href="team-details.html">Autumn Leilani</a></h3>
                                    <span>Sales Executive</span>
                                </div>
                                <div className="social-link">
                                    <span><i className="ri-add-line"></i></span>
                                    <ul className="social-profile style1 list-style">
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
                                            <a href="https://instagram.com" target="_blank">
                                                <i className="ri-instagram-line"></i>
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
            </section>

                <section className="cta-wrap style1 bg-f ptb-100">
                    <img src="/img/bg-shape-5.png" alt="Image" className="cta-shape-two"/>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                                    <div className="content-title style1 text-center mb-40" data-aos="fade-up"
                                         data-aos-duration="1200" data-aos-delay="200">
                                        <span>What you can do<img src="/img/section-shape.png" alt="Image"/></span>
                                        <h2>All of our workshops, tree plantings, presentations, outreach programs and educational activities are ABSOLUTELY FREE for government schools, colleges and housing companies.</h2>
                                    </div>
                                    <div className="cta-btn" data-aos="fade-up" data-aos-duration="1200"
                                         data-aos-delay="300">
                                        <a href="#" className="btn style1">Get Started now</a>
                                        <a href="#" className="btn style2">Join Our Community</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                <section className="blog-wrap ptb-100 bg-sand">
                    <div className="container">
                        <img src="/img/shape-7.png" alt="Image" className="blog-section-shape"/>
                            <div className="section-title style3 mb-40 text-center">
                                <span>Our Latest News</span>
                                <h2>Our Latest News &amp; Articles</h2>
                            </div>
                            <div className="blog-slider-one owl-carousel">
                                <div className="blog-card style3">
                                    <div className="blog-img">
                                        <img src="/img/blog/blog-3.jpg" alt="Image"/>
                                            <a href="#" className="blog-date"><span>25</span> Jul, 2022</a>
                                    </div>
                                    <div className="blog-info">
                                        <h3><a href="#">Changes In Landscapes And Wildlife
                                            Community</a></h3>
                                        <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                            ame ultrices lectus dolor sit amet egestas.</p>
                                        <a href="#" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="blog-card style3">
                                    <div className="blog-img">
                                        <img src="/img/blog/blog-1.jpg" alt="Image"/>
                                            <a href="#" className="blog-date"><span>18</span> Jul, 2022</a>
                                    </div>
                                    <div className="blog-info">
                                        <h3><a href="#">Let’s Take Care of Nature for The
                                            Sake of The Earth</a></h3>
                                        <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                            ame ultrices lectus dolor sit amet egestas.</p>
                                        <a href="#" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="blog-card style3">
                                    <div className="blog-img">
                                        <img src="/img/blog/blog-2.jpg" alt="Image"/>
                                            <a href="#" className="blog-date"><span>10</span> Jul, 2022</a>
                                    </div>
                                    <div className="blog-info">
                                        <h3><a href="#">Increasing Risk Of Storms,
                                            Droughts and Floods</a></h3>
                                        <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                            ame ultrices lectus dolor sit amet egestas.</p>
                                        <a href="#" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="blog-card style3">
                                    <div className="blog-img">
                                        <img src="/img/blog/blog-4.jpg" alt="Image"/>
                                            <a href="#" className="blog-date"><span>17</span> May, 2022</a>
                                    </div>
                                    <div className="blog-info">
                                        <h3><a href="#">Seven Things Nobody Told You About
                                            Water Pollution</a></h3>
                                        <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                            ame ultrices lectus dolor sit amet egestas.</p>
                                        <a href="#" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="blog-card style3">
                                    <div className="blog-img">
                                        <img src="/img/blog/blog-5.jpg" alt="Image"/>
                                            <a href="#" className="blog-date"><span>12</span> May, 2022</a>
                                    </div>
                                    <div className="blog-info">
                                        <h3><a href="#">Solar Panels Will Be Great Source
                                            Of Green Energy</a></h3>
                                        <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                            ame ultrices lectus dolor sit amet egestas.</p>
                                        <a href="#" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                            </div>
                    </div>
                </section>


                <Footer />
            </div>
            <Js />
        </>
    )
}