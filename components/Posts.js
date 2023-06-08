import React from "react"
import delve from 'dlv';

const Posts = ({ posts }) => {
    //const leftArticlesCount = Math.ceil(articles.length / 5)
    //const leftArticles = articles.slice(0, leftArticlesCount)
    //const rightArticles = articles.slice(leftArticlesCount, articles.length)

   // console.log(posts);

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

                        console.log(post);
                        const title = delve(post, "attributes.title");
                        const slug = delve(post, "attributes.slug");
                        const cover = delve(post, "attributes.cover.data.attributes.formats.medium.url");
                        console.log(cover);
                        return (
                            <div className="blog-card style3">
                                <div className="blog-img">
                                    <img src={`${cover}`} alt={`${title}`}/>
                                    <a href={`/blog/${slug}`} className="blog-date"><span>25</span> Jul, 2022</a>
                                </div>
                                <div className="blog-info">
                                    <h3><a href={`/blog/${slug}`}>{title}</a></h3>
                                    <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                        ame ultrices lectus dolor sit amet egestas.</p>
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
