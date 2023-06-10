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
            </div>
                )
            })}
        </div>

    )
}

export default Galleries