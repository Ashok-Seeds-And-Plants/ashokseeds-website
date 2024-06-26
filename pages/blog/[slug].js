import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import parse from 'html-react-parser';
import { fetchAPI } from "../../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'


const Blog = ({ post, categories }) => {
    const title = delve(post, "attributes.title");
    const content = delve(post, "attributes.content");
    const excerpt = delve(post, "attributes.excerpt");
    const cover = delve(post, "attributes.cover.data.attributes.url");


    const date = parseISO(delve(post, "attributes.publishedAt"));
    const username = delve(post, "attributes.user.data.attributes.displayName");
    const about = delve(post, "attributes.user.data.attributes.about");

    return (
        <>
            <Meta />
            <Head>
                <title>{title} | Ashok Seeds and Plants</title>
                <meta name="description" content={`${excerpt}`} />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>{title}</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home</a></li>
                                    <li><a href="https://www.ashokseedplant.com/blogs/">Blog</a></li>
                                    <li>{title}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="blog-details-wrap ptb-100">
                        <div className="container">
                            <div className="row gx-5">
                                <div className="col-xl-10 offset-xl-1 col-lg-12">
                                    <article>
                                        <a className="post-img" data-fancybox="gallery"
                                            href={`${cover}`}>
                                            <img src={`${cover}`} alt={`${title}`} />
                                        </a>
                                        <h1>{title}</h1>
                                        <ul className="post-metainfo  list-style">
                                            <li><i className="ri-calendar-todo-line"></i>{format(date, 'd LLL yyyy')}</li>
                                        </ul>
                                        <div className="post-para">

                                            {parse(content)}
                                        </div>
                                    </article>
                                    <div className="post-meta-option">
                                        <div className="row gx-0 align-items-center">
                                            <div className="col-md-5 col-12">
                                                <div className="post-share w-100">
                                                    <span>Share:</span>
                                                    <ul className="social-profile list-style style3">
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
                                            <div className="col-md-7 col-12 text-md-end">
                                                <div className="post-tag">
                                                    <span>Categories:</span>
                                                    <ul className="tag-list list-style">
                                                        <li><a href="#">Pollution</a></li>
                                                        <li><a href="#">Climate</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-author">
                                        <div className="post-author-img">
                                            <img src="/img/user.png" alt="Image" />
                                        </div>
                                        <div className="post-author-info">
                                            <h4>Posted by<a href="#"> {username}</a></h4>

                                            {about}
                                            <ul className="social-profile list-style style3">
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
                            </div>
                        </div>
                    </div>

                </div>


                <Footer />
            </div>
            <Js />
        </>
    )
}

export async function getStaticPaths() {
    const postsRes = await fetchAPI("/posts", { fields: ["slug"] })

    return {
        paths: postsRes.data.map((post) => ({
            params: {
                slug: post.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postsRes = await fetchAPI("/posts", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })
    const categoriesRes = await fetchAPI("/post-categories")

    return {
        props: { post: postsRes.data[0], categories: categoriesRes },
        revalidate: 1,
    }
}

export default Blog
