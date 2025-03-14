import React from 'react'
import imgTeam9 from '../../assets/images/team9.jpg'

const Sidebar_Admin = () => {
    return (
        <>
            <div class="sidebar-nav sidebar--nav">
                <div class="sidebar-nav-body">
                    <div class="side-menu-close">
                        <i class="la la-times"></i>
                    </div>
                    <div class="author-content">
                        <div class="d-flex align-items-center">
                            <div class="author-img avatar-sm">
                                <img src={imgTeam9} alt="testimonial image" />
                            </div>
                            <div class="author-bio">
                                <h4 class="author__title">Royel travel agency</h4>
                                <span class="author__meta">Welcome to Admin Panel</span>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-menu-wrap">
                        <ul class="sidebar-menu toggle-menu list-items">
                            <li class="page-active">
                                <a href="admin-dashboard.html"
                                ><i class="la la-dashboard me-2"></i>Dashboard</a
                                >
                            </li>
                            <li>
                                <a href="admin-dashboard-booking.html"
                                ><i class="la la-shopping-cart me-2 text-color"></i>Booking</a
                                >
                            </li>
                            <li>
                                <span class="side-menu-icon toggle-menu-icon">
                                    <i class="la la-angle-down"></i>
                                </span>
                                <a href="admin-dashboard-orders.html"
                                ><i class="la la-list me-2 text-color-2"></i>Orders</a
                                >
                                <ul class="toggle-drop-menu">
                                    <li>
                                        <a href="admin-dashboard-orders-details.html"
                                        >Order Details</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span class="side-menu-icon toggle-menu-icon">
                                    <i class="la la-angle-down"></i>
                                </span>
                                <a href="admin-dashboard-travellers.html"
                                ><i class="la la-users me-2 text-color-3"></i>Travellers</a
                                >
                                <ul class="toggle-drop-menu">
                                    <li>
                                        <a href="admin-dashboard-traveler-detail.html"
                                        >Traveller Details</a
                                        >
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="admin-dashboard-visa.html"
                                ><i class="la la-plane me-2 text-color-4"></i>Visa
                                    Application</a
                                >
                            </li>
                            <li>
                                <a href="admin-dashboard-reviews.html"
                                ><i class="la la-star me-2 text-color-5"></i>Reviews</a
                                >
                            </li>
                            <li>
                                <a href="admin-dashboard-wishlist.html"
                                ><i class="la la-heart me-2 text-color-6"></i>Wishlist</a
                                >
                            </li>
                            <li>
                                <a href="admin-dashboard-travel-agents.html"
                                ><i class="la la-text-width me-2 text-color-7"></i>Travel
                                    Agents</a
                                >
                            </li>
                            <li>
                                <span class="side-menu-icon toggle-menu-icon">
                                    <i class="la la-angle-down"></i>
                                </span>
                                <a href="#"
                                ><i class="la la-area-chart me-2 text-color-8"></i>Finance</a
                                >
                                <ul class="toggle-drop-menu">
                                    <li><a href="admin-invoice.html">Invoice</a></li>
                                    <li><a href="admin-payments.html">Payments</a></li>
                                    <li><a href="admin-currency-list.html">Currency List</a></li>
                                    <li>
                                        <a href="admin-dashboard-subscribers.html">Subscribers</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span class="side-menu-icon toggle-menu-icon">
                                    <i class="la la-angle-down"></i>
                                </span>
                                <a href="#"
                                ><i class="la la-map-signs me-2 text-color-9"></i>Locations</a
                                >
                                <ul class="toggle-drop-menu">
                                    <li><a href="admin-countries.html">Countries</a></li>
                                    <li><a href="admin-airlines.html">Airlines</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="admin-dashboard-settings.html"
                                ><i class="la la-cog me-2 text-color-10"></i>Settings</a
                                >
                            </li>
                            <li>
                                <a href="index.html"
                                ><i class="la la-power-off me-2 text-color-11"></i>Logout</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar_Admin
