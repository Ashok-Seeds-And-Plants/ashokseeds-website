import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import Blog from "./blog/[slug]";

const Blogs = ({ posts }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Green News | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">


                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Blog</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home</a></li>
                                    <li>Green News and Updates</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="blog-details-wrap ptb-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                {posts.map((post, i) => {

                                    //console.log(post);
                                    const title = delve(post, "attributes.title");
                                    const slug = delve(post, "attributes.slug");
                                    const cover = delve(post, "attributes.cover.data.attributes.formats.medium.url");
                                    const date = parseISO(delve(post, "attributes.publishedAt"));
                                    const username = delve(post, "attributes.user.data.attributes.displayName");
                                    // console.log(date);
                                    return (
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <div className="blog-author-img">
                                                    <img src="/img/user.png" alt={`${username}`}/>
                                                </div>
                                                <div className="blog-author-info">
                                                    <span>Posted By</span>
                                                    <h6><a href="#">{username}</a></h6>
                                                </div>
                                            </div>
                                            <img className="blog-cover-img" src={`${cover}`} alt={`${title}`}/>
                                            <h3><a href={`/blog/${slug}/`}>{title}</a></h3>
                                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                            <ul className="blog-metainfo list-style">
                                                <li><a href={`/blog/${slug}/`}><i
                                                    className="ri-calendar-todo-line"></i>{format(date, 'd LLL yyyy')}</a></li>
                                            </ul>
                                        </div>
                                        <a href={`/blog/${slug}/`} className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
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
                    </div>

                </div>


                <Footer />
            </div>
            <Js />
        </>
    )
}

export async function getStaticProps() {
    // Run API calls in parallel
    const [postsRes] = await Promise.all([
        fetchAPI("/posts", { populate: "*" })
    ])

    return {
        props: {
            posts: postsRes.data
        },
        revalidate: 1,
    }
}

export default Blogs