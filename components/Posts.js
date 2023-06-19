import delve from 'dlv'
import { parseISO, format } from 'date-fns'
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

const Posts = ({ posts }) => {

    return (

        <section className="blog-wrap ptb-100 bg-sand">
            <div className="container">
                <img src="/img/shape-7.png" alt="Image" className="blog-section-shape"/>
                <div className="section-title style3 mb-40 text-center">
                    <span>Our Latest News</span>
                    <h2>Our Latest News &amp; posts</h2>
                </div>
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
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {posts.map((post, i) => {

                        const title = delve(post, "attributes.title");
                        const slug = delve(post, "attributes.slug");
                        const cover = delve(post, "attributes.cover.data.attributes.formats.medium.url");
                        const date = parseISO(delve(post, "attributes.publishedAt"));
                        const excerpt = delve(post, "attributes.excerpt");
                        return (
                            <SwiperSlide>
                            <div className="blog-card style3">
                                <div className="blog-img">
                                    <img src={`${cover}`} alt={`${title}`}/>
                                    <Link href={`/blog/${slug}`}>
                                    <a className="blog-date"> <span>{format(date, 'd')}</span>{format(date, 'LLL yyyy')}</a>
                                    </Link>
                                </div>
                                <div className="blog-info">
                                    <h3><Link href={`/blog/${slug}`}>{title}</Link></h3>

                                    <ReactMarkdown children={excerpt} />

                                    <Link href={`/blog/${slug}`}>
                                    <a className="link style1">Read More <i
                                        className="flaticon-right-arrow"></i></a>
                                    </Link>
                                </div>
                            </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </section>

    )
}

export default Posts
