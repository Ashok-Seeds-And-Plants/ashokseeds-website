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
                <title>Miyawaki Forest | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f miyawaki">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Miyawaki Forest</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>Miyawaki Forest</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="about-wrap style2 ptb-100">
                        <img src="/img/about/about-shape-1.png" alt="Image"
                             className="about-shape-one moveHorizontal" />
                        <div className="container">
                            <div className="row align-items-center gx-5">

                                <div className="col-lg-12" data-aos="fade-left" data-aos-duration="1200"
                                     data-aos-delay="200">
                                    <div className="about-content">
                                        <div className="content-title style3">
                                            <span>A Little Introduction <span className="bl-text">Miyawaki Forest</span></span>
                                            <h2>The Miyawaki approach to creating forests.</h2>
                                            <p>The Indian subway and Megacities have lost 50% of their green coverage. Open spaces are shrinking every year and cities are slowly becoming concrete jungles. Megacities and metropolises need a solution in which many densely forested areas can be created. The Miyawaki method is the way to make a major rapid change in a small area.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-wrap style1 bg-f ptb-100">
                        <img src="/img/bg-shape-5.png" alt="Image" className="cta-shape-two"/>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-8 offset-xl-2 col-lg-8 offset-lg-2">
                                    <div className="content-title style1 text-center mb-40" data-aos="fade-up"
                                         data-aos-duration="1200" data-aos-delay="200">
                                        <span>What you can do<img src="/img/section-shape.png" alt="Image"/></span>
                                        <h3>All of our workshops, tree plantings, presentations, outreach programs and educational activities are ABSOLUTELY FREE for government schools, colleges and housing companies.</h3>
                                    </div>
                                    <div className="cta-btn" data-aos="fade-up" data-aos-duration="1200"
                                         data-aos-delay="300">
                                        <a href="/donate-now/" className="btn style1">Get Started now</a>
                                        <a href="/get-involved/volunteer/" className="btn style2">Join Our Community</a>
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