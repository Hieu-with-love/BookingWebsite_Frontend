import React, { useEffect, useState } from 'react'
import LoadingPage from '../../../common/LoadingPage'
import Header from '../../../components/Header/Header'
import image5 from '../../../assets/images/img5.jpg'
import image29 from '../../../assets/images/img29.jpg'
import image30 from '../../../assets/images/img30.jpg'
import image31 from '../../../assets/images/img31.jpg'
import image32 from '../../../assets/images/img32.jpg'
import image33 from '../../../assets/images/img33.jpg'
import Footer from '../../../components/Footer/Footer'
import RoomCard from './RoomCard'
import { getRooms } from '../../../config/roomApi'


const RoomsList = () => {

    const [rooms, setRooms] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.title = "Zotel Stay | Rooms List"
        const fetchRooms = async () => {
            setLoading(true)
            const data = await getRooms()
            if (Array.isArray(data)) {
                setRooms(data)
                console.log(data)
            } else {
                alert("Failed to fetch rooms")
            }
            setLoading(false)
        };

        fetchRooms();
    }, [])

    return (
        <>
            <LoadingPage />
            <Header />

            <section class="breadcrumb-area bread-bg-10">
                <div class="breadcrumb-wrap">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="breadcrumb-content text-center">
                                    <div class="section-heading">
                                        <h2 class="sec__title text-white">Room List</h2>
                                    </div>
                                    <span class="arrow-blink">
                                        <i class="la la-arrow-down"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bread-svg-box">
                    <svg
                        class="bread-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
                    </svg>
                </div>
            </section>

            <section class="card-area section--padding">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="filter-wrap margin-bottom-40px">
                                <div
                                    class="filter-top d-flex align-items-center justify-content-between"
                                >
                                    <div class="section-tab section-tab-3">
                                        <ul class="nav nav-tabs" id="myTab4" role="tablist">
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link active"
                                                    id="all-tab"
                                                    data-bs-toggle="tab"
                                                    href="#all"
                                                    role="tab"
                                                    aria-controls="all"
                                                    aria-selected="false"
                                                >
                                                    All
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    id="dorm-beds-tab"
                                                    data-bs-toggle="tab"
                                                    href="#dorm-beds"
                                                    role="tab"
                                                    aria-controls="dorm-beds"
                                                    aria-selected="false"
                                                >
                                                    Dorm Beds
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    id="private-room-tab"
                                                    data-bs-toggle="tab"
                                                    href="#private-room"
                                                    role="tab"
                                                    aria-controls="private-room"
                                                    aria-selected="false"
                                                >
                                                    Private Room
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    id="suites-tab"
                                                    data-bs-toggle="tab"
                                                    href="#suites"
                                                    role="tab"
                                                    aria-controls="suites"
                                                    aria-selected="false"
                                                >
                                                    Suites
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="layout-view d-flex align-items-center">
                                        <a
                                            href="room-grid.html"
                                            data-bs-toggle="tooltip"
                                            data-placement="top"
                                            title="Grid View"
                                        ><i class="la la-th-large"></i
                                        ></a>
                                        <a
                                            href="room-list.html"
                                            data-bs-toggle="tooltip"
                                            data-placement="top"
                                            title="List View"
                                            class="active"
                                        ><i class="la la-th-list"></i
                                        ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-content" id="may-tabContent4">
                        <div
                            class="tab-pane fade show active"
                            id="all"
                            role="tabpanel"
                            aria-labelledby="all-tab"
                        >
                            <div class="row">
                                {loading && <p>Đang tải dữ liệu...</p>}
                                {error && <p style={{ color: "red" }}>Lỗi: {error}</p>}
                                {!loading && !error &&
                                    rooms.map((room, index) => (
                                        <RoomCard key={index}
                                            room={room}
                                        />
                                    ))
                                }

                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="btn-box mt-4 text-center">
                                <button type="button" class="theme-btn">
                                    <i class="la la-refresh me-1"></i>Load More
                                </button>
                                <p class="font-size-13 pt-2">Showing 1 - 5 of 124 Rooms</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="check-availability-area section-bg section-padding">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <div class="check-availability-content">
                                <div class="section-heading text-center">
                                    <h2 class="sec__title">Book Your Stay</h2>
                                </div>
                                <div class="contact-form-action padding-top-40px">
                                    <form action="#">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <div class="input-box">
                                                    <label class="label-text">Check-in</label>
                                                    <div class="form-group">
                                                        <span class="la la-calendar form-icon"></span>
                                                        <input
                                                            class="date-range form-control"
                                                            type="text"
                                                            name="daterange-single"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="input-box">
                                                    <label class="label-text">Check-out</label>
                                                    <div class="form-group">
                                                        <span class="la la-calendar form-icon"></span>
                                                        <input
                                                            class="date-range form-control"
                                                            type="text"
                                                            name="daterange-single"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="input-box">
                                                    <label class="label-text">Rooms</label>
                                                    <div class="form-group">
                                                        <div class="select-contain w-auto">
                                                            <select class="select-contain-select">
                                                                <option value="0">Select Rooms</option>
                                                                <option value="1" selected>1 Room</option>
                                                                <option value="2">2 Rooms</option>
                                                                <option value="3">3 Rooms</option>
                                                                <option value="4">4 Rooms</option>
                                                                <option value="5">5 Rooms</option>
                                                                <option value="6">6 Rooms</option>
                                                                <option value="7">7 Rooms</option>
                                                                <option value="8">8 Rooms</option>
                                                                <option value="9">9 Rooms</option>
                                                                <option value="10">10 Rooms</option>
                                                                <option value="11">11 Rooms</option>
                                                                <option value="12">12 Rooms</option>
                                                                <option value="13">13 Rooms</option>
                                                                <option value="14">14 Rooms</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="input-box">
                                                    <label class="label-text">Guests</label>
                                                    <div class="form-group">
                                                        <div class="dropdown dropdown-contain">
                                                            <a
                                                                class="dropdown-toggle dropdown-btn"
                                                                href="#"
                                                                data-bs-toggle="dropdown"
                                                            >
                                                                <span
                                                                >Total Guests
                                                                    <span class="qtyTotal guestTotal">0</span></span
                                                                >
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-wrap">
                                                                <div class="dropdown-item">
                                                                    <div
                                                                        class="qty-box d-flex align-items-center justify-content-between"
                                                                    >
                                                                        <label>Adults</label>
                                                                        <div class="qtyBtn d-flex align-items-center">
                                                                            <input
                                                                                type="text"
                                                                                name="qtyInput"
                                                                                value="0"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="dropdown-item">
                                                                    <div
                                                                        class="qty-box d-flex align-items-center justify-content-between"
                                                                    >
                                                                        <label
                                                                        >Children <span>2-12 years old</span></label
                                                                        >
                                                                        <div class="qtyBtn d-flex align-items-center">
                                                                            <input
                                                                                type="text"
                                                                                name="qtyInput"
                                                                                value="0"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="dropdown-item">
                                                                    <div
                                                                        class="qty-box d-flex align-items-center justify-content-between"
                                                                    >
                                                                        <label
                                                                        >Infants <span>0-2 years old</span></label
                                                                        >
                                                                        <div class="qtyBtn d-flex align-items-center">
                                                                            <input
                                                                                type="text"
                                                                                name="qtyInput"
                                                                                value="0"
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-12">
                                                <div class="btn-box text-center pt-2">
                                                    <a href="#" class="theme-btn">Check Availability</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default RoomsList