import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Sidebar from '@components/Sidebar'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
            <title>Wave Earth Infratech</title>
            <meta name="description" content="" />

            </Head>

            <Header />

            <div className="rts-bread-crumb-area ptb--150 ptb_sm--100 bg-breadcrumb bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="breadcrumb-inner text-center">
                                <h1 className="title">Our Projects</h1>
                                <div className="meta">
                                    <a href="https://www.waveearthinfratech.com/" className="prev">Home /</a>
                                    <a href="#" className="next">Our Projects</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-projects-area rts-section-gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="projects-wrapper-inner-page">
                                <ul className="nav nav-tabs mb--20" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab"
                                                data-bs-target="#home" type="button" role="tab" aria-controls="home"
                                                aria-selected="true">All
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab"
                                                data-bs-target="#profile" type="button" role="tab"
                                                aria-controls="profile" aria-selected="false">Architecture
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab"
                                                data-bs-target="#contact" type="button" role="tab"
                                                aria-controls="contact" aria-selected="false">Constrution
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contacts-tab" data-bs-toggle="tab"
                                                data-bs-target="#contacts" type="button" role="tab"
                                                aria-controls="contacts" aria-selected="false">Building
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contactes-tab" data-bs-toggle="tab"
                                                data-bs-target="#contactes" type="button" role="tab"
                                                aria-controls="contactes" aria-selected="false">Interior
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contactese-tab" data-bs-toggle="tab"
                                                data-bs-target="#contactese" type="button" role="tab"
                                                aria-controls="contactese" aria-selected="false">Renovation
                                        </button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home" role="tabpanel"
                                         aria-labelledby="home-tab">

                                        <div className="row g-24 mb--25">
                                            <div className="col-lg-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/18.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Oil Mill Construction</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="#">
                                                        <img className="main-2" src="/images/project/17.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="#">
                                                            <h5 className="title">Railcar Factory</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/19.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Station Home</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="row g-24 mb--25">

                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/20.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Park Offices</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/21.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Maly Buildings</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/22.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">One Thousand Museum</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row g-24">
                                            <div className="col-lg-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/23.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Oil Mill Construction</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/24.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Luxury Buildings</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/25.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Maly Buildings</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="profile" role="tabpanel"
                                         aria-labelledby="profile-tab">

                                        <div className="row g-24 mb--25 justify-content-center">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/21.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Maly Buildings</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/17.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Railcar Factory</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/18.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Oil Mill Construction</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="contact" role="tabpanel"
                                         aria-labelledby="contact-tab">

                                        <div className="row g-24 mb--25 justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/18.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Oil Mill Construction</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/19.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Station Home</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/25.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Maly Buildings</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="contacts" role="tabpanel"
                                         aria-labelledby="contacts-tab">

                                        <div className="row g-24 mb--25 justify-content-center">
                                            <div className="col-lg-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/18.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Oil Mill Construction</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/17.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Railcar Factory</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/19.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Station Home</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="contactes" role="tabpanel"
                                         aria-labelledby="contactes-tab">

                                        <div className="row g-24 mb--25 justify-content-center">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/20.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Park Offices</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3 col-md-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/24.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Luxury Buildings</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/22.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">One Thousand Museum</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="contactese" role="tabpanel"
                                         aria-labelledby="contactese-tab">

                                        <div className="row g-24 mb--25 justify-content-center">
                                            <div className="col-lg-3">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/20.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Park Offices</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/21.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">Maly Buildings</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="single-case-wrapper">
                                                    <a href="project-details.html">
                                                        <img className="main-2" src="/images/project/22.jpg"
                                                             alt="projects-images"/>
                                                    </a>
                                                    <div className="content">
                                                        <a href="project-details.html">
                                                            <h5 className="title">One Thousand Museum</h5>
                                                        </a>
                                                        <span>Building, Renovation</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <Footer />

            <Js />
        </>
    )
}