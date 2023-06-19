import delve from 'dlv'
import ReactMarkdown from "react-markdown";
import Link from "next/link";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay} from "swiper";

const Portfolios = ({ portfolios }) => {

    return (

        <Swiper
            slidesPerView={2}
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
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                "@1.50": {
                    slidesPerView: 2,
                    spaceBetween: 50,
                },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {portfolios.map((portfolio, i) => {

                const title = delve(portfolio, "attributes.title");
                const excerpt = delve(portfolio, "attributes.excerpt");
                const slug = delve(portfolio, "attributes.slug");
                const cover = delve(portfolio, "attributes.cover.data.attributes.formats.medium.url");

                return (
                    <SwiperSlide>
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
                    </SwiperSlide>

                )
            })}

        </Swiper>

    )
}

export default Portfolios