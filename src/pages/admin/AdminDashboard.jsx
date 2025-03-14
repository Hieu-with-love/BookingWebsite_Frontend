import React from 'react'
import imgTeam8 from '../../assets/images/team8.jpg'
import imgTeam9 from '../../assets/images/team9.jpg'
import imgTeam10 from '../../assets/images/team10.jpg'
import imgTeam11 from '../../assets/images/team11.jpg'
import logo2 from '../../assets/images/logo2.png'
import Sidebar_Admin from '../../components/Sidebar/Sidebar_Admin'



const AdminDashboard = () => {
    return (
        <div>
            <div class="user-canvas-container">
                <div class="side-menu-close">
                    <i class="la la-times"></i>
                </div>
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
                                        </a>
                                    </div>
                                </div>
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
                                        </a>
                                    </div>
                                </div>
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
                                        </a>
                                    </div>
                                </div>
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
                                        <div class="user-menu-open">
                                            <i class="la la-user"></i>
                                        </div>
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
                                                            </a>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            class="dropdown-item drop-reveal-btn text-center"
                                                        >View all</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
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
                                                            </a>
                                                        </div>
                                                        <a
                                                            href="#"
                                                            class="dropdown-item drop-reveal-btn text-center"
                                                        >View all</a
                                                        >
                                                    </div>
                                                </div>
                                            </div>
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
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
                                </div>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AdminDashboard