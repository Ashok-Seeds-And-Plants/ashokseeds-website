import React from "react"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import ReactMarkdown from "react-markdown";

const Portfolios = ({ portfolios }) => {

    return (

        <section className="project-wrap ptb-100 bg-sand">
            <div className="container">
                <div className="section-title style3 text-center mb-40">
                    <span>Journey <span className="bl-text">So for</span></span>
                    <h2>Our Completed Projects</h2>
                </div>
                <div className="project-slider-three owl-carousel">

                    {portfolios.map((portfolio, i) => {

                        const title = delve(portfolio, "attributes.title");
                        const content = delve(portfolio, "attributes.content");
                        const slug = delve(portfolio, "attributes.slug");
                        const cover = delve(portfolio, "attributes.cover.data.attributes.formats.medium.url");

                        return (
                    <div className="project-card style4" data-aos="fade-right" data-aos-duration="1200"
                         data-aos-delay="600">
                        <div className="project-img">
                            <img src={`${cover}`} alt={`${title}`}/>
                        </div>
                        <div className="project-info">
                            <h3><a href={`/project/${slug}`}>{title}</a></h3>
                            <ReactMarkdown children={content} />

                            <a href={`/project/${slug}`} className="link style1">See More<i
                                className="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                        )
                    })}

                </div>
            </div>
        </section>

    )
}

export default Portfolios