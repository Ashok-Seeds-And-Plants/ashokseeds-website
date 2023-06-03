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
            <title>Ashok Seeds and Plants</title>
            <meta name="description" content="" />

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
                                            <h1>Lets Make Our Earth Green and Clean</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollic itudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu.</p>
                                            <a href="register.html" className="btn style2">Join With us</a>
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
                                            <h1>Stop Using Plastic And Make Our land More Fertile</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu a duis. </p>
                                            <a href="register.html" className="btn style2">Join With us</a>
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
                                            <h1>Lets Start Using Green Energy For A Better Planet</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu a duis. </p>
                                            <a href="register.html" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-slider-thumbs owl-thumbs" data-slider-id="1">
                        <button className="owl-thumb-item">
                            <img src="/img/hero/hero-thumb-1.jpg" alt="Images">
                        </button>
                        <button className="owl-thumb-item">
                            <img src="/img/hero/hero-thumb-2.jpg" alt="Images">
                        </button>
                        <button className="owl-thumb-item">
                            <img src="/img/hero/hero-thumb-3.jpg" alt="Images">
                        </button>
                    </div>
                </section>

                <div className="container">
                    <div className="promo-wrap style2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <img src="/img/shape-8.png" alt="Image" className="promo-shape-one"/>
                            <img src="/img/shape-9.png" alt="Image" className="promo-shape-two"/>
                                <div className="promo-card">
                        <span className="promo-icon">
                            <i className="flaticon-volunteer"></i>
                        </span>
                                    <h3>Become A Volunteer</h3>
                                    <a href="register.html" className="link style1">Join With Us <i
                                        className="flaticon-right-arrow"></i></a>
                                </div>
                                <div className="promo-card">
                        <span className="promo-icon">
                            <i className="flaticon-money-box"></i>
                        </span>
                                    <h3>Quick Fundraise</h3>
                                    <a href="donation.html" className="link style1">Help The People<i
                                        className="flaticon-right-arrow"></i></a>
                                </div>
                                <div className="promo-card">
                        <span className="promo-icon">
                            <i className="flaticon-coin"></i>
                        </span>
                                    <h3>Make A Donation</h3>
                                    <a href="donation.html" className="link style1">Donate Us <i
                                        className="flaticon-right-arrow"></i></a>
                                </div>
                    </div>
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


                <Footer />
            </div>
            <Js />
        </>
    )
}