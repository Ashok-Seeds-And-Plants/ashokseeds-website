import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import Galleries from "@components/Galleries";
import Portfolios from "@components/Portfolios";
import {fetchAPI} from "../../lib/api";

const KitchenGarden = ({ galleries, portfolios }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Kitchen Garden BKC, Plants, Organic Vegetables Tomato Plants</title>
                <meta name="description" content="Organic kitchen garden farming - Ashok Seeds and Plants is helping people in India plan, design kitchen garden, vegetables, kitchen garden bkc menu etc." />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f bkg-breadcrumb">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>BKG / Kitchen Garden</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>Initiatives</li>
                                    <li>BKG / Kitchen Garden</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="about-wrap style2 ptb-100 miyawaki-section-bg">
                        <img src="/img/about/about-shape-1.png" alt="miyawaki forest upsce"
                             className="about-shape-one moveHorizontal" />
                        <div className="container">
                            <div className="row align-items-center gx-5">

                                <div className="col-lg-12" data-aos="fade-left" data-aos-duration="1200"
                                     data-aos-delay="200">
                                    <div className="about-content">
                                        <div className="content-title style3">
                                            <h1> Kitchen Garden BKC </h1>
                                            <span>A Little Introduction <span className="bl-text">BKG / Kitchen Garden</span></span>
                                            <h2>BKG / Kitchen Garden for your daily needs vegetables</h2>
                                            <p>The vegetable garden is growing fruits and vegetables in the backyard of the house using the wastewater from the kitchen. Also known as Home Garden or Nutritional Garden or Vegetable Garden or Vegetable Garden.</p>
                                            <h3>Advantages of Kitchen garden:</h3>
                                            <ol>
                                                <li>Supply of fresh fruits and vegetables with high nutritive value.</li>
                                                <li>Provide fruits and vegetables free of poisonous chemicals.</li>
                                                <li>Helps to save expenses on purchasing vegetables.</li>
                                                <li>Homegrown vegetables taste better than those bought at the market.</li>
                                                <li>Efficient use of waste water and household waste.</li>
                                                <li>Exercise for body and mind.</li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-12'}>
                                    <img src={'/img/Kitchen_Garden.jpg'} alt={'BKG / Kitchen Garden'}/>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project-wrap ptb-100 bg-sand">
                        <div className="container">
                            <div className="section-title style3 text-center mb-40">
                                <span>Journey <span className="bl-text">So for</span></span>
                                <h2>Our Completed BKG Projects</h2>
                            </div>

                            <Portfolios portfolios={portfolios} />

                        </div>
                    </section>

                    <div className="promo-video bkg-video-bg bg-f ptb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                                    <div className="content-title style4 text-center mb-40">
                                        <span>Kitchen Garden for your daily needs vegetables <span className="bl-text">Our Video</span></span>
                                        <h2>A kitchen garden is a small plot of land where you can grow your own fresh and healthy vegetables for your daily needs.</h2>
                                    </div>
                                    <a className="play-now" data-fancybox=""
                                       href="https://www.youtube.com/watch?v=Rzug00g44FA">
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
                            $eq: 'BKG / Kitchen Garden',
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
                            $eq: 'BKG / Kitchen Garden',
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

export default KitchenGarden