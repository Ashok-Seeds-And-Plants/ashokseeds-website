import React from "react"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import ReactMarkdown from "react-markdown";
import Link from "next/link";

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
                            <h3><Link href={`/project/${slug}`}>{title}</Link></h3>
                            <ReactMarkdown children={excerpt} />
                            <Link href={`/project/${slug}`}>
                            <a className="link style1">See More<i
                                className="flaticon-right-arrow"></i></a>
                            </Link>
                        </div>
                    </div>
                        )
                    })}

                </div>


    )
}

export default Portfolios