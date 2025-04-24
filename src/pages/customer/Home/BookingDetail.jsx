import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { API_BASE_URL } from '../../../config/apiConfig';
import axios from 'axios';

const BookingDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedRooms, hotel } = location.state || { selectedRooms: [], hotel: {} };
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(''); // 'counter' or 'vnpay'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check if we have valid check-in/check-out dates from previous page
  const [checkInDate, setCheckInDate] = useState(
    location.state?.checkInDate || new Date().toISOString().split('T')[0]
  );
  const [checkOutDate, setCheckOutDate] = useState(
    location.state?.checkOutDate || new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  );

  // Calculate total price
  const totalPrice = selectedRooms.reduce((total, room) => total + room.price, 0);

  // Get image URL for a room
  const getImageUrl = (room) => {
    if (!room.images || room.images.length === 0) {
      if (!hotel.images || hotel.images.length === 0) {
        return ''; // Default image path
      } else {
        return `${API_BASE_URL}/images/${hotel.images[0].url}`;
      }
    }

    const imagePath = room.images[0].url;

    if (imagePath.startsWith('http')) {
      return imagePath;
    } else {
      return `${API_BASE_URL}/images/${imagePath}`;
    }
  };

  // Handle book with payment method
  const handleBookWithPayment = async () => {
    if (!selectedPaymentMethod) {
      setError("Please select a payment method");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('jwt');
      if (!token) {
        navigate('/login', { state: { redirectTo: location.pathname, state: location.state } });
        return;
      }

      // Prepare booking data
      const bookingData = {
        hotelId: hotel.id,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        price: totalPrice,
        paymentMethod: {
          id: selectedPaymentMethod === 'counter' ? 1 : 2, // Assuming 1 is for counter and 2 is for VNPay
          type: selectedPaymentMethod === 'counter' ? 'CASH' : 'ONLINE',
        },
        status: selectedPaymentMethod === 'counter' ? 'PENDING' : 'PROCESSING',
        rooms:
          selectedRooms.map((room) => ({
            id: room.id,
            price: room.price,
            name: room.name,
            description: room.description,
            numberOfAdults: room.numberOfAdults,
            numberOfChildren: room.numberOfChildren,
            numberOfBeds: room.numberOfBeds,
            services: room.services
          }))
      };

      const bookingJsonData = JSON.stringify(bookingData);
      console.log("Booking JSON Data:", bookingJsonData);

      // Send booking request to the backend
      const response = await axios.post(
        `${API_BASE_URL}/api/customer/bookings/create`,
        bookingJsonData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        }
      );

      console.log("Booking Response:", response.data);
      setSelectedPaymentMethod(response.data.paymentMethod);

      // Handle VNPay redirect if needed
      if (selectedPaymentMethod === 'vnpay' && response.data.paymentUrl) {
        // Store booking information in session storage before redirecting to VNPay
        sessionStorage.setItem('pendingBookingData', JSON.stringify({
          bookingId: response.data.id,
          paymentMethod: selectedPaymentMethod,
          totalAmount: response.data.totalPrice,
          hotel: hotel,
          selectedRooms: response.data.selectedRooms,
          checkInDate: response.data.checkInDate,
          checkOutDate: response.data.checkOutDate
        }));
        // Redirect to VNPay payment page
        window.location.href = response.data.paymentUrl;
        return;
      }

      const bookingNavigate = {
        bookingId: response.data.bookingId,
        paymentMethod: selectedPaymentMethod,
        totalAmount: response.data.totalPrice,
        hotel: hotel,
        selectedRooms: response.data.selectedRooms,
        checkInDate: response.data.checkInDate,
        checkOutDate: response.data.checkOutDate
      }
      console.log("Booking Navigate Data:", bookingNavigate);

      // Navigate to booking confirmation page
      navigate('/booking-confirmation', {
        state: bookingNavigate
      });

    } catch (err) {
      console.error("Error creating booking:", err);
      setError(err.response?.data?.message || "Failed to create booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Calculate nights of stay
  const calculateNights = () => {
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1; // Ensure at least 1 night
  };

  return (
    <section className="booking-area padding-top-100px padding-bottom-70px">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="form-box">
              <div className="form-title-wrap">
                <h3 className="title">Booking Details</h3>
              </div>
              <div className="form-content">
                <div className="card-item shadow-none radius-none mb-0">
                  <div className="card-body p-0">
                    <div className="d-flex justify-content-between">
                      <div>
                        <h3 className="card-title">{hotel.name}</h3>
                        <p className="card-meta">
                          {hotel.address?.number} {hotel.address?.street}, {hotel.address?.district}, {hotel.address?.city}
                        </p>
                      </div>
                      <div>
                        <Link to={`/list-hotel/hotel/${hotel.id}`} className="btn btn-outline-primary">
                          View Hotel
                        </Link>
                      </div>
                    </div>

                    <div className="section-block mt-3"></div>

                    <div className="booking-dates-wrap mt-4 mb-4">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="label-text">Check in</label>
                            <div className="form-group">
                              <span className="la la-calendar form-icon"></span>
                              <input
                                className="form-control"
                                type="date"
                                name="checkIn"
                                value={checkInDate}
                                onChange={(e) => setCheckInDate(e.target.value)}
                                min={new Date().toISOString().split('T')[0]}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="input-box">
                            <label className="label-text">Check out</label>
                            <div className="form-group">
                              <span className="la la-calendar form-icon"></span>
                              <input
                                className="form-control"
                                type="date"
                                name="checkOut"
                                value={checkOutDate}
                                onChange={(e) => setCheckOutDate(e.target.value)}
                                min={checkInDate}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="card-title">Selected Rooms</h3>
                    {selectedRooms.map((room, index) => (
                      <div key={index} className="card-item mb-3">
                        <div className="card-body">
                          <div className="row">
                            <div className="col-md-4">
                              <img src={getImageUrl(room)} alt={room.name} className="img-fluid rounded" />
                            </div>
                            <div className="col-md-8">
                              <div className="d-flex justify-content-between">
                                <h5>{room.name}</h5>
                                <h5 className="text-primary">{room.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h5>
                              </div>
                              <p className="mb-1">Room Type: {room.type}</p>
                              <p className="mb-1">Capacity: {room.capacity} people</p>
                              <div className="room-amenities mt-3">
                                <h6>Amenities:</h6>
                                <ul className="list-unstyled d-flex flex-wrap">
                                  {room.services && room.services.map((service, i) => (
                                    <li key={i} className="mr-3 mb-1">
                                      <span className="badge bg-light text-dark me-1">
                                        <i className="la la-check-circle text-success me-1"></i>
                                        {service.name}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-box booking-summary-box mb-4">
              <div className="form-title-wrap">
                <h3 className="title">Booking Summary</h3>
              </div>
              <div className="form-content">
                <div className="card-item shadow-none p-0 mb-0">
                  <div className="card-body p-0">
                    <div className="booking-summary">
                      <ul className="booking-list">
                        <li className="d-flex justify-content-between align-items-center">
                          <span>Check-in</span>
                          <span>{new Date(checkInDate).toLocaleDateString()}</span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <span>Check-out</span>
                          <span>{new Date(checkOutDate).toLocaleDateString()}</span>
                        </li>
                        <li className="d-flex justify-content-between align-items-center">
                          <span>Length of stay</span>
                          <span>{calculateNights()} night{calculateNights() > 1 ? 's' : ''}</span>
                        </li>
                        <div className="section-block my-2"></div>
                        {selectedRooms.map((room, index) => (
                          <li key={index} className="d-flex justify-content-between align-items-center">
                            <span>{room.name}</span>
                            <span>{room.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="section-block"></div>
                      <ul className="booking-list total-list">
                        <li className="d-flex justify-content-between align-items-center">
                          <span>Total</span>
                          <span className="text-success font-weight-bold">
                            {totalPrice.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="payment-option-wrap mt-4">
                <h3 className="title font-size-18 pb-2 border-bottom">Select Payment Method</h3>

                {error && (
                  <div className="alert alert-danger mt-2" role="alert">
                    {error}
                  </div>
                )}

                <div className="payment-method-wrap mt-3">
                  <div className="payment-method mb-2">
                    <div className="payment-card d-flex align-items-center p-3 border rounded"
                      onClick={() => setSelectedPaymentMethod('counter')}
                      style={{
                        backgroundColor: selectedPaymentMethod === 'counter' ? '#f9f9f9' : 'transparent',
                        cursor: 'pointer'
                      }}>
                      <div className="payment-radio me-3">
                        <input
                          type="radio"
                          name="payment-method"
                          id="counter-payment"
                          checked={selectedPaymentMethod === 'counter'}
                          onChange={() => setSelectedPaymentMethod('counter')}
                        />
                        <label htmlFor="counter-payment"></label>
                      </div>
                      <div className="payment-content">
                        <h5 className="mb-1">Pay at Counter</h5>
                        <p className="text-muted font-size-14 mb-0">Pay when you arrive at the hotel</p>
                      </div>
                    </div>
                  </div>

                  <div className="payment-method mb-2">
                    <div className="payment-card d-flex align-items-center p-3 border rounded"
                      onClick={() => setSelectedPaymentMethod('vnpay')}
                      style={{
                        backgroundColor: selectedPaymentMethod === 'vnpay' ? '#f9f9f9' : 'transparent',
                        cursor: 'pointer'
                      }}>
                      <div className="payment-radio me-3">
                        <input
                          type="radio"
                          name="payment-method"
                          id="vnpay-payment"
                          checked={selectedPaymentMethod === 'vnpay'}
                          onChange={() => setSelectedPaymentMethod('vnpay')}
                        />
                        <label htmlFor="vnpay-payment"></label>
                      </div>
                      <div className="payment-content">
                        <h5 className="mb-1">VNPay</h5>
                        <p className="text-muted font-size-14 mb-0">Pay online using VNPay service</p>
                      </div>
                      <div className="payment-logo ms-auto">
                        <img src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png" alt="VNPay" style={{ height: '30px' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="theme-btn w-100 mt-3"
                onClick={handleBookWithPayment}
                disabled={loading || !selectedPaymentMethod}
              >
                {loading ? 'Processing...' : 'Book Now'}
              </button>
              <button className="btn btn-outline-secondary w-100 mt-2" onClick={() => navigate(-1)}>
                Back to Selection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingDetail;