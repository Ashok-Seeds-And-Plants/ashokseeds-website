import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'

import Footer from '@components/Footer'
import Js from '@components/Js'
import Link from "next/link";
import {fetchAPI} from "../../../lib/api";
import delve from "dlv";
import React from "react";
import {tr} from "date-fns/locale";

const Gallery = ({ galleries, portfolios }) => {
    galleries = galleries.data;
    const pagination = galleries.meta.pagination;

    console.log(galleries);
    console.log(pagination);

    return (
        <>
            <Meta />
            <Head>
                <title>Gallery | Ashok Seeds and Plants</title>
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
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>About</li>
                                    <li>Gallery</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="project-details-wrap ptb-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                    {galleries.map((gallery, i) => {
                                        const title = delve(gallery, "attributes.title");
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
                                                <h3>Stop Cutting Down Trees</h3>
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
                                <li><a href="#"><i className="flaticon-left-arrow"></i></a></li>
                                <li><a className="active" href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#"><i className="flaticon-right-arrow"></i></a></li>
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

export async function getStaticProps() {
    // Run API calls in parallel

    const [galleriesRes, portfoliosRes] = await Promise.all([
        fetchAPI("/galleries",
            {
                pagination: {
                    start: 0,
                    limit: 3,
                    withCount: true
                },
                sort: ['id:desc'],
                populate: "*" }),
        fetchAPI("/gallery-categories",
            {
                sort: ['id:desc'],
                populate: "*"
            }),

    ])

    return {
        props: {
            galleries: galleriesRes,
            portfolios: portfoliosRes.data,
        },
        revalidate: 1,
    }
}

export default Gallery