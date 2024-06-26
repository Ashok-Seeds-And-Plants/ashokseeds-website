import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import Galleries from "@components/Galleries";
import Portfolios from "@components/Portfolios";
import {fetchAPI} from "../../../lib/api";

const Amrood = ({ galleries, portfolios }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Amrood - Guava Tree Plantation Using Miyawaki Method in India</title>
                <meta name="description" content="Guava tree plantation in India - Ashok Seeds and Plants is a Miyawaki method Guava tree plantation technique provider. Call us for a free consultation." />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f amrood-breadcrumb">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Amrood (Guava) Agroforestry</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li><a href="#">Initiatives </a></li>
                                    <li><a href="#">Agroforestry </a></li>
                                    <li>Amrood (Guava) Agroforestry</li>
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
                                             <h1>Guava Tree Plantation </h1>
                                            <p>Planting a guava tree requires careful consideration of the climate, soil conditions, and spacing. Here's a general guide to guava tree plantation:</p>
                                            <h3>Climate:</h3>
                                            <p> Guava trees thrive in tropical and subtropical climates. They prefer temperatures between 20°C to 30°C (68°F to 86°F) and require full sun exposure for optimal growth and fruit production. Guava trees are sensitive to frost, so they should be planted in areas where temperatures don't drop below freezing.</p>
                                            <h3>Soil:</h3>
                                            <p>Guava trees can tolerate a wide range of soil types but prefer well-drained, fertile soils with a pH ranging from 5.0 to 7.0. They don't do well in waterlogged or excessively sandy soils. Prior to planting, the soil should be tested to ensure it's suitable for guava cultivation. Adding organic matter like compost can improve soil fertility and structure.</p>
                                            <h3>Site Selection:</h3>
                                            <p> Choose a site for planting guava trees that receives plenty of sunlight and has good air circulation. Avoid low-lying areas prone to waterlogging and areas with strong winds, as these can damage the trees.</p>
                                            <h3>Spacing:</h3>
                                            <p>Guava trees should be spaced adequately to allow for proper growth and development. The spacing between trees depends on the variety and growth habit but generally ranges from 3 to 6 meters (10 to 20 feet) apart.</p>
                                            <h3>Planting:</h3>
                                            <p>Guava trees can be propagated from seeds, cuttings, or grafts. While seeds are easy to obtain, they may not produce fruits identical to the parent plant. Grafted or cutting-grown trees are preferred for commercial production as they produce fruits of consistent quality. When planting, dig a hole slightly larger than the root ball, place the tree in the hole, and backfill with soil, ensuring the graft union (if applicable) is above the soil level.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-12'}>
                                    <img src={'/img/Guava.png'} alt={'How miyawaki work'}/>
                                </div>

                                <div className={'col-md-12 pt-20'}>
                                    <p>By following these guidelines, you can establish a successful guava tree plantation and enjoy a bountiful harvest of delicious and nutritious fruits.</p>
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

export default Amrood