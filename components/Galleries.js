import React from "react"
import delve from 'dlv'

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Pagination, Navigation, Autoplay} from "swiper";

const Galleries = ({ galleries }) => {

    return (

        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
                clickable: true,
                dynamicBullets:true
            }}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {galleries.map((gallery, i) => {

                const title = delve(gallery, "attributes.title");
                const image = delve(gallery, "attributes.image.data.attributes.formats.medium.url");

                return (
                    <SwiperSlide>
                        <a className="post-img" data-fancybox="gallery"
                           href={`${image}`}>
                            <img src={`${image}`} alt={`${title}`}/>
                        </a>
                    </SwiperSlide>

                )
            })}

        </Swiper>

    )
}

export default Galleries