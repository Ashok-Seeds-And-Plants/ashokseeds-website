import React from "react"
import delve from 'dlv'
import { parseISO, format } from 'date-fns'

const Galleries = ({ galleries }) => {
    //const leftArticlesCount = Math.ceil(articles.length / 5)
    //const leftArticles = articles.slice(0, leftArticlesCount)
    //const rightArticles = articles.slice(leftArticlesCount, articles.length)

    // console.log(posts);

    return (

        <div className="team-slider-two owl-carousel">
            {galleries.map((gallery, i) => {

                //console.log(post);
               // const title = delve(post, "attributes.title");
                //const slug = delve(post, "attributes.slug");
               // const cover = delve(post, "attributes.cover.data.attributes.formats.medium.url");
                //const date = parseISO(delve(post, "attributes.publishedAt"));
                // console.log(date);
                return (
            <div className="team-card style2" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
                <img src="/img/team/team-1.jpg" alt="Image"/>
                <div className="team-info-wrap">
                    <img src="/img/team/team-shape-1.png" alt="IMage" className="team-card-shape"/>
                    <div className="team-info">
                        <h3><a href="team-details.html">Kevin Thompson</a></h3>
                        <span>Founder &amp; CEO</span>
                    </div>
                    <div className="social-link">
                        <span><i className="ri-add-line"></i></span>
                        <ul className="social-profile style1 list-style">
                            <li>
                                <a href="https://facebook.com" target="_blank">
                                    <i className="ri-facebook-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank">
                                    <i className="ri-twitter-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank">
                                    <i className="ri-instagram-line"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank">
                                    <i className="ri-linkedin-fill"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                )
            })}
        </div>

    )
}

export default Galleries