import React from 'react'

const FilterdHotelList = () => {
  return (
    <>
    
    <section class="card-area section--padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="filter-wrap margin-bottom-30px">
              <div
                class="filter-top d-flex align-items-center justify-content-between pb-4"
              >
                <div>
                  <h3 class="title font-size-24">2224 Hotels found</h3>
                  <p class="font-size-14">
                    <span class="me-1 pt-1">Book with confidence:</span>No hotel
                    booking fees
                  </p>
                </div>
                <div class="layout-view d-flex align-items-center">
                  <a
                    href="hotel-grid.html"
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title="Grid View"
                    ><i class="la la-th-large"></i
                  ></a>
                  <a
                    href="hotel-list.html"
                    data-bs-toggle="tooltip"
                    data-placement="top"
                    title="List View"
                    class="active"
                    ><i class="la la-th-list"></i
                  ></a>
                </div>
              </div>
              {/* <!-- end filter-top --> */}
              <div
                class="filter-bar d-flex align-items-center justify-content-between"
              >
                <div
                  class="filter-bar-filter d-flex flex-wrap align-items-center"
                >
                  <div class="filter-option">
                    <h3 class="title font-size-16">Filter by:</h3>
                  </div>
                  <div class="filter-option">
                    <div class="dropdown dropdown-contain">
                      <a
                        class="dropdown-toggle dropdown-btn dropdown--btn"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        Filter Price
                      </a>
                      <div class="dropdown-menu dropdown-menu-wrap">
                        <div class="dropdown-item">
                          <div class="slider-range-wrap">
                            <div
                              class="price-slider-amount padding-bottom-20px"
                            >
                              <label for="amount" class="filter__label"
                                >Price:</label
                              >
                              <input type="text" id="amount" class="amounts" />
                            </div>
                            {/* <!-- end price-slider-amount --> */}
                            <div id="slider-range"></div>
                            {/* <!-- end slider-range --> */}
                          </div>
                          {/* <!-- end slider-range-wrap --> */}
                          <div class="btn-box pt-4">
                            <button
                              class="theme-btn theme-btn-small theme-btn-transparent"
                              type="button"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                        {/* <!-- end dropdown-item --> */}
                      </div>
                      {/* <!-- end dropdown-menu --> */}
                    </div>
                    {/* <!-- end dropdown --> */}
                  </div>
                  <div class="filter-option">
                    <div class="dropdown dropdown-contain">
                      <a
                        class="dropdown-toggle dropdown-btn dropdown--btn"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        Review Score
                      </a>
                      <div class="dropdown-menu dropdown-menu-wrap">
                        <div class="dropdown-item">
                          <div class="checkbox-wrap">
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="r1"
                              />
                              <label for="r1">
                                <span class="ratings d-flex align-items-center">
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <span class="color-text-3 font-size-13 ms-1"
                                    >(55.590)</span
                                  >
                                </span>
                              </label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="r2"
                              />
                              <label for="r2">
                                <span class="ratings d-flex align-items-center">
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <i class="la la-star-o"></i>
                                  <span class="color-text-3 font-size-13 ms-1"
                                    >(40.590)</span
                                  >
                                </span>
                              </label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="r3"
                              />
                              <label for="r3">
                                <span class="ratings d-flex align-items-center">
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <i class="la la-star-o"></i>
                                  <i class="la la-star-o"></i>
                                  <span class="color-text-3 font-size-13 ms-1"
                                    >(23.590)</span
                                  >
                                </span>
                              </label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="r4"
                              />
                              <label for="r4">
                                <span class="ratings d-flex align-items-center">
                                  <i class="la la-star"></i>
                                  <i class="la la-star"></i>
                                  <i class="la la-star-o"></i>
                                  <i class="la la-star-o"></i>
                                  <i class="la la-star-o"></i>
                                  <span class="color-text-3 font-size-13 ms-1"
                                    >(12.590)</span
                                  >
                                </span>
                              </label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="r5"
                              />
                              <label for="r5">
                                <span class="ratings d-flex align-items-center">
                                  <i class="la la-star"></i>
                                  <i class="la la-star-o"></i>
                                  <i class="la la-star-o"></i>
                                  <i class="la la-star-o"></i>
                                  <i class="la la-star-o"></i>
                                  <span class="color-text-3 font-size-13 ms-1"
                                    >(590)</span
                                  >
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end dropdown-item --> */}
                      </div>
                      {/* <!-- end dropdown-menu --> */}
                    </div>
                    {/* <!-- end dropdown --> */}
                  </div>
                  <div class="filter-option">
                    <div class="dropdown dropdown-contain">
                      <a
                        class="dropdown-toggle dropdown-btn dropdown--btn"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-auto-close="outside"
                      >
                        Facilities
                      </a>
                      <div class="dropdown-menu dropdown-menu-wrap">
                        <div class="dropdown-item">
                          <div class="checkbox-wrap">
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="catChb1"
                              />
                              <label for="catChb1">Pet Allowed</label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="catChb2"
                              />
                              <label for="catChb2">Groups Allowed</label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="catChb3"
                              />
                              <label for="catChb3">Tour Guides</label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="catChb4"
                              />
                              <label for="catChb4">Access for disabled</label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="catChb5"
                              />
                              <label for="catChb5">Room Service</label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="catChb6"
                              />
                              <label for="catChb6">Parking</label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="catChb7"
                              />
                              <label for="catChb7">Restaurant</label>
                            </div>
                            <div class="custom-checkbox">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="catChb8"
                              />
                              <label for="catChb8">Pet friendly</label>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end dropdown-item --> */}
                      </div>
                      {/* <!-- end dropdown-menu --> */}
                    </div>
                    {/* <!-- end dropdown --> */}
                  </div>
                </div>
                {/* <!-- end filter-bar-filter --> */}
                <div class="select-contain select2-container-wrapper">
                  <select class="select-contain-select">
                    <option value="1">Short by default</option>
                    <option value="2">Popular Hotel</option>
                    <option value="3">Price: low to high</option>
                    <option value="4">Price: high to low</option>
                    <option value="5">A to Z</option>
                  </select>
                </div>
                {/* <!-- end select-contain --> */}
              </div>
              {/* <!-- end filter-bar --> */}
            </div>
            {/* <!-- end filter-wrap --> */}
          </div>
          {/* <!-- end col-lg-12 --> */}
        </div>
        {/* <!-- end row --> */}
        <div class="row">
          <div class="col-lg-4">
            <div class="sidebar mt-0">
              <div class="sidebar-widget">
                <h3 class="title stroke-shape">Search Hotels</h3>
                <div class="sidebar-widget-item">
                  <div class="contact-form-action">
                    <form action="#">
                      <div class="input-box">
                        <label class="label-text"
                          >Destination / hotel name</label
                        >
                        <div class="form-group">
                          <span class="la la-map-marker form-icon"></span>
                          <input
                            class="form-control"
                            type="text"
                            name="text"
                            placeholder="Destination, hotel name"
                          />
                        </div>
                      </div>
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
                    </form>
                  </div>
                </div>
                {/* <!-- end sidebar-widget-item --> */}
                <div class="sidebar-widget-item">
                  <div
                    class="qty-box mb-2 d-flex align-items-center justify-content-between"
                  >
                    <label class="font-size-16">Rooms</label>
                    <div class="qtyBtn d-flex align-items-center">
                      <div class="qtyDec">
                        <i class="la la-minus"></i>
                      </div>
                      <input type="text" name="qtyInput" value="0" />
                      <div class="qtyInc">
                        <i class="la la-plus"></i>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end qty-box --> */}
                  <div
                    class="qty-box mb-2 d-flex align-items-center justify-content-between"
                  >
                    <label class="font-size-16">Adults <span>18+</span></label>
                    <div class="qtyBtn d-flex align-items-center">
                      <div class="qtyDec">
                        <i class="la la-minus"></i>
                      </div>
                      <input type="text" name="qtyInput" value="0" />
                      <div class="qtyInc">
                        <i class="la la-plus"></i>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end qty-box --> */}
                  <div
                    class="qty-box mb-2 d-flex align-items-center justify-content-between"
                  >
                    <label class="font-size-16"
                      >Children <span>2-12 years old</span></label
                    >
                    <div class="qtyBtn d-flex align-items-center">
                      <div class="qtyDec">
                        <i class="la la-minus"></i>
                      </div>
                      <input type="text" name="qtyInput" value="0" />
                      <div class="qtyInc">
                        <i class="la la-plus"></i>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end qty-box --> */}
                </div>
                {/* <!-- end sidebar-widget-item --> */}
                <div class="btn-box pt-2">
                  <a href="hotel-search-result.html" class="theme-btn"
                    >Search Now</a
                  >
                </div>
              </div>
              {/* <!-- end sidebar-widget --> */}
              <div class="sidebar-widget">
                <h3 class="title stroke-shape">Filter by Price</h3>
                <div class="sidebar-price-range">
                  <div class="main-search-input-item">
                    <div class="price-slider-amount padding-bottom-20px">
                      <label for="amount2" class="filter__label">Price:</label>
                      <input type="text" id="amount2" class="amounts" />
                    </div>
                    {/* <!-- end price-slider-amount --> */}
                    <div id="slider-range2"></div>
                    {/* <!-- end slider-range --> */}
                  </div>
                  {/* <!-- end main-search-input-item --> */}
                  <div class="btn-box pt-4">
                    <button
                      class="theme-btn theme-btn-small theme-btn-transparent"
                      type="button"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
              {/* <!-- end sidebar-widget --> */}
              <div class="sidebar-widget">
                <h3 class="title stroke-shape">Review Score</h3>
                <div class="sidebar-category">
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="r6" />
                    <label for="r6">Excellent</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="r7" />
                    <label for="r7">Very Good</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="r8" />
                    <label for="r8">Average</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="r9" />
                    <label for="r9">Poor</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="r10" />
                    <label for="r10">Terrible</label>
                  </div>
                </div>
              </div>
              {/* <!-- end sidebar-widget --> */}
              <div class="sidebar-widget">
                <h3 class="title stroke-shape">Filter by Rating</h3>
                <div class="sidebar-review">
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="s1" />
                    <label for="s1">
                      <span class="ratings d-flex align-items-center">
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <span class="color-text-3 font-size-13 ms-1"
                          >(55.590)</span
                        >
                      </span>
                    </label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="s2" />
                    <label for="s2">
                      <span class="ratings d-flex align-items-center">
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <i class="la la-star-o"></i>
                        <span class="color-text-3 font-size-13 ms-1"
                          >(40.590)</span
                        >
                      </span>
                    </label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="s3" />
                    <label for="s3">
                      <span class="ratings d-flex align-items-center">
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <i class="la la-star-o"></i>
                        <i class="la la-star-o"></i>
                        <span class="color-text-3 font-size-13 ms-1"
                          >(23.590)</span
                        >
                      </span>
                    </label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="s4" />
                    <label for="s4">
                      <span class="ratings d-flex align-items-center">
                        <i class="la la-star"></i>
                        <i class="la la-star"></i>
                        <i class="la la-star-o"></i>
                        <i class="la la-star-o"></i>
                        <i class="la la-star-o"></i>
                        <span class="color-text-3 font-size-13 ms-1"
                          >(12.590)</span
                        >
                      </span>
                    </label>
                  </div>
                  <div class="custom-checkbox mb-0">
                    <input type="checkbox" class="form-check-input" id="s5" />
                    <label for="s5">
                      <span class="ratings d-flex align-items-center">
                        <i class="la la-star"></i>
                        <i class="la la-star-o"></i>
                        <i class="la la-star-o"></i>
                        <i class="la la-star-o"></i>
                        <i class="la la-star-o"></i>
                        <span class="color-text-3 font-size-13 ms-1"
                          >(590)</span
                        >
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- end sidebar-widget --> */}
              <div class="sidebar-widget">
                <h3 class="title stroke-shape">Facilities</h3>
                <div class="sidebar-category">
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="f1" />
                    <label for="f1">Air Conditioning</label>
                  </div>
                  <div class="custom-checkbox">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="chb12"
                    />
                    <label for="chb12">Airport Transport</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="f2" />
                    <label for="f2">Fitness Center</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="f3" />
                    <label for="f3">Flat Tv</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="f4" />
                    <label for="f4">Heater</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="f5" />
                    <label for="f5">Internet – Wifi</label>
                  </div>
                  <div class="collapse" id="facilitiesMenu">
                    <div class="custom-checkbox">
                      <input type="checkbox" class="form-check-input" id="f6" />
                      <label for="f6">Parking</label>
                    </div>
                    <div class="custom-checkbox">
                      <input type="checkbox" class="form-check-input" id="f7" />
                      <label for="f7">Pool</label>
                    </div>
                    <div class="custom-checkbox">
                      <input type="checkbox" class="form-check-input" id="f8" />
                      <label for="f8">Restaurant</label>
                    </div>
                    <div class="custom-checkbox">
                      <input type="checkbox" class="form-check-input" id="f9" />
                      <label for="f9">Smoking Room</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="f10"
                      />
                      <label for="f10">Spa &amp; Sauna</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="f11"
                      />
                      <label for="f11">Washer &amp; Dryer</label>
                    </div>
                  </div>
                  <a
                    class="btn-text"
                    data-bs-toggle="collapse"
                    href="#facilitiesMenu"
                    role="button"
                    aria-expanded="false"
                    aria-controls="facilitiesMenu"
                  >
                    <span class="show-more"
                      >Show More <i class="la la-angle-down"></i
                    ></span>
                    <span class="show-less"
                      >Show Less <i class="la la-angle-up"></i
                    ></span>
                  </a>
                </div>
              </div>
              {/* <!-- end sidebar-widget --> */}
              <div class="sidebar-widget">
                <h3 class="title stroke-shape">Hotel Theme</h3>
                <div class="sidebar-category">
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="ht1" />
                    <label for="ht1">Best value</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="ht2" />
                    <label for="ht2">Boutique</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="ht3" />
                    <label for="ht3">Budget</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="ht4" />
                    <label for="ht4">Business</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="ht5" />
                    <label for="ht5">Charming</label>
                  </div>
                  <div class="custom-checkbox">
                    <input type="checkbox" class="form-check-input" id="ht6" />
                    <label for="ht6">Classic</label>
                  </div>
                  <div class="collapse" id="hotelThemeMenu">
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="ht7"
                      />
                      <label for="ht7">Green</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="ht8"
                      />
                      <label for="ht8">Luxury</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="ht9"
                      />
                      <label for="ht9">Mid-range</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="ht10"
                      />
                      <label for="ht10">Party</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="ht11"
                      />
                      <label for="ht11">Quaint</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="ht12"
                      />
                      <label for="ht12">Quite</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="ht14"
                      />
                      <label for="ht14">Romantic</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="ht15"
                      />
                      <label for="ht15">Standard</label>
                    </div>
                    <div class="custom-checkbox">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="ht16"
                      />
                      <label for="ht16">Trendy</label>
                    </div>
                  </div>
                  <a
                    class="btn-text"
                    data-bs-toggle="collapse"
                    href="#hotelThemeMenu"
                    role="button"
                    aria-expanded="false"
                    aria-controls="hotelThemeMenu"
                  >
                    <span class="show-more"
                      >Show More <i class="la la-angle-down"></i
                    ></span>
                    <span class="show-less"
                      >Show Less <i class="la la-angle-up"></i
                    ></span>
                  </a>
                </div>
              </div>
              {/* <!-- end sidebar-widget --> */}
            </div>
            {/* <!-- end sidebar --> */}
          </div>
          {/* <!-- end col-lg-4 --> */}
          <div class="col-lg-8">
            <div class="card-item card-item-list">
              <div class="card-img">
                <a href="hotel-single.html" class="d-block">
                  <img src="images/img1.jpg" alt="hotel-img" />
                </a>
                <span class="badge">Bestseller</span>
                <div
                  class="add-to-wishlist icon-element"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Bookmark"
                >
                  <i class="la la-heart-o"></i>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  <a href="hotel-single.html">The Millennium Hilton New York</a>
                </h3>
                <p class="card-meta">124 E Huron St, New york</p>
                <div class="card-rating">
                  <span class="badge text-white">4.4/5</span>
                  <span class="review__text">Average</span>
                  <span class="rating__text">(30 Reviews)</span>
                </div>
                <div
                  class="card-price d-flex align-items-center justify-content-between"
                >
                  <p>
                    <span class="price__from">From</span>
                    <span class="price__num">$88.00</span>
                    <span class="price__text">Per night</span>
                  </p>
                  <a href="hotel-single.html" class="btn-text"
                    >See details<i class="la la-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
            {/* <!-- end card-item --> */}
            <div class="card-item card-item-list">
              <div class="card-img">
                <a href="hotel-single.html" class="d-block">
                  <img src="images/img2.jpg" alt="hotel-img" />
                </a>
                <div
                  class="add-to-wishlist icon-element"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Bookmark"
                >
                  <i class="la la-heart-o"></i>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  <a href="hotel-single.html">Best Western Grant Park Hotel</a>
                </h3>
                <p class="card-meta">124 E Huron St, Chicago</p>
                <div class="card-rating">
                  <span class="badge text-white">4.4/5</span>
                  <span class="review__text">Average</span>
                  <span class="rating__text">(30 Reviews)</span>
                </div>
                <div
                  class="card-price d-flex align-items-center justify-content-between"
                >
                  <p>
                    <span class="price__from">From</span>
                    <span class="price__num">$58.00</span>
                    <span class="price__text">Per night</span>
                  </p>
                  <a href="hotel-single.html" class="btn-text"
                    >See details<i class="la la-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
            {/* <!-- end card-item --> */}
            <div class="card-item card-item-list">
              <div class="card-img">
                <a href="hotel-single.html" class="d-block">
                  <img src="images/img3.jpg" alt="hotel-img" />
                </a>
                <span class="badge">Featured</span>
                <div
                  class="add-to-wishlist icon-element"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Bookmark"
                >
                  <i class="la la-heart-o"></i>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  <a href="hotel-single.html"
                    >Hyatt Regency Maui Resort & Spa</a
                  >
                </h3>
                <p class="card-meta">200 Nohea Kai Dr, Lahaina, HI</p>
                <div class="card-rating">
                  <span class="badge text-white">4.4/5</span>
                  <span class="review__text">Average</span>
                  <span class="rating__text">(30 Reviews)</span>
                </div>
                <div
                  class="card-price d-flex align-items-center justify-content-between"
                >
                  <p>
                    <span class="price__from">From</span>
                    <span class="price__num">$88.00</span>
                    <span class="price__text">Per night</span>
                  </p>
                  <a href="hotel-single.html" class="btn-text"
                    >See details<i class="la la-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
            {/* <!-- end card-item --> */}
            <div class="card-item card-item-list">
              <div class="card-img">
                <a href="hotel-single.html" class="d-block">
                  <img src="images/img4.jpg" alt="hotel-img" />
                </a>
                <span class="badge">Popular</span>
                <div
                  class="add-to-wishlist icon-element"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Bookmark"
                >
                  <i class="la la-heart-o"></i>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  <a href="hotel-single.html"
                    >Four Seasons Resort Maui at Wailea</a
                  >
                </h3>
                <p class="card-meta">3900 Wailea Alanui Drive, Kihei, HI</p>
                <div class="card-rating">
                  <span class="badge text-white">4.4/5</span>
                  <span class="review__text">Average</span>
                  <span class="rating__text">(30 Reviews)</span>
                </div>
                <div
                  class="card-price d-flex align-items-center justify-content-between"
                >
                  <p>
                    <span class="price__from">From</span>
                    <span class="price__num">$88.00</span>
                    <span class="price__text">Per night</span>
                  </p>
                  <a href="hotel-single.html" class="btn-text"
                    >See details<i class="la la-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
            {/* <!-- end card-item --> */}
            <div class="card-item card-item-list">
              <div class="card-img">
                <a href="hotel-single.html" class="d-block">
                  <img src="images/img5.jpg" alt="hotel-img" />
                </a>
                <div
                  class="add-to-wishlist icon-element"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Bookmark"
                >
                  <i class="la la-heart-o"></i>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  <a href="hotel-single.html">Ibis Styles London Heathrow</a>
                </h3>
                <p class="card-meta">272 Bath Road, Harlington, England</p>
                <div class="card-rating">
                  <span class="badge text-white">4.4/5</span>
                  <span class="review__text">Average</span>
                  <span class="rating__text">(30 Reviews)</span>
                </div>
                <div
                  class="card-price d-flex align-items-center justify-content-between"
                >
                  <p>
                    <span class="price__from">From</span>
                    <span class="price__num">$88.00</span>
                    <span class="price__text">Per night</span>
                  </p>
                  <a href="hotel-single.html" class="btn-text"
                    >See details<i class="la la-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
            {/* <!-- end card-item --> */}
            <div class="card-item card-item-list">
              <div class="card-img">
                <a href="hotel-single.html" class="d-block">
                  <img src="images/img6.jpg" alt="hotel-img" />
                </a>
                <div
                  class="add-to-wishlist icon-element"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Bookmark"
                >
                  <i class="la la-heart-o"></i>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  <a href="hotel-single.html"
                    >Hotel Europe Saint Severin Paris</a
                  >
                </h3>
                <p class="card-meta">38-40 Rue Saint Séverin, Paris, Paris</p>
                <div class="card-rating">
                  <span class="badge text-white">4.4/5</span>
                  <span class="review__text">Average</span>
                  <span class="rating__text">(30 Reviews)</span>
                </div>
                <div
                  class="card-price d-flex align-items-center justify-content-between"
                >
                  <p>
                    <span class="price__from">From</span>
                    <span class="price__num">$88.00</span>
                    <span class="price__text">Per night</span>
                  </p>
                  <a href="hotel-single.html" class="btn-text"
                    >See details<i class="la la-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
            {/* <!-- end card-item --> */}
            <div class="card-item card-item-list">
              <div class="card-img">
                <a href="hotel-single.html" class="d-block">
                  <img src="images/img5.jpg" alt="hotel-img" />
                </a>
                <div
                  class="add-to-wishlist icon-element"
                  data-bs-toggle="tooltip"
                  data-placement="top"
                  title="Bookmark"
                >
                  <i class="la la-heart-o"></i>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title">
                  <a href="hotel-single.html">Grand Desert Resort</a>
                </h3>
                <p class="card-meta">Delaware, USA</p>
                <div class="card-rating">
                  <span class="badge text-white">4.4/5</span>
                  <span class="review__text">Average</span>
                  <span class="rating__text">(30 Reviews)</span>
                </div>
                <div
                  class="card-price d-flex align-items-center justify-content-between"
                >
                  <p>
                    <span class="price__from">From</span>
                    <span class="price__num">$88.00</span>
                    <span class="price__text">Per night</span>
                  </p>
                  <a href="hotel-single.html" class="btn-text"
                    >See details<i class="la la-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
            {/* <!-- end card-item --> */}
          </div>
          {/* <!-- end col-lg-8 --> */}
        </div>
        {/* <!-- end row --> */}
        <div class="row">
          <div class="col-lg-12">
            <div class="btn-box mt-3 text-center">
              <button type="button" class="theme-btn">
                <i class="la la-refresh me-1"></i>Load More
              </button>
              <p class="font-size-13 pt-2">Showing 1 - 6 of 2224 Hotels</p>
            </div>
            {/* <!-- end btn-box --> */}
          </div>
          {/* <!-- end col-lg-12 --> */}
        </div>
        {/* <!-- end row --> */}
      </div>
      {/* <!-- end container --> */}
    </section>
    
    </>
  )
}

export default FilterdHotelList