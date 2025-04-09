import React, { useEffect, useState } from 'react'
import Responsive_User from '../../../components/partner/Responsive_User'
import Navigation from '../../../components/partner/Navigation'
import { getHotels, deleteHotel } from '../../../config/hotelApi'
import { Link } from 'react-router-dom'
import Sidebar_Partner from '../../../components/partner/Sidebar_Partner'
import Footer from '../../../components/partner/Footer'

const ListHotel = () => {
  const [hotels, setHotels] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [numberOfElements, setNumberOfElements] = useState(0);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [hotelToDelete, setHotelToDelete] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await getHotels(currentPage, 10);
        setHotels(response.content);
        setTotalPages(response.totalPages);
        setNumberOfElements(response.numberOfElements);
        setTotalElements(response.totalElements);
        setCurrentPage(response.page);
        console.log(response);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    fetchHotels();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
  };

  const handleDeleteClick = (hotel) => {
    setHotelToDelete(hotel);
    setShowDeleteModal(true);
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setHotelToDelete(null);
  };

  const handleDeleteHotel = async () => {
    try {
      await deleteHotel(hotelToDelete.id);
      // Refresh the list after deletion
      const response = await getHotels(currentPage, 10);
      setHotels(response.content);
      setTotalPages(response.totalPages);
      setNumberOfElements(response.numberOfElements);
      setTotalElements(response.totalElements);
      setCurrentPage(response.page);
      setShowDeleteModal(false);
      setHotelToDelete(null);
    } catch (error) {
      console.error('Error deleting hotel:', error);
    }
  }

  return (
    <>
      <Responsive_User />
      <Sidebar_Partner />

      <section className='dashboard-area'>
        <Navigation />

        <div className="dashboard-content-wrap">
          <div className="dashboard-bread dashboard--bread dashboard-bread-2">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="breadcrumb-content">
                    <div className="section-heading">
                      <h2 className="sec__title font-size-30 text-white">
                        Quản lý khách sạn
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="breadcrumb-list text-end">
                    <ul className="list-items">
                      <li><Link to="/" className="text-white">Home</Link></li>
                      <li>Dashboard</li>
                      <li>Quản lý khách sạn</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-main-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-box">
                    <div className="form-title-wrap row">
                      <div className='col-lg-8'>
                        <h3 className="title">Danh sách khách sạn</h3>
                        <p className="font-size-14">
                          Showing 1 to {Math.min(numberOfElements, 10)} of {totalElements} entries
                        </p>
                      </div>
                      <div className='col-lg-4 text-end'>
                        <Link className='btn btn-primary'
                          to={'/partner/create-hotel'}
                        >Thêm khách sạn</Link>
                      </div>
                    </div>
                    <div className="form-content">
                      <div className="table-form table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">TT</th>
                              <th scope="col">Tên</th>
                              <th scope="col">Địa chỉ</th>
                              <th scope="col">Số phòng</th>
                              <th scope="col">Ngày tạo</th>
                              <th scope="col">Trạng thái</th>
                              <th scope="col">Chức năng</th>
                            </tr>
                          </thead>
                          <tbody>
                            {hotels && hotels.length > 0 ? hotels.map((hotel, index) => (
                              <tr key={hotel.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                  <div className="table-content">
                                    <h3 className="title">{hotel.name}</h3>
                                  </div>
                                </td>
                                <td>{hotel.address.street}, {hotel.address.district}, {hotel.address.city}</td>
                                <td>{hotel.totalRooms}</td>
                                <td>{formatDate(hotel.createdAt)}</td>
                                <td>
                                  <span className={`badge text-white py-1 px-2 ${hotel.isActive ? 'text-bg-success' : 'text-bg-danger'}`}>
                                    {hotel.isActive ? 'Active' : 'Inactive'}
                                  </span>
                                </td>
                                <td>
                                  <div className="table-content">
                                    
                                    <Link
                                      to={`/partner/hotels/update-hotel/${hotel.id}`}
                                      className="theme-btn theme-btn-small me-2"
                                      data-bs-toggle="tooltip"
                                      data-placement="top"
                                      title="Edit"
                                    ><i className="la la-edit"></i></Link>

                                    <button
                                      onClick={() => handleDeleteClick(hotel)}
                                      className="theme-btn theme-btn-small"
                                      data-bs-toggle="tooltip"
                                      data-placement="top"
                                      title="Delete"
                                    ><i className="la la-trash"></i></button>
                                  </div>
                                </td>
                              </tr>
                            )) : (
                              <tr>
                                <td colSpan="7">
                                  <div className="text-center py-5">
                                    <i className="la la-hotel" style={{ fontSize: '48px', color: '#ccc', marginBottom: '15px' }}></i>
                                    <p className="text-muted mb-0">Chưa có khách sạn nào</p>
                                    <p className="text-muted small">Bạn có thể thêm khách sạn mới bằng cách nhấn nút "Thêm khách sạn" ở trên</p>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="row">
                <div className="col-lg-12">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center">
                      <li className={`page-item ${currentPage === 0 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(prev => Math.max(0, prev - 1))}
                          disabled={currentPage === 0}
                        >
                          <i className="la la-angle-left"></i>
                        </button>
                      </li>
                      
                      {/* First page */}
                      {currentPage > 2 && (
                        <>
                          <li className="page-item">
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(0)}
                            >
                              1
                            </button>
                          </li>
                          {currentPage > 3 && (
                            <li className="page-item disabled">
                              <span className="page-link">...</span>
                            </li>
                          )}
                        </>
                      )}

                      {/* Current page and surrounding pages */}
                      {[...Array(totalPages)].map((_, index) => {
                        if (
                          index === 0 ||
                          index === totalPages - 1 ||
                          (index >= currentPage - 1 && index <= currentPage + 1)
                        ) {
                          return (
                            <li key={index} className={`page-item ${currentPage === index ? 'active' : ''}`}>
                              <button
                                className="page-link"
                                onClick={() => setCurrentPage(index)}
                              >
                                {index + 1}
                              </button>
                            </li>
                          );
                        }
                        return null;
                      })}

                      {/* Last page */}
                      {currentPage < totalPages - 3 && (
                        <>
                          {currentPage < totalPages - 4 && (
                            <li className="page-item disabled">
                              <span className="page-link">...</span>
                            </li>
                          )}
                          <li className="page-item">
                            <button
                              className="page-link"
                              onClick={() => setCurrentPage(totalPages - 1)}
                            >
                              {totalPages}
                            </button>
                          </li>
                        </>
                      )}

                      <li className={`page-item ${currentPage === totalPages - 1 ? 'disabled' : ''}`}>
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(prev => Math.min(totalPages - 1, prev + 1))}
                          disabled={currentPage === totalPages - 1}
                        >
                          <i className="la la-angle-right"></i>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="border-top mt-5"></div>
              <Footer />
            </div>
          </div>
        </div>
      </section>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal-overlay" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000
        }}>
          <div className="modal-content" style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            maxWidth: '400px',
            width: '90%'
          }}>
            <h3 style={{ marginBottom: '20px' }}>Xác nhận xóa</h3>
            <p>Bạn có chắc chắn muốn xóa khách sạn "{hotelToDelete?.name}"?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
              <button
                onClick={handleCancelDelete}
                className="btn btn-secondary"
                style={{ padding: '8px 16px' }}
              >
                Hủy
              </button>
              <button
                onClick={handleDeleteHotel}
                className="btn btn-danger"
                style={{ padding: '8px 16px' }}
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ListHotel