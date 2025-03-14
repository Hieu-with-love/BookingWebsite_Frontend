import React from 'react'
import imgTeam8 from '../../assets/images/team8.jpg'
import imgTeam9 from '../../assets/images/team9.jpg'
import imgTeam10 from '../../assets/images/team10.jpg'
import imgTeam11 from '../../assets/images/team11.jpg'
import logo2 from '../../assets/images/logo2.png'
import Sidebar_Admin from '../../components/Sidebar/Sidebar_Admin'

const AdminReviews = () => {
    return (
        <div>
            <div class="user-canvas-container">
                <div class="side-menu-close">
                    <i class="la la-times"></i>
                </div>
                {/* end menu-toggler */}
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
                    {/* end section-tab */}
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
                                            {/* end msg-body */}
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
                                            {/* end msg-body */}
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
                                            {/* end msg-body */}
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
                                            {/* end msg-body */}
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
                                            {/* end msg-body */}
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
                                            {/* end msg-body */}
                                        </a>
                                    </div>
                                </div>
                                {/* end notification-item */}
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
                                                    <img src={imgTeam8} alt="" />
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
                                            {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="avatar flex-shrink-0 me-3">
                                                    <img src={imgTeam9} alt="" />
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
                                            {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="avatar flex-shrink-0 me-3">
                                                    <img src={imgTeam10} alt="" />
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
                                            {/* end msg-body */}
                                        </a>
                                        <a href="#" class="list-group-item list-group-item-action">
                                            <div class="msg-body d-flex align-items-center">
                                                <div class="avatar flex-shrink-0 me-3">
                                                    <img src={imgTeam11} alt="" />
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
                                            {/* end msg-body */}
                                        </a>
                                    </div>
                                </div>
                                {/* end notification-item */}
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
                                                <img src={imgTeam8} alt="team-img" />
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
                                            {/* end msg-body */}
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
                                            {/* end msg-body */}
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
                                            {/* end msg-body */}
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
                                            {/* end msg-body */}
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
                                            {/* end msg-body */}
                                        </a>
                                    </div>
                                </div>
                                {/* end notification-item */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Sidebar_Admin />

            <section class="dashboard-area">
                <div class="dashboard-nav dashboard--nav">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="menu-wrapper">
                                    <div class="logo me-5">
                                        <a href="index.html"
                                        ><img src={logo2} alt="logo"
                                            /></a>
                                        <div class="menu-toggler">
                                            <i class="la la-bars"></i>
                                            <i class="la la-times"></i>
                                        </div>
                                        {/* end menu-toggler */}
                                        <div class="user-menu-open">
                                            <i class="la la-user"></i>
                                        </div>
                                        {/* end user-menu-open */}
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
                                                                {/* end msg-body */}
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
                                                                {/* end msg-body */}
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
                                                                {/* end msg-body */}
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
                                                                {/* end msg-body */}
                                                            </a>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            class="dropdown-item drop-reveal-btn text-center"
                                                        >View all</a
                                                        >
                                                    </div>
                                                    {/* end dropdown-menu */}
                                                </div>
                                            </div>
                                            {/* end notification-item */}
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
                                                                        <img src={imgTeam8} alt="" />
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
                                                                {/* end msg-body */}
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body d-flex align-items-center">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <img src={imgTeam9} alt="" />
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
                                                                {/* end msg-body */}
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body d-flex align-items-center">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <img src={imgTeam10} alt="" />
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
                                                                {/* end msg-body */}
                                                            </a>
                                                            <a
                                                                href="#"
                                                                class="list-group-item list-group-item-action"
                                                            >
                                                                <div class="msg-body d-flex align-items-center">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <img src={imgTeam11} alt="" />
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
                                                                {/* end msg-body */}
                                                            </a>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            class="dropdown-item drop-reveal-btn text-center"
                                                        >View all</a
                                                        >
                                                    </div>
                                                    {/* end dropdown-menu */}
                                                </div>
                                            </div>
                                            {/* end notification-item */}
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
                                                                <img src={imgTeam8} alt="team-img" />
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
                                                                {/* end msg-body */}
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
                                                                {/* end msg-body */}
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
                                                                {/* end msg-body */}
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
                                                                {/* end msg-body */}
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
                                                                {/* end msg-body */}
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/* end dropdown-menu */}
                                                </div>
                                            </div>
                                            {/* end notification-item */}
                                        </div>
                                    </div>
                                    {/* end nav-btn */}
                                </div>
                                {/* end menu-wrapper */}
                            </div>
                            {/* end col-lg-12 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container-fluid */}
                </div>
                {/* end dashboard-nav */}
                <div class="dashboard-content-wrap">
                    <div class="dashboard-bread dashboard--bread dashboard-bread-2">
                        <div class="container-fluid">
                            <div class="row align-items-center">
                                <div class="col-lg-6">
                                    <div class="breadcrumb-content">
                                        <div class="section-heading">
                                            <h2 class="sec__title font-size-30 text-white">Reviews</h2>
                                        </div>
                                    </div>
                                    {/* end breadcrumb-content */}
                                </div>
                                {/* end col-lg-6 */}
                                <div class="col-lg-6">
                                    <div class="breadcrumb-list text-end">
                                        <ul class="list-items">
                                            <li><a href="index.html" class="text-white">Home</a></li>
                                            <li>Dashboard</li>
                                            <li>Reviews</li>
                                        </ul>
                                    </div>
                                    {/* end breadcrumb-list */}
                                </div>
                                {/* end col-lg-6 */}
                            </div>
                            {/* end row */}
                        </div>
                    </div>
                    {/* end dashboard-bread */}
                    <div class="dashboard-main-content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-box">
                                        <div class="form-title-wrap">
                                            <div
                                                class="d-flex align-items-center justify-content-between"
                                            >
                                                <div>
                                                    <h3 class="title">Review Lists</h3>
                                                    <p class="font-size-14">Showing 1 to 4 of 20 entries</p>
                                                </div>
                                                <div class="select-contain select2-container-wrapper">
                                                    <select class="select-contain-select">
                                                        <option value="1">Any Time</option>
                                                        <option value="2">Latest</option>
                                                        <option value="3">Oldest</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-content">
                                            <div class="comments-list">
                                                <div class="comment">
                                                    <div class="comment-avatar">
                                                        <img
                                                            class="avatar__img"
                                                            alt=""
                                                            src={imgTeam8}
                                                        />
                                                    </div>
                                                    <div class="comment-body">
                                                        <div class="meta-data">
                                                            <h3 class="comment__author">
                                                                Grand Plaza Serviced Apartments
                                                            </h3>
                                                            <div class="meta-data-inner d-flex">
                                                                <p class="comment__meta me-1">
                                                                    By <a href="#">John Smith</a>
                                                                </p>
                                                                <span
                                                                    class="ratings d-flex align-items-center me-1"
                                                                >
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                </span>
                                                                <p class="comment__date">April 5, 2019</p>
                                                            </div>
                                                        </div>
                                                        <p class="comment-content">
                                                            Our stay was pleasant and welcoming. We stayed in an
                                                            apartment meant for 3 adults with kitchen
                                                            facilities. The cleaning services were superp. We
                                                            liked the laundry and kitchen cleaning services on
                                                            top of the regular cleaning services.
                                                        </p>
                                                        <div class="comment-reply">
                                                            <a
                                                                class="theme-btn"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modalPopup"
                                                            >
                                                                <span class="la la-mail-reply me-1"></span>Reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                                <div class="comment">
                                                    <div class="comment-avatar">
                                                        <img
                                                            class="avatar__img"
                                                            alt=""
                                                            src={imgTeam8}
                                                        />
                                                    </div>
                                                    <div class="comment-body">
                                                        <div class="meta-data">
                                                            <h3 class="comment__author">
                                                                Three-Hour South Beach Lunch Tour
                                                            </h3>
                                                            <div class="meta-data-inner d-flex">
                                                                <p class="comment__meta me-1">
                                                                    By <a href="#">Alex smith</a>
                                                                </p>
                                                                <span
                                                                    class="ratings d-flex align-items-center me-1"
                                                                >
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                </span>
                                                                <p class="comment__date">April 5, 2019</p>
                                                            </div>
                                                        </div>
                                                        <p class="comment-content">
                                                            Our stay was pleasant and welcoming. We stayed in an
                                                            apartment meant for 3 adults with kitchen
                                                            facilities. The cleaning services were superp. We
                                                            liked the laundry and kitchen cleaning services on
                                                            top of the regular cleaning services.
                                                        </p>
                                                        <div class="comment-reply">
                                                            <a
                                                                class="theme-btn"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modalPopup"
                                                            >
                                                                <span class="la la-mail-reply me-1"></span>Reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                                <div class="comment">
                                                    <div class="comment-avatar">
                                                        <img
                                                            class="avatar__img"
                                                            alt=""
                                                            src={imgTeam8}
                                                        />
                                                    </div>
                                                    <div class="comment-body">
                                                        <div class="meta-data">
                                                            <h3 class="comment__author">
                                                                7 Night Western Caribbean Cruise
                                                            </h3>
                                                            <div class="meta-data-inner d-flex">
                                                                <p class="comment__meta me-1">
                                                                    By <a href="#">Alex smith</a>
                                                                </p>
                                                                <span
                                                                    class="ratings d-flex align-items-center me-1"
                                                                >
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                </span>
                                                                <p class="comment__date">April 5, 2019</p>
                                                            </div>
                                                        </div>
                                                        <p class="comment-content">
                                                            Our stay was pleasant and welcoming. We stayed in an
                                                            apartment meant for 3 adults with kitchen
                                                            facilities. The cleaning services were superp. We
                                                            liked the laundry and kitchen cleaning services on
                                                            top of the regular cleaning services.
                                                        </p>
                                                        <div class="comment-reply">
                                                            <a
                                                                class="theme-btn"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modalPopup"
                                                            >
                                                                <span class="la la-mail-reply me-1"></span>Reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                                <div class="comment mb-0 pb-0 border-bottom-0">
                                                    <div class="comment-avatar">
                                                        <img
                                                            class="avatar__img"
                                                            alt=""
                                                            src={imgTeam8}
                                                        />
                                                    </div>
                                                    <div class="comment-body">
                                                        <div class="meta-data">
                                                            <h3 class="comment__author">
                                                                Two Hour Walking Tour of Manhattan
                                                            </h3>
                                                            <div class="meta-data-inner d-flex">
                                                                <p class="comment__meta me-1">
                                                                    By <a href="#">Alex smith</a>
                                                                </p>
                                                                <span
                                                                    class="ratings d-flex align-items-center me-1"
                                                                >
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                    <i class="la la-star"></i>
                                                                </span>
                                                                <p class="comment__date">April 5, 2019</p>
                                                            </div>
                                                        </div>
                                                        <p class="comment-content">
                                                            Our stay was pleasant and welcoming. We stayed in an
                                                            apartment meant for 3 adults with kitchen
                                                            facilities. The cleaning services were superp. We
                                                            liked the laundry and kitchen cleaning services on
                                                            top of the regular cleaning services.
                                                        </p>
                                                        <div class="comment-reply">
                                                            <a
                                                                class="theme-btn"
                                                                href="#"
                                                                data-bs-toggle="modal"
                                                                data-bs-target="#modalPopup"
                                                            >
                                                                <span class="la la-mail-reply me-1"></span>Reply
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* end comments */}
                                            </div>
                                            {/* end comments-list */}
                                        </div>
                                    </div>
                                    {/* end form-box */}
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
                                    {/* end copy-right-content */}
                                </div>
                                {/* end col-lg-5 */}
                            </div>
                            {/* end row */}
                        </div>
                        {/* end container-fluid */}
                    </div>
                    {/* end dashboard-main-content */}
                </div>
                {/* end dashboard-content-wrap */}
            </section>
        </div>
    )
}

export default AdminReviews
