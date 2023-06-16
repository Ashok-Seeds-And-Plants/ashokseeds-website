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
                <title>Privacy Policy | Ashok Seeds and Plants</title>
                <meta name="description" content="" />
            </Head>
            <div className="page-wrapper">
                <Header />

                <div className="content-wrapper">
                    <div className="breadcrumb-wrap bg-f br-1">
                        <div className="container">
                            <div className="breadcrumb-title">
                                <h2>Privacy Policy</h2>
                                <ul className="breadcrumb-menu list-style">
                                    <li><a href="https://www.ashokseedplant.com/">Home </a></li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <section className="terms-wrap ptb-100 pb-75">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-10 offset-xl-1">
                                    <div className="single-terms">
                                        <h3>Privacy Policy: </h3>
                                        <p>We are committed to protecting and respecting your privacy. This policy explains how we collect, use and disclose your personal information when you visit our website or interact with us.</p>
                                    </div>
                                    <div className="single-terms">
                                        <h3>What information do we collect?</h3>
                                        <p><strong>We may collect the following information from you:</strong></p>
                                        <ol>
                                            <li>Your name, email address, phone number, postal address and other contact details when you fill in a form on our website, subscribe to our newsletter, make a donation, join our membership, register for an event or contact us by email, phone or post.</li>
                                            <li>Your payment details when you make a donation or purchase a product or service from us. We do not store your payment card details on our website or servers. We use a third-party payment processor to handle your transactions securely.</li>
                                            <li>Your preferences and interests when you participate in our surveys, feedback forms, petitions or campaigns.</li>
                                            <li>Your IP address, browser type, device type, operating system, referral source, pages viewed and duration of visit when you access our website. We use cookies and similar technologies to collect this information. You can manage your cookie settings on our website or browser.</li>
                                            <li>Your social media username and profile picture when you interact with us on social media platforms such as Facebook, Twitter, Instagram or YouTube.</li>
                                        </ol>
                                    </div>
                                    <div className="single-terms">
                                        <h3>How do we use your information? </h3>
                                        <p>We may use your information for the following purposes:</p>
                                        <ol>
                                            <li>To provide you with the information, products or services that you request from us or that we think may interest you, in accordance with your preferences.</li>
                                            <li>To process your donations or purchases and issue receipts or acknowledgements.</li>
                                            <li>To communicate with you about our activities, events, campaigns, appeals and updates.</li>
                                            <li>To administer and improve our website and ensure its security and functionality.</li>
                                            <li>To analyse and monitor our website traffic and user behaviour.</li>
                                            <li>To comply with our legal obligations and protect our rights and interests.</li>
                                        </ol>
                                    </div>
                                    <div className="single-terms">
                                        <h3>How do we share your information?</h3>
                                        <p>We may share your information with the following parties:</p>
                                        <ol>
                                            <li>Our service providers who help us with our website hosting, payment processing, email delivery, data analysis and other functions.</li>
                                            <li>Our partners who collaborate with us on our projects, events, campaigns or research.</li>
                                            <li>Our regulators, auditors, legal advisors and other authorities who require us to disclose your information by law or for compliance purposes.</li>
                                        </ol>
                                        <p>We will not sell, rent or trade your information to any third parties for marketing purposes without your consent.</p>
                                    </div>
                                    <div className="single-terms">
                                        <h3>How do we protect your information?</h3>
                                        <p>We take appropriate technical and organisational measures to protect your information from unauthorized access, use, disclosure, alteration or destruction. We use encryption, firewalls, password protection and other security tools to safeguard your information. However, no method of transmission or storage is completely secure and we cannot guarantee the absolute security of your information.</p>
                                    </div>
                                    <div className="single-terms">
                                        <h3>How long do we keep your information?</h3>
                                        <p>We will only keep your information for as long as necessary for the purposes for which it was collected, unless we have a legal obligation or legitimate interest to retain it for longer. We will delete or anonymize your information when it is no longer needed.</p>
                                    </div>
                                    <div className="single-terms">
                                        <h3>What are your rights?</h3>
                                        <p>You have the following rights in relation to your information:</p>
                                        <ol>
                                          <li>The right to access your information and receive a copy of it.</li>
                                          <li>The right to correct any inaccurate or incomplete information that we hold about you.</li>
                                          <li>The right to erase your information or restrict its processing in certain circumstances.</li>
                                          <li>The right to object to our use of your information for direct marketing or other purposes based on our legitimate interests.</li>
                                          <li>The right to withdraw your consent at any time where we rely on it to process your information.</li>
                                          <li>The right to complain to the relevant data protection authority if you are unhappy with how we handle your information.</li>
                                        </ol>
                                        <p>To exercise any of these rights, please contact us using the details below. We may ask you to provide proof of identity before we can comply with your request.</p>
                                    </div>
                                    <div className="single-terms">
                                        <h3>How do we update this policy?</h3>
                                        <p>We may update this policy from time to time to reflect changes in our practices, technologies or legal requirements. We will notify you of any significant changes by posting a notice on our website or by contacting you directly. Please check this page regularly to stay informed of any updates.</p>
                                    </div>
                                    <div className="single-terms">
                                        <h3>How do you contact us?</h3>
                                        <p>If you have any questions or comments about this policy or how we handle your information, please contact us by email at info@ashokseedplant.com or by post at: 506, Ashok Chauraha, Bargarh Chitrakoot UP-210208. We will respond to your inquiry as soon as possible.</p>
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