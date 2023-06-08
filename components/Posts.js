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
                        console.log(title);
                        return (
                            <div>{delve(post, "attributes.title")}</div>
                        )
                    })}


                    <div className="blog-card style3">
                        <div className="blog-img">
                            <img src="/img/blog/blog-3.jpg" alt="Image"/>
                            <a href="#" className="blog-date"><span>25</span> Jul, 2022</a>
                        </div>
                        <div className="blog-info">
                            <h3><a href="#">Changes In Landscapes And Wildlife
                                Community</a></h3>
                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                ame ultrices lectus dolor sit amet egestas.</p>
                            <a href="#" className="link style1">Read More <i
                                className="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                    <div className="blog-card style3">
                        <div className="blog-img">
                            <img src="/img/blog/blog-1.jpg" alt="Image"/>
                            <a href="#" className="blog-date"><span>18</span> Jul, 2022</a>
                        </div>
                        <div className="blog-info">
                            <h3><a href="#">Let’s Take Care of Nature for The
                                Sake of The Earth</a></h3>
                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                ame ultrices lectus dolor sit amet egestas.</p>
                            <a href="#" className="link style1">Read More <i
                                className="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                    <div className="blog-card style3">
                        <div className="blog-img">
                            <img src="/img/blog/blog-2.jpg" alt="Image"/>
                            <a href="#" className="blog-date"><span>10</span> Jul, 2022</a>
                        </div>
                        <div className="blog-info">
                            <h3><a href="#">Increasing Risk Of Storms,
                                Droughts and Floods</a></h3>
                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                ame ultrices lectus dolor sit amet egestas.</p>
                            <a href="#" className="link style1">Read More <i
                                className="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                    <div className="blog-card style3">
                        <div className="blog-img">
                            <img src="/img/blog/blog-4.jpg" alt="Image"/>
                            <a href="#" className="blog-date"><span>17</span> May, 2022</a>
                        </div>
                        <div className="blog-info">
                            <h3><a href="#">Seven Things Nobody Told You About
                                Water Pollution</a></h3>
                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                ame ultrices lectus dolor sit amet egestas.</p>
                            <a href="#" className="link style1">Read More <i
                                className="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                    <div className="blog-card style3">
                        <div className="blog-img">
                            <img src="/img/blog/blog-5.jpg" alt="Image"/>
                            <a href="#" className="blog-date"><span>12</span> May, 2022</a>
                        </div>
                        <div className="blog-info">
                            <h3><a href="#">Solar Panels Will Be Great Source
                                Of Green Energy</a></h3>
                            <p>Lorem ipsum dolor sit amet cons ectadic elite soli tudin consec tetur netusdu
                                ame ultrices lectus dolor sit amet egestas.</p>
                            <a href="#" className="link style1">Read More <i
                                className="flaticon-right-arrow"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Posts
