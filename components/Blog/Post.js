import delve from 'dlv'
import { parseISO, format } from 'date-fns'
import React from "react";
import Link from "next/link";
import parse from 'html-react-parser';

const Post = ({ posts }) => {

    return (
        <>
        
                                        {posts.data.map((post, i) => {

                                            //console.log(post);
                                            const title = delve(post, "attributes.title");
                                            const slug = delve(post, "attributes.slug");
                                            const cover = delve(post, "attributes.cover.data.attributes.formats.medium.url");
                                            const excerpt = delve(post, "attributes.excerpt");
                                            const date = parseISO(delve(post, "attributes.publishedAt"));
                                            const username = delve(post, "attributes.user.data.attributes.displayName");
                                            // console.log(date);
                                            return (
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="blog-card style1">
                                                        <div class="blog-info">
                                                            <div class="blog-author">
                                                                <div class="blog-author-img">
                                                                    <img src="/img/user.png" alt={`${username}`} />
                                                                </div>
                                                                <div class="blog-author-info">
                                                                    <span>Posted By</span>
                                                                    <h6><a href="#">{username}</a></h6>
                                                                </div>
                                                            </div>
                                                            <img className="blog-cover-img" src={`${cover}`} alt={`${title}`} />
                                                            <h3><Link href={`/blog/${slug}/`}>{title}</Link></h3>
                                                            {parse(excerpt)}
                                                            <ul class="blog-metainfo list-style">
                                                                <li><Link href={`/blog/${slug}/`}>
                                                                    <a><i className="ri-calendar-todo-line"></i>{format(date, 'd LLL yyyy')}</a>
                                                                </Link></li>
                                                            </ul>
                                                        </div>
                                                        <Link href={`/blog/${slug}/`}>
                                                            <a className="link style1">Read More <i
                                                                className="flaticon-right-arrow"></i></a>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>
    )
}

export default Post