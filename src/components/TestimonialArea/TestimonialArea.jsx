import React from 'react'
import customerImg1 from '../../assets/images/team8.jpg'
import customerImg2 from '../../assets/images/team9.jpg'

const TestimonialArea = () => {
    return (
        <>
            <section class="testimonial-area section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section-heading text-center mb-0">
                                <h2 class="sec__title line-height-50">
                                    What Our Customers <br />
                                    are Saying Us?
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="row padding-top-50px">
                        <div class="col-lg-12">
                            <div class="testimonial-carousel carousel-action">
                                <div class="testimonial-card">
                                    <div class="testi-desc-box">
                                        <p class="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat
                                            non proident. Occaecat cupidatat non proident des.
                                        </p>
                                    </div>
                                    <div class="author-content d-flex align-items-center">
                                        <div class="author-img">
                                            <img src={customerImg1} alt="testimonial image" />
                                        </div>
                                        <div class="author-bio">
                                            <h4 class="author__title">Leroy Bell</h4>
                                            <span class="author__meta">United States</span>
                                            <span class="ratings d-flex align-items-center">
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-card">
                                    <div class="testi-desc-box">
                                        <p class="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat
                                            non proident. Occaecat cupidatat non proident des.
                                        </p>
                                    </div>
                                    <div class="author-content d-flex align-items-center">
                                        <div class="author-img">
                                            <img src={customerImg2} alt="testimonial image" />
                                        </div>
                                        <div class="author-bio">
                                            <h4 class="author__title">Richard Pam</h4>
                                            <span class="author__meta">Canada</span>
                                            <span class="ratings d-flex align-items-center">
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-card">
                                    <div class="testi-desc-box">
                                        <p class="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat
                                            non proident. Occaecat cupidatat non proident des.
                                        </p>
                                    </div>
                                    <div class="author-content d-flex align-items-center">
                                        <div class="author-img">
                                            <img src="images/team10.jpg" alt="testimonial image" />
                                        </div>
                                        <div class="author-bio">
                                            <h4 class="author__title">Luke Jacobs</h4>
                                            <span class="author__meta">Australia</span>
                                            <span class="ratings d-flex align-items-center">
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="testimonial-card">
                                    <div class="testi-desc-box">
                                        <p class="testi__desc">
                                            Excepteur sint occaecat cupidatat non proident sunt in culpa
                                            officia deserunt mollit anim laborum sint occaecat cupidatat
                                            non proident. Occaecat cupidatat non proident des.
                                        </p>
                                    </div>
                                    <div class="author-content d-flex align-items-center">
                                        <div class="author-img">
                                            <img src="images/team8.jpg" alt="testimonial image" />
                                        </div>
                                        <div class="author-bio">
                                            <h4 class="author__title">Chulbul Panday</h4>
                                            <span class="author__meta">Italy</span>
                                            <span class="ratings d-flex align-items-center">
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                                <i class="la la-star"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TestimonialArea