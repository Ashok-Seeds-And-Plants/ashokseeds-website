import Head from 'next/head'

import Meta from '@components/Meta'
import Header from '@components/Header'

import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
                <title>Projects | Ashok Seeds and Plants</title>
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
                    <section className="project-details-wrap ptb-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="project-card style1">
                                        <div className="project-img">
                                            <img src="assets/img/project/project-1.jpg" alt="Image"/>
                                        </div>
                                        <div className="project-info">
                                            <img src="assets/img/shape-1.png" alt="Image" className="project-shape"/>
                                                <h3><a href="project-details.html">Stop Cutting Down Trees</a></h3>
                                                <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                    netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                                <a href="project-details.html" className="link style1">Read More <i
                                                    className="flaticon-right-arrow"></i></a>
                                        </div>
                                    </div>
                                </div>
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