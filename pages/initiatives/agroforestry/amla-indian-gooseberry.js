import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import Galleries from "@components/Galleries";
import Portfolios from "@components/Portfolios";
import {fetchAPI} from "../../../lib/api";

const Amla = ({ galleries, portfolios }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Amla Tree Plantation in India | Amla Tree Cutting Plantation Area</title>
                <meta name="description" content="Amla tree plantation using Miyawaki method – Ashok Seeds and Plants is a leading amla tree cutting plantation area guide provider to grow amla trees." />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f amla-breadcrumb">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Amla (Indian Gooseberry) Agroforestry</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li><a href="#">Initiatives </a></li>
                                    <li><a href="#">Agroforestry </a></li>
                                    <li>Amla (Indian Gooseberry) Agroforestry</li>
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
                                        <h1>About Amla (Indian gooseberry) </h1>
                                            <p>Amla, also known as Indian gooseberry, is a nutrient-rich fruit that has been cherished in Ayurveda, the traditional Indian system of medicine, for its various health benefits. Here's a breakdown of its content:</p>
                                            
                                            <h3>Vitamin C:</h3>
                                            <p>Amla is exceptionally rich in vitamin C, containing up to 20 times more vitamin C than an orange by weight. Vitamin C is a powerful antioxidant that helps boost the immune system, promotes healthy skin, and aids in the absorption of iron.</p>
                                            <h3>Antioxidants:</h3>
                                            <p>Apart from vitamin C, amla contains other antioxidants such as polyphenols, flavonoids, and tannins. These antioxidants help neutralize harmful free radicals in the body, protecting cells from damage and reducing the risk of chronic diseases.</p>
                                            <h3>Minerals:</h3>
                                            <p>Amla is a good source of minerals like calcium, phosphorus, iron, and magnesium, which are essential for maintaining bone health, supporting energy production, and aiding in various metabolic processes in the body.</p>
                                            <h3>Fiber:</h3>
                                            <p>Amla contains soluble and insoluble fiber, which promotes digestive health by regulating bowel movements, preventing constipation, and supporting the growth of beneficial gut bacteria.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col-md-12'}>
                                    <img src={'/img/alma1.png'} alt={'How miyawaki work'}/>
                                </div>

                                <div className={'col-md-12 pt-20'}>
                                    <p>Overall, amla is a nutritional powerhouse that offers a wide array of health benefits, including boosting immunity, improving digestion, promoting healthy skin and hair, and protecting against chronic diseases. It can be consumed fresh, dried, or in the form of juice, pickles, or supplements.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="project-wrap ptb-100 bg-sand">
                        <div className="container">
                            <div className="section-title style3 text-center mb-40">
                                <span>Journey <span className="bl-text">So for</span></span>
                                <h2>Our Completed Amla Projects</h2>
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
                            $eq: 'Amla Agroforestry',
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
                            $eq: 'Amla Agroforestry',
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

export default Amla