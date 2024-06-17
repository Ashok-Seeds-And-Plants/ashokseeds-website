import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'

import parse from 'html-react-parser';
import Link from "next/link";

const PerPage = 6;

const Portfolios = ({ portfolios }) => {

    const ServerTotalPage = portfolios.meta.pagination.total;

    let pages = 0;

    if (ServerTotalPage <= PerPage) {
        pages = 1;

    } else if (ServerTotalPage % PerPage === 0) {

        pages = ServerTotalPage / PerPage;

    } else {
        pages = (ServerTotalPage / PerPage) + 1;

    }

    pages = Math.trunc(pages); // Removing decimal pointsp

    const CurrentPage = 1;

    const PaginationData = index => {
        let content = [];

        if (pages > 1) {

            if (CurrentPage !== 1) {
                content.push(<li><Link href={`/projects/${CurrentPage - 1}/`}><a><i className="flaticon-left-arrow"></i></a></Link></li>)
            }

            for (let i = 1; i <= pages; i++) {

                if (CurrentPage === i) {
                    content.push(<li><Link href={`/projects/${i}/`}><a className="active">{i}</a></Link></li>);
                } else {
                    content.push(<li><Link href={`/projects/${i}/`}><a>{i}</a></Link></li>);
                }

            }
            if (CurrentPage < pages) {
                content.push(<li><Link href={`/projects/${CurrentPage + 1}/`}><a><i className="flaticon-right-arrow"></i></a></Link></li>)
            }
        } else {
            // Do nothing
        }

        return content;
    };

    //console.log(pages);

    return (
        <>
            <Meta />
            <Head>
                <title>Projects | Ashok Seeds and Plants</title>
                <meta name="description" content="Check out our on-going and delivered farming and tree plantation projects." />

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
                                {portfolios.data.map((portfolio, i) => {

                                    //console.log(post);
                                    const title = delve(portfolio, "attributes.title");
                                    const slug = delve(portfolio, "attributes.slug");
                                    const cover = delve(portfolio, "attributes.cover.data.attributes.formats.medium.url");
                                    const date = parseISO(delve(portfolio, "attributes.publishedAt"));
                                    const excerpt = delve(portfolio, "attributes.excerpt");
                                    const categories = delve(portfolio, "attributes.portfolio_categories.data");

                                    return (
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="project-card style1">
                                                <div className="project-img">
                                                    <img src={`${cover}`} alt={`${title}`} />
                                                </div>
                                                <div className="project-info">
                                                    <img src="/img/shape-1.png" alt="Image" className="project-shape" />

                                                    <h3><Link href={`/project/${slug}/`}>{title}</Link></h3>

                                                    <ul className="categories-list">
                                                        {categories.map((category, i) => {
                                                            const cat_name = delve(category, "attributes.name");
                                                            if (cat_name !== "All") {
                                                                return (
                                                                    <li>{cat_name}</li>

                                                                )
                                                            }
                                                        })}

                                                    </ul>

                                                    {parse(excerpt)}

                                                    <Link href={`/project/${slug}/`}>
                                                        <a className="link style1">Read More <i
                                                            className="flaticon-right-arrow"></i></a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <ul className="page-nav list-style">
                                {PaginationData()}
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
            populate: "*",
            pagination: {
                start: 0,
                limit: 6,
                withCount: true
            }
        })
    ])

    return {
        props: {
            portfolios: portfoliosRes
        },
        revalidate: 1,
    }
}

export default Portfolios