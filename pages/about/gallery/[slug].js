import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import ReactMarkdown from "react-markdown";
import { fetchAPI } from "../../../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import React from "react";

const PerPage = 5;
const Blog = ({ galleries, categories, PaginationData }) => {

    console.log(galleries);
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

                    <section className="project-details-wrap ptb-100">
                        <div className="container">

                            <ul className="page-nav list-style">




                                <li><a href="/about/gallery/2/"><i className="flaticon-right-arrow"></i></a></li>
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

export async function getStaticPaths() {

    //const PerPage = 4;

    const Gallery = await fetchAPI("/galleries");

    const TotalPage = Gallery.meta.pagination.total;



    let pages = 0;

    if (TotalPage <= PerPage)
    {
        pages = 0;

    }else if(TotalPage % PerPage === 0){

        pages = TotalPage/PerPage;

    }else{
        pages = TotalPage/PerPage + 1;

    }

    var Pages = [];

    for (let i = 1; i < pages; i++) {
        Pages.push({id:i});

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

    const StartFrom = PerPage*params.slug+1;

    const galleriesRes = await fetchAPI("/galleries", {
        pagination: {
            start: StartFrom,
            limit: PerPage,
            withCount: true
        },
        sort: ['id:desc'],
        populate: "*",
    })


    const TotalPage = galleriesRes.meta.pagination.total;



    let pages = 0;

    if (TotalPage <= PerPage)
    {
        pages = 0;

    }else if(TotalPage % PerPage === 0){

        pages = TotalPage/PerPage;

    }else{
        pages = TotalPage/PerPage + 1;

    }

        let content = '';
        for (let i = 1; i <= pages; i++) {
            if(i === 1)
            {
                content = content+'<li><a className="active" href="/about/gallery/">1</a></li>';
            }else{
                content = content+'<li><a href={`/about/gallery/${i}/`}>{i}</a></li>';
            }
        }


    const categoriesRes = await fetchAPI("/galleries")

    return {
        props: { galleries: galleriesRes, categories: categoriesRes, PaginationData: content },
        revalidate: 1,
    }
}

export default Blog
