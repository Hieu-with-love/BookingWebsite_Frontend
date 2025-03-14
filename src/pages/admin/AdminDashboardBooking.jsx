import React from 'react'

const AdminDashboardBooking = () => {
    return (
        <div>
            <div class="user-canvas-container">
                <div class="side-menu-close">
                    <i class="la la-times"></i>
                </div>
                {/* {/* end menu-toggler */}
                <div class="user-canvas-nav">
                    <div class="section-tab section-tab-2 text-center pt-4 pb-3 ps-4">
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item">
                                <a
                                    class="nav-link active"
                                    id="notification-tab"
                                    data-bs-toggle="tab"
                                    href="#notification"
                                    role="tab"
                                    aria-controls="notification"
                                    aria-selected="false"
                                >
                                    Notifications
                                </a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    id="message-tab"
                                    data-bs-toggle="tab"
                                    href="#message"
                                    role="tab"
                                    aria-controls="message"
                                    aria-selected="false"
                                >
                                    Messages
                                </a>
                            </li>

                            <li class="nav-item">
                                <a
                                    class="nav-link"
                                    id="account-tab"
                                    data-bs-toggle="tab"
                                    href="#account"
                                    role="tab"
                                    aria-controls="account"
                                    aria-selected="true"
                                >
                                    Account
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* {/* end section-tab */}
                </div>
                <div class="user-canvas-nav-content">
                    <div class="tab-content" id="myTabContent">
                        <div
                            class="tab-pane fade show active"
                            id="notification"
                            role="tabpanel"
                            aria-labelledby="notification-tab"
                        >
                            <div class="user-sidebar-item">
                                <div class="notification-item">
                                    <div class="list-group drop-reveal-list">
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="icon-element flex-shrink-0 me-3 ms-0">
                                                    <i class="la la-bell"></i>
                                                </div>
                                                <div class="msg-content w-100">
                                                    <h3 class="title pb-1">Your request has been sent</h3>
                                                    <p class="msg-text">2 min ago</p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="icon-element bg-2 flex-shrink-0 me-3 ms-0">
                                                    <i class="la la-check"></i>
                                                </div>
                                                <div class="msg-content w-100">
                                                    <h3 class="title pb-1">
                                                        Your account has been created
                                                    </h3>
                                                    <p class="msg-text">1 day ago</p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="icon-element bg-3 flex-shrink-0 me-3 ms-0">
                                                    <i class="la la-user"></i>
                                                </div>
                                                <div class="msg-content w-100">
                                                    <h3 class="title pb-1">Your account updated</h3>
                                                    <p class="msg-text">2 hrs ago</p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="icon-element bg-4 flex-shrink-0 me-3 ms-0">
                                                    <i class="la la-lock"></i>
                                                </div>
                                                <div class="msg-content w-100">
                                                    <h3 class="title pb-1">Your password changed</h3>
                                                    <p class="msg-text">Yesterday</p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="icon-element bg-5 flex-shrink-0 me-3 ms-0">
                                                    <i class="la la-envelope"></i>
                                                </div>
                                                <div class="msg-content w-100">
                                                    <h3 class="title pb-1">Your email sent</h3>
                                                    <p class="msg-text">Yesterday</p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="icon-element bg-6 flex-shrink-0 me-3 ms-0">
                                                    <i class="la la-envelope"></i>
                                                </div>
                                                <div class="msg-content w-100">
                                                    <h3 class="title pb-1">Your email changed</h3>
                                                    <p class="msg-text">Yesterday</p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                    </div>
                                </div>
                                {/* {/* end notification-item */}
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="message"
                            role="tabpanel"
                            aria-labelledby="message-tab"
                        >
                            <div class="user-sidebar-item">
                                <div class="notification-item">
                                    <div class="list-group drop-reveal-list">
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="avatar flex-shrink-0 me-3">
                                                    <img src="images/team8.jpg" alt="" />
                                                </div>
                                                <div class="msg-content w-100">
                                                    <div
                                                        class="d-flex align-items-center justify-content-between"
                                                    >
                                                        <h3 class="title pb-1">Steve Wornder</h3>
                                                        <span class="msg-text">3 min ago</span>
                                                    </div>
                                                    <p class="msg-text">
                                                        Ancillae delectus necessitatibus no eam
                                                    </p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="avatar flex-shrink-0 me-3">
                                                    <img src="images/team9.jpg" alt="" />
                                                </div>
                                                <div class="msg-content w-100">
                                                    <div
                                                        class="d-flex align-items-center justify-content-between"
                                                    >
                                                        <h3 class="title pb-1">Marc Twain</h3>
                                                        <span class="msg-text">1 hrs ago</span>
                                                    </div>
                                                    <p class="msg-text">
                                                        Ancillae delectus necessitatibus no eam
                                                    </p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="avatar flex-shrink-0 me-3">
                                                    <img src="images/team10.jpg" alt="" />
                                                </div>
                                                <div class="msg-content w-100">
                                                    <div
                                                        class="d-flex align-items-center justify-content-between"
                                                    >
                                                        <h3 class="title pb-1">Enzo Ferrari</h3>
                                                        <span class="msg-text">2 hrs ago</span>
                                                    </div>
                                                    <p class="msg-text">
                                                        Ancillae delectus necessitatibus no eam
                                                    </p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="avatar flex-shrink-0 me-3">
                                                    <img src="images/team11.jpg" alt="" />
                                                </div>
                                                <div class="msg-content w-100">
                                                    <div
                                                        class="d-flex align-items-center justify-content-between"
                                                    >
                                                        <h3 class="title pb-1">Lucas Swing</h3>
                                                        <span class="msg-text">3 hrs ago</span>
                                                    </div>
                                                    <p class="msg-text">
                                                        Ancillae delectus necessitatibus no eam
                                                    </p>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                    </div>
                                </div>
                                {/* {/* end notification-item */}
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="account"
                            role="tabpanel"
                            aria-labelledby="account-tab"
                        >
                            <div class="user-action-wrap user-sidebar-panel">
                                <div class="notification-item">
                                    <a href="user-dashboard-profile.html" class="dropdown-item">
                                        <div class="d-flex align-items-center">
                                            <div class="avatar avatar-sm flex-shrink-0 me-2">
                                                <img src="images/team8.jpg" alt="team-img" />
                                            </div>
                                            <span class="font-size-14 font-weight-bold">Ali Tufan</span>
                                        </div>
                                    </a>
                                    <div class="list-group drop-reveal-list user-drop-reveal-list">
                                        <a
                                            href="user-dashboard-profile.html"
                                            class="list-group-item list-group-item-action"
                                        >
                                            <div class="msg-body">
                                                <div class="msg-content">
                                                    <h3 class="title">
                                                        <i class="la la-user me-2"></i>My Profile
                                                    </h3>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a
                                            href="user-dashboard-booking.html"
                                            class="list-group-item list-group-item-action"
                                        >
                                            <div class="msg-body">
                                                <div class="msg-content">
                                                    <h3 class="title">
                                                        <i class="la la-shopping-cart me-2"></i>My Booking
                                                    </h3>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a
                                            href="user-dashboard-reviews.html"
                                            class="list-group-item list-group-item-action"
                                        >
                                            <div class="msg-body">
                                                <div class="msg-content">
                                                    <h3 class="title">
                                                        <i class="la la-heart me-2"></i>My Reviews
                                                    </h3>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <a
                                            href="user-dashboard-settings.html"
                                            class="list-group-item list-group-item-action"
                                        >
                                            <div class="msg-body">
                                                <div class="msg-content">
                                                    <h3 class="title">
                                                        <i class="la la-gear me-2"></i>Settings
                                                    </h3>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                        <div class="section-block"></div>
                                        <a
                                            href="index.html"
                                            class="list-group-item list-group-item-action"
                                        >
                                            <div class="msg-body">
                                                <div class="msg-content">
                                                    <h3 class="title">
                                                        <i class="la la-power-off me-2"></i>Logout
                                                    </h3>
                                                </div>
                                            </div>
                                            {/* {/* end msg-body */}
                                        </a>
                                    </div>
                                </div>
                                {/* {/* end notification-item */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sidebar-nav sidebar--nav">
                <div class="sidebar-nav-body">
                    <div class="side-menu-close">
                        <i class="la la-times"></i>
                    </div>
                    {/* {/* end menu-toggler */}
                    <div class="author-content">
                        <div class="d-flex align-items-center">
                            <div class="author-img avatar-sm">
                                <img src="images/team9.jpg" alt="testimonial image" />
                            </div>
                            <div class="author-bio">
                                <h4 class="author__title">Royel travel agency</h4>
                                <span class="author__meta">Welcome to Admin Panel</span>
                            </div>
                        </div>
                    </div>
                    <div class="sidebar-menu-wrap">
                        <ul class="sidebar-menu toggle-menu list-items">
                            <li>
                                <a href="admin-dashboard.html"
                                ><i class="la la-dashboard me-2 text-color"></i>Dashboard</a
                                >
                            </li>
                            <li class="page-active">
                                <a href="admin-dashboard-booking.html"
                                ><i class="la la-shopping-cart me-2"></i>Booking</a
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
                    {/* {/* end sidebar-menu-wrap */}
                </div>
            </div>

            <section class="dashboard-area">
                <div class="dashboard-nav dashboard--nav">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="menu-wrapper">
                                    <div class="logo me-5">
                                        <a href="index.html"
                                        ><img src="images/logo2.png" alt="logo"
                                            /></a>
                                        <div class="menu-toggler">
                                            <i class="la la-bars"></i>
                                            <i class="la la-times"></i>
                                        </div>
                                        {/* {/* end menu-toggler */}
                                        <div class="user-menu-open">
                                            <i class="la la-user"></i>
                                        </div>
                                        {/* {/* end user-menu-open */}
                                    </div>
                                    <div class="dashboard-search-box">
                                        <div class="contact-form-action">
                                            <form action="#">
                                                <div class="form-group mb-0">
                                                    <input
                                                        class="form-control"
                                                        type="text"
                                                        name="text"
                                                        placeholder="Search"
                                                    />
                                                    <button class="search-btn">
                                                        <i class="la la-search"></i>
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="nav-btn ms-auto">
                                        <div class="notification-wrap d-flex align-items-center">
                                            <div class="notification-item me-2">
                                                <div class="dropdown">
                                                    <a
                                                        href="#"
                                                        class="dropdown-toggle drop-reveal-toggle-icon"
                                                        id="notificationDropdownMenu"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i class="la la-bell"></i>
                                                        <span class="noti-count">4</span>
                                                    </a>
                                                    <div
                                                        class="dropdown-menu dropdown-reveal dropdown-menu-xl dropdown-menu-right"
                                                    >
                                                        <div class="dropdown-header drop-reveal-header">
                                                            <h6 class="title">
                                                                You have
                                                                <strong class="text-black">4</strong>
                                                                notifications
                                                            </h6>
                                                        </div>
                                                        <div class="list-group drop-reveal-list">
                                                            <a
                                                                href="#"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body d-flex align-items-center">
                                                                    <div
                                                                        class="icon-element flex-shrink-0 me-3 ms-0"
                                                                    >
                                                                        <i class="la la-bell"></i>
                                                                    </div>
                                                                    <div class="msg-content w-100">
                                                                        <h3 class="title pb-1">
                                                                            Your request has been sent
                                                                        </h3>
                                                                        <p class="msg-text">2 min ago</p>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
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
                                                                </div>
                                                                {/* {/* end msg-body */}
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
                                                                        <h3 class="title pb-1">
                                                                            Your account updated
                                                                        </h3>
                                                                        <p class="msg-text">2 hrs ago</p>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
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
                                                                        <h3 class="title pb-1">
                                                                            Your password changed
                                                                        </h3>
                                                                        <p class="msg-text">Yesterday</p>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            class="dropdown-item drop-reveal-btn text-center"
                                                        >View all</a
                                                        >
                                                    </div>
                                                    {/* {/* end dropdown-menu */}
                                                </div>
                                            </div>
                                            {/* {/* end notification-item */}
                                            <div class="notification-item me-2">
                                                <div class="dropdown">
                                                    <a
                                                        href="#"
                                                        class="dropdown-toggle drop-reveal-toggle-icon"
                                                        id="messageDropdownMenu"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i class="la la-envelope"></i>
                                                        <span class="noti-count">4</span>
                                                    </a>
                                                    <div
                                                        class="dropdown-menu dropdown-reveal dropdown-menu-xl dropdown-menu-right"
                                                    >
                                                        <div class="dropdown-header drop-reveal-header">
                                                            <h6 class="title">
                                                                You have
                                                                <strong class="text-black">4</strong> messages
                                                            </h6>
                                                        </div>
                                                        <div class="list-group drop-reveal-list">
                                                            <a
                                                                href="#"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body d-flex align-items-center">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <img src="images/team8.jpg" alt="" />
                                                                    </div>
                                                                    <div class="msg-content w-100">
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between"
                                                                        >
                                                                            <h3 class="title pb-1">Steve Wornder</h3>
                                                                            <span class="msg-text">3 min ago</span>
                                                                        </div>
                                                                        <p class="msg-text">
                                                                            Ancillae delectus necessitatibus no eam
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body d-flex align-items-center">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <img src="images/team9.jpg" alt="" />
                                                                    </div>
                                                                    <div class="msg-content w-100">
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between"
                                                                        >
                                                                            <h3 class="title pb-1">Marc Twain</h3>
                                                                            <span class="msg-text">1 hrs ago</span>
                                                                        </div>
                                                                        <p class="msg-text">
                                                                            Ancillae delectus necessitatibus no eam
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body d-flex align-items-center">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <img src="images/team10.jpg" alt="" />
                                                                    </div>
                                                                    <div class="msg-content w-100">
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between"
                                                                        >
                                                                            <h3 class="title pb-1">Enzo Ferrari</h3>
                                                                            <span class="msg-text">2 hrs ago</span>
                                                                        </div>
                                                                        <p class="msg-text">
                                                                            Ancillae delectus necessitatibus no eam
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body d-flex align-items-center">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <img src="images/team11.jpg" alt="" />
                                                                    </div>
                                                                    <div class="msg-content w-100">
                                                                        <div
                                                                            class="d-flex align-items-center justify-content-between"
                                                                        >
                                                                            <h3 class="title pb-1">Lucas Swing</h3>
                                                                            <span class="msg-text">3 hrs ago</span>
                                                                        </div>
                                                                        <p class="msg-text">
                                                                            Ancillae delectus necessitatibus no eam
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            class="dropdown-item drop-reveal-btn text-center"
                                                        >View all</a
                                                        >
                                                    </div>
                                                    {/* {/* end dropdown-menu */}
                                                </div>
                                            </div>
                                            {/* {/* end notification-item */}
                                            <div class="notification-item">
                                                <div class="dropdown">
                                                    <a
                                                        href="#"
                                                        class="dropdown-toggle"
                                                        id="userDropdownMenu"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <div class="d-flex align-items-center">
                                                            <div class="avatar avatar-sm flex-shrink-0 me-2">
                                                                <img src="images/team8.jpg" alt="team-img" />
                                                            </div>
                                                            <span class="font-size-14 font-weight-bold"
                                                            >Royel Admin</span
                                                            >
                                                        </div>
                                                    </a>
                                                    <div
                                                        class="dropdown-menu dropdown-reveal dropdown-menu-md dropdown-menu-right"
                                                    >
                                                        <div
                                                            class="dropdown-item drop-reveal-header user-reveal-header"
                                                        >
                                                            <h6 class="title text-uppercase">Welcome!</h6>
                                                        </div>
                                                        <div
                                                            class="list-group drop-reveal-list user-drop-reveal-list"
                                                        >
                                                            <a
                                                                href="admin-dashboard-settings.html"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body">
                                                                    <div class="msg-content">
                                                                        <h3 class="title">
                                                                            <i class="la la-user me-2"></i> Edit Profile
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                            <a
                                                                href="admin-dashboard-orders.html"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body">
                                                                    <div class="msg-content">
                                                                        <h3 class="title">
                                                                            <i class="la la-shopping-cart me-2"></i
                                                                            >Orders
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body">
                                                                    <div class="msg-content">
                                                                        <h3 class="title">
                                                                            <i class="la la-bell me-2"></i>Messages
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                            <a
                                                                href="admin-dashboard-settings.html"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body">
                                                                    <div class="msg-content">
                                                                        <h3 class="title">
                                                                            <i class="la la-gear me-2"></i>Settings
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                            <div class="section-block"></div>
                                                            <a
                                                                href="index.html"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body">
                                                                    <div class="msg-content">
                                                                        <h3 class="title">
                                                                            <i class="la la-power-off me-2"></i>Logout
                                                                        </h3>
                                                                    </div>
                                                                </div>
                                                                {/* {/* end msg-body */}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* {/* end dropdown-menu */}
                                                </div>
                                            </div>
                                            {/* {/* end notification-item */}
                                        </div>
                                    </div>
                                    {/* {/* end nav-btn */}
                                </div>
                                {/* {/* end menu-wrapper */}
                            </div>
                            {/* {/* end col-lg-12 */}
                        </div>
                        {/* {/* end row */}
                    </div>
                    {/* {/* end container-fluid */}
                </div>
                {/* {/* end dashboard-nav */}
                <div class="dashboard-content-wrap">
                    <div class="dashboard-bread dashboard--bread dashboard-bread-2">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="breadcrumb-content">
                                        <div class="section-heading">
                                            <h2 class="sec__title font-size-30 text-white">Booking</h2>
                                        </div>
                                    </div>
                                    {/* {/* end breadcrumb-content */}
                                </div>
                                {/* {/* end col-lg-6 */}
                                <div class="col-lg-6">
                                    <div class="breadcrumb-list text-end">
                                        <ul class="list-items">
                                            <li><a href="index.html" class="text-white">Home</a></li>
                                            <li>Dashboard</li>
                                            <li>Booking</li>
                                        </ul>
                                    </div>
                                    {/* {/* end breadcrumb-list */}
                                </div>
                                {/* {/* end col-lg-6 */}
                            </div>
                            {/* {/* end row */}
                        </div>
                    </div>
                    {/* {/* end dashboard-bread */} 
                    <div class="dashboard-main-content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-box">
                                        <div class="form-title-wrap">
                                            <div
                                                class="d-flex align-items-center justify-content-between"
                                            >
                                                <h3 class="title">Booking Results</h3>
                                                <div class="select-contain select2-container-wrapper">
                                                    <select class="select-contain-select">
                                                        <option value="1">Any Status</option>
                                                        <option value="2">Approved</option>
                                                        <option value="3">Pending</option>
                                                        <option value="4">Cancelled</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-content pb-2">
                                            <div class="card-item card-item-list card-item--list">
                                                <div class="card-img">
                                                    <img src="images/img1.jpg" alt="hotel-img" />
                                                </div>
                                                <div class="card-body">
                                                    <div class="d-flex align-items-center">
                                                        <h3 class="card-title">Hotel Malte – Astotel</h3>
                                                        <span class="badge text-bg-warning text-white ms-2"
                                                        >Pending</span
                                                        >
                                                    </div>
                                                    <ul class="list-items list-items-2 pt-2 pb-3">
                                                        <li><span>Start date:</span>12 December 2019</li>
                                                        <li><span>End date:</span>12 Jun 2020</li>
                                                        <li><span>Booking details:</span> 3 People</li>
                                                        <li><span>Client:</span> David Martin</li>
                                                    </ul>
                                                    <div class="btn-box">
                                                        <a
                                                            href="#"
                                                            class="theme-btn theme-btn-small theme-btn-transparent"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalPopup"
                                                        ><i class="la la-envelope me-1"></i>Send Message</a
                                                        >
                                                    </div>
                                                </div>
                                                <div class="action-btns">
                                                    <a href="#" class="theme-btn theme-btn-small me-2"
                                                    ><i class="la la-check-circle me-1"></i>Approve</a
                                                    >
                                                    <a href="#" class="theme-btn theme-btn-small"
                                                    ><i class="la la-times me-1"></i>Cancel</a
                                                    >
                                                </div>
                                            </div>
                                            {/* {/* end card-item */}
                                            <div
                                                class="card-item flight-card card-item-list card-item--list"
                                            >
                                                <div class="card-img">
                                                    <img src="images/img15.jpg" alt="destination-img" />
                                                </div>
                                                <div class="card-body">
                                                    <div class="d-flex align-items-center">
                                                        <h3 class="card-title">London to Paris</h3>
                                                        <span class="badge text-bg-success ms-2"
                                                        >Approved</span
                                                        >
                                                    </div>
                                                    <ul class="list-items list-items-2 pt-2 pb-3">
                                                        <li><span>Start date:</span>12 December 2019</li>
                                                        <li><span>End date:</span>12 Jun 2020</li>
                                                        <li><span>Booking details:</span> 2 People</li>
                                                        <li><span>Client:</span> Mark Wing</li>
                                                    </ul>
                                                    <div class="btn-box">
                                                        <a
                                                            href="#"
                                                            class="theme-btn theme-btn-small theme-btn-transparent"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalPopup"
                                                        ><i class="la la-envelope me-1"></i>Send Message</a
                                                        >
                                                    </div>
                                                </div>
                                                <div class="action-btns">
                                                    <a href="#" class="theme-btn theme-btn-small me-2"
                                                    ><i class="la la-check-circle me-1"></i>Approve</a
                                                    >
                                                    <a href="#" class="theme-btn theme-btn-small"
                                                    ><i class="la la-times me-1"></i>Cancel</a
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="card-item car-card card-item-list card-item--list"
                                            >
                                                <div class="card-img">
                                                    <img src="images/car-img2.png" alt="car-img" />
                                                </div>
                                                <div class="card-body">
                                                    <div class="d-flex align-items-center">
                                                        <h3 class="card-title">
                                                            Volkswagen Jetta 2 Doors or Similar
                                                        </h3>
                                                        <span class="badge text-bg-warning text-white ms-2"
                                                        >Pending</span
                                                        >
                                                    </div>
                                                    <ul class="list-items list-items-2 pt-2 pb-3">
                                                        <li><span>Start date:</span>12 December 2019</li>
                                                        <li><span>End date:</span>12 Jun 2020</li>
                                                        <li><span>Booking details:</span> 4 People</li>
                                                        <li><span>Client:</span> John Smith</li>
                                                    </ul>
                                                    <div class="btn-box">
                                                        <a
                                                            href="#"
                                                            class="theme-btn theme-btn-small theme-btn-transparent"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalPopup"
                                                        ><i class="la la-envelope me-1"></i>Send Message</a
                                                        >
                                                    </div>
                                                </div>
                                                <div class="action-btns">
                                                    <a href="#" class="theme-btn theme-btn-small me-2"
                                                    ><i class="la la-check-circle me-1"></i>Approve</a
                                                    >
                                                    <a href="#" class="theme-btn theme-btn-small"
                                                    ><i class="la la-times me-1"></i>Cancel</a
                                                    >
                                                </div>
                                            </div>
                                            <div
                                                class="card-item cruise--card card-item-list card-item--list"
                                            >
                                                <div class="card-img">
                                                    <a href="cruise-details.html" class="d-block">
                                                        <img src="images/cruise-img6.jpg" alt="cruise-img" />
                                                    </a>
                                                </div>
                                                <div class="card-body">
                                                    <div class="d-flex align-items-center">
                                                        <h3 class="card-title">
                                                            7 Nights Caribbean Southern Cruise
                                                        </h3>
                                                        <span class="badge text-bg-danger ms-2"
                                                        >Canceled</span
                                                        >
                                                    </div>
                                                    <ul class="list-items list-items-2 pt-2 pb-3">
                                                        <li><span>Start date:</span>12 December 2019</li>
                                                        <li><span>End date:</span>12 Jun 2020</li>
                                                        <li><span>Booking details:</span> 4 People</li>
                                                        <li><span>Client:</span> John Doe</li>
                                                    </ul>
                                                    <div class="btn-box">
                                                        <a
                                                            href="#"
                                                            class="theme-btn theme-btn-small theme-btn-transparent"
                                                            data-bs-toggle="modal"
                                                            data-bs-target="#modalPopup"
                                                        ><i class="la la-envelope me-1"></i>Send Message</a
                                                        >
                                                    </div>
                                                </div>
                                                <div class="action-btns">
                                                    <a href="#" class="theme-btn theme-btn-small me-2"
                                                    ><i class="la la-check-circle me-1"></i>Approve</a
                                                    >
                                                    <a href="#" class="theme-btn theme-btn-small"
                                                    ><i class="la la-times me-1"></i>Cancel</a
                                                    >
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* {/* end form-box */}
                                </div>
                                {/* end col-lg-12 */}
                            </div>
                            {/* end row */}
                            <div class="row">
                                <div class="col-lg-12">
                                    <nav aria-label="Page navigation example">
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a
                                                    class="page-link page-link-nav"
                                                    href="#"
                                                    aria-label="Previous"
                                                >
                                                    <span aria-hidden="true"
                                                    ><i class="la la-angle-left"></i
                                                    ></span>
                                                    <span class="sr-only">Previous</span>
                                                </a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link page-link-nav" href="#">1</a>
                                            </li>
                                            <li class="page-item active">
                                                <a class="page-link page-link-nav" href="#"
                                                >2 <span class="sr-only">(current)</span></a
                                                >
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link page-link-nav" href="#">3</a>
                                            </li>
                                            <li class="page-item">
                                                <a
                                                    class="page-link page-link-nav"
                                                    href="#"
                                                    aria-label="Next"
                                                >
                                                    <span aria-hidden="true"
                                                    ><i class="la la-angle-right"></i
                                                    ></span>
                                                    <span class="sr-only">Next</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="border-top mt-5"></div>
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <div class="copy-right padding-top-30px">
                                        <p class="copy__desc">
                                            &copy; Copyright Trizen <span id="get-year"></span> . Made
                                            with <span class="la la-heart"></span> by
                                            <a href="https://themeforest.net/user/techydevs/portfolio"
                                            >TechyDevs</a
                                            >
                                        </p>
                                    </div>
                                    {/* end copy-right */}
                                </div>
                                {/* end col-lg-7 */}
                                <div class="col-lg-5">
                                    <div class="copy-right-content text-end padding-top-30px">
                                        <ul class="social-profile">
                                            <li>
                                                <a href="#"><i class="lab la-facebook-f"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="lab la-twitter"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="lab la-instagram"></i></a>
                                            </li>
                                            <li>
                                                <a href="#"><i class="lab la-linkedin-in"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* {/* end copy-right-content */}
                                </div>
                                {/* {/* end col-lg-5 */}
                            </div>
                            {/* {/* end row */}
                        </div>
                        {/* {/* end container-fluid */}
                    </div>
                    {/* {/* end dashboard-main-content */}
                </div>
                {/* {/* end dashboard-content-wrap */}
            </section>
        </div>
    )
}

export default AdminDashboardBooking
