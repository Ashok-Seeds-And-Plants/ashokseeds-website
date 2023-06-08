import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../lib/api"


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

export async function getStaticProps() {
    // Run API calls in parallel
    const [postRes] = await Promise.all([
        fetchAPI("/posts", { populate: "*" })
    ])

    return {
        props: {
            posts: postRes.data,
        },
        revalidate: 1,
    }
}

export default Blog