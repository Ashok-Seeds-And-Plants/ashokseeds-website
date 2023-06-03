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
            <title>Ashok Seeds and Plants</title>
            <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
            <Header />

                <section class="project-wrap ptb-100 bg-sand">
                    <div class="container">
                        <div class="section-title style3 text-center mb-40">
                            <span>Donate Now <span class="bl-text">Donation</span></span>
                            <h2>Our Latest Causes</h2>
                        </div>
                        <div class="project-slider-one owl-carousel">
                            <div class="project-card style3" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                <div class="project-img">
                                    <img src="/img/project/project-4.jpg" alt="Image"/>
                                        <button class="like-btn" type="button"><i class="ri-heart-fill"></i></button>
                                </div>
                                <div class="project-info">
                                    <h3><a href="project-details.html">Stop Cutting Down Trees</a></h3>
                                    <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                    <div class="progressbar-wrap ">
                                        <div class="progress-bar" data-percentage="32%">
                                            <h4 class="progress-title-holder">
                                            <span class="progress-number-wrapper">
                                                <span class="progress-number-mark">
                                                    <span class="percent"></span>
                                                </span>
                                            </span>
                                            </h4>
                                            <div class="progress-content-outter">
                                                <div class="progress-content">
                                                    <div class="amet"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="fund-collection list-style">
                                        <li class="fund-raised">
                                            $4800 Raised Of $15000
                                        </li>
                                        <li class="fund-goal">
                                            32.00%
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="project-card style3" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                                <div class="project-img">
                                    <img src="/img/project/project-1.jpg" alt="Image"/>
                                        <button class="like-btn" type="button"><i class="ri-heart-fill"></i></button>
                                </div>
                                <div class="project-info">
                                    <h3><a href="project-details.html">Stop Cutting Down Trees</a></h3>
                                    <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                    <div class="progressbar-wrap ">
                                        <div class="progress-bar" data-percentage="50%">
                                            <h4 class="progress-title-holder">
                                            <span class="progress-number-wrapper">
                                                <span class="progress-number-mark">
                                                    <span class="percent"></span>
                                                </span>
                                            </span>
                                            </h4>
                                            <div class="progress-content-outter">
                                                <div class="progress-content">
                                                    <div class="amet"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="fund-collection list-style">
                                        <li class="fund-raised">
                                            $5000 Raised Of $10000
                                        </li>
                                        <li class="fund-goal">
                                            50.00%
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="project-card style3" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
                                <div class="project-img">
                                    <img src="/img/project/project-2.jpg" alt="Image"/>
                                        <button class="like-btn" type="button"><i class="ri-heart-fill"></i></button>
                                </div>
                                <div class="project-info">
                                    <h3><a href="project-details.html">Recycling Daily Waste</a></h3>
                                    <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                    <div class="progressbar-wrap ">
                                        <div class="progress-bar" data-percentage="52%">
                                            <h4 class="progress-title-holder">
                                            <span class="progress-number-wrapper">
                                                <span class="progress-number-mark">
                                                    <span class="percent"></span>
                                                </span>
                                            </span>
                                            </h4>
                                            <div class="progress-content-outter">
                                                <div class="progress-content">
                                                    <div class="amet"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="fund-collection list-style">
                                        <li class="fund-raised">
                                            $6200 Raised Of $12000
                                        </li>
                                        <li class="fund-goal">
                                            52.00%
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="project-card style3" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400">
                                <div class="project-img">
                                    <img src="/img/project/project-3.jpg" alt="Image"/>
                                        <button class="like-btn" type="button"><i class="ri-heart-fill"></i></button>
                                </div>
                                <div class="project-info">
                                    <h3><a href="project-details.html">Reduce Greenhouse Gas</a></h3>
                                    <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                    <div class="progressbar-wrap ">
                                        <div class="progress-bar" data-percentage="45%">
                                            <h4 class="progress-title-holder">
                                            <span class="progress-number-wrapper">
                                                <span class="progress-number-mark">
                                                    <span class="percent"></span>
                                                </span>
                                            </span>
                                            </h4>
                                            <div class="progress-content-outter">
                                                <div class="progress-content">
                                                    <div class="amet"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="fund-collection list-style">
                                        <li class="fund-raised">
                                            $3500 Raised Of $7000
                                        </li>
                                        <li class="fund-goal">
                                            45.00%
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="project-card style3" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="500">
                                <div class="project-img">
                                    <img src="/img/project/project-6.jpg" alt="Image"/>
                                        <button class="like-btn" type="button"><i class="ri-heart-fill"></i></button>
                                </div>
                                <div class="project-info">
                                    <h3><a href="project-details.html">Save The Wildlife</a></h3>
                                    <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                    <div class="progressbar-wrap ">
                                        <div class="progress-bar" data-percentage="82%">
                                            <h4 class="progress-title-holder">
                                            <span class="progress-number-wrapper">
                                                <span class="progress-number-mark">
                                                    <span class="percent"></span>
                                                </span>
                                            </span>
                                            </h4>
                                            <div class="progress-content-outter">
                                                <div class="progress-content">
                                                    <div class="amet"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="fund-collection list-style">
                                        <li class="fund-raised">
                                            $3900 Raised Of $5000
                                        </li>
                                        <li class="fund-goal">
                                            82.00%
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="project-card style3" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="600">
                                <div class="project-img">
                                    <img src="/img/project/project-5.jpg" alt="Image"/>
                                        <button class="like-btn" type="button"><i class="ri-heart-fill"></i></button>
                                </div>
                                <div class="project-info">
                                    <h3><a href="project-details.html">Reduce Air Pollution</a></h3>
                                    <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                    <div class="progressbar-wrap ">
                                        <div class="progress-bar" data-percentage="32%">
                                            <h4 class="progress-title-holder">
                                            <span class="progress-number-wrapper">
                                                <span class="progress-number-mark">
                                                    <span class="percent"></span>
                                                </span>
                                            </span>
                                            </h4>
                                            <div class="progress-content-outter">
                                                <div class="progress-content">
                                                    <div class="amet"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <ul class="fund-collection list-style">
                                        <li class="fund-raised">
                                            $7000 Raised Of $19000
                                        </li>
                                        <li class="fund-goal">
                                            32.00%
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <div className="container">
                    <div className="promo-wrap style2" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                        <img src="/img/shape-8.png" alt="Image" className="promo-shape-one"/>
                            <img src="/img/shape-9.png" alt="Image" className="promo-shape-two"/>
                                <div className="promo-card">
                        <span className="promo-icon">
                            <i className="flaticon-volunteer"></i>
                        </span>
                                    <h3>Become A Volunteer</h3>
                                    <a href="register.html" className="link style1">Join With Us <i
                                        className="flaticon-right-arrow"></i></a>
                                </div>
                                <div className="promo-card">
                        <span className="promo-icon">
                            <i className="flaticon-money-box"></i>
                        </span>
                                    <h3>Quick Fundraise</h3>
                                    <a href="donation.html" className="link style1">Help The People<i
                                        className="flaticon-right-arrow"></i></a>
                                </div>
                                <div className="promo-card">
                        <span className="promo-icon">
                            <i className="flaticon-coin"></i>
                        </span>
                                    <h3>Make A Donation</h3>
                                    <a href="donation.html" className="link style1">Donate Us <i
                                        className="flaticon-right-arrow"></i></a>
                                </div>
                    </div>
                </div>
                <section className="about-wrap style2 ptb-100">
                    <img src="/img/about/about-shape-1.png" alt="Image"
                         className="about-shape-one moveHorizontal" />
                        <div className="container">
                            <div className="row align-items-center gx-5">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-duration="1200"
                                     data-aos-delay="200">
                                    <div className="about-img-wrap">
                                        <img src="/img/about/about-img-2.png" alt="Image" className="bounce"/>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-left" data-aos-duration="1200"
                                     data-aos-delay="200">
                                    <div className="about-content">
                                        <div className="content-title style3">
                                            <span>A Little Introduction <span className="bl-text">About Us</span></span>
                                            <h2>Protect Our Earth Against Climate Change</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu a duis. Sollicitudin consectetur netus du
                                                ultric. </p>
                                        </div>
                                        <ul className="content-feature-list list-style">
                                            <li><i className="ri-checkbox-circle-line"></i>Curabitur vitae ullamcorper
                                                libe roras id augue
                                            </li>
                                            <li><i className="ri-checkbox-circle-line"></i>Felis cras luctus nisi in
                                                tincidunt blandit
                                            </li>
                                            <li><i className="ri-checkbox-circle-line"></i>Sapien mi vestibulum est
                                                commodo lobortis metus
                                            </li>
                                            <li><i className="ri-checkbox-circle-line"></i>Mauris vitae purus blandit
                                                fermentum
                                            </li>
                                        </ul>
                                        <a href="about.html" className="btn style2">Find Out More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                </section>


                <Footer />
            </div>
            <Js />
        </>
    )
}