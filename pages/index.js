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
                                            <h2>Protect Our Earth Against Climate Change</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu a duis. Sollicitudin consectetur netus du
                                                ultric. </p>
                                        </div>
                                        <ul className="content-feature-list list-style">
                                            <li><i className="ri-checkbox-circle-line"></i>Curabitur vitae ullamcorper
                                                libe roras id augue
                                            </li>
                                            <li><i className="ri-checkbox-circle-line"></i>Felis cras luctus nisi in
                                                tincidunt blandit
                                            </li>
                                            <li><i className="ri-checkbox-circle-line"></i>Sapien mi vestibulum est
                                                commodo lobortis metus
                                            </li>
                                            <li><i className="ri-checkbox-circle-line"></i>Mauris vitae purus blandit
                                                fermentum
                                            </li>
                                        </ul>
                                        <a href="about.html" className="btn style2">Find Out More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>


<section className="team-wrap ptb-100 bg-sand">
                <img src="/img/shape-11.png" alt="Image" className="team-shape-one"/>
                <div className="container">
                    <div className="section-title style1 text-center mb-40">
                        <span>Our Volunteer <img src="/img/section-shape.png" alt="Image"/></span>
                        <h2>Our Experts Volunteer</h2>
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
            


                <Footer />
            </div>
            <Js />
        </>
    )
}