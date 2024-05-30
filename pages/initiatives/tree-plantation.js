import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import Galleries from "@components/Galleries";
import Portfolios from "@components/Portfolios";
import {fetchAPI} from "../../lib/api";
import React from "react";

const TreePlantation = ({ galleries, portfolios }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Mahogany, Agar,Mango & Neem Tree Plantation Distance</title>
                <meta name="description" content="Mahogany Tree Plantation - AashokSeedPlant is the leading orgnaization for guiding mahogany, agar, mango tree plantation distance & neem tree plantation." />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f treeplantation-breadcrumb">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Tree Plantation</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>Initiatives</li>
                                    <li>Tree Plantation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="about-wrap style2 ptb-100 miyawaki-section-bg">
                        <img src="/img/about/about-shape-1.png" alt="miyawaki forest upsc"
                             className="about-shape-one moveHorizontal" />
                        <div className="container">
                            <div className="row align-items-center gx-5">

                                <div className="col-lg-12" data-aos="fade-left" data-aos-duration="1200"
                                     data-aos-delay="200">
                                    <div className="about-content">
                                        <div className="content-title style3">
                                            <h1> Mahogany, Agar, Mango, &Neem Tree Plantation </h1>
                                            <span>A Little Introduction <span className="bl-text">Tree Plantation</span></span>
                                            <h2>Approach tree planting to rescue Mother Earth.</h2>
                                            <p>With the rapid growth of India's population and the transformation of towns into concrete jungles, the need for clean air is urgent. We need a solution that can deliver outstanding outcomes in less time and space. </p>
                                            <p><strong>We need a tree planting approach for all areas:</strong></p>
                                            <ol>
                                             <li>Our approach to tree plantation is based on community participation and ecological restoration.</li>
                                             <li>We use a holistic approach to tree plantation that considers the social, economic and environmental benefits of planting trees.</li>
                                             <li>The main goal of our approach to tree plantation is to enhance biodiversity and combat climate change.</li>
                                             <li>Our approach to tree plantation involves selecting native and resilient species, preparing the soil and providing adequate care for the saplings.</li>
                                             <li>We follow a scientific approach to tree plantation that optimizes the growth and survival of the trees.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-12'}>
                                    <a className="page-img" data-fancybox="gallery"
                                       href={'/img/tree_plat.jpg'}>
                                        <img src={'/img/tree_plat.jpg'} alt={'Approach tree planting to rescue Mother Earth'}/>
                                    </a>
                                </div>

                                <div className={'col-md-12 pt-20'}>
                                    <p> </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project-wrap ptb-100 bg-sand">
                        <div className="container">
                            <div className="section-title style3 text-center mb-40">
                                <span>Journey <span className="bl-text">So for</span></span>
                                <h2>Our Completed Tree Plantation Projects</h2>
                            </div>

                            <Portfolios portfolios={portfolios} />

                        </div>
                    </section>

                    <div className="promo-video style2 bg-f ptb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                                    <div className="content-title style4 text-center mb-40">
                                        <span>Miyawaki Method of Plantation <span className="bl-text">Our Video</span></span>
                                        <h2>The best method to grow an urban forest within a short span of 10-20 years.</h2>
                                    </div>
                                    <a className="play-now" data-fancybox=""
                                       href="https://www.youtube.com/watch?v=l5jtg2q1gnU">
                                        <i className="ri-play-fill"></i>
                                        <span className="ripple"></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <section className="team-wrap ptb-100 bg-sand">
                        <img src="/img/shape-11.png" alt="neem tree plantation" className="team-shape-one"/>
                        <div className="container">
                            <div className="section-title style1 text-center mb-40">
                                <span>Fruits of<img src="/img/section-shape.png" alt="advantages of kitchen garden"/></span>
                                <h2>Our Efforts</h2>
                            </div>

                            <Galleries galleries={galleries} />

                        </div>
                    </section>

                    <section className="cta-wrap style1 bg-f ptb-100">
                        <img src="/img/bg-shape-5.png" alt="apple tree plantation" className="cta-shape-two"/>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                                    <div className="content-title style1 text-center mb-40" data-aos="fade-up"
                                         data-aos-duration="1200" data-aos-delay="200">
                                        <span>What you can do<img src="/img/section-shape.png" alt="advantages of kitchen garden"/></span>
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

                </div>




                <Footer />
            </div>
            <Js />
        </>
    )
}


export async function getStaticProps() {
    // Run API calls in parallel

    const [galleriesRes, portfoliosRes] = await Promise.all([
        fetchAPI("/galleries",
            {
                filters: {
                    gallery_categories: {
                        name: {
                            $eq: 'Tree Plantation',
                        },
                    },
                },
                pagination: {
                    start: 0,
                    limit: 30,
                },
                sort: ['id:desc'],
                populate: "*" }),
        fetchAPI("/portfolios",
            {
                filters: {
                    portfolio_categories: {
                        name: {
                            $eq: 'Tree Plantation',
                        },
                    },
                },
                pagination: {
                    start: 0,
                    limit: 10,
                },
                sort: ['id:desc'],
                populate: "*"
            }),

    ])

    return {
        props: {
            galleries: galleriesRes.data,
            portfolios: portfoliosRes.data,
        },
        revalidate: 1,
    }
}

export default TreePlantation