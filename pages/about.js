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
                <title>About | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>About Us</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>About Us</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="about-wrap style1 ptb-100">
                        <img src="/img/about/about-shape-2.png" alt="Image" className="about-shape-one"/>
                            <img src="/img/shape-2.png" alt="Image" className="about-shape-two flyUp"/>
                                <img src="/img/about/deer.png" alt="Image"
                                     className="about-shape-three moveHorizontal"/>
                                    <div className="container">
                                        <div className="row align-items-center gx-5">
                                            <div className="col-lg-6">
                                                <div className="about-img-wrap bg-f">
                                                    <div className="about-quote">
                                                        <i className="flaticon-right-quote"></i>
                                                        <p>Lorem ipsum dolor sit amet conse ctet adip elit ollicitu din
                                                            conse ctetur netus dui ultrice lectus ac egestas ips ctetur
                                                            ctet adip ivamus tellu aliq. </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="about-content">
                                                    <div className="content-title style1">
                                                        <span>A Little Introduction<img
                                                            src="/img/section-shape.png" alt="Image"/></span>
                                                        <h2>Protect Our Earth Against Climate Change</h2>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                            Sollicitudin consectetur netus dui, ultrices or lectus ac
                                                            egestas. Vivamus tellus vestibulum aliquet arcu a duis.
                                                            Sollicitudin consectetur netus du ultric. </p>
                                                    </div>
                                                    <ul className="content-feature-list list-style mb-0">
                                                        <li><i className="ri-checkbox-circle-line"></i>Curabitur vitae
                                                            ullamcorper libe roras id augue
                                                        </li>
                                                        <li><i className="ri-checkbox-circle-line"></i>Felis cras luctus
                                                            nisi in tincidunt blandit
                                                        </li>
                                                        <li><i className="ri-checkbox-circle-line"></i>Sapien mi
                                                            vestibulum est commodo lobortis metus
                                                        </li>
                                                        <li><i className="ri-checkbox-circle-line"></i>Mauris vitae
                                                            purus blandit fermentum
                                                        </li>
                                                    </ul>
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