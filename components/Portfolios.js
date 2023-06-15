import React from "react"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import ReactMarkdown from "react-markdown";

const Portfolios = ({ portfolios }) => {

    return (


                <div className="project-slider-three owl-carousel">

                    {portfolios.map((portfolio, i) => {

                        const title = delve(portfolio, "attributes.title");
                        const excerpt = delve(portfolio, "attributes.excerpt");
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
                            <ReactMarkdown children={excerpt} />

                            <a href={`/project/${slug}`} className="link style1">See More<i
                                className="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                        )
                    })}

                </div>


    )
}

export default Portfolios