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
            breakpoints={{
                "@0.00": {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                "@0.75": {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                "@1.00": {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
                "@1.50": {
                    slidesPerView: 4,
                    spaceBetween: 50,
                },
            }}
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