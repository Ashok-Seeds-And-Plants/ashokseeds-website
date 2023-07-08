import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

import { fetchAPI } from "../../lib/api"

import delve from 'dlv'

import React from "react";
import Link from "next/link";

const Team = ({ users }) => {
    //console.log(users);
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
                                <h2>Our Team</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="/">Home </a></li>
                                    <li>Our Team</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section class="team-wrap ptb-100 bg-sand">
                    <div class="container">
                        <div class="row justify-content-center">
                        {users.map((user, i) => {
                        const displayName = delve(user, "displayName");
                        const position = delve(user, "position");
                        const department = delve(user, "department");

                        const image = delve(user, "photo.url");
                        return (
                        <div class="col-xl-3 col-lg-4 col-md-6">
                        <div class="team-card style1">
                        <img src={image} alt={displayName}/>
                        <div class="team-info">
                        <img src="/img/team/team-shape-2.png" alt={displayName} class="team-shape"/>
                        <h3><a href="#">{displayName}</a></h3>
                        <span>{position}</span>
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
                        )})}
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

    const usersRes = await fetchAPI("/users", {
        sort: ['sort:asc'],
        filters: {
            team: true,
        },
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
},
    })

    return {
        props: { users: usersRes },
        revalidate: 1,
    }
}

export default Team