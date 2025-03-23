import React from 'react'
import background from '../../../assets/images/hero-bg.jpg'
import background2 from '../../../assets/images/hero--bg2.jpg'
import background3 from '../../../assets/images/hero--bg3.jpg'
import './hero-wrapper.css'
import { options } from '../../../utils/data'
const HeroWrapper = () => {

    return (
        <>
            {/* START HERO-WRAPPER AREA */}
            <section clas="hero-wrapper hero-wrapper2">
                <div class="hero-box pb-0">
                    <div id="fullscreen-slide-contain">
                        <ul class="slides-container">
                            <li><img src={background} alt="" /></li>
                            <li><img src={background2} alt="" /></li>
                            <li><img src={background3} alt="" /></li>
                        </ul>
                    </div>
                    {/* End background slider */}
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="hero-content pb-5">
                                    <div class="section-heading">
                                        <p class="sec__desc pb-2">Hotel stays, Dream getaways</p>
                                        <h2 class="sec__title">
                                            Find the Perfect Place to Stay <br />
                                            for Your Next Trip
                                        </h2>
                                    </div>
                                </div>
                                {/* end hero-content */}
                                <div class="search-fields-container">
                                    <div class="contact-form-action">
                                        <form action="#" class="row">
                                            <div class="col-lg-3 pe-0">
                                                <div class="input-box">
                                                    <label class="label-text"
                                                    >Destination / Hotel name</label
                                                    >
                                                    <div class="form-group">
                                                        <span class="la la-map-marker form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="Enter City or property"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            { /* end col-lg-3 */}
                                            <div class="col-lg-3 pe-0">
                                                <div class="input-box">
                                                    <label class="label-text">Check in - Check out</label>
                                                    <div class="form-group">
                                                        <span class="la la-calendar form-icon"></span>
                                                        <input
                                                            class="date-range form-control"
                                                            type="text"
                                                            name="daterange"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            { /* end col-lg-3 */}
                                            <div class="col-lg-3 pe-0">
                                                <div class="input-box">
                                                    <label class="label-text">Room Type</label>
                                                    <div class="form-group select2-container-wrapper">
                                                        <div
                                                            class="select-contain select-contain-shadow w-auto"
                                                        >
                                                            <select class="select-contain-select">
                                                                <option value="0">Select Type</option>
                                                                <option value="1">Single</option>
                                                                <option value="2">Double</option>
                                                                <option value="3">Triple</option>
                                                                <option value="4">Quad</option>
                                                                <option value="5">Queen</option>
                                                                <option value="6">King</option>
                                                                <option value="7">Twin</option>
                                                                <option value="8">Double-double</option>
                                                                <option value="9">Studio</option>
                                                                <option value="10">Suite</option>
                                                                <option value="11">Mini Suite</option>
                                                                <option value="12">President Suite</option>
                                                                <option value="13">President Suite</option>
                                                                <option value="14">Apartments</option>
                                                                <option value="15">Connecting rooms</option>
                                                                <option value="16">Murphy Room</option>
                                                                <option value="17">Accessible Room</option>
                                                                <option value="18">Cabana</option>
                                                                <option value="19">Adjoining rooms</option>
                                                                <option value="20">Adjacent rooms</option>
                                                                <option value="21">Villa</option>
                                                                <option value="22">Executive Floor</option>
                                                                <option value="23">Smoking room</option>
                                                                <option value="24">Non-Smoking Room</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end col-lg-3 */}
                                            <div class="col-lg-3">
                                                <div class="input-box">
                                                    <label class="label-text">Guests and Rooms</label>
                                                    <div class="form-group">
                                                        <div class="dropdown dropdown-contain gty-container">
                                                            <a
                                                                class="dropdown-toggle dropdown-btn"
                                                                href="#"
                                                                role="button"
                                                                data-bs-toggle="dropdown"
                                                                aria-expanded="false"
                                                                data-bs-auto-close="outside"
                                                            >
                                                                <span
                                                                    class="adult"
                                                                    data-text="Adult"
                                                                    data-text-multi="Adults"
                                                                >{options.adults} Adults</span
                                                                >
                                                                -
                                                                <span
                                                                    class="children"
                                                                    data-text="Child"
                                                                    data-text-multi="Children"
                                                                >{options.children} Child</span
                                                                >
                                                            </a>
                                                            <div class="dropdown-menu dropdown-menu-wrap">
                                                                <div class="dropdown-item">
                                                                    <div
                                                                        class="qty-box d-flex align-items-center justify-content-between"
                                                                    >
                                                                        <label>Rooms</label>
                                                                        <div class="qtyBtn d-flex align-items-center">
                                                                            <div className={options.rooms < 1 ? "qtyDec not-allowed" : "qtyDec"}>
                                                                                <i class="la la-minus"></i>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                name="room_number"
                                                                                value={options.rooms}
                                                                                class="qty-input"
                                                                            />
                                                                            <div class="qtyInc">
                                                                                <i class="la la-plus"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="dropdown-item">
                                                                    <div
                                                                        class="qty-box d-flex align-items-center justify-content-between"
                                                                    >
                                                                        <label>Adults</label>
                                                                        <div class="qtyBtn d-flex align-items-center">
                                                                            <div class="qtyDec">
                                                                                <i class="la la-minus"></i>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                name="adult_number"
                                                                                value={options.adults}
                                                                            />
                                                                            <div class="qtyInc">
                                                                                <i class="la la-plus"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="dropdown-item">
                                                                    <div
                                                                        class="qty-box d-flex align-items-center justify-content-between"
                                                                    >
                                                                        <label>Children</label>
                                                                        <div class="qtyBtn d-flex align-items-center">
                                                                            <div class="qtyDec">
                                                                                <i class="la la-minus"></i>
                                                                            </div>
                                                                            <input
                                                                                type="text"
                                                                                name="child_number"
                                                                                value={options.children}
                                                                            />
                                                                            <div class="qtyInc">
                                                                                <i class="la la-plus"></i>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        { /* end dropdown-contain */}
                                                    </div>
                                                </div>
                                            </div>
                                            {/* end col-lg-3 */}
                                        </form>
                                        <div class="btn-box pt-2">
                                            <a href="room-search-result.html" class="theme-btn"
                                            >Search Now</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end col-lg-12 */}
                        </div>
                        {/* end row */}
                    </div>
                    {/* end container */}
                </div>
            </section>
            {/* end hero-wrapper */}
            { /* END HERO-WRAPPER AREA */}
        </>
    )
}

export default HeroWrapper