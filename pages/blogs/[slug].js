import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import BlogSidebar from '@components/BlogSidebar'

import parse from 'html-react-parser';

import { fetchAPI } from "../../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import React from "react";
import Link from "next/link";

const PerPage = 6;
const Posts = ({ posts, recentpost, categories, CurrentPage }) => {

    const ServerTotalPage = posts.meta.pagination.total;

    let pages = 0;

    if (ServerTotalPage <= PerPage) {
        pages = 1;

    } else if (ServerTotalPage % PerPage === 0) {

        pages = ServerTotalPage / PerPage;

    } else {
        pages = (ServerTotalPage / PerPage) + 1;

    }

    pages = Math.trunc(pages); // Removing decimal points

    const PaginationData = index => {
        let content = [];

        if (pages > 1) {

            if (CurrentPage !== 1) {
                content.push(<li><Link href={`/blogs/${CurrentPage - 1}/`}><a><i className="flaticon-left-arrow"></i></a></Link></li>)
            }

            for (let i = 1; i <= pages; i++) {

                if (CurrentPage === i) {
                    content.push(<li><Link href={`/blogs/${i}/`}><a className="active">{i}</a></Link></li>);
                } else {
                    content.push(<li><Link href={`/blogs/${i}/`}><a>{i}</a></Link></li>);
                }

            }
            if (CurrentPage < pages) {
                content.push(<li><Link href={`/blogs/${CurrentPage + 1}/`}><a><i className="flaticon-right-arrow"></i></a></Link></li>)
            }
        } else {
            // Do nothing
        }

        return content;
    };

    return (
        <>
            <Meta />
            <Head>
                <title>Blogs Page - {CurrentPage} | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Blogs Page - {CurrentPage}</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home</a></li>
                                    <li>Blogs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="blog-details-wrap ptb-100">
                        <div class="container">
                            <div class="row gx-5">
                                <div class="col-xl-8 col-lg-12">
                                    <div class="row justify-content-center">
                                        {posts.data.map((post, i) => {

                                            //console.log(post);
                                            const title = delve(post, "attributes.title");
                                            const slug = delve(post, "attributes.slug");
                                            const cover = delve(post, "attributes.cover.data.attributes.formats.medium.url");
                                            const excerpt = delve(post, "attributes.excerpt");
                                            const date = parseISO(delve(post, "attributes.publishedAt"));
                                            const username = delve(post, "attributes.user.data.attributes.displayName");
                                            // console.log(date);
                                            return (
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="blog-card style1">
                                                        <div class="blog-info">
                                                            <div class="blog-author">
                                                                <div class="blog-author-img">
                                                                    <img src="/img/user.png" alt={`${username}`} />
                                                                </div>
                                                                <div class="blog-author-info">
                                                                    <span>Posted By</span>
                                                                    <h6><a href="#">{username}</a></h6>
                                                                </div>
                                                            </div>
                                                            <img className="blog-cover-img" src={`${cover}`} alt={`${title}`} />
                                                            <h3><Link href={`/blog/${slug}/`}>{title}</Link></h3>
                                                            {parse(excerpt)}
                                                            <ul class="blog-metainfo list-style">
                                                                <li><Link href={`/blog/${slug}/`}>
                                                                    <a><i className="ri-calendar-todo-line"></i>{format(date, 'd LLL yyyy')}</a>
                                                                </Link></li>
                                                            </ul>
                                                        </div>
                                                        <Link href={`/blog/${slug}/`}>
                                                            <a className="link style1">Read More <i
                                                                className="flaticon-right-arrow"></i></a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })}

                                    </div>
                                    <ul class="page-nav list-style">
                                        {PaginationData()}
                                    </ul>
                                </div>
                                <BlogSidebar />
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

    const ServerPosts = await fetchAPI("/posts");

    const ServerTotalPage = ServerPosts.meta.pagination.total;

    let pages = 0;

    if (ServerTotalPage <= PerPage) {
        pages = 1;

    } else if (ServerTotalPage % PerPage === 0) {

        pages = ServerTotalPage / PerPage;

    } else {
        pages = (ServerTotalPage / PerPage) + 1;

    }

    pages = Math.trunc(pages); // Removing decimal points

    const Pages = [];

    for (let i = 0; i < pages; i++) {

        Pages.push({ id: i + 1 });

    }

    return {
        paths: Pages.map((page) => ({
            params: {
                slug: page.id.toString(),
            },
        })),
        fallback: false,
    }

}

export async function getStaticProps({ params }) {

    const slug = parseInt(params.slug);

    let StartPage = (slug - 1) * PerPage;


    const postsRes = await fetchAPI("/posts", {
        pagination: {
            start: StartPage,
            limit: PerPage,
            withCount: true
        },
        sort: ['id:desc'],
        populate: "*",
    })
    const RecentPostsRes = await fetchAPI("/posts", {
        pagination: {
            limit: 4
        },
        sort: ['id:desc'],
        populate: "*",
    })
    const categoriesRes = await fetchAPI("/post-categories", {
        sort: ['id:asc'],
        populate: "*",
    })

    return {
        props: { posts: postsRes, recentpost: RecentPostsRes, categories: categoriesRes, CurrentPage: slug },
        revalidate: 1,
    }
}

export default Posts