import React, { useEffect, useState } from 'react'
import { getHotelsFromCustomer } from '../../../config/hotelApi'
import { Link } from 'react-router-dom'
import { API_BASE_URL } from '../../../config/apiConfig' // Add this import

const HotelList = () => {
    const [hotels, setHotels] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);

    useEffect(() => {
        fetchHotels(currentPage);
    }, [currentPage, pageSize])

    const fetchHotels = async (page) => {
        try {
            setLoading(true);
            const response = await getHotelsFromCustomer(page, pageSize);
            setHotels(response.content);
            setTotalPages(response.totalPages);
            setTotalElements(response.totalElements);
            setLoading(false);
            console.log(response);
            console.log(response.content[0].images[0]);
        } catch (error) {
            setError(error.message || 'Failed to fetch hotels');
            setLoading(false);
            alert('Error fetching hotels:', error);
        }
    };

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    // Enhanced image URL function with fallback
    const getImageUrl = (hotel) => {
        if (!hotel.images || hotel.images.length === 0 || !hotel.images[0].url) {
            return "images/img1.jpg"; // Default image
        }
        
        const imagePath = hotel.images[0].url;
        
        // Check if the path already includes the base URL
        if (imagePath.startsWith('http')) {
            return imagePath;
        }
        
        // Construct the full URL to the uploaded image
        return `${API_BASE_URL}/images/${imagePath}`;
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;
        
        let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        let endPage = startPage + maxPagesToShow - 1;
        
        if (endPage > totalPages) {
            endPage = totalPages;
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }
        
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => handlePageChange(i)}>{i}</button>
                </li>
            );
        }
        
        return pageNumbers;
    };

    if (loading) {
        return <div className="text-center py-5"><i className="la la-spinner la-spin la-3x"></i></div>;
    }

    if (error) {
        return <div className="alert alert-danger" role="alert">{error}</div>;
    }

  return (
    <>
    <div className="col-lg-12">
        {hotels.length === 0 ? (
            <div className="alert alert-info">No hotels found. Please try different search criteria.</div>
        ) : (
            hotels.map((hotel) => (
                <div className="card-item card-item-list" key={hotel.id}>
                    <div className="card-img" style={{ height: "220px", overflow: "hidden" }}>
                        <Link to={`/list-hotel/hotel/${hotel.id}`} className="d-block h-100">
                            <img 
                                src={getImageUrl(hotel)} 
                                alt={hotel.name} 
                                style={{ 
                                    width: "100%", 
                                    height: "100%", 
                                    objectFit: "cover"
                                }} 
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "images/img1.jpg";
                                }}
                            />
                        </Link>
                        {hotel.isPopular && <span className="badge">Popular</span>}
                        <div
                            className="add-to-wishlist icon-element"
                            data-bs-toggle="tooltip"
                            data-placement="top"
                            title="Bookmark"
                        >
                            <i className="la la-heart-o"></i>
                        </div>
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <div>
                            <h3 className="card-title mb-1">
                                <Link to={`/list-hotel/hotel/${hotel.id}`}>{hotel.name}</Link>
                            </h3>
                            <p className="card-meta mb-3">
                                {`${hotel.address.number} ${hotel.address.street}, ${hotel.address.district}, ${hotel.address.city}`}
                            </p>
                        </div>
                        <div
                            className="card-price d-flex align-items-center justify-content-between"
                        >
                            <p>
                                <span className="price__from">From</span>
                                <span className="price__num">${hotel.price || '88.00'}</span>
                                <span className="price__text">Per night</span>
                            </p>
                            <Link to={`/list-hotel/hotel/${hotel.id}`} className="btn-text">
                                See details<i className="la la-angle-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        )}
    </div>

    {/* Pagination */}
    <div className="row">
        <div className="col-lg-12">
            <div className="btn-box mt-3 text-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                            >
                                <i className="la la-angle-left"></i> Previous
                            </button>
                        </li>
                        
                        {renderPageNumbers()}
                        
                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <button 
                                className="page-link" 
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next <i className="la la-angle-right"></i>
                            </button>
                        </li>
                    </ul>
                </nav>
                <p className="font-size-13 pt-2">
                    Showing {((currentPage - 1) * pageSize) + 1} - {Math.min(currentPage * pageSize, totalElements)} of {totalElements} Hotels
                </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default HotelList