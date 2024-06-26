import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import React from "react";
import Link from "next/link";

const BlogSidebar = ({ categories, recentpost }) => {

    return (
        <div className="col-xl-4 col-lg-12">
            <div className="sidebar">
                <div className="sidebar-widget">
                    <h4>Search </h4>
                    <div className="search-box">
                        <div className="form-group">
                            <input type="search" placeholder="Search" />
                            <button type="submit">
                                <i className="flaticon-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="sidebar-widget categories">
                    <h4>Categories</h4>
                    <ul className="category-box list-style">
                        {categories.data.map((rpost, i) => {

                            //console.log(post);
                            const name = delve(rpost, "attributes.name");

                            // console.log(date);
                            return (

                                <li>
                                    <a href="#">
                                        <i className="ri-checkbox-line"></i>
                                        {name}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="sidebar-widget popular-post">
                    <h4>Recent Posts</h4>
                    <div className="popular-post-widget">
                        {recentpost.data.map((rpost, i) => {

                            //console.log(post);
                            const title = delve(rpost, "attributes.title");
                            const slug = delve(rpost, "attributes.slug");
                            const cover = delve(rpost, "attributes.cover.data.attributes.formats.medium.url");
                            const excerpt = delve(rpost, "attributes.excerpt");
                            const date = parseISO(delve(rpost, "attributes.publishedAt"));
                            const username = delve(rpost, "attributes.user.data.attributes.displayName");
                            // console.log(date);
                            return (
                                <div className="pp-post-item">
                                    <a href={`/blog/${slug}/`} className="pp-post-img">
                                        <img src={`${cover}`} alt={`${title}`} />
                                    </a>
                                    <div className="pp-post-info">
                                        <h6>
                                            <Link href={`/blog/${slug}/`}>{title}</Link>
                                        </h6>
                                        <Link href={`/blog/${slug}/`}>
                                            <a><i className="ri-calendar-todo-line"></i>{format(date, 'd LLL yyyy')}</a>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="sidebar-widget style2">
                    <div className="contact-widget bg-f">
                        <h3>Join the green revolution with Miyawaki urban forests</h3>
                        <p>By planting dense, biodiverse mini-forests together, we can transform our cities, fight climate change, and foster community spirit. By working together, we can build a world that is both sustainable and environmentally friendly. We need to start planting today to make tomorrow greener.</p>
                        <Link href="/contact-us/"><a className="btn style1">Contact Us</a></Link>
                    </div>
                </div>
                <div className="sidebar-widget tags">
                    <h4>Popular Tags </h4>
                    <ul className="tag-list list-style">
                        <li><a href="#">Pollution</a></li>
                        <li><a href="#">Water</a></li>
                        <li><a href="#">Protest</a></li>
                        <li><a href="#">Environment</a></li>
                        <li><a href="#">Rally</a></li>
                        <li><a href="#">Non-profit</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar