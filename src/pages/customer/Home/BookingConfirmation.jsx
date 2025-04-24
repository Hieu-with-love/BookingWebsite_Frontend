import React, { useRef, useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { API_BASE_URL } from '../../../config/apiConfig';
import html2canvas from 'html2canvas';

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [savingCard, setSavingCard] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [qrCodeLoaded, setQrCodeLoaded] = useState(false);
  const bookingCardRef = useRef(null);
  const qrCodeRef = useRef(null);
  
  // Get booking data from location state
  const { 
    bookingId, 
    paymentMethod, 
    totalAmount, 
    hotel, 
    selectedRooms, 
    checkInDate, 
    checkOutDate 
  } = location.state || {};
  
  // Check if we have required data
  useEffect(() => {
    // Use sessionStorage as backup if location state is lost due to refresh
    const storedBookingData = sessionStorage.getItem('bookingConfirmationData');
    
    if ((!bookingId || !hotel || !selectedRooms) && !storedBookingData) {
      navigate('/home');
    } else if (storedBookingData && (!bookingId || !hotel || !selectedRooms)) {
      // Restore data from session storage if location state is empty
      const parsedData = JSON.parse(storedBookingData);
      Object.assign(location.state || {}, parsedData);
    } else if (bookingId && hotel && selectedRooms) {
      // Store booking data in session storage as backup
      sessionStorage.setItem('bookingConfirmationData', JSON.stringify({
        bookingId, paymentMethod, totalAmount, hotel, selectedRooms, checkInDate, checkOutDate
      }));
    }
    
    setIsLoading(false);
  }, [bookingId, hotel, selectedRooms, navigate, location.state, paymentMethod, totalAmount, checkInDate, checkOutDate]);

  // Handle redirect to login
  const handleCompleteBooking = () => {
    // Clear the stored booking data
    sessionStorage.removeItem('bookingConfirmationData');
    // Redirect to login page
    navigate('/auth/login');
  };

  // Format date function
  const formatDate = (dateString) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Calculate nights of stay
  const calculateNights = () => {
    const start = new Date(checkInDate);
    const end = new Date(checkOutDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays || 1;
  };

  // Get hotel image
  const getHotelImage = () => {
    if (!hotel || !hotel.images || hotel.images.length === 0) {
      return ''; // Default image path
    }

    const imagePath = hotel.images[0].url;

    if (imagePath.startsWith('http')) {
      return imagePath;
    } else {
      return `${API_BASE_URL}/images/${imagePath}`;
    }
  };

  // Save booking card as image
  const saveBookingCard = async () => {
    if (!bookingCardRef.current || !qrCodeLoaded) return;
    
    try {
      setSavingCard(true);
      
      const canvas = await html2canvas(bookingCardRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        logging: false
      });
      
      // Create download link
      const link = document.createElement('a');
      link.download = `booking-${bookingId}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
    } catch (error) {
      console.error('Error saving booking card:', error);
    } finally {
      setSavingCard(false);
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <p className="mt-2">Preparing your booking confirmation...</p>
      </div>
    );
  }

  return (
    <section className="booking-confirm-area padding-top-100px padding-bottom-70px">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="booking-confirm-page text-center">
              <span className="la la-check-circle-o circle-icon"></span>
              <div className="section-heading pt-3">
                <h2 className="sec__title">Thank You. Your Booking Is Confirmed!</h2>
                <p className="sec__desc">You'll receive a confirmation email at your provided email address.</p>
              </div>
              
              <div className="btn-box pb-4">
                <button className="theme-btn mr-2" onClick={saveBookingCard} disabled={savingCard}>
                  <i className="la la-download mr-1"></i>
                  {savingCard ? 'Saving...' : 'Save Booking Card'}
                </button>
                <button className="theme-btn" onClick={handleCompleteBooking}>
                  <i className="la la-check-circle mr-1"></i>Complete Booking
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-lg-8 mx-auto">
            <div className="form-box booking-detail-form">
              <div className="form-title-wrap">
                <h3 className="title">Booking Information</h3>
              </div>
              <div className="form-content">
                <div className="card-item shadow-none radius-none mb-0">
                  <div className="card-body p-0">
                    {/* Booking Card - will be captured as image */}
                    <div 
                      ref={bookingCardRef} 
                      className="booking-card p-4 border rounded" 
                      style={{ 
                        background: 'linear-gradient(to right, #f5f5f5, #ffffff)',
                        position: 'relative'
                      }}
                    >
                      {/* Hotel Logo Area */}
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                          <h3 className="card-title">{hotel?.name}</h3>
                          <p className="card-meta mb-0">
                            <i className="la la-map-marker mr-1"></i>
                            {hotel?.address?.city}
                          </p>
                        </div>
                        <div className="booking-logo">
                          <span className="badge badge-success py-1 px-2">CONFIRMED</span>
                        </div>
                      </div>
                      
                      {/* Booking Details */}
                      <div className="row">
                        <div className="col-md-7">
                          <div className="booking-details">
                            <div className="mb-3">
                              <h5 className="text-secondary mb-1">Booking Reference:</h5>
                              <h4 className="font-weight-bold">{bookingId}</h4>
                            </div>
                            
                            <div className="mb-3">
                              <h5 className="text-secondary mb-1">Check-in / Check-out:</h5>
                              <p className="mb-0">
                                <i className="la la-calendar mr-1"></i>
                                <strong>{formatDate(checkInDate)}</strong> to <strong>{formatDate(checkOutDate)}</strong>
                                <span className="badge badge-light ml-2">{calculateNights()} night{calculateNights() > 1 ? 's' : ''}</span>
                              </p>
                            </div>
                            
                            <div className="mb-3">
                              <h5 className="text-secondary mb-1">Room{selectedRooms?.length > 1 ? 's' : ''}:</h5>
                              {selectedRooms?.map((room, index) => (
                                <p key={index} className="mb-0">{room.name} 
                                  <small className="ml-2">
                                    (Adults: {room.numberOfAdults}, Children: {room.numberOfChildren})
                                  </small>
                                </p>
                              ))}
                            </div>

                            <div className="mb-3">
                              <h5 className="text-secondary mb-1">Payment:</h5>
                              <p className="mb-0">
                                <strong>
                                  {paymentMethod === 'counter' 
                                    ? 'Pay at Counter - Pending' 
                                    : 'Online Payment - Completed'
                                  }
                                </strong>
                              </p>
                              <p className="text-primary font-weight-bold">
                                {totalAmount?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="col-md-5">
                          <div className="booking-image-container">
                            {getHotelImage() && (
                              <img 
                                src={getHotelImage()} 
                                alt={hotel?.name} 
                                className="img-fluid rounded"
                                style={{maxHeight: "180px", objectFit: "cover", width: "100%"}}
                              />
                            )}
                          </div>
                          <div className="qr-code-container mt-2 text-center">
                            <div className="border rounded p-2 d-inline-block bg-white">
                              {/* Placeholder for QR code - in a real app you'd generate this */}
                              <img 
                                ref={qrCodeRef}
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=BOOKING-${bookingId}`} 
                                alt="Booking QR" 
                                className="img-fluid" 
                                style={{width: "120px", height: "120px"}}
                                onLoad={() => setQrCodeLoaded(true)}
                              />
                            </div>
                            <p className="mt-1 small text-muted">Scan for quick check-in</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="booking-footer mt-3 text-center">
                        <p className="small text-muted mb-0">
                          Please present this card or booking ID upon arrival.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="form-box booking-detail-form mt-4">
              <div className="form-title-wrap">
                <h3 className="title">Need Help?</h3>
              </div>
              <div className="form-content">
                <div className="card-item shadow-none radius-none mb-0">
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="icon-box icon-layout-2">
                          <div className="d-flex">
                            <div className="info-icon flex-shrink-0">
                              <i className="la la-phone"></i>
                            </div>
                            <div className="info-content">
                              <h4 className="info__title">Customer Support</h4>
                              <p className="info__desc">+1-234-567-8900</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="icon-box icon-layout-2">
                          <div className="d-flex">
                            <div className="info-icon flex-shrink-0">
                              <i className="la la-envelope"></i>
                            </div>
                            <div className="info-content">
                              <h4 className="info__title">Email Us</h4>
                              <p className="info__desc">support@example.com</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="icon-box icon-layout-2">
                          <div className="d-flex">
                            <div className="info-icon flex-shrink-0">
                              <i className="la la-edit"></i>
                            </div>
                            <div className="info-content">
                              <h4 className="info__title">Manage Booking</h4>
                              <p className="info__desc">
                                <button 
                                  className="btn btn-link p-0" 
                                  onClick={handleCompleteBooking}
                                >
                                  Login to View
                                </button>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-4">
              <button 
                className="theme-btn theme-btn-big" 
                onClick={handleCompleteBooking}
              >
                <i className="la la-sign-in mr-1"></i>Continue to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmation;