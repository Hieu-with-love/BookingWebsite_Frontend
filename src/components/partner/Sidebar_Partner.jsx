import React from 'react'
import imgTeam9 from '../../assets/images/team9.jpg'
import { Link, useLocation } from 'react-router-dom'

const Sidebar_Partner = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'page-active' : '';
    };

    return (
        <>
            <div className="sidebar-nav sidebar--nav">
                <div className="sidebar-nav-body">
                    <div className="side-menu-close">
                        <i className="la la-times"></i>
                    </div>
                    <div className="author-content">
                        <div className="d-flex align-items-center">
                            <div className="author-img avatar-sm">
                                <img src={imgTeam9} alt="testimonial image" />
                            </div>
                            <div className="author-bio">
                                <h4 className="author__title">Royel travel agency</h4>
                                <span className="author__meta">Welcome to Partner Panel</span>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-menu-wrap">
                        <ul className="sidebar-menu toggle-menu list-items">
                            <li className={isActive('/partner')}>
                                <Link to="/partner">
                                    <i className="la la-dashboard me-2"></i>Dashboard
                                </Link>
                            </li>
                            <li className={isActive('/partner/booking')}>
                                <Link to="/partner/booking">
                                    <i className="la la-shopping-cart me-2 text-color-3"></i>Booking
                                </Link>
                            </li>
                            <li className={isActive('/partner/list-hotel') || isActive('/partner/add-hotel')}>
                                <span className="side-menu-icon toggle-menu-icon">
                                    <i className="la la-angle-down"></i>
                                </span>
                                <Link to="/partner/list-hotel">
                                    <i className="la la-list me-2 text-color-8"></i>Quản lý khách sạn
                                </Link>
                                <ul className="toggle-drop-menu">
                                    <li className={isActive('/partner/add-hotel')}>
                                        <Link to="/partner/add-hotel">
                                            <i className="la la-plus-circle me-2 text-color"></i> Add Hotel
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={isActive('/partner/list-room') || isActive('/partner/add-room')}>
                                <span className="side-menu-icon toggle-menu-icon">
                                    <i className="la la-angle-down"></i>
                                </span>
                                <Link to="/partner/list-room">
                                    <i className="la la-list me-2 text-color-2"></i>Quản lý phòng
                                </Link>
                                <ul className="toggle-drop-menu">
                                    <li className={isActive('/partner/add-room')}>
                                        <Link to="/partner/add-room">
                                            <i className="la la-plus-circle me-2 text-color-2"></i> Add Room
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={isActive('/partner/revenue')}>
                                <Link to="/partner/revenue">
                                    <i className="la la-chart-bar me-2 text-color-4"></i>
                                    Xem báo cáo doanh thu
                                </Link>
                            </li>
                            <li className={isActive('/partner/list-discount')}>
                                <Link to="/partner/list-discount">
                                    <i className="la la-tags me-2 text-color-5"></i>Quản lý giảm giá
                                </Link>
                            </li>
                            <li className={isActive('/partner/wishlist')}>
                                <Link to="/partner/wishlist">
                                    <i className="la la-heart me-2 text-color-6"></i>Wishlist
                                </Link>
                            </li>
                            <li className={isActive('/partner/travel-agents')}>
                                <Link to="/partner/travel-agents">
                                    <i className="la la-text-width me-2 text-color-7"></i>Travel Agents
                                </Link>
                            </li>
                            <li className={isActive('/partner/finance')}>
                                <span className="side-menu-icon toggle-menu-icon">
                                    <i className="la la-angle-down"></i>
                                </span>
                                <Link to="/partner/finance">
                                    <i className="la la-area-chart me-2 text-color-8"></i>Finance
                                </Link>
                                <ul className="toggle-drop-menu">
                                    <li className={isActive('/partner/invoice')}>
                                        <Link to="/partner/invoice">Invoice</Link>
                                    </li>
                                    <li className={isActive('/partner/payments')}>
                                        <Link to="/partner/payments">Payments</Link>
                                    </li>
                                    <li className={isActive('/partner/currency-list')}>
                                        <Link to="/partner/currency-list">Currency List</Link>
                                    </li>
                                    <li className={isActive('/partner/subscribers')}>
                                        <Link to="/partner/subscribers">Subscribers</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={isActive('/partner/locations')}>
                                <span className="side-menu-icon toggle-menu-icon">
                                    <i className="la la-angle-down"></i>
                                </span>
                                <Link to="/partner/locations">
                                    <i className="la la-map-signs me-2 text-color-9"></i>Locations
                                </Link>
                                <ul className="toggle-drop-menu">
                                    <li className={isActive('/partner/countries')}>
                                        <Link to="/partner/countries">Countries</Link>
                                    </li>
                                    <li className={isActive('/partner/airlines')}>
                                        <Link to="/partner/airlines">Airlines</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className={isActive('/partner/settings')}>
                                <Link to="/partner/settings">
                                    <i className="la la-cog me-2 text-color-10"></i>Settings
                                </Link>
                            </li>
                            <li>
                                <Link to="/signin" onClick={() => localStorage.removeItem('token')}>
                                    <i className="la la-power-off me-2 text-color-11"></i>Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar_Partner
