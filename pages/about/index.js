import Head from 'next/head'
import Clients from "@components/Clients";
import { fetchAPI } from "../../lib/api"
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import Link from "next/link";



const AboutUs = ({ posts, galleries, portfolios, clients }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>About - Ashok Seeds and Plants</title>
                <meta name="description" content="We are India's leading Seeds and Plants Provider. We are working to achieve sustainable development goals through tree planting." />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>About Us</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="about-wrap style2 ptb-100">
                        <img src="/img/about/about-shape-1.png" alt="miyawaki forest upsc"
                            className="about-shape-one moveHorizontal" />
                        <div className="container">
                            <div className="row align-items-center gx-5">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200"
                                    data-aos-delay="200">
                                    <div className="about-img-wrap">
                                        <img src="/img/about/about-img-2.png" alt="miyawaki urban forest" className="bounce" />
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="team-wrap ptb-100 bg-sand">
                        <img src="/img/shape-11.png" alt="neem tree plantation" class="team-shape-one" />
                        <div class="container">
                            <div class="section-title style3 text-center mb-40">
                                <span>Our Partners</span>
                                <h2>Our Great Customers</h2>
                            </div>
                            <Clients clients={clients} />
                        </div>
                    </section>

                    <section className="cta-wrap style1 bg-f ptb-100">
                        <img src="/img/bg-shape-5.png" alt="apple tree plantation" className="cta-shape-two" />
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                                    <div className="content-title style1 text-center mb-40" data-aos="fade-up"
                                        data-aos-duration="1200" data-aos-delay="200">
                                        <span>What you can do<img src="/img/section-shape.png" alt="advantages of kitchen garden" /></span>
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

export default AboutUs