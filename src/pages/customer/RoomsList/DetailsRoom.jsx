import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRoomById, getRoomDetails } from '../../../config/roomApi'
import { createBooking } from '../../../config/bookingApi'
import { API_BASE_URL } from '../../../config/apiConfig';

const DetailsRoom = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [room, setRoom] = useState({
    id: "",
    name: "",
    description: "",
    numberOfAdults: 0,
    numberOfChildren: 0,
    numberOfBeds: 0,
    price: '',
    typeBed: "",
    roomImages: [],
    services: [],
    reviews: [],
    totalRating: 0,
    totalReviews: 0,
  });

  // reservation 
  const [reservationForm, setReservationForm] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
    beds: 1,
    voucherCode: "",
    specialRequest: "",
    numberOfRooms: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const data = await getRoomDetails(id);
        console.log(data);
        setRoom(data);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    }

    fetchRoomDetails();
  }, [id]);

  const getImageUrl = (image) => {
    if (image && image.startWith('http')) {
      return image;
    } else {
      return `${API_BASE_URL}/images/${image}`;
    }
  }

  const handleReservationFormChange = (e) => {
    // Handle regular form inputs
    if (e.target.name) {
      const { name, value } = e.target;
      setReservationForm((prevForm) => ({
        ...prevForm,
        [name]: value,
        ['adults'] : room.numberOfAdults,
        ['children'] : room.numberOfChildren,
        ['beds'] : room.numberOfBeds,
      }));

      console.log(reservationForm);
    }
  }

  const validateForm = () => {
    const errors = {};
    
    if (!reservationForm.checkIn) {
      errors.checkIn = "Check-in date is required";
    }
    
    if (!reservationForm.checkOut) {
      errors.checkOut = "Check-out date is required";
    }
    
    if (reservationForm.checkIn && reservationForm.checkOut) {
      const checkInDate = new Date(reservationForm.checkIn);
      const checkOutDate = new Date(reservationForm.checkOut);
      
      if (checkInDate >= checkOutDate) {
        errors.checkOut = "Check-out date must be after check-in date";
      }
      
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      if (checkInDate < today) {
        errors.checkIn = "Check-in date cannot be in the past";
      }
    }
    
    if (reservationForm.adults < 1) {
      errors.adults = "At least 1 adult is required";
    }
    
    return Object.keys(errors).length === 0 ? null : errors;
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    
    // Check if user is logged in
    const token = localStorage.getItem('jwt');
    if (!token) {
      // Open login modal or redirect to login page
      const loginModal = new bootstrap.Modal(document.getElementById('loginPopupForm'));
      if (loginModal) {
        loginModal.show();
      } else {
        navigate('/login');
      }
      return;
    }
    
    // Validate form
    const errors = validateForm();
    if (errors) {
      setError(errors);
      return;
    }
    
    try {
      setLoading(true);
      setError(null);
      
      // Prepare booking data
      const bookingData = {
        roomId: id,
        checkInDate: reservationForm.checkIn,
        checkOutDate: reservationForm.checkOut,
        numberOfAdults: parseInt(room.numberOfAdults),
        numberOfChildren: parseInt(room.numberOfChildren),
        voucherCode: reservationForm.voucherCode || null,
        specialRequest: reservationForm.specialRequest || null,
        price: reservationForm.price,
        rooms: [room]
      };

      const bookingJsonData = JSON.stringify(bookingData);
      
      // Create booking
      const response = await createBooking(bookingJsonData);
      
      if (response) {
        setSuccess(true);
        
        // Redirect to booking confirmation page after a short delay
        setTimeout(() => {
          navigate(`/booking-confirmation/${response.id}`);
        }, 2000);
      } else {
        throw new Error("Failed to create booking");
      }
    } catch (err) {
      console.error("Error creating booking:", err);
      setError(err.message || "Failed to create booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const calculateTotalPrice = () => {
    if (!room.price || !reservationForm.checkIn || !reservationForm.checkOut) {
      return 0;
    }
    
    const checkInDate = new Date(reservationForm.checkIn);
    const checkOutDate = new Date(reservationForm.checkOut);
    
    // Calculate number of nights
    const nights = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    
    // Apply voucher discount if applicable
    let totalPrice = room.price * nights;
    
    // TODO: Apply voucher discount logic here
    
    return totalPrice;
  };

  return (
    <>
      <section class="room-detail-bread">
        <div class="full-width-slider carousel-action">

          {
            room.roomImages && room.roomImages.map((image, index) => (
              <div className='full-width-slide-item'>
                <img src={getImageUrl(image.url)} alt="" key={index} />
              </div>
            ))
          }
        </div>
        {/* <!-- end full-width-slider --> */}
      </section>

      <section class="tour-detail-area padding-bottom-90px">
        <div
          class="single-content-navbar-wrap menu section-bg"
          id="single-content-navbar"
        >
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="single-content-nav" id="single-content-nav">
                  <ul>
                    <li>
                      <a
                        data-scroll="description"
                        href="#description"
                        class="scroll-link active"
                      >Description</a
                      >
                    </li>
                    <li>
                      <a
                        data-scroll="services"
                        href="#services"
                        class="scroll-link"
                      >Services</a
                      >
                    </li>
                    <li>
                      <a
                        data-scroll="amenities"
                        href="#amenities"
                        class="scroll-link"
                      >Amenities</a
                      >
                    </li>
                    <li>
                      <a
                        data-scroll="location-map"
                        href="#location-map"
                        class="scroll-link"
                      >Map</a
                      >
                    </li>
                    <li>
                      <a data-scroll="reviews" href="#reviews" class="scroll-link"
                      >Reviews</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end single-content-navbar-wrap --> */}
        <div class="single-content-box">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="single-content-wrap padding-top-60px">
                  <div id="description" class="page-scroll">
                    <div class="single-content-item pb-4">
                      <h3 class="title font-size-26">{room.name}</h3>
                      <p class="pt-2">
                        <span
                          class="badge text-bg-warning text-white font-size-16"
                        >{room.totalRating}</span
                        >
                        <span>({room.totalReviews} Reviews)</span>
                      </p>
                    </div>
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                    <div
                      class="single-content-item padding-top-30px padding-bottom-40px"
                    >
                      <h3 class="title font-size-20">Description</h3>
                      <p class="py-3">
                        {room.description}
                      </p>

                      <h3 class="title font-size-15 font-weight-medium pb-3">
                        House Rules
                      </h3>
                      <ul class="list-items">
                        <li>
                          <i class="la la-dot-circle me-2"></i>No smoking, parties
                          or events.
                        </li>
                        <li>
                          <i class="la la-dot-circle me-2"></i>Check-in time is 2
                          PM - 4 PM and check-out by 10 AM.
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                  </div>
                  {/* <!-- end description --> */}
                  <div id="services" class="page-scroll">
                    <div
                      class="single-content-item padding-top-40px padding-bottom-40px"
                    >
                      <h3 class="title font-size-20">Services</h3>
                      <div class="row pt-4">
                        {room.services && room.services.map((service, index) => (
                          <div class="col-lg-4 responsive-column">
                            <div
                              class="single-tour-feature d-flex align-items-center mb-3"
                            >
                              <div
                                class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                              >
                                <i class="la la-check-circle"></i>
                              </div>
                              <div class="single-feature-titles">
                                <h3 class="title font-size-15 font-weight-medium">
                                  {service}
                                </h3>
                              </div>
                            </div>
                            {/* <!-- end single-tour-feature --> */}

                          </div>
                        ))

                        }

                        {/* <!-- end col-lg-4 --> */}
                      </div>
                      {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                  </div>
                  {/* <!-- end itinerary --> */}
                  <div id="amenities" class="page-scroll">
                    <div
                      class="single-content-item padding-top-40px padding-bottom-40px"
                    >
                      <h3 class="title font-size-20">Amenities</h3>
                      <div class="row pt-4">
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-couch"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                2 Seater Sofa
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-television"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                40-Inch Samsung LED TV
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-gear"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Butler Service
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-wifi"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Free Wi – Fi
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-swimming-pool"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Private Pool
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-user"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                24h Room Service
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-air-freshener"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Air Conditioning
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-phone"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Direct Dial Phone
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-bullhorn"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Hair Dryer
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-bathtub"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Bathtub
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-hand-holding-usd"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Safe Deposit Box
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                        <div class="col-lg-4 responsive-column">
                          <div
                            class="single-tour-feature d-flex align-items-center mb-3"
                          >
                            <div
                              class="single-feature-icon icon-element ms-0 flex-shrink-0 me-3"
                            >
                              <i class="la la-luggage-cart"></i>
                            </div>
                            <div class="single-feature-titles">
                              <h3 class="title font-size-15 font-weight-medium">
                                Luggage storage
                              </h3>
                            </div>
                          </div>
                          {/* <!-- end single-tour-feature --> */}
                        </div>
                        {/* <!-- end col-lg-4 --> */}
                      </div>
                      {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                  </div>
                  {/* <!-- end itinerary --> */}
                  
                  {/* <!-- end location-map --> */}
                  <div id="reviews" class="page-scroll">
                    <div
                      class="single-content-item padding-top-40px padding-bottom-40px"
                    >
                      <h3 class="title font-size-20">Reviews</h3>
                      <div class="review-container padding-top-30px">
                        <div class="row align-items-center">
                          <div class="col-lg-4">
                            <div class="review-summary">
                              <h2>4.5<span>/5</span></h2>
                              <p>Excellent</p>
                              <span>Based on 4 reviews</span>
                            </div>
                          </div>
                          {/* <!-- end col-lg-4 --> */}
                          <div class="col-lg-8">
                            <div class="review-bars">
                              <div class="row">
                                <div class="col-lg-6">
                                  <div class="progress-item">
                                    <h3 class="progressbar-title">Service</h3>
                                    <div
                                      class="progressbar-content line-height-20 d-flex align-items-center justify-content-between"
                                    >
                                      <div class="progressbar-box flex-shrink-0">
                                        <div
                                          class="progressbar-line"
                                          data-percent="70%"
                                        >
                                          <div
                                            class="progressbar-line-item bar-bg-1"
                                          ></div>
                                        </div>
                                        {/* <!-- End Skill Bar --> */}
                                      </div>
                                      <div class="bar-percent">4.6</div>
                                    </div>
                                  </div>
                                  {/* <!-- end progress-item --> */}
                                </div>
                                {/* <!-- end col-lg-6 --> */}
                                <div class="col-lg-6">
                                  <div class="progress-item">
                                    <h3 class="progressbar-title">Location</h3>
                                    <div
                                      class="progressbar-content line-height-20 d-flex align-items-center justify-content-between"
                                    >
                                      <div class="progressbar-box flex-shrink-0">
                                        <div
                                          class="progressbar-line"
                                          data-percent="55%"
                                        >
                                          <div
                                            class="progressbar-line-item bar-bg-2"
                                          ></div>
                                        </div>
                                        {/* <!-- End Skill Bar --> */}
                                      </div>
                                      <div class="bar-percent">4.7</div>
                                    </div>
                                  </div>
                                  {/* <!-- end progress-item --> */}
                                </div>
                                {/* <!-- end col-lg-6 --> */}
                                <div class="col-lg-6">
                                  <div class="progress-item">
                                    <h3 class="progressbar-title">
                                      Value for Money
                                    </h3>
                                    <div
                                      class="progressbar-content line-height-20 d-flex align-items-center justify-content-between"
                                    >
                                      <div class="progressbar-box flex-shrink-0">
                                        <div
                                          class="progressbar-line"
                                          data-percent="40%"
                                        >
                                          <div
                                            class="progressbar-line-item bar-bg-3"
                                          ></div>
                                        </div>
                                        {/* <!-- End Skill Bar --> */}
                                      </div>
                                      <div class="bar-percent">2.6</div>
                                    </div>
                                  </div>
                                  {/* <!-- end progress-item --> */}
                                </div>
                                {/* <!-- end col-lg-6 --> */}
                                <div class="col-lg-6">
                                  <div class="progress-item">
                                    <h3 class="progressbar-title">Cleanliness</h3>
                                    <div
                                      class="progressbar-content line-height-20 d-flex align-items-center justify-content-between"
                                    >
                                      <div class="progressbar-box flex-shrink-0">
                                        <div
                                          class="progressbar-line"
                                          data-percent="60%"
                                        >
                                          <div
                                            class="progressbar-line-item bar-bg-4"
                                          ></div>
                                        </div>
                                        {/* <!-- End Skill Bar --> */}
                                      </div>
                                      <div class="bar-percent">3.6</div>
                                    </div>
                                  </div>
                                  {/* <!-- end progress-item --> */}
                                </div>
                                {/* <!-- end col-lg-6 --> */}
                                <div class="col-lg-6">
                                  <div class="progress-item">
                                    <h3 class="progressbar-title">Facilities</h3>
                                    <div
                                      class="progressbar-content line-height-20 d-flex align-items-center justify-content-between"
                                    >
                                      <div class="progressbar-box flex-shrink-0">
                                        <div
                                          class="progressbar-line"
                                          data-percent="50%"
                                        >
                                          <div
                                            class="progressbar-line-item bar-bg-5"
                                          ></div>
                                        </div>
                                        {/* <!-- End Skill Bar --> */}
                                      </div>
                                      <div class="bar-percent">2.6</div>
                                    </div>
                                  </div>
                                  {/* <!-- end progress-item --> */}
                                </div>
                                {/* <!-- end col-lg-6 --> */}
                              </div>
                              {/* <!-- end row --> */}
                            </div>
                          </div>
                          {/* <!-- end col-lg-8 --> */}
                        </div>
                      </div>
                    </div>
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                  </div>
                  {/* <!-- end reviews --> */}
                  <div class="review-box">
                    <div class="single-content-item padding-top-40px">
                      <h3 class="title font-size-20">Showing 3 guest reviews</h3>
                      <div class="comments-list padding-top-50px">
                        <div class="comment">
                          <div class="comment-avatar">
                            <img
                              class="avatar__img"
                              alt=""
                              src="images/team8.jpg"
                            />
                          </div>
                          <div class="comment-body">
                            <div class="meta-data">
                              <h3 class="comment__author">Jenny Doe</h3>
                              <div class="meta-data-inner d-flex">
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
                              Lorem ipsum dolor sit amet, dolores mandamus
                              moderatius ea ius, sed civibus vivendum imperdiet
                              ei, amet tritani sea id. Ut veri diceret fierent
                              mei, qui facilisi suavitate euripidis
                            </p>
                            <div
                              class="comment-reply d-flex align-items-center justify-content-between"
                            >
                              <a
                                class="theme-btn"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#replayPopupForm"
                              >
                                <span class="la la-mail-reply me-1"></span>Reply
                              </a>
                              <div class="reviews-reaction">
                                <a href="#" class="comment-like"
                                ><i class="la la-thumbs-up"></i> 13</a
                                >
                                <a href="#" class="comment-dislike"
                                ><i class="la la-thumbs-down"></i> 2</a
                                >
                                <a href="#" class="comment-love"
                                ><i class="la la-heart-o"></i> 5</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end comments --> */}
                        <div class="comment comment-reply-item">
                          <div class="comment-avatar">
                            <img
                              class="avatar__img"
                              alt=""
                              src="images/team9.jpg"
                            />
                          </div>
                          <div class="comment-body">
                            <div class="meta-data">
                              <h3 class="comment__author">Jenny Doe</h3>
                              <div class="meta-data-inner d-flex">
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
                              Lorem ipsum dolor sit amet, dolores mandamus
                              moderatius ea ius, sed civibus vivendum imperdiet
                              ei, amet tritani sea id. Ut veri diceret fierent
                              mei, qui facilisi suavitate euripidis
                            </p>
                            <div
                              class="comment-reply d-flex align-items-center justify-content-between"
                            >
                              <a
                                class="theme-btn"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#replayPopupForm"
                              >
                                <span class="la la-mail-reply me-1"></span>Reply
                              </a>
                              <div class="reviews-reaction">
                                <a href="#" class="comment-like"
                                ><i class="la la-thumbs-up"></i> 13</a
                                >
                                <a href="#" class="comment-dislike"
                                ><i class="la la-thumbs-down"></i> 2</a
                                >
                                <a href="#" class="comment-love"
                                ><i class="la la-heart-o"></i> 5</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end comments --> */}
                        <div class="comment">
                          <div class="comment-avatar">
                            <img
                              class="avatar__img"
                              alt=""
                              src="images/team10.jpg"
                            />
                          </div>
                          <div class="comment-body">
                            <div class="meta-data">
                              <h3 class="comment__author">Jenny Doe</h3>
                              <div class="meta-data-inner d-flex">
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
                              Lorem ipsum dolor sit amet, dolores mandamus
                              moderatius ea ius, sed civibus vivendum imperdiet
                              ei, amet tritani sea id. Ut veri diceret fierent
                              mei, qui facilisi suavitate euripidis
                            </p>
                            <div
                              class="comment-reply d-flex align-items-center justify-content-between"
                            >
                              <a
                                class="theme-btn"
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#replayPopupForm"
                              >
                                <span class="la la-mail-reply me-1"></span>Reply
                              </a>
                              <div class="reviews-reaction">
                                <a href="#" class="comment-like"
                                ><i class="la la-thumbs-up"></i> 13</a
                                >
                                <a href="#" class="comment-dislike"
                                ><i class="la la-thumbs-down"></i> 2</a
                                >
                                <a href="#" class="comment-love"
                                ><i class="la la-heart-o"></i> 5</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end comments --> */}
                        <div class="btn-box load-more text-center">
                          <button
                            class="theme-btn theme-btn-small theme-btn-transparent"
                            type="button"
                          >
                            Load More Review
                          </button>
                        </div>
                      </div>
                      {/* <!-- end comments-list --> */}
                      <div class="comment-forum padding-top-40px">
                        <div class="form-box">
                          <div class="form-title-wrap">
                            <h3 class="title">Write a Review</h3>
                          </div>
                          {/* <!-- form-title-wrap --> */}
                          <div class="form-content">
                            <div class="rate-option p-2">
                              <div class="row">
                                <div class="col-lg-4 responsive-column">
                                  <div class="rate-option-item">
                                    <label>Service</label>
                                    <div class="rate-stars-option">
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="lst1"
                                        value="1"
                                      />
                                      <label for="lst1"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="lst2"
                                        value="2"
                                      />
                                      <label for="lst2"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="lst3"
                                        value="3"
                                      />
                                      <label for="lst3"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="lst4"
                                        value="4"
                                      />
                                      <label for="lst4"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="lst5"
                                        value="5"
                                      />
                                      <label for="lst5"></label>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- col-lg-4 --> */}
                                <div class="col-lg-4 responsive-column">
                                  <div class="rate-option-item">
                                    <label>Location</label>
                                    <div class="rate-stars-option">
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="l1"
                                        value="1"
                                      />
                                      <label for="l1"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="l2"
                                        value="2"
                                      />
                                      <label for="l2"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="l3"
                                        value="3"
                                      />
                                      <label for="l3"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="l4"
                                        value="4"
                                      />
                                      <label for="l4"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="l5"
                                        value="5"
                                      />
                                      <label for="l5"></label>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- col-lg-4 --> */}
                                <div class="col-lg-4 responsive-column">
                                  <div class="rate-option-item">
                                    <label>Value for Money</label>
                                    <div class="rate-stars-option">
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="vm1"
                                        value="1"
                                      />
                                      <label for="vm1"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="vm2"
                                        value="2"
                                      />
                                      <label for="vm2"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="vm3"
                                        value="3"
                                      />
                                      <label for="vm3"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="vm4"
                                        value="4"
                                      />
                                      <label for="vm4"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="vm5"
                                        value="5"
                                      />
                                      <label for="vm5"></label>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- col-lg-4 --> */}
                                <div class="col-lg-4 responsive-column">
                                  <div class="rate-option-item">
                                    <label>Cleanliness</label>
                                    <div class="rate-stars-option">
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="cln1"
                                        value="1"
                                      />
                                      <label for="cln1"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="cln2"
                                        value="2"
                                      />
                                      <label for="cln2"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="cln3"
                                        value="3"
                                      />
                                      <label for="cln3"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="cln4"
                                        value="4"
                                      />
                                      <label for="cln4"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="cln5"
                                        value="5"
                                      />
                                      <label for="cln5"></label>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- col-lg-4 --> */}
                                <div class="col-lg-4 responsive-column">
                                  <div class="rate-option-item">
                                    <label>Facilities</label>
                                    <div class="rate-stars-option">
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="f1"
                                        value="1"
                                      />
                                      <label for="f1"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="f2"
                                        value="2"
                                      />
                                      <label for="f2"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="f3"
                                        value="3"
                                      />
                                      <label for="f3"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="f4"
                                        value="4"
                                      />
                                      <label for="f4"></label>
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="f5"
                                        value="5"
                                      />
                                      <label for="f5"></label>
                                    </div>
                                  </div>
                                </div>
                                {/* <!-- col-lg-4 --> */}
                              </div>
                              {/* <!-- end row --> */}
                            </div>
                            {/* <!-- end rate-option --> */}
                            <div class="contact-form-action">
                              <form method="post">
                                <div className="row">
                                  <div className="col-lg-6 responsive-column">
                                    <div className="input-box">
                                      <label className="label-text">Name</label>
                                      <div className="form-group">
                                        <span className="la la-user form-icon"></span>
                                        <input
                                          className="form-control"
                                          type="text"
                                          name="text"
                                          placeholder="Your name"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-6 responsive-column">
                                    <div className="input-box">
                                      <label className="label-text">Email</label>
                                      <div className="form-group">
                                        <span
                                          className="la la-envelope-o form-icon"
                                        ></span>
                                        <input
                                          className="form-control"
                                          type="email"
                                          name="email"
                                          placeholder="Email address"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="input-box">
                                      <label className="label-text">Message</label>
                                      <div className="form-group">
                                        <span
                                          className="la la-pencil form-icon"
                                        ></span>
                                        <textarea
                                          className="message-control form-control"
                                          name="message"
                                          placeholder="Write message"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-12">
                                    <div className="btn-box">
                                      <button type="button" className="theme-btn">
                                        Leave a Review
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </form>
                            </div>
                            {/* <!-- end contact-form-action --> */}
                          </div>
                          {/* <!-- end form-content --> */}
                        </div>
                        {/* <!-- end form-box --> */}
                      </div>
                      {/* <!-- end comment-forum --> */}
                    </div>
                    {/* <!-- end single-content-item --> */}
                  </div>
                  {/* <!-- end review-box --> */}
                </div>
                {/* <!-- end single-content-wrap --> */}
              </div>
              {/* <!-- end col-lg-8 --> */}
              <div className="col-lg-4">
                <div className="sidebar single-content-sidebar mb-0">
                  <div className="sidebar-widget single-content-widget">
                    <h3 className="title stroke-shape">Your Reservation</h3>
                    <div className="contact-form-action">
                      <form onSubmit={handleBooking}>
                        <div className="input-box">
                          <label className="label-text">Check-in</label>
                          <div className="form-group">
                            <span className="la la-calendar form-icon"></span>
                            <input
                              className="date-range form-control"
                              type="date"
                              name="checkIn"
                              value={reservationForm.checkIn}
                              onChange={handleReservationFormChange}
                              min={new Date().toISOString().split('T')[0]}
                            />
                            {error?.checkIn && <span className="text-danger">{error.checkIn}</span>}
                          </div>
                        </div>
                        <div className="input-box">
                          <label className="label-text">Check-out</label>
                          <div className="form-group">
                            <span className="la la-calendar form-icon"></span>
                            <input
                              className="date-range form-control"
                              type="date"
                              name="checkOut"
                              value={reservationForm.checkOut}
                              onChange={handleReservationFormChange}
                              min={reservationForm.checkIn || new Date().toISOString().split('T')[0]}
                            />
                            {error?.checkOut && <span className="text-danger">{error.checkOut}</span>}
                          </div>
                        </div>
                        
                        <div className="sidebar-widget-item">
                          <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                            <label className="font-size-16">Adults <span>Age 18+</span></label>
                            <div className="qtyBtn d-flex align-items-center">
                              <input
                                type="text"
                                name="adults"
                                value={room.numberOfAdults}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                            <label className="font-size-16">Children <span>2-12 years old</span></label>
                            <div className="qtyBtn d-flex align-items-center">
                              <input
                                type="text"
                                name="children"
                                value={room.numberOfChildren}
                                readOnly
                              />
                            </div>
                          </div>
                          <div className="qty-box mb-2 d-flex align-items-center justify-content-between">
                            <label className="font-size-16">Beds</label>
                            <div className="qtyBtn d-flex align-items-center">
                              <input
                                type="text"
                                name="children"
                                value={room.numberOfBeds}
                                readOnly
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="sidebar-widget-item py-4">
                          <h3>Apply voucher</h3>
                          <div className="input-box">
                            <div className="form-group">
                              <span className="la la-ticket form-icon"></span>
                              <input
                                className="form-control"
                                type="text"
                                name="voucherCode"
                                value={reservationForm.voucherCode}
                                onChange={handleReservationFormChange}
                                placeholder="Enter voucher code"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="sidebar-widget-item py-4">
                          <h3>Special Request</h3>
                          <div className="input-box">
                            <div className="form-group">
                              <span className="la la-comment form-icon"></span>
                              <textarea
                                className="form-control"
                                name="specialRequest"
                                placeholder="Any special requests or requirements?"
                                value={reservationForm.specialRequest}
                                onChange={handleReservationFormChange}
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                          <p className="font-size-13 text-muted mt-1">
                            Please let us know if you have any specific requirements for your stay
                          </p>
                        </div>

                        {error && (
                          <div className="alert alert-danger" role="alert">
                            {typeof error === 'object' ? Object.values(error).join(', ') : error}
                          </div>
                        )}
                        
                        {success && (
                          <div className="alert alert-success" role="alert">
                            Booking created successfully! Redirecting to confirmation page...
                          </div>
                        )}

                        <div className="btn-box">
                          <button 
                            type="submit" 
                            className="theme-btn text-center w-100 mb-2"
                            disabled={loading}
                          >
                            {loading ? 'Processing...' : 'Book Now'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* <!-- end sidebar-widget --> */}
                  <div className="sidebar-widget single-content-widget">
                    <h3 className="title stroke-shape">Why Book With Us?</h3>
                    <div className="sidebar-list">
                      <ul className="list-items">
                        <li>
                          <i className="la la-dollar icon-element me-2"></i>No-hassle
                          best price guarantee
                        </li>
                        <li>
                          <i className="la la-microphone icon-element me-2"></i
                          >Customer care available 24/7
                        </li>
                        <li>
                          <i className="la la-thumbs-up icon-element me-2"></i
                          >Hand-picked Tours & Activities
                        </li>
                        <li>
                          <i className="la la-file-text icon-element me-2"></i>Free
                          Travel Insureance
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end sidebar-list --> */}
                  </div>
                  {/* <!-- end sidebar-widget --> */}
                  <div className="sidebar-widget single-content-widget">
                    <h3 className="title stroke-shape">Get a Question?</h3>
                    <p className="font-size-14 line-height-24">
                      Do not hesitate to give us a call. We are an expert team and
                      we are happy to talk to you.
                    </p>
                    <div className="sidebar-list pt-3">
                      <ul className="list-items">
                        <li>
                          <i className="la la-phone icon-element me-2"></i
                          ><a href="#">+ 61 23 8093 3400</a>
                        </li>
                        <li>
                          <i className="la la-envelope icon-element me-2"></i
                          ><a href="mailto:info@trizen.com">info@trizen.com</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end sidebar-list --> */}
                  </div>
                  {/* <!-- end sidebar-widget --> */}
                </div>
                {/* <!-- end sidebar --> */}
              </div>
              {/* <!-- end col-lg-4 --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end single-content-box --> */}
      </section>

      <section className="related-tour-area section--padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-heading text-center">
                <h2 className="sec__title">Other Rooms</h2>
                <p className="sec__desc">Could also be interest for you</p>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div className="row padding-top-50px">
            <div className="col-lg-6">
              <div className="card-item room-card">
                <div className="card-img-carousel carousel-action carousel--action">
                  <div className="card-img">
                    <a href="room-details.html" className="d-block">
                      <img src="images/img5.jpg" alt="hotel-img" />
                    </a>
                  </div>
                  <div className="card-img">
                    <a href="room-details.html" className="d-block">
                      <img src="images/img29.jpg" alt="hotel-img" />
                    </a>
                  </div>
                  <div className="card-img">
                    <a href="room-details.html" className="d-block">
                      <img src="images/img30.jpg" alt="hotel-img" />
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-price pb-2">
                    <p>
                      <span className="price__from">From</span>
                      <span className="price__num">$88.00</span>
                    </p>
                  </div>
                  <h3 className="card-title font-size-26">
                    <a href="room-details.html">Premium Lake View Room</a>
                  </h3>
                  <p className="card-text pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores commodi deleniti hic inventore laboriosam
                    laborum molestias, non odit quaerat! Aperiam culpa facilis
                    fuga impedit.
                  </p>
                  <div className="card-attributes pt-3 pb-4">
                    <ul className="d-flex align-items-center">
                      <li className="d-flex align-items-center">
                        <i className="la la-bed"></i><span>2 Beds</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-building"></i
                        ><span>24 ft<sup>2</sup></span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-bathtub"></i><span>2 Bathrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-btn d-flex align-items-center">
                    <div className="btn-box">
                      <a
                        href="room-details.html"
                        className="theme-btn theme-btn-transparent"
                      >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-6 --> */}
            <div className="col-lg-6">
              <div className="card-item room-card">
                <div className="card-img-carousel carousel-action carousel--action">
                  <div className="card-img">
                    <a href="room-details.html" className="d-block">
                      <img src="images/img31.jpg" alt="hotel-img" />
                    </a>
                  </div>
                  <div className="card-img">
                    <a href="room-details.html" className="d-block">
                      <img src="images/img32.jpg" alt="hotel-img" />
                    </a>
                  </div>
                  <div className="card-img">
                    <a href="room-details.html" className="d-block">
                      <img src="images/img33.jpg" alt="hotel-img" />
                    </a>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-price pb-2">
                    <p>
                      <span className="price__from">From</span>
                      <span className="price__num">$45.00</span>
                    </p>
                  </div>
                  <h3 className="card-title font-size-26">
                    <a href="room-details.html">Standard 2 Bed Male Dorm</a>
                  </h3>
                  <p className="card-text pt-2">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Aperiam asperiores commodi deleniti hic inventore laboriosam
                    laborum molestias, non odit quaerat! Aperiam culpa facilis
                    fuga impedit.
                  </p>
                  <div className="card-attributes pt-3 pb-4">
                    <ul className="d-flex align-items-center">
                      <li className="d-flex align-items-center">
                        <i className="la la-bed"></i><span>2 Beds</span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-building"></i
                        ><span>24 ft<sup>2</sup></span>
                      </li>
                      <li className="d-flex align-items-center">
                        <i className="la la-bathtub"></i><span>2 Bathrooms</span>
                      </li>
                    </ul>
                  </div>
                  <div className="card-btn d-flex align-items-center">
                    <div className="btn-box">
                      <a
                        href="room-details.html"
                        className="theme-btn theme-btn-transparent"
                      >Book Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- end card-item --> */}
            </div>
            {/* <!-- end col-lg-6 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>

    </>
  )
}

export default DetailsRoom