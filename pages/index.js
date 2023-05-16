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

                <section className="hero-wrap style2">
                    <div className="hero-slider-one owl-carousel" data-slider-id="1">
                        <div className="hero-slide-item hero-slide-one bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  col-md-9">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>We'll Save Our Planet</span>
                                            <h1>Lets Make Our Earth Green and Clean</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollic itudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu.</p>
                                            <a href="register.html" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide-item hero-slide-two bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6 col-md-9">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>Save Our Soil</span>
                                            <h1>Stop Using Plastic And Make Our land More Fertile</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu a duis. </p>
                                            <a href="register.html" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero-slide-item hero-slide-three bg-f">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6  col-md-10">
                                        <div className="hero-content" data-speed="0.10" data-revert="true">
                                            <span>We'll Save Our Planet</span>
                                            <h1>Lets Start Using Green Energy For A Better Planet</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
                                                consectetur netus dui, ultrices or lectus ac egestas. Vivamus tellus
                                                vestibulum aliquet arcu a duis. </p>
                                            <a href="register.html" className="btn style2">Join With us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero-slider-thumbs owl-thumbs" data-slider-id="1">
                        <button className="owl-thumb-item">
                            <img src="/img/hero/hero-thumb-1.jpg" alt="Images"/>
                        </button>
                        <button className="owl-thumb-item">
                            <img src="/img/hero/hero-thumb-2.jpg" alt="Images"/>
                        </button>
                        <button className="owl-thumb-item">
                            <img src="/img/hero/hero-thumb-3.jpg" alt="Images"/>
                        </button>
                    </div>
                </section>


                <Footer />
            </div>
            <Js />
        </>
    )
}