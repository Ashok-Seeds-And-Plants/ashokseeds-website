import React from "react"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import ReactMarkdown from "react-markdown";

const Posts = ({ posts }) => {

    return (

        <section className="blog-wrap ptb-100 bg-sand">
            <div className="container">
                <img src="/img/shape-7.png" alt="Image" className="blog-section-shape"/>
                <div className="section-title style3 mb-40 text-center">
                    <span>Our Latest News</span>
                    <h2>Our Latest News &amp; posts</h2>
                </div>
                <div className="blog-slider-one owl-carousel">

                    {posts.map((post, i) => {

                        const title = delve(post, "attributes.title");
                        const slug = delve(post, "attributes.slug");
                        const cover = delve(post, "attributes.cover.data.attributes.formats.medium.url");
                        const date = parseISO(delve(post, "attributes.publishedAt"));
                        const excerpt = delve(post, "attributes.excerpt");
                        return (
                            <div className="blog-card style3">
                                <div className="blog-img">
                                    <img src={`${cover}`} alt={`${title}`}/>
                                    <a href={`/blog/${slug}`} className="blog-date"> <span>{format(date, 'd')}</span>{format(date, 'LLL yyyy')}</a>
                                </div>
                                <div className="blog-info">
                                    <h3><a href={`/blog/${slug}`}>{title}</a></h3>
                                    <ReactMarkdown children={excerpt} />
                                    <a href={`/blog/${slug}`} className="link style1">Read More <i
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

export default Posts
