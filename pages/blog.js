import Head from 'next/head'

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
                <title>Green News | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">


                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Blog</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home</a></li>
                                    <li>Green News and Updates</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="blog-details-wrap ptb-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <div className="blog-author-img">
                                                    <img src="/img/blog/author-1.jpg" alt="Image"/>
                                                </div>
                                                <div className="blog-author-info">
                                                    <span>Posted By</span>
                                                    <h6><a href="posts-by-author.html">David Warner</a></h6>
                                                </div>
                                            </div>
                                            <h3><a href="blog-details-right-sidebar.html">Changes In Landscapes And
                                                Wildlife Community</a></h3>
                                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                            <ul className="blog-metainfo list-style">
                                                <li><a href="posts-by-date.html"><i
                                                    className="ri-calendar-todo-line"></i>Jul 22, 2022</a></li>
                                            </ul>
                                        </div>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <div className="blog-author-img">
                                                    <img src="/img/blog/author-7.jpg" alt="Image"/>
                                                </div>
                                                <div className="blog-author-info">
                                                    <span>Posted By</span>
                                                    <h6><a href="posts-by-author.html">Morgan Stanly</a></h6>
                                                </div>
                                            </div>
                                            <h3><a href="blog-details-right-sidebar.html">Let’s Take Care of Nature for
                                                The Sake of The Earth</a></h3>
                                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                            <ul className="blog-metainfo list-style">
                                                <li><a href="posts-by-date.html"><i
                                                    className="ri-calendar-todo-line"></i>Jul 17, 2022</a></li>
                                            </ul>
                                        </div>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <div className="blog-author-img">
                                                    <img src="/img/blog/author-3.jpg" alt="Image"/>
                                                </div>
                                                <div className="blog-author-info">
                                                    <span>Posted By</span>
                                                    <h6><a href="posts-by-author.html">Michel Hudson</a></h6>
                                                </div>
                                            </div>
                                            <h3><a href="blog-details-right-sidebar.html">Increasing Risk Of Storms,
                                                Droughts and Floods</a></h3>
                                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                            <ul className="blog-metainfo list-style">
                                                <li><a href="posts-by-date.html"><i
                                                    className="ri-calendar-todo-line"></i>Jul 13, 2022</a></li>
                                            </ul>
                                        </div>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <div className="blog-author-img">
                                                    <img src="/img/blog/author-4.jpg" alt="Image"/>
                                                </div>
                                                <div className="blog-author-info">
                                                    <span>Posted By</span>
                                                    <h6><a href="posts-by-author.html">Lisa Margaret</a></h6>
                                                </div>
                                            </div>
                                            <h3><a href="blog-details-right-sidebar.html">Seven Things Nobody Told You
                                                About Water Pollution</a></h3>
                                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                            <ul className="blog-metainfo list-style">
                                                <li><a href="posts-by-date.html"><i
                                                    className="ri-calendar-todo-line"></i>Jun 12, 2022</a></li>
                                            </ul>
                                        </div>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <div className="blog-author-img">
                                                    <img src="/img/blog/author-5.jpg" alt="Image"/>
                                                </div>
                                                <div className="blog-author-info">
                                                    <span>Posted By</span>
                                                    <h6><a href="posts-by-author.html">Steave Austin</a></h6>
                                                </div>
                                            </div>
                                            <h3><a href="blog-details-right-sidebar.html">Solar Panels Will Be Great
                                                Source Of Green Energy</a></h3>
                                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                            <ul className="blog-metainfo list-style">
                                                <li><a href="posts-by-date.html"><i
                                                    className="ri-calendar-todo-line"></i>Jun 10, 2022</a></li>
                                            </ul>
                                        </div>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <div className="blog-author-img">
                                                    <img src="/img/blog/author-6.jpg" alt="Image"/>
                                                </div>
                                                <div className="blog-author-info">
                                                    <span>Posted By</span>
                                                    <h6><a href="posts-by-author.html">Emma Nicholls</a></h6>
                                                </div>
                                            </div>
                                            <h3><a href="blog-details-right-sidebar.html">10 Dangerous Effect Of Climate
                                                Change On Wildlife</a></h3>
                                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                            <ul className="blog-metainfo list-style">
                                                <li><a href="posts-by-date.html"><i
                                                    className="ri-calendar-todo-line"></i>May 25, 2022</a></li>
                                            </ul>
                                        </div>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <div className="blog-author-img">
                                                    <img src="/img/blog/author-2.jpg" alt="Image"/>
                                                </div>
                                                <div className="blog-author-info">
                                                    <span>Posted By</span>
                                                    <h6><a href="posts-by-author.html">Maya Harper</a></h6>
                                                </div>
                                            </div>
                                            <h3><a href="blog-details-right-sidebar.html">Why Scientists Disagree On
                                                Global Warming Effect</a></h3>
                                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                            <ul className="blog-metainfo list-style">
                                                <li><a href="posts-by-date.html"><i
                                                    className="ri-calendar-todo-line"></i>May 19, 2022</a></li>
                                            </ul>
                                        </div>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="blog-card style1">
                                        <div className="blog-info">
                                            <div className="blog-author">
                                                <div className="blog-author-img">
                                                    <img src="/img/blog/author-8.jpg" alt="Image"/>
                                                </div>
                                                <div className="blog-author-info">
                                                    <span>Posted By</span>
                                                    <h6><a href="posts-by-author.html">Kiera Woodward</a></h6>
                                                </div>
                                            </div>
                                            <h3><a href="blog-details-right-sidebar.html">Saving Forest And Wildlife
                                                From Climate Change</a></h3>
                                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur
                                                netusdu ame ultrices lectus dolor sit amet egestas.</p>
                                            <ul className="blog-metainfo list-style">
                                                <li><a href="posts-by-date.html"><i
                                                    className="ri-calendar-todo-line"></i>May 15, 2022</a></li>
                                            </ul>
                                        </div>
                                        <a href="blog-details-right-sidebar.html" className="link style1">Read More <i
                                            className="flaticon-right-arrow"></i></a>
                                    </div>
                                </div>
                            </div>
                            <ul className="page-nav list-style">
                                <li><a href="blog-right-sidebar.html"><i className="flaticon-left-arrow"></i></a></li>
                                <li><a className="active" href="blog-right-sidebar.html">1</a></li>
                                <li><a href="blog-right-sidebar.html">2</a></li>
                                <li><a href="blog-right-sidebar.html">3</a></li>
                                <li><a href="blog-right-sidebar.html"><i className="flaticon-right-arrow"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>


                <Footer />
            </div>
            <Js />
        </>
    )
}