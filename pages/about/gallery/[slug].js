import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'


const Blog = ({ post, categories }) => {


    return (
        <>
            <Meta />
            <Head>
                <title>Gallery Page  | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Gallery</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home</a></li>
                                    <li><a href="https://www.ashokseedplant.com/blog/">Blog</a></li>
                                    <li>Gallery</li>
                                </ul>
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
    //const postsRes = await fetchAPI("/posts", { fields: ["slug"] })

    let pages = 6;

    let PagesArray = [];

    for (let i = 1; i <= pages; i++) {
        PagesArray.push(i);
    }

    return {
        paths: PagesArray.data.map((i) => ({
            params: {
                slug: i,
            },
        })
        ),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postsRes = await fetchAPI("/galleries", {
        pagination: {
            start: params.slug+1,
            limit: 4,
            withCount: true
        },
        sort: ['id:desc'],
        populate: "*",
    })
    const categoriesRes = await fetchAPI("/post-categories")

    return {
        props: { post: postsRes.data[0], categories: categoriesRes },
        revalidate: 1,
    }
}

export default Blog
