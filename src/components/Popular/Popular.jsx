import React from 'react'
import hotel1 from '../../assets/images/img1.jpg'
import hotel2 from '../../assets/images/img2.jpg'
import hotel3 from '../../assets/images/img3.jpg'
import hotel4 from '../../assets/images/img4.jpg'
import hotel5 from '../../assets/images/img5.jpg'
import hotel6 from '../../assets/images/img6.jpg'

const Popular = () => {
    return (
        <section
            class="hotel-area section-bg padding-top-100px padding-bottom-200px overflow-hidden"
        >
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-heading text-center">
                            <h2 class="sec__title line-height-55">
                                Popular Hotel Destinations <br />
                                You Might Like
                            </h2>
                        </div>
                    </div>
                </div>
                <div class="row padding-top-50px">
                    <div class="col-lg-12">
                        <div class="hotel-card-wrap">
                            <div class="hotel-card-carousel-2 carousel-action">
                                <div class="card-item">
                                    <div class="card-img">
                                        <a href="hotel-single.html" class="d-block">
                                            <img src={hotel1} alt="hotel-img" />
                                        </a>
                                        <span class="badge">Bestseller</span>
                                        <span class="badge badge-ribbon">30% off</span>
                                    </div>
                                    <div class="card-body">
                                        <h3 class="card-title">
                                            <a href="hotel-single.html"
                                            >The Millennium Hilton New York</a
                                            >
                                        </h3>
                                        <p class="card-meta">124 E Huron St, New york</p>
                                        <div class="card-rating">
                                            <span class="badge text-white">4.4/5</span>
                                            <span class="review__text">Average</span>
                                            <span class="rating__text">(30 Reviews)</span>
                                        </div>
                                        <div
                                            class="card-price d-flex align-items-center justify-content-between"
                                        >
                                            <p>
                                                <span class="price__num">$90.00</span>
                                                <span class="price__num before-price color-text-3"
                                                >$120.00</span
                                                >
                                                <span class="price__text">Per night</span>
                                            </p>
                                            <a href="hotel-single.html" class="btn-text"
                                            >See details<i class="la la-angle-right"></i
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-img">
                                        <a href="hotel-single.html" class="d-block">
                                            <img src={hotel2} alt="hotel-img" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h3 class="card-title">
                                            <a href="hotel-single.html"
                                            >Best Western Grant Park Hotel</a
                                            >
                                        </h3>
                                        <p class="card-meta">124 E Huron St, Chicago</p>
                                        <div class="card-rating">
                                            <span class="badge text-white">4.4/5</span>
                                            <span class="review__text">Average</span>
                                            <span class="rating__text">(30 Reviews)</span>
                                        </div>
                                        <div
                                            class="card-price d-flex align-items-center justify-content-between"
                                        >
                                            <p>
                                                <span class="price__from">From</span>
                                                <span class="price__num">$58.00</span>
                                                <span class="price__text">Per night</span>
                                            </p>
                                            <a href="hotel-single.html" class="btn-text"
                                            >See details<i class="la la-angle-right"></i
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-img">
                                        <a href="hotel-single.html" class="d-block">
                                            <img src={hotel3} alt="hotel-img" />
                                        </a>
                                        <span class="badge">Featured</span>
                                        <span class="badge badge-ribbon">20% off</span>
                                    </div>
                                    <div class="card-body">
                                        <h3 class="card-title">
                                            <a href="hotel-single.html"
                                            >Hyatt Regency Maui Resort & Spa</a
                                            >
                                        </h3>
                                        <p class="card-meta">200 Nohea Kai Dr, Lahaina, HI</p>
                                        <div class="card-rating">
                                            <span class="badge text-white">4.4/5</span>
                                            <span class="review__text">Average</span>
                                            <span class="rating__text">(30 Reviews)</span>
                                        </div>
                                        <div
                                            class="card-price d-flex align-items-center justify-content-between"
                                        >
                                            <p>
                                                <span class="price__num">$80.00</span>
                                                <span class="price__num before-price color-text-3"
                                                >$100.00</span
                                                >
                                                <span class="price__text">Per night</span>
                                            </p>
                                            <a href="hotel-single.html" class="btn-text"
                                            >See details<i class="la la-angle-right"></i
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-img">
                                        <a href="hotel-single.html" class="d-block">
                                            <img src={hotel4} alt="hotel-img" />
                                        </a>
                                        <span class="badge">Popular</span>
                                    </div>
                                    <div class="card-body">
                                        <h3 class="card-title">
                                            <a href="hotel-single.html"
                                            >Four Seasons Resort Maui at Wailea</a
                                            >
                                        </h3>
                                        <p class="card-meta">3900 Wailea Alanui Drive, Kihei, HI</p>
                                        <div class="card-rating">
                                            <span class="badge text-white">4.4/5</span>
                                            <span class="review__text">Average</span>
                                            <span class="rating__text">(30 Reviews)</span>
                                        </div>
                                        <div
                                            class="card-price d-flex align-items-center justify-content-between"
                                        >
                                            <p>
                                                <span class="price__from">From</span>
                                                <span class="price__num">$88.00</span>
                                                <span class="price__text">Per night</span>
                                            </p>
                                            <a href="hotel-single.html" class="btn-text"
                                            >See details<i class="la la-angle-right"></i
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-img">
                                        <a href="hotel-single.html" class="d-block">
                                            <img src={hotel5} alt="hotel-img" />
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h3 class="card-title">
                                            <a href="hotel-single.html"
                                            >Ibis Styles London Heathrow</a
                                            >
                                        </h3>
                                        <p class="card-meta">272 Bath Road, Harlington, England</p>
                                        <div class="card-rating">
                                            <span class="badge text-white">4.4/5</span>
                                            <span class="review__text">Average</span>
                                            <span class="rating__text">(30 Reviews)</span>
                                        </div>
                                        <div
                                            class="card-price d-flex align-items-center justify-content-between"
                                        >
                                            <p>
                                                <span class="price__from">From</span>
                                                <span class="price__num">$88.00</span>
                                                <span class="price__text">Per night</span>
                                            </p>
                                            <a href="hotel-single.html" class="btn-text"
                                            >See details<i class="la la-angle-right"></i
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-item">
                                    <div class="card-img">
                                        <a href="hotel-single.html" class="d-block">
                                            <img src={hotel6} alt="hotel-img" />
                                        </a>
                                        <span class="badge badge-ribbon">10% off</span>
                                    </div>
                                    <div class="card-body">
                                        <h3 class="card-title">
                                            <a href="hotel-single.html"
                                            >Hotel Europe Saint Severin Paris</a
                                            >
                                        </h3>
                                        <p class="card-meta">
                                            38-40 Rue Saint Séverin, Paris, Paris
                                        </p>
                                        <div class="card-rating">
                                            <span class="badge text-white">4.4/5</span>
                                            <span class="review__text">Average</span>
                                            <span class="rating__text">(30 Reviews)</span>
                                        </div>
                                        <div
                                            class="card-price d-flex align-items-center justify-content-between"
                                        >
                                            <p>
                                                <span class="price__num">$70.00</span>
                                                <span class="price__num before-price color-text-3"
                                                >$80.00</span
                                                >
                                                <span class="price__text">Per night</span>
                                            </p>
                                            <a href="hotel-single.html" class="btn-text"
                                            >See details<i class="la la-angle-right"></i
                                            ></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular