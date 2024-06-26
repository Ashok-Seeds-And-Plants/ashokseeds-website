import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import Galleries from "@components/Galleries";
import Portfolios from "@components/Portfolios";
import {fetchAPI} from "../../../lib/api";

const Strawberry = ({ galleries, portfolios }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Strawberry | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f strawberry-breadcrumb">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Strawberry Agroforestry</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li><a href="#">Initiatives </a></li>
                                    <li><a href="#">Agroforestry </a></li>
                                    <li>Strawberry Agroforestry</li>
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
                                            <span>A Little Introduction <span className="bl-text">Miyawaki Forest</span></span>
                                            <h1>Strawberry Agroforestry</h1>
                                            <p>Strawberry agroforestry involves integrating strawberry cultivation with tree crops or other agricultural practices to optimize land use, improve soil health, and increase overall farm productivity. While strawberries are typically grown as a field crop, incorporating them into agroforestry systems can offer several benefits:</p>
                                            <h3>Soil Conservation:</h3>
                                            <p>Trees in agroforestry systems can help prevent soil erosion and improve soil structure, which is beneficial for strawberry cultivation. The tree canopy provides shade, reducing soil moisture evaporation and minimizing erosion during heavy rainfall.</p>
                                            <h3>Microclimate Modification: </h3>
                                            <p>Trees can modify the microclimate, providing shelter from harsh weather conditions such as strong winds and excessive sunlight. This can help protect delicate strawberry plants and reduce stress, leading to improved growth and yield.</p>
                                            <h3>Biodiversity Enhancement:</h3>
                                            <p>Agroforestry promotes biodiversity by providing habitat for beneficial insects, birds, and other wildlife. This can result in natural pest control and pollination services, reducing the need for synthetic inputs in strawberry production.</p>
                                            <h3>Nutrient Cycling:</h3>
                                            <p>Trees in agroforestry systems contribute to nutrient cycling by accumulating organic matter in the form of leaf litter and providing shade, which encourages the growth of beneficial soil microorganisms. This can enhance soil fertility and nutrient availability for strawberry plants.</p>
                                            <h3>Diversification of Income:</h3>
                                            <p>Integrating strawberries with tree crops diversifies farm income streams, as both strawberries and tree crops can be harvested and sold for profit. This reduces reliance on a single crop and enhances the resilience of the farm against market fluctuations.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-12'}>
                                    <img src={'/img/sb1.png'} alt={'How miyawaki work'}/>
                                </div>

                                <div className={'col-md-12 pt-20'}>
                                    <p>When implementing strawberry agroforestry, it's essential to consider factors such as tree species selection, spacing, and management practices to ensure compatibility with strawberry cultivation requirements. Proper planning and management are key to maximizing the benefits of agroforestry while maintaining strawberry productivity and profitability.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project-wrap ptb-100 bg-sand">
                        <div className="container">
                            <div className="section-title style3 text-center mb-40">
                                <span>Journey <span className="bl-text">So for</span></span>
                                <h2>Our Completed Miyawaki Projects</h2>
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
                                        <a href="/about/" className="btn style1">Get Started now</a>
                                        <a href="/contact-us/" className="btn style2">Join Our Community</a>
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

export default Strawberry