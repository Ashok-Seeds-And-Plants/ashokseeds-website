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
                                        <h3>Terms and Conditions: </h3>
                                        <p>Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern our relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.</p>
                                        <p>The term 'us' or 'we' refers to the owner of the website, an environmental non-governmental organization (NGO) that aims to promote environmental awareness, conservation, and action. The term 'you' refers to the user or viewer of our website.
                                        </p>
                                    </div>
                                    <div className="single-terms">
                                        <h3>The use of this website is subject to the following terms of use:</h3>
                                        <ol>
                                            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
                                            <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, some personal information may be stored by us for use by third parties.</li>
                                            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
                                            </li>
                                            <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.
                                            </li>
                                            <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
                                            <li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
                                            <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
                                            <li>From time to time, this website may also include links to other websites. These links are provided for your convenience to provide further information. They do not signify that we endorse the website(s). We have no responsibility for the content of the linked website(s).</li>
                                            <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of the country where we are registered as an NGO.</li>
                                        </ol>
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