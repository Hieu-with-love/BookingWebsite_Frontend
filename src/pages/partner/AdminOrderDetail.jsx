import React from 'react'
import imgTeam8 from '../../assets/images/team8.jpg'
import imgTeam9 from '../../assets/images/team9.jpg'
import imgTeam10 from '../../assets/images/team10.jpg'
import imgTeam11 from '../../assets/images/team11.jpg'
import logo2 from '../../assets/images/logo2.png'


const AdminOrderDetail = () => {
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
                                            <h2 class="sec__title font-size-30 text-white">
                                                Order Details
                                            </h2>
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
                                            <li>Order Details</li>
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
                                            <h3 class="title">Order Detail Lists</h3>
                                        </div>
                                        <div class="form-content">
                                            <ul class="list-items list-items-2 list-items-flush">
                                                <li><span>Order ID#</span>11541689164</li>
                                                <li>
                                                    <span>Package Ordered:</span>Hotel Malte – Astotel
                                                </li>
                                                <li><span>Package Duration:</span> 12 Jun 2020</li>
                                                <li><span>Customer Name:</span> David Martin</li>
                                                <li>
                                                    <span>Customer Email:</span> davidmarting@gmail.com
                                                </li>
                                                <li><span>Customer Phone:</span> + 00 222 44 5678</li>
                                                <li>
                                                    <span>Customer Address:</span> PO Box CT16122 Collins
                                                    Street West, Victoria 8007,Australia.
                                                </li>
                                                <li><span>Customer City:</span> Sydney</li>
                                                <li><span>Customer Postal Code:</span> 3030</li>
                                                <li><span>Total Adults:</span> 2</li>
                                                <li><span>Total Child:</span> 2</li>
                                                <li><span>Total Cost:</span> $140</li>
                                                <li><span>Booking Date:</span>2020-11-08 14:59:27</li>
                                                <li><span>Payment Method:</span> Stripe</li>
                                                <li>
                                                    <span>Stripe Charge ID:</span
                                                    >ch_1DUEyfLYzRkN5IL2UwTGTf3B
                                                </li>
                                                <li>
                                                    <span>Stripe Transaction ID:</span
                                                    >txn_1DUEyfLYzRkN5IL2CC99RSbu
                                                </li>
                                            </ul>
                                            <div class="btn-box mt-4">
                                                <a
                                                    href="#"
                                                    class="theme-btn theme-btn-small"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#modalPopup"
                                                ><i class="la la-envelope me-1"></i>Contact Customer</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                    {/* end form-box */}
                                </div>
                                {/* end col-lg-12 */}
                            </div>
                            {/* end row */}
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

export default AdminOrderDetail
