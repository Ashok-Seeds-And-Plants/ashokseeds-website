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
                <meta name="description" content="Our Mission is to fight against climate change and our vision is having a would full of value and respect for the environment." />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="error-wrap ptb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                <h2>Our Vision</h2>
                                    <p>we believe that trees are the lifeline of our planet. They provide us with oxygen, food, shelter, medicine, and beauty. They also help combat climate change, conserve water, prevent soil erosion, and support biodiversity.</p>
                                    <p>We are passionate about creating natural, wild, and self-sustaining forests using the Miyawaki method, which is a proven technique to grow dense and diverse forests in a short span of time. We aim to plant millions of trees across India and restore the green cover of our country.</p>
                                    <p>We are not just a website, but a community of forest lovers who want to make a positive difference in the world. We invite you to join us in our mission to create city lungs with Miyawaki forests and make India a greener and healthier place to live.</p>
                                </div>
                                <div className="col-md-12">
                                <h2>Our Mission</h2>
                                    <p>our mission is to create natural, wild, and self-sustaining forests using the Miyawaki method, which is a proven technique to grow dense and diverse forests in a short span of time. We want to plant millions of trees across India and restore the green cover of our country. We want to combat climate change, conserve water, prevent soil erosion, and support biodiversity. We want to make India a greener and healthier place to live.</p>
                                    <p>We are not just a website, but a community of forest lovers who want to make a positive difference in the world. We invite you to join us in our mission to create city lungs with Miyawaki forests and make India a greener and healthier place to live.</p>
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