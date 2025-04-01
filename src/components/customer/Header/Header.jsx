import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import menAvatar from '../../../assets/images/avartar/profile.png'

const Header = ({user, onLogout}) => {

    return (
        <>
            {/* START HEADER AREA */}
            <header class="header-area">
                <div class="header-top-bar padding-right-100px padding-left-100px">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                            </div>
                            <div class="col-lg-6">
                                <div class="header-top-content">
                                    <div
                                        class="header-right d-flex align-items-center justify-content-end"
                                    >
                                        <div class="header-right-action">
                                            <div class="select-contain select--contain w-auto">
                                                <select class="select-contain-select">

                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-de me-1"></span> Deutsch'
                                                    >
                                                        Deutsch
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-us me-1"></span> English(US)'
                                                        selected
                                                    >
                                                        English US
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-gb-eng me-1"></span> English(UK)'
                                                    >
                                                        English UK
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-ro me-1"></span> Romanian'
                                                    >
                                                        Romanian
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-es me-1"></span> Español'
                                                    >
                                                        Español
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-fr me-1"></span> Francais'
                                                    >
                                                        Francais
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-it me-1"></span> Italiano'
                                                    >
                                                        Italiano
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-pl me-1"></span> Polski'
                                                    >
                                                        Polski
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-pt me-1"></span> Portuguese'
                                                    >
                                                        Portuguese
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-tr me-1"></span> Turkish'
                                                    >
                                                        Turkish
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-ru me-1"></span> Russian'
                                                    >
                                                        Russian
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-jp me-1"></span> Japanese'
                                                    >
                                                        Japanese
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-cn me-1"></span> Mandarin'
                                                    >
                                                        Mandarin
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-tw me-1"></span> Mandarin Chinese'
                                                    >
                                                        Mandarin Chinese
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-kr me-1"></span> Korean'
                                                    >
                                                        Korean
                                                    </option>

                                                </select>
                                            </div>
                                        </div>
                                        <div class="header-right-action">
                                            <div class="select-contain select--contain w-auto">
                                                <select class="select-contain-select">
                                                    <option value="1">VNĐ</option>
                                                    <option value="2">USD</option>
                                                    <option value="3">EUR</option>
                                                </select>
                                            </div>
                                        </div>
                                        {
                                            user ? (
                                                <div class="header-right-action">
                                                    <div class="dropdown">
                                                        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <img src={user.avatar || menAvatar} 
                                                                alt="Avatar" 
                                                                class="rounded-circle" 
                                                                style={{ width: "32px", height: "32px", objectFit: "cover" }} />
                                                        </button>
                                                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton">
                                                            <li><a class="dropdown-item" href="/profile">Profile</a></li>
                                                            <li><a class="dropdown-item" href="/settings">Settings</a></li>
                                                            <li><hr class="dropdown-divider" /></li>
                                                            <li><a class="dropdown-item" href="#" onClick={onLogout}>Logout</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div class="header-right-action">
                                                    <a
                                                        href="#"
                                                        class="theme-btn theme-btn-small theme-btn-transparent me-1"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#signupPopupForm"
                                                    >Sign Up</a
                                                    >
                                                    <a
                                                        href="#"
                                                        class="theme-btn theme-btn-small"
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#loginPopupForm"
                                                    >Login</a
                                                    >
                                                </div>
                                            )
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*end header-menu-wrapper*/}
            </header>
            { /*END HEADER AREA */}

            <nav>
                <div class="header-menu-wrapper padding-right-100px padding-left-100px">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="menu-wrapper justify-content-between">
                                    <a href="#" class="down-button"
                                    ><i class="la la-angle-down"></i
                                    ></a>
                                    <div class="logo">
                                        <a href="index.html"
                                        ><img src={logo} alt="logo"
                                            /></a>
                                        <div class="menu-toggler">
                                            <i class="la la-bars"></i>
                                            <i class="la la-times"></i>
                                        </div>
                                        {/* end menu-toggler */}
                                    </div>
                                    { /* end logo */}
                                    <div class="main-menu-content pe-0 ms-0">
                                        <nav>
                                            <ul>
                                                <li>
                                                    <li><Link to="/home">Home</Link></li>
                                                </li>
                                                <li>
                                                    <a href="#">Our Hotels</a>
                                                    
                                                </li>
                                                <li>
                                                    <a href="#">Cruise</a>
                                                    
                                                </li>
                                                <li>
                                                    <a href="#">Pages</a>
                                                    
                                                </li>
                                                <li>
                                                    <a href="#">Flight</a>
                                                </li>
                                                <li>
                                                    <a href="#">Different Services <i class="la la-angle-down"></i></a>
                                                    <ul class="dropdown-menu-item">
                                                        <li><a href="car-grid.html">car grid</a></li>
                                                        <li><a href="car-list.html">car list</a></li>
                                                        <li><a href="car-sidebar.html">car sidebar </a></li>
                                                        <li><a href="car-single.html">car details</a></li>
                                                        <li><a href="car-booking.html">Car Booking</a></li>
                                                        <li>
                                                            <a href="car-search-result.html"
                                                            >Car Search Result</a
                                                            >
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* end main-menu-content */}
                                    <div class="nav-btn">
                                        <a href="become-local-expert.html" class="theme-btn"
                                        >Become Local Expert</a
                                        >
                                    </div>
                                    {/*end nav-btn*/}
                                </div>
                                {/*end menu-wrapper*/}
                            </div>
                            {/*end col-lg-12*/}
                        </div>
                        {/*end row*/}
                    </div>
                    {/*end container-fluid*/}
                </div>
            </nav>

        </>
    )
}

export default Header