import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import Blogs from "../blog";
import ReactMarkdown from "react-markdown";

const Portfolios = ({ portfolios }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Projects | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Projects</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="/">Home </a></li>
                                    <li>Projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section className="project-details-wrap ptb-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                {portfolios.map((portfolio, i) => {

                                    //console.log(post);
                                    const title = delve(portfolio, "attributes.title");
                                    const slug = delve(portfolio, "attributes.slug");
                                    const cover = delve(portfolio, "attributes.cover.data.attributes.formats.medium.url");
                                    const date = parseISO(delve(portfolio, "attributes.publishedAt"));
                                    const excerpt = delve(portfolio, "attributes.excerpt");
                                    const categories = delve(portfolio, "attributes.portfolio_categories.data");
                                    // console.log(date);
                                    return (
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="project-card style1">
                                        <div className="project-img">
                                            <img src={`${cover}`} alt={`${title}`}/>
                                        </div>
                                        <div className="project-info">
                                            <img src="/img/shape-1.png" alt="Image" className="project-shape"/>

                                            <h3><a href={`/project/${slug}/`}>{title}</a></h3>

                                            <ul className="categories-list">
                                                {categories.map((category, i) => {
                                                    const cat_name = delve(category, "attributes.name");
                                                    if (cat_name !== "All")
                                                    {
                                                        return (
                                                            <li>{cat_name}</li>

                                                        )
                                                    }
                                                    })}

                                            </ul>

                                            <ReactMarkdown children={excerpt} />
                                            <a href={`/project/${slug}/`} className="link style1">Read More <i
                                                    className="flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })}
                            </div>
                            <ul className="page-nav list-style">
                                <li><a href="#"><i className="flaticon-left-arrow"></i></a></li>
                                <li><a className="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i className="flaticon-right-arrow"></i></a></li>
                            </ul>
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
    const [portfoliosRes] = await Promise.all([
        fetchAPI("/portfolios", {
            sort: ['id:desc'],
            populate: "*"
        })
    ])

    return {
        props: {
            portfolios: portfoliosRes.data
        },
        revalidate: 1,
    }
}

export default Portfolios