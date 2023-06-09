import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'
import Galleries from "@components/Galleries";
import {fetchAPI} from "../../lib/api";
import Portfolios from "@components/Portfolios";

const Mission = ({ galleries, portfolios }) => {
    return (
        <>
            <Meta />
            <Head>
                <title>Mission vision | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="error-wrap ptb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <h2>Our Vision</h2>
                                    <p>A world of value and respect for the environment.</p>
                                </div>
                                <div className="col-md-12">
                                <h2>Our Mission</h2>
                                    <p>Fight against climate change by carrying out projects in support of Mother Earth.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="team-wrap ptb-100 bg-sand">
                        <img src="/img/shape-11.png" alt="Image" className="team-shape-one"/>
                        <div className="container">
                            <div className="section-title style1 text-center mb-40">
                                <span>Fruits of<img src="/img/section-shape.png" alt="Image"/></span>
                                <h2>Our Efforts</h2>
                            </div>

                            <Galleries galleries={galleries} />

                        </div>
                    </section>

                    <section className="project-wrap ptb-100 bg-sand">
                        <div className="container">
                            <div className="section-title style3 text-center mb-40">
                                <span>Journey <span className="bl-text">So for</span></span>
                                <h2>Our Completed Projects</h2>
                            </div>

                            <Portfolios portfolios={portfolios} />

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
        fetchAPI("/galleries", {
            sort: ['id:desc'],
            pagination: {
                start: 0,
                limit: 10,
            },
            populate: "*" }),
        fetchAPI("/portfolios", {
            sort: ['id:desc'],
            pagination: {
                start: 0,
                limit: 10,
            },
            populate: "*" }),
    ])

    return {
        props: {
            galleries: galleriesRes.data,
            portfolios: portfoliosRes.data,
        },
        revalidate: 1,
    }
}

export default Mission