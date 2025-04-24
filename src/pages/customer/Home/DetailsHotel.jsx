import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getHotelDetailsById, searchRoomsByCriteria } from '../../../config/hotelApi';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/img1.jpg';
import { API_BASE_URL } from '../../../config/apiConfig';

const DetailsHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [hotelDetails, setHotelDetails] = useState({
    name: '',
    businessName: '',
    address: {
      number: '',
      street: '',
      district: '',
      city: ''
    },
    description: '',
    phone: '',
    email: '',
    website: '',
    facebook: '',
    instagram: '',
    twitter: '',
    linkedin: '',
    tiktok: '',
    images: [],
    rooms: [],
    services: [],
    reviews: [],
    totalRatings: 0,
    totalReviews: 0,
  });
  
  // Add new state variables for search
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({
    dateRange: '',
    roomCount: 0,
    adults: 0,
    children: 0
  });
  const [isSearchApplied, setIsSearchApplied] = useState(false);

  // Room selection handler
  const handleRoomSelection = (room) => {
    // Check if the room is already selected
    const isRoomSelected = selectedRooms.some(selectedRoom => selectedRoom.id === room.id);
    
    if (isRoomSelected) {
      // Remove from selected rooms if already selected
      setSelectedRooms(selectedRooms.filter(selectedRoom => selectedRoom.id !== room.id));
    } else {
      // Add to selected rooms if not already selected (limit to 2 rooms)
      if (selectedRooms.length < 5) {
        setSelectedRooms([...selectedRooms, room]);
      } else {
        alert("You can only select up to 2 rooms at a time.");
      }
    }
  };

  // Function to proceed to booking details
  const handleProceedToBooking = () => {
    if (selectedRooms.length > 0) {
      // Navigate to booking details page with the selected room data
      navigate('/booking-detail', { state: { selectedRooms, hotel: hotelDetails } });
    } else {
      alert("Please select at least one room to proceed.");
    }
  };

  useEffect(() => {

    const fetchHotelDetails = async () => {
      try {
        console.log(id);
        const response = await getHotelDetailsById(id);
        setHotelDetails(response);
        console.log(response);
      } catch (error) {
        console.error('Error fetching hotel details:', error);
      }
    }

    fetchHotelDetails();

  }, []);

  const getImageUrl = (room) => {
    if (!room.images || room.images.length === 0) {
      if (!hotelDetails.images || hotelDetails.images.length === 0) {
        return img1; // Default image
      } else {
        return `${API_BASE_URL}/images/${hotelDetails.images[0].url}`
      }
    }

    const imagePath = room.images[0].url;

    if (imagePath.startsWith('http')) {
      return imagePath;
    } else {
      return `${API_BASE_URL}/images/${imagePath}`;
    }
  }

  const existsFreeWifi = (services) => {
    // Check if services exists and is an array
    if (!services || !Array.isArray(services) || services.length === 0) {
      return false;
    }

    // Look for any service that might be referring to wifi
    return services.some(service => {
      // Guard against null or undefined service names
      if (!service || !service.name) return false;

      const serviceName = service.name.toLowerCase();
      // Check for common wifi-related terms
      return serviceName.includes('wifi') ||
        serviceName.includes('wi-fi') ||
        serviceName.includes('internet');
    });
  }

  // Handle search rooms by form submit
  const [searchRoomsForm, setSearchRoomsForm] = useState({
    checkIn: '',
    checkOut: '',
    adults: 0,
    children: 0,
    bedType: ''
  });
  const handleSearchRoomsFormChange = (e) => {
    const {name, value} = e.target;
    if (name === 'daterange') {
      const dates = value.split(' - ');
      setSearchRoomsForm({
        ...searchRoomsForm,
        checkIn: dates[0],
        checkOut: dates[1]
      });
    } else {
      setSearchRoomsForm({
        ...searchRoomsForm,
        [name]: value
      });
    }
  }
  
  const handleSearchFormSubmit = async () => {
    try {
      setIsSearchApplied(true);
      const data = await searchRoomsByCriteria(searchRoomsForm);
      if (data && Array.isArray(data)) {
        setFilteredRooms(data);
        console.log("Filtered rooms:", data);
      } else {
        setFilteredRooms([]);
        console.log("No rooms found matching criteria");
      }
    } catch (error) {
      console.error('Error fetching rooms:', error);
      setFilteredRooms([]);
    }
  }

  return (
    <>

      <section class="breadcrumb-top-bar">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="breadcrumb-list breadcrumb-top-list">
                <ul class="list-items bg-transparent radius-none p-0">
                  <li><Link to={'/home'}>Home</Link></li>
                  <li>{hotelDetails.name}</li>
                </ul>
              </div>
              {/* <!-- end breadcrumb-list --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>

        <section class="breadcrumb-area bread-bg-7 py-0">
          <div class="breadcrumb-wrap">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <div class="breadcrumb-btn">
                    <div class="btn-box">
                      {hotelDetails.images && hotelDetails.images.length > 0 ? (
                        hotelDetails.images.map((image, index) => (                          
                          <a
                            key={index}
                            class="theme-btn ms-2"
                            data-src={`${API_BASE_URL}/images/${image.url}`}
                            data-fancybox="gallery"
                            data-caption={`Showing image - ${index + 1}`}
                            data-speed="700"
                          >
                            <i class="la la-photo"></i>Image {index + 1}
                          </a>
                        ))
                      ) : (
                        <p>No images available</p>
                      )}
                    </div>
                  </div>
                  {/* <!-- end breadcrumb-btn --> */}
                </div>
                {/* <!-- end col-lg-12 --> */}
              </div>
              {/* <!-- end row --> */}
            </div>
            {/* <!-- end container --> */}
          </div>
          {/* <!-- end breadcrumb-wrap --> */}
        </section>
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
                      >Hotel Details</a
                      >
                    </li>
                    <li>
                      <a
                        data-scroll="availability"
                        href="#availability"
                        class="scroll-link"
                      >Availability</a
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
                      <a data-scroll="faq" href="#faq" class="scroll-link">Faq</a>
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
                      <h3 class="title font-size-26">{hotelDetails.name}</h3>
                      <div class="d-flex align-items-center pt-2">
                        <p class="me-2">
                          {`${hotelDetails.address.number} 
                            ${hotelDetails.address.street},
                            ${hotelDetails.address.district},
                            ${hotelDetails.address.city}`}
                        </p>
                        <p>
                          <span
                            class="badge text-bg-warning text-white font-size-16"
                          >{hotelDetails.totalRatings}</span
                          >
                          <span>({hotelDetails.totalReviews} Reviews)</span>
                        </p>
                      </div>
                    </div>
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                    
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                    <div
                      class="single-content-item padding-top-40px padding-bottom-40px"
                    >
                      <h3 class="title font-size-20">
                        About Hilton Hotel and Resorts
                      </h3>
                      <p class="py-3">
                        {hotelDetails.description}
                      </p>

                    </div>
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                  </div>
                  {/* <!-- end description --> */}
                  <div id="availability" class="page-scroll">
                    <div
                      class="single-content-item padding-top-40px padding-bottom-30px"
                    >
                      <h3 class="title font-size-20">Availability</h3>
                      <div class="contact-form-action padding-bottom-35px">
                        <form method="post">
                          <div class="row">
                            <div class="col-lg-6 responsive-column">
                              <div class="input-box">
                                <label class="label-text"
                                >Check in - Check out</label
                                >
                                <div class="form-group">
                                  <span class="la la-calendar form-icon"></span>
                                  <input
                                    class="date-range form-control"
                                    type="text"
                                    name="daterange"
                                    onChange={handleSearchRoomsFormChange}
                                  />
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 responsive-column">
                              <div class="input-box">
                                <label class="label-text">Beds Type</label>
                                <div class="form-group select2-container-wrapper">
                                  <div class="select-contain w-auto">
                                    <select class="select-contain-select"
                                      onChange={handleSearchRoomsFormChange}
                                    >
                                      <option value="0">Select Bed</option>
                                      <option value={1}>SINGLE BED</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 responsive-column">
                              <div class="input-box">
                                <label class="label-text">Adults (18+)</label>
                                <div class="form-group select2-container-wrapper">
                                  <div class="select-contain w-auto">
                                    <select class="select-contain-select"
                                      onChange={handleSearchRoomsFormChange}
                                    >
                                      <option value="0">Select Adults</option>
                                      [
                                        {[...Array(10)].map((_, i) => (
                                          <option key={i} value={i + 1}>
                                            {i + 1} Adult{(i > 0) ? 's' : ''}
                                          </option>
                                        ))}
                                      ]
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-6 responsive-column">
                              <div class="input-box">
                                <label class="label-text">Children (0-10)</label>
                                <div class="form-group select2-container-wrapper">
                                  <div class="select-contain w-auto">
                                    <select class="select-contain-select"
                                      onChange={handleSearchRoomsFormChange}
                                    >
                                      <option value="0">Select Children</option>
                                      {
                                        [...Array(10)].map((_, index) => (
                                          <option key={index} value={index + 1}>
                                            {index + 1} Child{(index > 0) ? 'ren' : ''}
                                          </option>
                                        ))
                                      }
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-12">
                              <div class="btn-box">
                                <button type="button" class="theme-btn"
                                  onClick={handleSearchFormSubmit}
                                >
                                  Search Now
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      {/* <!-- end contact-form-action --> */}
                      <h3 class="title font-size-20">Available Rooms</h3>
                      {/* start show rooms of hotel */}

                      {
                        isSearchApplied ? (
                          // Show filtered rooms when search is applied
                          filteredRooms.length > 0 ? filteredRooms.map((room, index) => (
                            <div class="cabin-type padding-top-30px" key={index}>
                              <div class="cabin-type-item seat-selection-item d-flex">
                                <div class="cabin-type-img flex-shrink-0">
                                  <Link to={'/list-room/room/' + room.id}>
                                    <img
                                      src={getImageUrl(room)}
                                      alt="" />
                                  </Link>
                                </div>
                                <div class="cabin-type-detail">
                                  <h3 class="title">
                                    <Link to={'/list-room/room/' + room.id}>
                                      {room.name}
                                    </Link>
                                  </h3>
                                  <div class="row padding-top-20px">
                                    <div class="col-lg-6 responsive-column">
                                      <div
                                        class="single-tour-feature d-flex align-items-center mb-3"
                                      >
                                        <div
                                          class="single-feature-icon icon-element ms-0 flex-shrink-0 me-2"
                                        >
                                          <i class="la la-wifi"></i>
                                        </div>
                                        <div class="single-feature-titles">
                                          <h3
                                            class="title font-size-15 font-weight-medium"
                                          >
                                            {
                                              existsFreeWifi(room.services) ? 'Free Wi-Fi' : 'No Free Wi-Fi'
                                            }
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 responsive-column">
                                      <div
                                        class="single-tour-feature d-flex align-items-center mb-3"
                                      >
                                        <div
                                          class="single-feature-icon icon-element ms-0 flex-shrink-0 me-2"
                                        >
                                          <i class="la la-bed"></i>
                                        </div>
                                        <div class="single-feature-titles">
                                          <h3
                                            class="title font-size-15 font-weight-medium"
                                          >
                                            {room.type}
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 responsive-column">
                                      <div
                                        class="single-tour-feature d-flex align-items-center mb-3"
                                      >
                                        <div
                                          class="single-feature-icon icon-element ms-0 flex-shrink-0 me-2"
                                        >
                                          <i class="la la-user"></i>
                                        </div>
                                        <div class="single-feature-titles">
                                          <h3
                                            class="title font-size-15 font-weight-medium"
                                          >
                                            Capacity: {room.capacity} people
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="room-photos">
                                    <a
                                      class="btn theme-btn-hover-gray"
                                      data-fancybox="gallery"
                                      data-caption="Room Photos"
                                      data-speed="700"
                                    >
                                      <i class="la la-photo me-2"></i>Room Photos
                                    </a>
                                    {room.images && room.images.map((image, index) => (
                                      <a
                                        key={index}
                                        class="d-none"
                                        data-fancybox="gallery"
                                        data-src={`${API_BASE_URL}/images/${image.url}`}
                                        data-caption={`Showing image - ${index + 1}`}
                                        data-speed="700"
                                      ></a>
                                    ))}
                                  </div>
                                </div>
                                <div class="cabin-price">
                                  <p class="text-uppercase font-size-14">
                                    Per/night<strong
                                      class="mt-n1 text-black font-size-18 font-weight-black d-block"
                                    >{room.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong
                                    >
                                  </p>
                                  <div class="custom-checkbox mb-0">
                                    <input
                                      type="checkbox"
                                      class="form-check-input form-check-two"
                                      id={`select-room-${index}`}
                                      onChange={() => handleRoomSelection(room)}
                                      checked={selectedRooms.some(selectedRoom => selectedRoom.id === room.id)}
                                    />
                                    <label
                                      for={`select-room-${index}`}
                                      class="theme-btn theme-btn-small"
                                    >Select</label
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          )) 
                          : <div class="alert alert-info">No rooms found matching your search criteria. Please try different dates or requirements.</div>
                        ) 
                        : (
                          // Show all hotel rooms when no search is applied
                          hotelDetails.rooms && hotelDetails.rooms.length > 0 ? hotelDetails.rooms.map((room, index) => (
                            <div class="cabin-type padding-top-30px" key={index}>
                              <div class="cabin-type-item seat-selection-item d-flex">
                                <div class="cabin-type-img flex-shrink-0">
                                  <Link to={'/list-room/room/' + room.id}>
                                    <img
                                      src={getImageUrl(room)}
                                      alt="" />
                                  </Link>
                                </div>
                                <div class="cabin-type-detail">
                                  <h3 class="title">
                                    <Link to={'/list-room/room/' + room.id}>
                                      {room.name}
                                    </Link>
                                  </h3>
                                  <div class="row padding-top-20px">
                                    <div class="col-lg-6 responsive-column">
                                      <div
                                        class="single-tour-feature d-flex align-items-center mb-3"
                                      >
                                        <div
                                          class="single-feature-icon icon-element ms-0 flex-shrink-0 me-2"
                                        >
                                          <i class="la la-wifi"></i>
                                        </div>
                                        <div class="single-feature-titles">
                                          <h3
                                            class="title font-size-15 font-weight-medium"
                                          >
                                            {
                                              existsFreeWifi(room.services) ? 'Free Wi-Fi' : 'No Free Wi-Fi'
                                            }
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 responsive-column">
                                      <div
                                        class="single-tour-feature d-flex align-items-center mb-3"
                                      >
                                        <div
                                          class="single-feature-icon icon-element ms-0 flex-shrink-0 me-2"
                                        >
                                          <i class="la la-bed"></i>
                                        </div>
                                        <div class="single-feature-titles">
                                          <h3
                                            class="title font-size-15 font-weight-medium"
                                          >
                                            {room.type}
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 responsive-column">
                                      <div
                                        class="single-tour-feature d-flex align-items-center mb-3"
                                      >
                                        <div
                                          class="single-feature-icon icon-element ms-0 flex-shrink-0 me-2"
                                        >
                                          <i class="la la-building"></i>
                                        </div>
                                        <div class="single-feature-titles">
                                          <h3
                                            class="title font-size-15 font-weight-medium"
                                          >
                                            15 m²
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="col-lg-6 responsive-column">
                                      <div
                                        class="single-tour-feature d-flex align-items-center mb-3"
                                      >
                                        <div
                                          class="single-feature-icon icon-element ms-0 flex-shrink-0 me-2"
                                        >
                                          <i class="la la-hotel"></i>
                                        </div>
                                        <div class="single-feature-titles">
                                          <h3
                                            class="title font-size-15 font-weight-medium"
                                          >
                                            Shower and bathtub
                                          </h3>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="room-photos">
                                    <a
                                      class="btn theme-btn-hover-gray"
                                      data-fancybox="gallery"
                                      data-caption="Showing image - 01"
                                      data-speed="700"
                                    >
                                      <i class="la la-photo me-2"></i>Room Photos
                                    </a>
                                    {room.images && room.images.map((image, index) => (
                                      <a
                                        key={index}
                                        class="d-none"
                                        data-fancybox="gallery"
                                        data-src={`${API_BASE_URL}/images/${image.url}`}
                                        data-caption={`Showing image - ${index + 1}`}
                                        data-speed="700"
                                      ></a>
                                    ))}
                                  </div>
                                </div>
                                <div class="cabin-price">
                                  <p class="text-uppercase font-size-14">
                                    Per/night<strong
                                      class="mt-n1 text-black font-size-18 font-weight-black d-block"
                                    >{room.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</strong
                                    >
                                  </p>
                                  <div class="custom-checkbox mb-0">
                                    <input
                                      type="checkbox"
                                      class="form-check-input form-check-two"
                                      id={`select-room-${index}`}
                                      onChange={() => handleRoomSelection(room)}
                                      checked={selectedRooms.some(selectedRoom => selectedRoom.id === room.id)}
                                    />
                                    <label
                                      for={`select-room-${index}`}
                                      class="theme-btn theme-btn-small"
                                    >Select</label
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))
                          : <div class="alert alert-info">This hotel currently has no rooms available.</div>
                        )
                      }
                      <div class="btn-box pt-3">
                        <button type="button" class="theme-btn" onClick={handleProceedToBooking}>
                          Proceed to Booking
                        </button>
                      </div>
                    </div>
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                  </div>
                  <div id="amenities" class="page-scroll"></div>
                  <div class="single-content-item padding-top-40px padding-bottom-20px">
                    <h3 class="title font-size-20">Amenities</h3>
                    {hotelDetails.services.map((service, index) => {
                      <div class="amenities-feature-item pt-4">
                        <div class="row">
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
                                  {service}
                                </h3>
                              </div>
                            </div>
                            {/* <!-- end single-tour-feature --> */}
                          </div>
                          {/* <!-- end row --> */}
                        </div>
                      </div>
                    })}
                    {/* <!-- end single-content-item --> */}
                    <div class="section-block"></div>
                  </div>

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
                                <div class="row">
                                  <div class="col-lg-6 responsive-column">
                                    <div class="input-box">
                                      <label class="label-text">Name</label>
                                      <div class="form-group">
                                        <span class="la la-user form-icon"></span>
                                        <input
                                          class="form-control"
                                          type="text"
                                          name="text"
                                          placeholder="Your name"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-6 responsive-column">
                                    <div class="input-box">
                                      <label class="label-text">Email</label>
                                      <div class="form-group">
                                        <span
                                          class="la la-envelope-o form-icon"
                                        ></span>
                                        <input
                                          class="form-control"
                                          type="email"
                                          name="email"
                                          placeholder="Email address"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-12">
                                    <div class="input-box">
                                      <label class="label-text">Message</label>
                                      <div class="form-group">
                                        <span
                                          class="la la-pencil form-icon"
                                        ></span>
                                        <textarea
                                          class="message-control form-control"
                                          name="message"
                                          placeholder="Write message"
                                        ></textarea>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-lg-12">
                                    <div class="btn-box">
                                      <button type="button" class="theme-btn">
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
              <div class="col-lg-4">
                <div class="sidebar single-content-sidebar mb-0">
                  <div class="sidebar-widget single-content-widget">
                    <div class="sidebar-widget-item">
                      <div class="sidebar-book-title-wrap mb-3">
                        <h3>Popular</h3>
                        <p>
                          <span class="text-form">From</span
                          ><span class="text-value ms-2 me-1">$399.00</span>
                          <span class="before-price">$412.00</span>
                        </p>
                      </div>
                    </div>
                    {/* <!-- end sidebar-widget-item --> */}
                    <div class="sidebar-widget-item">
                      <div class="contact-form-action">
                        <form action="#">
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
                    
                    <div class="btn-box pt-2">

                      <button class="theme-btn text-center w-100 mb-2"
                        onClick={handleProceedToBooking}
                      ><i class="la la-shopping-cart me-2 font-size-18"></i>Book
                        Now
                      </button>
                      
                      <a
                        href="#"
                        class="theme-btn text-center w-100 theme-btn-transparent"
                      ><i class="la la-heart-o me-2"></i>Add to Wishlist</a
                      >
                      <div
                        class="d-flex align-items-center justify-content-between pt-2"
                      >
                        <a
                          href="#"
                          class="btn theme-btn-hover-gray font-size-15"
                          data-bs-toggle="modal"
                          data-bs-target="#sharePopupForm"
                        ><i class="la la-share me-1"></i>Share</a
                        >
                        <p>
                          <i class="la la-eye me-1 font-size-15 color-text-2"></i
                          >3456
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end sidebar-widget --> */}
                  <div class="sidebar-widget single-content-widget">
                    <h3 class="title stroke-shape">Enquiry Form</h3>
                    <div class="enquiry-forum">
                      <div class="form-box">
                        <div class="form-content">
                          <div class="contact-form-action">
                            <form method="post">
                              <div class="input-box">
                                <label class="label-text">Your Name</label>
                                <div class="form-group">
                                  <span class="la la-user form-icon"></span>
                                  <input
                                    class="form-control"
                                    type="text"
                                    name="text"
                                    placeholder="Your name"
                                  />
                                </div>
                              </div>
                              <div class="input-box">
                                <label class="label-text">Your Email</label>
                                <div class="form-group">
                                  <span class="la la-envelope-o form-icon"></span>
                                  <input
                                    class="form-control"
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                  />
                                </div>
                              </div>
                              <div class="input-box">
                                <label class="label-text">Message</label>
                                <div class="form-group">
                                  <span class="la la-pencil form-icon"></span>
                                  <textarea
                                    class="message-control form-control"
                                    name="message"
                                    placeholder="Write message"
                                  ></textarea>
                                </div>
                              </div>
                              <div class="input-box">
                                <div class="form-group">
                                  <div class="custom-checkbox mb-0">
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="agreeChb"
                                    />
                                    <label for="agreeChb"
                                    >I agree with
                                      <a href="#">Terms of Service</a> and
                                      <a href="#">Privacy Statement</a></label
                                    >
                                  </div>
                                </div>
                              </div>
                              <div class="btn-box">
                                <button type="button" class="theme-btn">
                                  Submit Enquiry
                                </button>
                              </div>
                            </form>
                          </div>
                          {/* <!-- end contact-form-action --> */}
                        </div>
                        {/* <!-- end form-content --> */}
                      </div>
                      {/* <!-- end form-box --> */}
                    </div>
                    {/* <!-- end enquiry-forum --> */}
                  </div>
                  {/* <!-- end sidebar-widget --> */}
                  <div class="sidebar-widget single-content-widget">
                    <h3 class="title stroke-shape">Why Book With Us?</h3>
                    <div class="sidebar-list">
                      <ul class="list-items">
                        <li>
                          <i class="la la-dollar icon-element me-2"></i>No-hassle
                          best price guarantee
                        </li>
                        <li>
                          <i class="la la-microphone icon-element me-2"></i
                          >Customer care available 24/7
                        </li>
                        <li>
                          <i class="la la-thumbs-up icon-element me-2"></i
                          >Hand-picked Tours & Activities
                        </li>
                        <li>
                          <i class="la la-file-text icon-element me-2"></i>Free
                          Travel Insureance
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end sidebar-list --> */}
                  </div>
                  {/* <!-- end sidebar-widget --> */}
                  <div class="sidebar-widget single-content-widget">
                    <h3 class="title stroke-shape">Get a Question?</h3>
                    <p class="font-size-14 line-height-24">
                      Do not hesitate to give us a call. We are an expert team and
                      we are happy to talk to you.
                    </p>
                    <div class="sidebar-list pt-3">
                      <ul class="list-items">
                        <li>
                          <i class="la la-phone icon-element me-2"></i
                          ><a href="#">+ 61 23 8093 3400</a>
                        </li>
                        <li>
                          <i class="la la-envelope icon-element me-2"></i
                          ><a href="mailto:info@trizen.com">info@trizen.com</a>
                        </li>
                      </ul>
                    </div>
                    {/* <!-- end sidebar-list --> */}
                  </div>
                  {/* <!-- end sidebar-widget --> */}
                  <div class="sidebar-widget single-content-widget">
                    <h3 class="title stroke-shape">Organized by</h3>
                    <div class="author-content">
                      <div class="d-flex">
                        <div class="author-img">
                          <a href="#"
                          ><img src="images/team8.jpg" alt="testimonial image"
                            /></a>
                        </div>
                        <div class="author-bio">
                          <h4 class="author__title">
                            <a href="#">royaltravelagency</a>
                          </h4>
                          <span class="author__meta">Member Since 2017</span>
                          <span class="ratings d-flex align-items-center">
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star"></i>
                            <i class="la la-star-o"></i>
                            <span class="ms-2">305 Reviews</span>
                          </span>
                          <div class="btn-box pt-3">
                            <a
                              href="#"
                              class="theme-btn theme-btn-small theme-btn-transparent"
                            >Ask a Question</a
                            >
                          </div>
                        </div>
                      </div>
                    </div>
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

      <section class="related-tour-area section--padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="section-heading text-center">
                <h2 class="sec__title">You might also like</h2>
              </div>
              {/* <!-- end section-heading --> */}
            </div>
            {/* <!-- end col-lg-12 --> */}
          </div>
          {/* <!-- end row --> */}
          <div class="row padding-top-50px">
            <div class="col-lg-4 responsive-column">
              <div class="card-item">
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
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div class="col-lg-4 responsive-column">
              <div class="card-item">
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
            </div>
            {/* <!-- end col-lg-4 --> */}
            <div class="col-lg-4 responsive-column">
              <div class="card-item">
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
            </div>
            {/* <!-- end col-lg-4 --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>

    </>
  )
}

export default DetailsHotel