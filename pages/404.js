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
            <title>404 Page not found! | Wave Earth Infratech</title>
            <meta name="description" content="" />

            </Head>

            <Header />

            <Sidebar />

            <div className="rts-bread-crumb-area ptb--150 ptb_sm--100 bg-breadcrumb bg_image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">

                            <div className="breadcrumb-inner text-center">
                                <h1 className="title">Error 404</h1>
                                <div className="meta">
                                    <a href="https://www.waveearthinfratech.com/" className="prev">Home /</a>
                                    <a href="#" className="next">Error 404</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="rts-404-area ptb--200 ptb_md--100 ptb_sm--80">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="wrapper-404 text-center">
                                <div className="thumbnail">
                                    <img src="/images/contact/04.png" alt=""/>
                                </div>
                                <h2 className="title mt--40">
                                    Oops! Nothing Was Found
                                </h2>
                                <p className="disc">Sorry, we couldn’t find the page you where looking for. We
                                    suggest <br/> that you
                                        return to homepage.</p>
                                <a className="rts-btn btn-primary" href="https://www.waveearthinfratech.com/">Back To Homepage</a>
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