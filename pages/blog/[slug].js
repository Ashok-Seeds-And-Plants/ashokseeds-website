import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'

const Blog = ({ post, categories }) => {
    const title = delve(post, "attributes.title");

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
                                    <li><a href="https://www.ashokseedplant.com/">Home</a></li>
                                    <li><a href="https://www.ashokseedplant.com/blog/">Blog</a></li>
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
                                           href="assets/img/blog/single-blog-1.jpg">
                                            <img src="assets/img/blog/single-blog-1.jpg" alt="Image"/>
                                        </a>
                                        <h1>Massive Changes In Landscape &amp; Wildlife</h1>
                                        <ul className="post-metainfo  list-style">
                                            <li><i className="ri-calendar-todo-line"></i>Jul 25, 2022</li>
                                        </ul>
                                        <div className="post-para">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                                                tempor incididunt labore et dolore sitor magna aliqua. Quis ipsum
                                                suspendisse ultrices <strong>gravida</strong>. Risus commodo viverra
                                                manas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.</p>
                                            <p>No sea takimata sanctus est Lorem <a href="index.html">Ipsum</a> dolor
                                                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                                                diam nonumy eirmod tempor invidunt ut labore consect etur adicing elit.
                                            </p>
                                            <blockquote className="wp-block-quote">
                                                <p>“We denounce with righteous indignation and dislike men who are so
                                                    beguidemralized by the charms of pleasure of the moment, so blinded
                                                    by desire, that they cannot”</p>
                                            </blockquote>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
                                                tempor incididunt labore et dolore sitor magna aliqua. Quis ipsum
                                                suspendisse ultrices gravida. Risus commodo viverra manas accumsan lacus
                                                vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit.</p>
                                            <h3>Effect Of Defroestation On Our Environment</h3>
                                            <ol>
                                                <li>Lacus sed viverra tellus in hac habitasse platea dictumst.</li>
                                                <li>Gravida neque convallis a <strong>cras</strong> semper auctor neque
                                                    vitae.
                                                </li>
                                                <li>Lacus sed turpis tincidunt id aliquet risus feugiat in.</li>
                                                <li>Risus commodo viverra manas accumsan lacus vel facilisis</li>
                                            </ol>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <a className="post-img" data-fancybox="gallery"
                                                       href="assets/img/blog/single-blog-2.jpg">
                                                        <img src="assets/img/blog/single-blog-2.jpg" alt="Image"/>
                                                    </a>
                                                </div>
                                                <div className="col-md-6">
                                                    <a className="post-img" data-fancybox="gallery"
                                                       href="assets/img/blog/single-blog-3.jpg">
                                                        <img src="assets/img/blog/single-blog-3.jpg" alt="Image"/>
                                                    </a>
                                                </div>
                                            </div>
                                            <h3>What Health Issues Arise For Climate Change</h3>
                                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                eirmod tempor invidunt ut labore dolore magna aliquyam erat, sed diam
                                                voluptua at vero amet dolor sit consect.Consectetur adipisicing elit.
                                                Laboriosam in culpa dolorem. Eos sint aut suscipit.</p>
                                            <ul className="content-feature-list style1 list-style mt-15">
                                                <li><i className="ri-checkbox-circle-line"></i>
                                                    Lorem ipsum dolor, sit amet.
                                                </li>
                                                <li><i className="ri-checkbox-circle-line"></i>
                                                    Amet consectetur adipisicing elit Officia.
                                                </li>
                                                <li><i className="ri-checkbox-circle-line"></i>
                                                    Aquaerat ipsa quis possimus.
                                                </li>
                                                <li><i className="ri-checkbox-circle-line"></i>
                                                    Lorem aquaerat ipsa quis possimus.
                                                </li>
                                                <li><i className="ri-checkbox-circle-line"></i>
                                                    Consectetur Amet adipisicing elit Officia.
                                                </li>
                                            </ul>
                                            <p>Lorem ipsum dolor sit amet,
                                                consectetur <strong>adipisicing</strong> elit, sed do eiusmod tempor
                                                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                                consequat. Duis aute irure dolor in reprehenderit in <a
                                                    href="index.html">sed</a> uia non numquam eius modi tempora incidunt
                                                ut labore dolor.</p>
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
                                                    <span>Tags:</span>
                                                    <ul className="tag-list list-style">
                                                        <li><a href="posts-by-tag.html">Pollution</a></li>
                                                        <li><a href="posts-by-tag.html">Climate</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-author">
                                        <div className="post-author-img">
                                            <img src="/img/blog/author-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="post-author-info">
                                            <h4>Posted by<a href="posts-by-author.html"> David Warner</a></h4>
                                            <p>Claritas est etiam amet sinicus, qui sequitur lorem ipsum semet coui
                                                lectorum. Lorem ipsum dolor voluptatem corporis blanditiis sadipscing
                                                elitr sed diam nonumy eirmod amet sit lorem.</p>
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
