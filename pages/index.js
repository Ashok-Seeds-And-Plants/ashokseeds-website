import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../lib/api"
import Portfolios from "@components/Portfolios";
import Galleries from "@components/Galleries";
import Posts from "@components/Posts";
import Clients from "@components/Clients";
import Link from "next/link";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay} from "swiper";


const Home = ({ posts, galleries, portfolios, clients }) => {
    return (
        <>
            <Meta />
            <Head>
            <title>Ashok Seeds and Plants - Keeping Earth Safe Through Tree Plantation</title>
            <meta name="description" content="Ashok Seeds and Plants - We are working towards achieving the Sustainable Development Goals (SDGs) through tree plantation, urban biodiversity conservation, water body restoration, sustainable solutions, and environmental research and awareness." />
            </Head>
            <div className="page-wrapper">
            <Header />

                <section className="hero-wrap style2">

                    <div className="hero-slider-one owl-carousel" data-slider-id="1">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={1}
                            pagination={{
                                clickable: true,
                                dynamicBullets:true
                            }}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                            className="mySwiper"
                        >
                            <SwiperSlide><div className="hero-slide-item hero-slide-one bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  col-md-9">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>We'll Save Our Planet</span>
                                            <h1>Tree Plantation</h1>
                                            <p>Tree planting is the process of planting and growing trees to restore degraded lands, improve biodiversity, sequester carbon and provide various ecosystem services..</p>
                                            <a href="/initiatives/tree-plantation/" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></SwiperSlide>
                            <SwiperSlide><div className="hero-slide-item hero-slide-two bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-9">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>Save Our Soil</span>
                                            <h1>Miyawaki Forest</h1>
                                            <p>Miyawaki forest is a dense and diverse mini-forest that mimics the natural succession and relationships of a native forest, and grows much faster and absorbs more carbon than a conventional plantation.</p>
                                            <a href="/initiatives/miyawaki-forest/" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="hero-slide-item hero-slide-three bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  col-md-10">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>We'll Save Our Planet</span>
                                            <h1>Kitchen Garden</h1>
                                            <p>The Kitchen garden is a small convenient area near the home where you can grow fresh and organic vegetables, fruits, herbs and flowers for your culinary and aesthetic needs.</p>
                                            <a href="/initiatives/bkg-kitchen-garden/" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div></SwiperSlide>
                            <SwiperSlide><div className="hero-slide-item hero-slide-four bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  col-md-10">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>Organic vegetables at home</span>
                                            <h1>Agroforestry</h1>
                                            <p>Agroforestry is a way of integrating trees and shrubs with crops and livestock in order to create diverse and productive agricultural systems that provide multiple environmental and social benefits.</p>
                                            <a href="#" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div></SwiperSlide>
                        </Swiper>
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
                                            <li><i className="ri-checkbox-circle-line"></i><Link href={'/initiatives/tree-plantation/'}>Tree Plantation</Link></li>
                                            <li><i className="ri-checkbox-circle-line"></i><Link href={'/initiatives/miyawaki-forest/'}>Miyawaki Forest</Link></li>
                                            <li><i className="ri-checkbox-circle-line"></i><Link href={'/initiatives/bkg-kitchen-garden/'}>BKG / Kitchen Garden</Link></li>
                                            <li><i className="ri-checkbox-circle-line"></i>Agroforestry (<Link href={'/initiatives/agroforestry/strawberry/'}>Strawberry</Link>, <Link href={'/initiatives/agroforestry/apple/'}>Apple</Link>, <Link href={'/initiatives/agroforestry/amrood-guava/'}>Amrood (Guava)</Link>, <Link href={'/initiatives/agroforestry/amla-indian-gooseberry/'}>Amla (Indian Gooseberry)</Link>)</li>
                                        </ul>
                                        <Link href={'/about/'}>
                                        <a className="btn style2">Find Out More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                <section className="project-wrap ptb-100 bg-sand">
                    <div className="container">
                        <div className="section-title style3 text-center mb-40">
                            <span>Journey <span className="bl-text">So for</span></span>
                            <h2>Our Completed Projects</h2>
                        </div>

                <Portfolios portfolios={portfolios} />

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
                                        <i className="fa-duotone fa-tree-deciduous"></i>
                                    </span>
                                        <div className="counter-text">
                                            <h2 className="counter-num">
                                                <span className="odometer" data-count="35000"></span>
                                            </h2>
                                            <p>Tree plantation</p>
                                        </div>
                                    </div>
                                    <div className="counter-card" data-aos="fade-up" data-aos-duration="37"
                                         data-aos-delay="300">
                                    <span className="counter-icon">
                                        <i className="fa-duotone fa-bullhorn"></i>
                                    </span>
                                        <div className="counter-text">
                                            <h2 className="counter-num">
                                                <span className="odometer" data-count="23"></span>
                                            </h2>
                                            <p>Campaigns</p>
                                        </div>
                                    </div>
                                    <div className="counter-card" data-aos="fade-up" data-aos-duration="1200"
                                         data-aos-delay="400">
                                    <span className="counter-icon">
                                        <i className="fa-duotone fa-tomato"></i>
                                    </span>
                                        <div className="counter-text">
                                            <h2 className="counter-num">
                                                <span className="odometer" data-count="124"></span>
                                            </h2>
                                            <p>Kitchen Garden</p>
                                        </div>
                                    </div>
                                    <div className="counter-card" data-aos="fade-up" data-aos-duration="14"
                                         data-aos-delay="500">
                                    <span className="counter-icon">
                                        <i className="fa-duotone fa-trees"></i>
                                    </span>
                                        <div className="counter-text">
                                            <h2 className="counter-num">
                                                <span className="odometer" data-count="19"></span>
                                            </h2>
                                            <p>Miyawaki Forest</p>
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

                    <Galleries galleries={galleries} />

                </div>
            </section>

            <section class="team-wrap ptb-100 bg-sand">
                <img src="/img/shape-11.png" alt="Image" class="team-shape-one"/>
                <div class="container">
                    <div class="section-title style3 text-center mb-40">
                        <span>Our Partners</span>
                        <h2>Our Great Customers</h2>
                    </div>
                    <Clients clients={clients} />
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
                                        <h3>All of our workshops, tree plantings, presentations, outreach programs and educational activities are ABSOLUTELY FREE for government schools, colleges and housing companies.</h3>
                                    </div>
                                    <div className="cta-btn" data-aos="fade-up" data-aos-duration="1200"
                                         data-aos-delay="300">
                                        <a href="/donate-now/" className="btn style1">Get Started now</a>
                                        <a href="/get-involved/volunteer/" className="btn style2">Join Our Community</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>

                <Posts posts={posts} />

                <Footer />
            </div>
            <Js />
        </>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [postsRes, galleriesRes, portfoliosRes, clientsRes] = await Promise.all([
        fetchAPI("/posts", {
            sort: ['id:desc'],
            pagination: {
                start: 0,
                limit: 10,
            },
            populate: "*"
        }),
        fetchAPI("/galleries", {
            sort: ['id:desc'],
            pagination: {
                start: 0,
                limit: 10,
            },
            populate: "*"
        }),
        fetchAPI("/portfolios", {
            sort: ['id:desc'],
            pagination: {
                start: 0,
                limit: 10,
            },
            populate: "*"
        }),
        fetchAPI("/clients", {
            sort: ['id:desc'],
            pagination: {
                start: 0,
                limit: 10,
            },
            populate: "*"
        }),
    ])

    return {
        props: {
            posts: postsRes.data,
            galleries: galleriesRes.data,
            portfolios: portfoliosRes.data,
            clients: clientsRes.data,
        },
        revalidate: 1,
    }
}

export default Home