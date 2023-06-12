import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'


const Blog = ({ portfolio, categories }) => {
    const title = delve(portfolio, "attributes.title");
    const content = delve(portfolio, "attributes.content");
    const cover = delve(portfolio, "attributes.cover.data.attributes.url");
    const date = parseISO(delve(portfolio, "attributes.publishedAt"));
    const port_categories = delve(portfolio, "attributes.portfolio_categories.data");

    return (
        <>
            <Meta />
            <Head>
                <title>{title} | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">


                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>{title}</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li><a href="https://www.ashokseedplant.com/project/">Projects</a></li>
                                    <li>{title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="project-details-wrap ptb-100">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-xl-8">
                                    <div className="project-desc">
                                        <a className="single-project-img mt-0" data-fancybox="gallery" href={`${cover}`}>
                                            <img src={`${cover}`} alt={`${title}`}/>
                                        </a>
                                        <div className="team-slider-one owl-carousel">
                                            <div className="team-card style1" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                                <a className="single-project-img mt-0" data-fancybox="gallery" href={`${cover}`}>
                                                    <img src={`${cover}`} alt={`${title}`}/>
                                                </a>
                                            </div>

                                        </div>
                                        <h1>{title}</h1>

                                        <ReactMarkdown children={content} />

                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="sidebar">
                                        <div className="sidebar-widget">
                                            <h4>Project Brief</h4>
                                            <div className="project-info-item-wrap">
                                                <div className="project-info-item">
                                                    <h6>Category:</h6>
                                                    {port_categories.map((category, i) => {
                                                        const cat_name = delve(category, "attributes.name");
                                                        if (cat_name !== "All")
                                                        {
                                                            return (
                                                                <span className="portfolio-categories">{`${cat_name} `}</span>

                                                            )
                                                        }
                                                    })}
                                                </div>
                                                <div className="project-info-item">
                                                    <h6>Date:</h6>
                                                    <span>{format(date, 'd LLL yyyy')}</span>
                                                </div>
                                                <div className="project-info-item">
                                                    <h6>Status:</h6>
                                                    <span>Completed</span>
                                                </div>
                                                <div className="project-info-item">
                                                    <h6>Share:</h6>
                                                    <ul className="social-profile list-style style2">
                                                        <li>
                                                            <a href="https://facebook.com">
                                                                <i className="ri-facebook-fill"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://twitter.com">
                                                                <i className="ri-twitter-fill"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://linkedin.com">
                                                                <i className="ri-linkedin-fill"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="https://pinterest.com">
                                                                <i className="ri-pinterest-line"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-widget">
                                            <h4>Give Us A Message</h4>
                                            <form action="#" className="register-widget">
                                                <div className="form-group">
                                                    <input type="text" placeholder="Name*"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="email" placeholder="Email*"/>
                                                </div>
                                                <div className="form-group">
                                                    <textarea name="msg" id="msg" cols="30" rows="10"
                                                              placeholder="Your Message"></textarea>
                                                </div>
                                                <button type="submit" className="btn style1 w-100 d-block">Send
                                                    Message
                                                </button>
                                            </form>
                                        </div>
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

export async function getStaticPaths() {
    const portfoliosRes = await fetchAPI("/portfolios", { fields: ["slug"] })

    return {
        paths: portfoliosRes.data.map((portfolio) => ({
            params: {
                slug: portfolio.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const portfoliosRes = await fetchAPI("/portfolios", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })
    const categoriesRes = await fetchAPI("/portfolio-categories")

    return {
        props: { portfolio: portfoliosRes.data[0], categories: categoriesRes },
        revalidate: 1,
    }
}

export default Blog
