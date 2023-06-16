import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import Galleries from "@components/Galleries";
import Portfolios from "@components/Portfolios";
import {fetchAPI} from "../../lib/api";

const Miyawaki = ({ galleries, portfolios }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Miyawaki Forest | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f miyawaki">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Miyawaki Forest</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>Miyawaki Forest</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="about-wrap style2 ptb-100 miyawaki-section-bg">
                        <img src="/img/about/about-shape-1.png" alt="Image"
                             className="about-shape-one moveHorizontal" />
                        <div className="container">
                            <div className="row align-items-center gx-5">

                                <div className="col-lg-12" data-aos="fade-left" data-aos-duration="1200"
                                     data-aos-delay="200">
                                    <div className="about-content">
                                        <div className="content-title style3">
                                            <span>A Little Introduction <span className="bl-text">Miyawaki Forest</span></span>
                                            <h2>The Miyawaki approach to creating forests.</h2>
                                            <p>The Indian subway and Megacities have lost 50% of their green coverage. Open spaces are shrinking every year and cities are slowly becoming concrete jungles. Megacities and metropolises need a solution in which many densely forested areas can be created. The Miyawaki method is the way to make a major rapid change in a small area.</p>
                                            <h3>What does the Miyawaki method mean?</h3>
                                            <p>The Miyawaki method was developed by the Japanese botanist and plant ecology specialist, Dr Akira Miyawaki. This method is a unique innovative concept of potential natural vegetation, proven to work all over the world, independent of soil and climate conditions. Over 3,000 forests have been successfully established around the world using this method.</p>
                                            <p>In this method, 3-5 seedlings are planted per square meter with a minimum of 20-50 different species. the creation of a multi-layered green forest with no maintenance after a period of 2 to 3 years.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-12'}>
                                <img src={'/img/how_miyawaki_work.jpg'} alt={'How miyawaki work'}/>
                                </div>

                                <div className={'col-md-12 pt-20'}>
                                <p>The dense forests of Miyawaki grow 10 times faster, 100 times richer in biodiversity, 30 times more noisy and reduce dust. have 30 times more green area and is 100 organic, Up to 30 times better carbon dioxide uptake compared to monoculture planting.</p>
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
                        <img src="/img/shape-11.png" alt="Image" className="team-shape-one"/>
                        <div className="container">
                            <div className="section-title style1 text-center mb-40">
                                <span>Fruits of<img src="/img/section-shape.png" alt="Image"/></span>
                                <h2>Our Efforts</h2>
                            </div>

                            <Galleries galleries={galleries} />

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
                            $eq: 'Miyawaki Forest',
                        },
                    },
                    sort: ['id:desc']
                },
                populate: "*" }),
        fetchAPI("/portfolios",
            {
                filters: {
                    portfolio_categories: {
                        name: {
                            $eq: 'Miyawaki Forest',
                        },
                    },
                    sort: ['id:desc']
                },
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

export default Miyawaki