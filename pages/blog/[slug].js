import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../../lib/api"


const Blog = ({ post }) => {
    console.log(post);
    return (
        <>
            <Meta />
            <Head>
                <title>Ashok Seeds and Plants</title>
                <meta name="description" content="" />
            </Head>
            <div className="page-wrapper">
                <Header />



                <Footer />
            </div>
            <Js />
        </>
    )
}

export async function getStaticPaths() {
    const articlesRes = await fetchAPI("/posts", { fields: ["slug"] })

    return {
        paths: articlesRes.data.map((article) => ({
            params: {
                slug: article.attributes.slug,
            },
        })),
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const articlesRes = await fetchAPI("/posts", {
        filters: {
            slug: params.slug,
        },
        populate: "*",
    })
    const categoriesRes = await fetchAPI("/categories")

    return {
        props: { article: articlesRes.data[0], categories: categoriesRes },
        revalidate: 1,
    }
}

export default Blog