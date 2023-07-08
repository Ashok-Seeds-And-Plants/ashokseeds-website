import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../../lib/api"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import Blogs from "../blog";
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const Team = ({ team }) => {

    console.log(team);
    return (
        <>
            <Meta />
            <Head>
                <title>Our Team | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Projects</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="/">Home </a></li>
                                    <li>Projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section class="team-wrap ptb-100 bg-sand">
                    <div class="container">
                        <div class="row justify-content-center">

                            <div class="col-xl-3 col-lg-4 col-md-6">
                                <div class="team-card style1">
                                    <img src="/img/team/team-1.jpg" alt="Image"/>
                                    <div class="team-info">
                                        <img src="/img/team/team-shape-2.png" alt="IMage" class="team-shape"/>
                                        <h3><a href="#">Kevin Thompson</a></h3>
                                        <span>Founder &amp; CEO</span>
                                        <ul class="social-profile style1 list-style">
                                            <li>
                                                <a href="https://facebook.com">
                                                    <i class="ri-facebook-fill"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com">
                                                    <i class="ri-twitter-fill"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://instagram.com">
                                                    <i class="ri-instagram-line"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://linkedin.com">
                                                    <i class="ri-linkedin-fill"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
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
    const [teamRes] = await Promise.all([
        fetchAPI("/users", {
            sort: ['sort:asc'],
            populate: {
      displayName: true,
      position: true,
      department: true,
      about: true,
      facebook: true,
      twitter: true,
      instagram: true,
      linkedin: true,
      photo: true

    }
        })
    ])

    return {
        props: {
            team: teamRes.data
        },
        revalidate: 1,
    }
}

export default Team