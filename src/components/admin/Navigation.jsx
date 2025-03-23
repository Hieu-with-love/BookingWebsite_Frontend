import React from 'react'
import imgTeam8 from '../../assets/images/team8.jpg'
import imgTeam9 from '../../assets/images/team9.jpg'
import imgTeam10 from '../../assets/images/team10.jpg'
import imgTeam11 from '../../assets/images/team11.jpg'
import logo2 from '../../assets/images/logo2.png'

const Navigation = () => {
  return (
    <>
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
    </>
  )
}

export default Navigation