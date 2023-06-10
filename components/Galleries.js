import React from "react"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'

const Galleries = ({ galleries }) => {

    return (

        <div className="team-slider-two owl-carousel">
            {galleries.map((gallery, i) => {

               const title = delve(gallery, "attributes.title");
               const image = delve(gallery, "attributes.image.data.attributes.formats.medium.url");

                return (
            <div className="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                <img src={`${image}`} alt={`${title}`} data-fancybox="gallery"/>
            </div>
                )
            })}
        </div>

    )
}

export default Galleries