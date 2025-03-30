import React from 'react'
import imgTeam8 from '../../assets/images/team8.jpg'
import imgTeam9 from '../../assets/images/team9.jpg'
import imgTeam10 from '../../assets/images/team10.jpg'
import imgTeam11 from '../../assets/images/team11.jpg'

const Responsive_User = () => {
  return (
    <>
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
    </>
  )
}

export default Responsive_User