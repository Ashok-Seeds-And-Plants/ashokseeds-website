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
    const username = delve(portfolio, "attributes.user.data.attributes.displayName");
    const about = delve(portfolio, "attributes.user.data.attributes.about");

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
                                        <a className="single-project-img mt-0" data-fancybox="gallery"
                                           href="assets/img/project/single-project-1.jpg">
                                            <img src="assets/img/project/single-project-1.jpg" alt="Image"/>
                                        </a>
                                        <h1>Protect Global Warming By Tree Plantation</h1>
                                        <div className="progressbar-wrap ">
                                            <div className="progress-bar" data-percentage="70%">
                                                <h4 className="progress-title-holder">
                                                <span className="progress-number-wrapper">
                                                    <span className="progress-number-mark">
                                                        <span className="percent"></span>
                                                    </span>
                                                </span>
                                                </h4>
                                                <div className="progress-content-outter">
                                                    <div className="progress-content">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="fund-collection list-style">
                                            <li className="fund-raised">
                                                <span>$4800</span> Raised Of $19000
                                            </li>
                                        </ul>
                                        <p>Ultrices conubia vehicula malesuada. Eros commodo a duis accumsan vestibulum
                                            adipiscing hendrerit risus felis eros non justo semper semper rutrum ad
                                            risus felis eros. Cursus libero viverra tempus net diam vestibulum Semper
                                            est cursus viverra lectus nibh Eros commodo a duis accumsan vestibulum
                                            adipiscing hendrerit adipis Cursus libero viverra temp semper semper rutrum
                                            ad risus felis eros.</p>
                                        <p>Conubia vehicula malesuada. Eros commodo a duis accumsan vestibulum
                                            adipiscing hendrerit risus felis eros lob ortis viverra non justo semper
                                            semper rutrum ad risus felis eros. Cursus libero viverra tempus net diam
                                            vestibulum Semper est cursus viverra lectus nibh Eros commodo a duis
                                            accumsan.</p>
                                        <blockquote className="wp-block-quote">
                                            <p>Ultrices conubia vehicula malesuada. Eros commodo a duis accumsan
                                                vestibulum adipiscing hendrerit risus felis eros lobortis viverra non
                                                justo semper semper rutrum ad risus felis.</p>
                                        </blockquote>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the
                                            majority have suffered alteration in some form, by injected humour, or
                                            randomised words which don't look even slightly believable. If you are going
                                            to use a passage of Lorem Ipsum.</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <a className="single-project-img" data-fancybox="gallery"
                                                   href="/img/project/project-1.jpg">
                                                    <img src="/img/project/project-1.jpg" alt="Image"/>
                                                </a>
                                            </div>
                                            <div className="col-md-6">
                                                <a className="single-project-img" data-fancybox="gallery"
                                                   href="/img/project/project-2.jpg">
                                                    <img src="/img/project/project-2.jpg" alt="Image"/>
                                                </a>
                                            </div>
                                        </div>
                                        <h3>Our Goal &amp; Plan</h3>
                                        <p>Amet consectetur adipisicing elit. Mollitia excepturi eaque, corporis nulla
                                            maxime inventore magni repreh enderit lorem ipsum dolor sit consequatur
                                            deserunt, eligendi totam voluptas natus quaerat.</p>
                                        <ol>
                                            <li>Lorem ipsum dolor sit consectetur adipiscing elitdiam nonumy eirmod
                                                tempor.
                                            </li>
                                            <li>Advisory membership elitr, sed diam nonumy eirmod tempor.</li>
                                            <li>If you do not have enough time, you will always be able.</li>
                                            <li>Irmad temporarily involved labor and doll magna alicum erat.</li>
                                            <li>Labor and love magna aliquam irat valupatua.</li>
                                        </ol>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis
                                            ad, corrupti vel enim voluptatibus repudiandae illum. Fuga, pariatur
                                            possimus.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4">
                                    <div className="sidebar">
                                        <div className="sidebar-widget">
                                            <h4>Project Brief</h4>
                                            <div className="project-info-item-wrap">
                                                <div className="project-info-item">
                                                    <h6>Categroy:</h6>
                                                    <span>Climate Change Awarness</span>
                                                </div>
                                                <div className="project-info-item">
                                                    <h6>Date:</h6>
                                                    <span>28 Jul, 2022</span>
                                                </div>
                                                <div className="project-info-item">
                                                    <h6>Entrance:</h6>
                                                    <span>Unlimited</span>
                                                </div>
                                                <div className="project-info-item">
                                                    <h6>Type:</h6>
                                                    <span>Open</span>
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
