import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import Header from '../../../components/Header/Header'
import HeroWrapper from '../../../components/HeroWrapper/HeroWrapper'
import InfoArea from '../../../components/InfoArea/InfoArea'
import Popular from '../../../components/Popular/Popular'
import DiscountArea from '../../../components/DiscountArea/DiscountArea'
import TestimonialArea from '../../../components/TestimonialArea/TestimonialArea'
import CtaArea from '../../../components/CTAArea/CtaArea'
import Footer from '../../../components/Footer/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <HeroWrapper />
            <InfoArea />
            <Popular />

            <TestimonialArea />
            <div class="section-block"></div>

            <section class="blog-area section--padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading text-center">
                                <h2 class="sec__title">Recent Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row padding-top-50px">
                        <div class="col-lg-4 responsive-column">
                            <div class="card-item blog-card">
                                <div class="card-img">
                                    <img src="images/img5.jpg" alt="blog-img" />
                                    <div class="post-format icon-element">
                                        <i class="la la-photo"></i>
                                    </div>
                                    <div class="card-body">
                                        <div class="post-categories">
                                            <a href="#" class="badge">Travel</a>
                                            <a href="#" class="badge">lifestyle</a>
                                        </div>
                                        <h3 class="card-title line-height-26">
                                            <a href="blog-single.html"
                                            >Best Scandinavian Accommodation – Treat Yourself</a
                                            >
                                        </h3>
                                        <p class="card-meta">
                                            <span class="post__date"> 1 January, 2020</span>
                                            <span class="post-dot"></span>
                                            <span class="post__time">5 Mins read</span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="card-footer d-flex align-items-center justify-content-between"
                                >
                                    <div class="author-content d-flex align-items-center">
                                        <div class="author-img">
                                            <img src="images/small-team1.jpg" alt="testimonial image" />
                                        </div>
                                        <div class="author-bio">
                                            <a href="#" class="author__title">Leroy Bell</a>
                                        </div>
                                    </div>
                                    <div class="post-share">
                                        <ul>
                                            <li>
                                                <i class="la la-share icon-element"></i>
                                                <ul class="post-share-dropdown d-flex align-items-center">
                                                    <li>
                                                        <a href="#"><i class="lab la-facebook-f"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="lab la-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="lab la-instagram"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 responsive-column">
                            <div class="card-item blog-card">
                                <div class="card-img">
                                    <img src="images/img6.jpg" alt="blog-img" />
                                    <div class="post-format icon-element">
                                        <i class="la la-play"></i>
                                    </div>
                                    <div class="card-body">
                                        <div class="post-categories">
                                            <a href="#" class="badge">Video</a>
                                        </div>
                                        <h3 class="card-title line-height-26">
                                            <a href="blog-single.html"
                                            >Amazing Places to Stay in Norway</a
                                            >
                                        </h3>
                                        <p class="card-meta">
                                            <span class="post__date"> 1 February, 2020</span>
                                            <span class="post-dot"></span>
                                            <span class="post__time">4 Mins read</span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="card-footer d-flex align-items-center justify-content-between"
                                >
                                    <div class="author-content d-flex align-items-center">
                                        <div class="author-img">
                                            <img src="images/small-team2.jpg" alt="testimonial image" />
                                        </div>
                                        <div class="author-bio">
                                            <a href="#" class="author__title">Phillip Hunt</a>
                                        </div>
                                    </div>
                                    <div class="post-share">
                                        <ul>
                                            <li>
                                                <i class="la la-share icon-element"></i>
                                                <ul class="post-share-dropdown d-flex align-items-center">
                                                    <li>
                                                        <a href="#"><i class="lab la-facebook-f"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="lab la-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="lab la-instagram"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 responsive-column">
                            <div class="card-item blog-card">
                                <div class="card-img">
                                    <img src="images/img7.jpg" alt="blog-img" />
                                    <div class="post-format icon-element">
                                        <i class="la la-music"></i>
                                    </div>
                                    <div class="card-body">
                                        <div class="post-categories">
                                            <a href="#" class="badge">audio</a>
                                        </div>
                                        <h3 class="card-title line-height-26">
                                            <a href="blog-single.html"
                                            >Feel Like Home on Your Business Trip</a
                                            >
                                        </h3>
                                        <p class="card-meta">
                                            <span class="post__date"> 1 March, 2020</span>
                                            <span class="post-dot"></span>
                                            <span class="post__time">3 Mins read</span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    class="card-footer d-flex align-items-center justify-content-between"
                                >
                                    <div class="author-content d-flex align-items-center">
                                        <div class="author-img">
                                            <img src="images/small-team3.jpg" alt="testimonial image" />
                                        </div>
                                        <div class="author-bio">
                                            <a href="#" class="author__title">Luke Jacobs</a>
                                        </div>
                                    </div>
                                    <div class="post-share">
                                        <ul>
                                            <li>
                                                <i class="la la-share icon-element"></i>
                                                <ul class="post-share-dropdown d-flex align-items-center">
                                                    <li>
                                                        <a href="#"><i class="lab la-facebook-f"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="lab la-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i class="lab la-instagram"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaArea />
            <Footer />
        </div>
    )
}

export default Home