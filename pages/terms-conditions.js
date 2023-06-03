import Head from 'next/head'
import Image from 'next/image'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Js from '@components/Js'

export default function Home() {
    return (
        <>
            <Meta />
            <Head>
                <title>Terms and conditions | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Terms and conditions</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>Terms and conditions</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="terms-wrap ptb-100 pb-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 offset-xl-1">
                                    <div className="single-terms">
                                        <h3>Legal Disclaimer: </h3>
                                        <p>We may collect personal identification information from Users in a variety of
                                            ways, including, but not limited to, when Users visit our site, subscribe to
                                            the newsletter, fill out a form, and in connection with
                                            other <strong>activities</strong>, services, features or resources we make
                                            available on our Site. Users may be asked for, as appropriate, name, email
                                            address, mailing address, phone number, <a href="index.html">company
                                                name</a>. We will collect personal identification information from Users
                                            only if they voluntarily consent such information to us. Users can always
                                            refuse to supply personally identification information, except that it may
                                            prevent them from engaging in certain Site related activities.</p>
                                    </div>
                                    <div className="single-terms">
                                        <h3>Credit Reporting Terms of Service</h3>
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, quod.
                                            Ratione ex delectus quis tenetur odio non alias numquam official ipsum dolor
                                            sit, amet consectetur adipisicing elit. Accusamus, laborum.</p>
                                        <ol>
                                            <li>Mauris ut in vestibulum hasellus ultrices fusce nibh justo, venenatis,
                                                amet. Lectus quam in lobortis.
                                            </li>
                                            <li>Consectetur phasellus <strong>ultrices</strong> fusce nibh justo,
                                                venenatis, amet. Lectus quam in lobortis justo venenatis amet.
                                            </li>
                                            <li>Lectus quam there are two thing is very important in Consectetur
                                                phasellus ultrices fusce nibh justo, venenatis, amet in lobortis.
                                            </li>
                                            <li>Web Development very creative to do something , mauris ut in vestibulum.
                                                Consectetur phasellus ultrices fusce nibh justo, venenatis, amet to all
                                                design.
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="single-terms">
                                        <h3>Ownership of Site Agreement to Terms of Use</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus
                                            quasi. Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius
                                            molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas
                                            dignissimos doloribus ea pariatur corrupti rerum deserunt, ipsum, ipsa eos
                                            veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate
                                            dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam
                                            veniam.</p>
                                    </div>
                                    <div className="single-terms">
                                        <h3>Provision of Services</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas
                                            dignissimos doloribus ea pariatur corrupti rerum deserunt, ipsum, ipsa eos
                                            veniam aspernatur fuga, optio soluta? Libero neque reiciendis cupiditate
                                            dolores nam. Earum eius similique sapiente. Iure, sit non. At fuga ipsam
                                            veniam.</p>
                                        <ul className="content-feature-list style2 list-style ">
                                            <li><i className="ri-check-double-line"></i> Lorem ipsum dolor, sit amet.
                                            </li>
                                            <li><i className="ri-check-double-line"></i>Amet consectetur adipisicing
                                                elit.
                                                Officia, odit!
                                            </li>
                                            <li><i className="ri-check-double-line"></i>Aquaerat ipsa quis possimus.
                                            </li>
                                            <li><i className="ri-check-double-line"></i>Lorem, ipsum dolor sit amet
                                                consectetur adipi.
                                            </li>
                                            <li><i className="ri-check-double-line"></i>Consectetur adipisicing elit.
                                                Voluptatibus, dignissimos.
                                            </li>
                                            <li><i className="ri-check-double-line"></i>Highly professional
                                                administration.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="single-terms">
                                        <h3> Limitation of Liability</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus
                                            quasi. Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius
                                            molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.</p>
                                    </div>
                                    <div className="single-terms">
                                        <h3> Accounts, Passwords and Security</h3>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime nulla minus
                                            quasi. Voluptatem, facilis saepe ullam autem magni quod sint tempore, eius
                                            molestias aliquam debitis. Neque saepe dignissimos repudiandae fuga.</p>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eveniet quas
                                            dignissimos doloribus ea pariatur corrupti ullam autem magni quod sint
                                            tempore saepe ullam autem magni.</p>
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