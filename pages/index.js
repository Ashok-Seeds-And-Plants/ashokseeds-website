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

                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100"
                                 data-src="holder.js/800x400?auto=yes&amp;bg=777&amp;fg=555&amp;text=First slide"
                                 alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                 data-src="holder.js/800x400?auto=yes&amp;bg=666&amp;fg=444&amp;text=Second slide"
                                 alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100"
                                 data-src="holder.js/800x400?auto=yes&amp;bg=555&amp;fg=333&amp;text=Third slide"
                                 alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
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