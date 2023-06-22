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
import Link from "next/link";

const PerPage = 4;
const Gallery = ({ galleries, categories, CurrentPage }) => {

    const ServerTotalPage = galleries.meta.pagination.total;

    let pages = 0;

    if (ServerTotalPage <= PerPage)
    {
        pages = 1;

    }else if(ServerTotalPage % PerPage === 0){

        pages = ServerTotalPage/PerPage;

    }else{
        pages = (ServerTotalPage/PerPage) + 1;

    }

    pages = Math.trunc(pages); // Removing decimal points

    const PaginationData = index => {
        let content = [];
        for (let i = 1; i <= pages; i++) {

            if(CurrentPage === i)
            {
                content.push(<li><Link href={`/about/gallery/${i}/`}><a className="active">{i}</a></Link></li>);
            }else{
                content.push(<li><Link href={`/about/gallery/${i}/`}><a>{i}</a></Link></li>);
            }

        }
        return content;
    };

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
                            <div className="row justify-content-center">
                                {galleries.data.map((gallery, i) => {
                                    const title = delve(gallery, "attributes.title");
                                    const Id = delve(gallery, "id");
                                    const image = delve(gallery, "attributes.image.data.attributes.formats.medium.url");
                                    return (
                                        <div className="col-xl-4 col-lg-6 col-md-6">
                                            <div className="project-card style1">
                                                <div className="project-img">
                                                    <a className="post-img" data-fancybox="gallery"
                                                       href={`${image}`}>
                                                        <img src={`${image}`} alt={`${title}`}/>
                                                    </a>
                                                </div>
                                                <div className="project-info">
                                                    <img src="/img/shape-1.png" alt="Image" className="project-shape"/>
                                                    <h3>{Id}</h3>
                                                    <ul>
                                                        <li>Category</li>
                                                        <li>Category 1</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                            <ul className="page-nav list-style">

                                {PaginationData()}


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

    const ServerGallery = await fetchAPI("/galleries");

    const ServerTotalPage = ServerGallery.meta.pagination.total;

    let pages = 0;

    if (ServerTotalPage <= PerPage)
    {
        pages = 1;

    }else if(ServerTotalPage % PerPage === 0){

        pages = ServerTotalPage/PerPage;

    }else{
        pages = (ServerTotalPage/PerPage) + 1;

    }

    pages = Math.trunc(pages); // Removing decimal points

    var Pages = [];

    for (let i = 0; i < pages; i++) {

        Pages.push({id:i+1});

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

    let StartPage = (slug-1)*PerPage;


    const galleriesRes = await fetchAPI("/galleries", {
        pagination: {
            start: StartPage,
            limit: PerPage,
            withCount: true
        },
        sort: ['id:desc'],
        populate: "*",
    })
    const categoriesRes = await fetchAPI("/post-categories")

    return {
        props: { galleries: galleriesRes, categories: categoriesRes, CurrentPage: slug },
        revalidate: 1,
    }
}

export default Gallery