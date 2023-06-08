import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../../lib/api"

const Article = ({ article, categories }) => {


    return (
        <h3>New blog</h3>
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
    const categoriesRes = await fetchAPI("/post-categories")

    return {
        props: { article: articlesRes.data[0], categories: categoriesRes },
        revalidate: 1,
    }
}

export default Article
