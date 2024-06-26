import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import Galleries from "@components/Galleries";
import Portfolios from "@components/Portfolios";
import {fetchAPI} from "../../../lib/api";

const Apple = ({ galleries, portfolios }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Apple Tree Plantation in India | Urban Biodiversity Conservation</title>
                <meta name="description" content="Apple Tree Plantation in India - Ashok Seeds and Plants is the best source for conservation of urban biodiversity and help the learners emulate the same." />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f apple-breadcrumb">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Apple Agroforestry</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li><a href="#">Initiatives </a></li>
                                    <li><a href="#">Agroforestry </a></li>
                                    <li>Apple Agroforestry</li>
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
                                       <h1>Apple Tree Plantation in India </h1>
                                        <p>Apple tree cultivation in India requires careful consideration of climate, soil conditions, and variety selection. While traditionally associated with temperate regions, certain parts of India with suitable climates, such as the Himalayan foothills, Himachal Pradesh, Jammu and Kashmir, and parts of Uttarakhand, have been successfully growing apples. Here's a general guide to apple tree plantation in India:</p>
                                            
                                            <h3>Climate:</h3>
                                            <p>Apple trees require a temperate climate with distinct seasons, including a cold winter period for dormancy and a warm summer for fruit development. They thrive in regions with cool to cold winters (chilling requirement) and moderate summers. In India, the ideal elevation for apple cultivation is typically between 1,500 to 2,500 meters (4,900 to 8,200 feet) above sea level.</p>
                                            <h3>Variety Selection:</h3>
                                            <p> Choose apple varieties that are well-suited to the local climate and soil conditions. Some popular apple varieties grown in India include Red Delicious, Golden Delicious, Royal Delicious, Granny Smith, and Fuji. Consider factors such as chilling hours required, disease resistance, and market demand when selecting varieties.</p>
                                            <h3>Soil:</h3>
                                            <p>Apple trees prefer well-drained, loamy soils with good fertility and a slightly acidic to neutral pH (around 6.0 to 7.0). Conduct soil tests to determine nutrient levels and pH, and amend the soil as needed with organic matter or lime.</p>
                                            <h3>Site Selection:</h3>
                                            <p>Select a site with good air drainage, as stagnant air can lead to frost damage. South-facing slopes are often preferred for apple orchards as they receive ample sunlight and minimize frost risk. Avoid low-lying areas prone to frost pockets and areas with waterlogging.</p>
                                            <h3>Planting:</h3>
                                            <p>Plant apple trees in late winter or early spring when the trees are dormant. Dig planting holes slightly larger than the root ball and amend the soil with compost or well-rotted manure. Space apple trees according to their expected size at maturity, typically 4 to 6 meters (13 to 20 feet) apart in rows.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-12'}>
                                    <img src={'/img/apple1.png'} alt={'How miyawaki work'}/>
                                </div>

                                <div className={'col-md-12 pt-20'}>
                                    <p>By following these guidelines and adapting them to local conditions, apple tree plantation in India can be successful, leading to a rewarding harvest of flavorful and nutritious fruits.</p>
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

export default Apple