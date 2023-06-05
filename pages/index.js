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
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
                <link rel="stylesheet" href="https://www.ashokseedplant.com/styles/css/home.css" />
            </Head>
            <div className="page-wrapper">
            <Header />

                <div className="home-slider swiper">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <img src="/img/home/slide1.jpg" alt="Forest" />
                        </div>
                        <div className="swiper-slide">
                            <img src="/img/home/slide2.jpg" alt="Forest" />
                        </div>
                        ...
                    </div>

                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    <div className="swiper-scrollbar"></div>
                </div>


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


<section class="team-wrap ptb-100 bg-sand">
                <img src="assets/img/shape-11.png" alt="Image" class="team-shape-one"/>
                <div class="container">
                    <div class="section-title style1 text-center mb-40">
                        <span>Our Volunteer <img src="assets/img/section-shape.png" alt="Image"/></span>
                        <h2>Our Experts Volunteer</h2>
                    </div>
                    <div class="team-slider-two owl-carousel">
                        <div class="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                            <img src="assets/img/team/team-1.jpg" alt="Image"/>
                            <div class="team-info-wrap">
                                <img src="assets/img/team/team-shape-1.png" alt="IMage" class="team-card-shape"/>
                                <div class="team-info">
                                    <h3><a href="team-details.html">Kevin Thompson</a></h3>
                                    <span>Founder &amp; CEO</span>
                                </div>
                                <div class="social-link">
                                    <span><i class="ri-add-line"></i></span>
                                    <ul class="social-profile style1 list-style">
                                        <li>
                                            <a href="https://facebook.com" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://twitter.com" target="_blank">
                                                <i class="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://linkedin.com" target="_blank">
                                                <i class="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
                            <img src="assets/img/team/team-2.jpg" alt="Image"/>
                            <div class="team-info-wrap">
                                <img src="assets/img/team/team-shape-1.png" alt="IMage" class="team-card-shape"/>
                                <div class="team-info">
                                    <h3><a href="team-details.html">Isabella Woods</a></h3>
                                    <span>Cheif Marketing Officer</span>
                                </div>
                                <div class="social-link">
                                    <span><i class="ri-add-line"></i></span>
                                    <ul class="social-profile style1 list-style">
                                        <li>
                                            <a href="https://facebook.com" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://twitter.com" target="_blank">
                                                <i class="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://linkedin.com" target="_blank">
                                                <i class="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400">
                            <img src="assets/img/team/team-3.jpg" alt="Image"/>
                            <div class="team-info-wrap">
                                <img src="assets/img/team/team-shape-1.png" alt="IMage" class="team-card-shape"/>
                                <div class="team-info">
                                    <h3><a href="team-details.html">Liam Stokes</a></h3>
                                    <span>Senior Executive</span>
                                </div>
                                <div class="social-link">
                                    <span><i class="ri-add-line"></i></span>
                                    <ul class="social-profile style1 list-style">
                                        <li>
                                            <a href="https://facebook.com" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://twitter.com" target="_blank">
                                                <i class="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://linkedin.com" target="_blank">
                                                <i class="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500">
                            <img src="assets/img/team/team-4.jpg" alt="Image"/>
                            <div class="team-info-wrap">
                                <img src="assets/img/team/team-shape-1.png" alt="IMage" class="team-card-shape"/>
                                <div class="team-info">
                                    <h3><a href="team-details.html">Lucy Floyd</a></h3>
                                    <span>Accounts Manager</span>
                                </div>
                                <div class="social-link">
                                    <span><i class="ri-add-line"></i></span>
                                    <ul class="social-profile style1 list-style">
                                        <li>
                                            <a href="https://facebook.com" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://twitter.com" target="_blank">
                                                <i class="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://linkedin.com" target="_blank">
                                                <i class="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="600">
                            <img src="assets/img/team/team-5.jpg" alt="Image"/>
                            <div class="team-info-wrap">
                                <img src="assets/img/team/team-shape-1.png" alt="IMage" class="team-card-shape"/>
                                <div class="team-info">
                                    <h3><a href="team-details.html">Hannah Adison</a></h3>
                                    <span>Marketing Manager</span>
                                </div>
                                <div class="social-link">
                                    <span><i class="ri-add-line"></i></span>
                                    <ul class="social-profile style1 list-style">
                                        <li>
                                            <a href="https://facebook.com" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://twitter.com" target="_blank">
                                                <i class="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://linkedin.com" target="_blank">
                                                <i class="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="700">
                            <img src="assets/img/team/team-6.jpg" alt="Image"/>
                            <div class="team-info-wrap">
                                <img src="assets/img/team/team-shape-1.png" alt="IMage" class="team-card-shape"/>
                                <div class="team-info">
                                    <h3><a href="team-details.html">Jaylen Mills </a></h3>
                                    <span>Senior Executive</span>
                                </div>
                                <div class="social-link">
                                    <span><i class="ri-add-line"></i></span>
                                    <ul class="social-profile style1 list-style">
                                        <li>
                                            <a href="https://facebook.com" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://twitter.com" target="_blank">
                                                <i class="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://linkedin.com" target="_blank">
                                                <i class="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="800">
                            <img src="assets/img/team/team-7.jpg" alt="Image"/>
                            <div class="team-info-wrap">
                                <img src="assets/img/team/team-shape-1.png" alt="IMage" class="team-card-shape"/>
                                <div class="team-info">
                                    <h3><a href="team-details.html">Autumn Leilani</a></h3>
                                    <span>Sales Executive</span>
                                </div>
                                <div class="social-link">
                                    <span><i class="ri-add-line"></i></span>
                                    <ul class="social-profile style1 list-style">
                                        <li>
                                            <a href="https://facebook.com" target="_blank">
                                                <i class="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://twitter.com" target="_blank">
                                                <i class="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://instagram.com" target="_blank">
                                                <i class="ri-instagram-line"></i>
                                            </a>
                                        </li>
                                        <li>
                                           <a href="https://linkedin.com" target="_blank">
                                                <i class="ri-linkedin-fill"></i>
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