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
                <title>Amla (Indian Gooseberry) | Ashok Seeds and Plants</title>
                <meta name="description" content="" />

            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">

                    <div className="error-wrap ptb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 offset-lg-2">
                                    <div className="error-content">
                                        <img src="/img/404.png" alt="Iamge"/>
                                            <h2>Oops! Page Not Found</h2>
                                            <p>The page you are looking for might have been removed had its name changed
                                                or is temporarily unavailable.</p>
                                            <a href="https://www.ashokseedplant.com/" className="btn style1">Back To Home</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                <Footer />
            </div>
            <Js />
        </>
    )
}