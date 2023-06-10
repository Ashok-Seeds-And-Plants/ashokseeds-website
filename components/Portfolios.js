import React from "react"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'

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

                        //const title = delve(portfolio, "attributes.title");
                        //const image = delve(portfolio, "attributes.image.data.attributes.formats.medium.url");

                        return (
                    <div className="project-card style4" data-aos="fade-right" data-aos-duration="1200"
                         data-aos-delay="600">
                        <div className="project-img">
                            <img src="/img/project/project-22.jpg" alt="Image"/>
                        </div>
                        <div className="project-info">
                            <h3><a href="#">Reduce Air Pollution
                            </a></h3>
                            <p>Lorem ipsum dolor sit amet cons ecte adipiscin elit.</p>

                            <a href="#" className="link style1">See More<i
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