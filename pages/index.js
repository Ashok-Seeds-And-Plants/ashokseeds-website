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

                <section className="blog-wrap ptb-100 bg-sand">
                    <div className="container">
                        <img src="/img/shape-7.png" alt="Image" className="blog-section-shape"/>
                            <div className="section-title style3 mb-40 text-center">
                                <span>Our Latest News <span className="bl-text">Our Blog</span></span>
                                <h2>Our Latest News &amp; Articles</h2>
                            </div>
                            <div className="blog-slider-one owl-carousel">
                                <div className="blog-card style2" data-aos="fade-up" data-aos-duration="1200"
                                     data-aos-delay="200">
                                    <div className="blog-img">
                                        <img src="/img/blog/blog-4.jpg" alt=""/>
                                    </div>
                                    <div className="blog-info">
                                        <div className="blog-author">
                                            <div className="blog-author-img">
                                                <img src="/img/blog/author-1.jpg" alt="Image"/>
                                            </div>
                                            <div className="blog-author-info">
                                                <span>Posted By</span>
                                                <h6><a href="posts-by-author.html">David Warner</a></h6>
                                            </div>
                                        </div>
                                        <h3><a href="blog-details-right-sidebar.html">Changes In Landscapes And Wildlife
                                            Community</a></h3>
                                        <ul className="blog-metainfo list-style">
                                            <li><a href="posts-by-date.html"><i className="ri-calendar-todo-line"></i>Jul
                                                22, 2022</a></li>
                                        </ul>
                                    </div>
                                    <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                        className="flaticon-right-arrow"></i></a>
                                </div>
                                <div className="blog-card style2" data-aos="fade-up" data-aos-duration="1200"
                                     data-aos-delay="300">
                                    <div className="blog-img">
                                        <img src="/img/blog/blog-3.jpg" alt=""/>
                                    </div>
                                    <div className="blog-info">
                                        <div className="blog-author">
                                            <div className="blog-author-img">
                                                <img src="/img/blog/author-7.jpg" alt="Image"/>
                                            </div>
                                            <div className="blog-author-info">
                                                <span>Posted By</span>
                                                <h6><a href="posts-by-author.html">Morgan Stanly</a></h6>
                                            </div>
                                        </div>
                                        <h3><a href="blog-details-right-sidebar.html">Let’s Take Care of Nature for The
                                            Sake of The Earth</a></h3>
                                        <ul className="blog-metainfo list-style">
                                            <li><a href="posts-by-date.html"><i className="ri-calendar-todo-line"></i>Jul
                                                17, 2022</a></li>
                                        </ul>
                                    </div>
                                    <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                        className="flaticon-right-arrow"></i></a>
                                </div>
                                <div className="blog-card style2" data-aos="fade-up" data-aos-duration="1200"
                                     data-aos-delay="400">
                                    <div className="blog-img">
                                        <img src="/img/blog/blog-2.jpg" alt=""/>
                                    </div>
                                    <div className="blog-info">
                                        <div className="blog-author">
                                            <div className="blog-author-img">
                                                <img src="/img/blog/author-3.jpg" alt="Image"/>
                                            </div>
                                            <div className="blog-author-info">
                                                <span>Posted By</span>
                                                <h6><a href="posts-by-author.html">Michel Hudson</a></h6>
                                            </div>
                                        </div>
                                        <h3><a href="blog-details-right-sidebar.html">Increasing Risk Of Storms,
                                            Droughts and Floods</a></h3>
                                        <ul className="blog-metainfo list-style">
                                            <li><a href="posts-by-date.html"><i className="ri-calendar-todo-line"></i>Jul
                                                13, 2022</a></li>
                                        </ul>
                                    </div>
                                    <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                        className="flaticon-right-arrow"></i></a>
                                </div>
                                <div className="blog-card style2" data-aos="fade-up" data-aos-duration="1200"
                                     data-aos-delay="500">
                                    <div className="blog-img">
                                        <img src="/img/blog/blog-1.jpg" alt=""/>
                                    </div>
                                    <div className="blog-info">
                                        <div className="blog-author">
                                            <div className="blog-author-img">
                                                <img src="/img/blog/author-4.jpg" alt="Image"/>
                                            </div>
                                            <div className="blog-author-info">
                                                <span>Posted By</span>
                                                <h6><a href="posts-by-author.html">Lisa Margaret</a></h6>
                                            </div>
                                        </div>
                                        <h3><a href="blog-details-right-sidebar.html">Seven Things Nobody Told You About
                                            Water Pollution</a></h3>
                                        <ul className="blog-metainfo list-style">
                                            <li><a href="posts-by-date.html"><i className="ri-calendar-todo-line"></i>Jun
                                                12, 2022</a></li>
                                        </ul>
                                    </div>
                                    <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                        className="flaticon-right-arrow"></i></a>
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