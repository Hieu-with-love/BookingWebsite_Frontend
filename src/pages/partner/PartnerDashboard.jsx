import React from 'react'

import Navigation from '../../components/partner/Navigation'
import Footer from '../../components/partner/Footer'
import Responsive_User from '../../components/partner/Responsive_User'
import Sidebar_Partner from '../../components/partner/Sidebar_Partner'

const PartnerDashboard = () => {
    return (
        <div>
            <Responsive_User />

            <Sidebar_Partner />

            <section class="dashboard-area">
                
                <Navigation />

                <div class="dashboard-content-wrap">
                    <div class="dashboard-bread dashboard-bread-2">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="breadcrumb-content">
                                        <div class="section-heading">
                                            <h2 class="sec__title font-size-30 text-white">
                                                Dashboard
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="breadcrumb-list text-end">
                                        <ul class="list-items">
                                            <li><a href="index.html" class="text-white">Home</a></li>
                                            <li>Pages</li>
                                            <li>Dashboard</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-lg-3 responsive-column-l">
                                    <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                                        <div class="d-flex pb-3 justify-content-between">
                                            <div class="info-content">
                                                <p class="info__desc">Total Booking!</p>
                                                <h4 class="info__title">55</h4>
                                            </div>
                                            <div class="info-icon icon-element bg-4">
                                                <i class="la la-shopping-cart"></i>
                                            </div>
                                        </div>
                                        <div class="section-block"></div>
                                        <a
                                            href="admin-dashboard-booking.html"
                                            class="d-flex align-items-center justify-content-between view-all"
                                        >View All <i class="la la-angle-right"></i
                                        ></a>
                                    </div>
                                </div>
                                <div class="col-lg-3 responsive-column-l">
                                    <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                                        <div class="d-flex pb-3 justify-content-between">
                                            <div class="info-content">
                                                <p class="info__desc">New Reviews!</p>
                                                <h4 class="info__title">22</h4>
                                            </div>
                                            <div class="info-icon icon-element bg-3">
                                                <i class="la la-star"></i>
                                            </div>
                                        </div>
                                        <div class="section-block"></div>
                                        <a
                                            href="admin-dashboard-reviews.html"
                                            class="d-flex align-items-center justify-content-between view-all"
                                        >View All <i class="la la-angle-right"></i
                                        ></a>
                                    </div>
                                </div>
                                <div class="col-lg-3 responsive-column-l">
                                    <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                                        <div class="d-flex pb-3 justify-content-between">
                                            <div class="info-content">
                                                <p class="info__desc">Total Subscribers!</p>
                                                <h4 class="info__title">27</h4>
                                            </div>
                                            <div class="info-icon icon-element bg-2">
                                                <i class="la la-envelope"></i>
                                            </div>
                                        </div>
                                        <div class="section-block"></div>
                                        <a
                                            href="admin-dashboard-subscribers.html"
                                            class="d-flex align-items-center justify-content-between view-all"
                                        >View All <i class="la la-angle-right"></i
                                        ></a>
                                    </div>
                                </div>
                                <div class="col-lg-3 responsive-column-l">
                                    <div class="icon-box icon-layout-2 dashboard-icon-box pb-0">
                                        <div class="d-flex pb-3 justify-content-between">
                                            <div class="info-content">
                                                <p class="info__desc">New Bookmarks!</p>
                                                <h4 class="info__title">25</h4>
                                            </div>
                                            <div class="info-icon icon-element bg-1">
                                                <i class="la la-bookmark-o"></i>
                                            </div>
                                        </div>
                                        <div class="section-block"></div>
                                        <a
                                            href="admin-dashboard-wishlist.html"
                                            class="d-flex align-items-center justify-content-between view-all"
                                        >View All <i class="la la-angle-right"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-main-content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-7 responsive-column--m">
                                    <div class="form-box">
                                        <div class="form-title-wrap">
                                            <div
                                                class="d-flex align-items-center justify-content-between"
                                            >
                                                <ul class="chart-pagination d-flex">
                                                    <li>
                                                        <a href="#" class="theme-btn theme-btn-small me-2"
                                                        >Day</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="theme-btn theme-btn-small theme-btn-transparent me-2"
                                                        >Week</a
                                                        >
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            class="theme-btn theme-btn-small theme-btn-transparent"
                                                        >This year</a
                                                        >
                                                    </li>
                                                </ul>
                                                <div class="select-contain select2-container-wrapper">
                                                    <select class="select-contain-select">
                                                        <option value="January">January</option>
                                                        <option value="February">February</option>
                                                        <option value="March">March</option>
                                                        <option value="April">April</option>
                                                        <option value="May">May</option>
                                                        <option value="June">June</option>
                                                        <option value="July">July</option>
                                                        <option value="August">August</option>
                                                        <option value="September">September</option>
                                                        <option value="October">October</option>
                                                        <option value="November">November</option>
                                                        <option value="December">December</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-content">
                                            <canvas id="line-chart"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-5 responsive-column--m">
                                    <div class="form-box dashboard-card">
                                        <div class="form-title-wrap">
                                            <div
                                                class="d-flex justify-content-between align-items-center"
                                            >
                                                <h3 class="title">Notifications</h3>
                                                <button
                                                    type="button"
                                                    class="icon-element mark-as-read-btn ms-auto me-0"
                                                    data-bs-toggle="tooltip"
                                                    data-placement="left"
                                                    title="Mark all as read"
                                                >
                                                    <i class="la la-check-square"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="form-content p-0">
                                            <div class="list-group drop-reveal-list">
                                                <a
                                                    href="#"
                                                    class="list-group-item list-group-item-action border-top-0"
                                                >
                                                    <div class="msg-body d-flex align-items-center">
                                                        <div class="icon-element flex-shrink-0 me-3 ms-0">
                                                            <i class="la la-bell"></i>
                                                        </div>
                                                        <div class="msg-content w-100">
                                                            <h3 class="title pb-1">Status updated</h3>
                                                            <p class="msg-text">2 min ago</p>
                                                        </div>
                                                        <span
                                                            class="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0"
                                                            data-bs-toggle="tooltip"
                                                            data-placement="left"
                                                            title="Mark as read"
                                                        >
                                                            <i class="la la-check-square"></i>
                                                        </span>
                                                    </div>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="list-group-item list-group-item-action"
                                                >
                                                    <div class="msg-body d-flex align-items-center">
                                                        <div
                                                            class="icon-element bg-1 flex-shrink-0 me-3 ms-0"
                                                        >
                                                            <i class="la la-bell"></i>
                                                        </div>
                                                        <div class="msg-content w-100">
                                                            <h3 class="title pb-1">50% Discount Offer</h3>
                                                            <p class="msg-text">2 min ago</p>
                                                        </div>
                                                        <span
                                                            class="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0"
                                                            data-bs-toggle="tooltip"
                                                            data-placement="left"
                                                            title="Mark as read"
                                                        >
                                                            <i class="la la-check-square"></i>
                                                        </span>
                                                    </div>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="list-group-item list-group-item-action"
                                                >
                                                    <div class="msg-body d-flex align-items-center">
                                                        <div
                                                            class="icon-element bg-2 flex-shrink-0 me-3 ms-0"
                                                        >
                                                            <i class="la la-check"></i>
                                                        </div>
                                                        <div class="msg-content w-100">
                                                            <h3 class="title pb-1">
                                                                Your account has been created
                                                            </h3>
                                                            <p class="msg-text">1 day ago</p>
                                                        </div>
                                                        <span
                                                            class="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0"
                                                            data-bs-toggle="tooltip"
                                                            data-placement="left"
                                                            title="Mark as read"
                                                        >
                                                            <i class="la la-check-square"></i>
                                                        </span>
                                                    </div>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="list-group-item list-group-item-action"
                                                >
                                                    <div class="msg-body d-flex align-items-center">
                                                        <div
                                                            class="icon-element bg-3 flex-shrink-0 me-3 ms-0"
                                                        >
                                                            <i class="la la-user"></i>
                                                        </div>
                                                        <div class="msg-content w-100">
                                                            <h3 class="title pb-1">Your account updated</h3>
                                                            <p class="msg-text">2 hrs ago</p>
                                                        </div>
                                                        <span
                                                            class="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0"
                                                            data-bs-toggle="tooltip"
                                                            data-placement="left"
                                                            title="Mark as read"
                                                        >
                                                            <i class="la la-check-square"></i>
                                                        </span>
                                                    </div>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="list-group-item list-group-item-action"
                                                >
                                                    <div class="msg-body d-flex align-items-center">
                                                        <div
                                                            class="icon-element bg-4 flex-shrink-0 me-3 ms-0"
                                                        >
                                                            <i class="la la-lock"></i>
                                                        </div>
                                                        <div class="msg-content w-100">
                                                            <h3 class="title pb-1">Your password changed</h3>
                                                            <p class="msg-text">Yesterday</p>
                                                        </div>
                                                        <span
                                                            class="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0"
                                                            data-bs-toggle="tooltip"
                                                            data-placement="left"
                                                            title="Mark as read"
                                                        >
                                                            <i class="la la-check-square"></i>
                                                        </span>
                                                    </div>
                                                </a>
                                                <a
                                                    href="#"
                                                    class="list-group-item list-group-item-action"
                                                >
                                                    <div class="msg-body d-flex align-items-center">
                                                        <div
                                                            class="icon-element bg-5 flex-shrink-0 me-3 ms-0"
                                                        >
                                                            <i class="la la-user"></i>
                                                        </div>
                                                        <div class="msg-content w-100">
                                                            <h3 class="title pb-1">Your account updated</h3>
                                                            <p class="msg-text">2 hrs ago</p>
                                                        </div>
                                                        <span
                                                            class="icon-element mark-as-read-btn flex-shrink-0 ms-auto me-0"
                                                            data-bs-toggle="tooltip"
                                                            data-placement="left"
                                                            title="Mark as read"
                                                        >
                                                            <i class="la la-check-square"></i>
                                                        </span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-box dashboard-card">
                                        <div class="form-title-wrap">
                                            <h3 class="title">
                                                Sales earning this month for each service
                                            </h3>
                                        </div>
                                        <div class="form-content">
                                            <div class="row">
                                                <div class="col-lg-3 responsive-column-l">
                                                    <div
                                                        class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-1 pb-0"
                                                    >
                                                        <div class="d-flex pb-3 justify-content-between">
                                                            <div class="info-content">
                                                                <p class="info__desc">Hotels</p>
                                                                <h4 class="info__title">$1,455.00</h4>
                                                            </div>
                                                            <div
                                                                class="info-icon icon-element bg-white text-color-2"
                                                            >
                                                                <i class="la la-hotel"></i>
                                                            </div>
                                                        </div>
                                                        <div class="section-block"></div>
                                                        <a
                                                            href="#"
                                                            class="d-flex align-items-center justify-content-between view-all"
                                                        >View Details <i class="la la-arrow-right"></i
                                                        ></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 responsive-column-l">
                                                    <div
                                                        class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-2 pb-0"
                                                    >
                                                        <div class="d-flex pb-3 justify-content-between">
                                                            <div class="info-content">
                                                                <p class="info__desc">Cars</p>
                                                                <h4 class="info__title">$422.00</h4>
                                                            </div>
                                                            <div
                                                                class="info-icon icon-element bg-white text-color-3"
                                                            >
                                                                <i class="la la-car"></i>
                                                            </div>
                                                        </div>
                                                        <div class="section-block"></div>
                                                        <a
                                                            href="#"
                                                            class="d-flex align-items-center justify-content-between view-all"
                                                        >View Details <i class="la la-arrow-right"></i
                                                        ></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 responsive-column-l">
                                                    <div
                                                        class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-3 pb-0"
                                                    >
                                                        <div class="d-flex pb-3 justify-content-between">
                                                            <div class="info-content">
                                                                <p class="info__desc">Cruises</p>
                                                                <h4 class="info__title">$827.00</h4>
                                                            </div>
                                                            <div
                                                                class="info-icon icon-element bg-white text-color-4"
                                                            >
                                                                <i class="la la-ship"></i>
                                                            </div>
                                                        </div>
                                                        <div class="section-block"></div>
                                                        <a
                                                            href="#"
                                                            class="d-flex align-items-center justify-content-between view-all"
                                                        >View Details <i class="la la-arrow-right"></i
                                                        ></a>
                                                    </div>
                                                </div>
                                                <div class="col-lg-3 responsive-column-l">
                                                    <div
                                                        class="icon-box icon-layout-2 dashboard-icon-box dashboard--icon-box bg-4 pb-0"
                                                    >
                                                        <div class="d-flex pb-3 justify-content-between">
                                                            <div class="info-content">
                                                                <p class="info__desc">Flights</p>
                                                                <h4 class="info__title">$325.00</h4>
                                                            </div>
                                                            <div
                                                                class="info-icon icon-element bg-white text-color-5"
                                                            >
                                                                <i class="la la-plane"></i>
                                                            </div>
                                                        </div>
                                                        <div class="section-block"></div>
                                                        <a
                                                            href="#"
                                                            class="d-flex align-items-center justify-content-between view-all"
                                                        >View Details <i class="la la-arrow-right"></i
                                                        ></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 responsive-column--m">
                                    <div class="form-box dashboard-card">
                                        <div class="form-title-wrap">
                                            <h3 class="title">Total Orders</h3>
                                        </div>
                                        <div class="form-content">
                                            <canvas id="bar-chart"></canvas>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="border-top mt-4"></div>
                            
                            <Footer />

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PartnerDashboard