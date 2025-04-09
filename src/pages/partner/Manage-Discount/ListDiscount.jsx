import React, { useEffect, useState } from 'react'
import Responsive_User from '../../../components/partner/Responsive_User'
import Sidebar_Partner from '../../../components/partner/Sidebar_Partner'
import Navigation from '../../../components/partner/Navigation'
import { Link, useLocation } from 'react-router-dom'
import Footer from '../../../components/partner/Footer'
import { getDiscounts, deleteDiscount, getDiscountById } from '../../../config/discountApi'

const ListDiscount = () => {
  const location = useLocation();

  const [discounts, setDiscounts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [discountToDelete, setDiscountToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [numberOfElements, setNumberOfElements] = useState(0);

  useEffect(() => {
    const fetchDiscounts = async () => {
      try {
        const response = await getDiscounts(currentPage, 10);
        setDiscounts(response.content);
        setTotalPages(response.totalPages);
        setNumberOfElements(response.numberOfElements);
        setTotalElements(response.totalElements);
        setCurrentPage(response.page);
        console.log(response);
      } catch (error) {
        console.error('Error fetching discounts:', error)
      }
    }
    
    fetchDiscounts();
  }, [currentPage])

  const isActive = (path) => {
    // Check if current path starts with the given path
    // This will keep the menu item active for both list and create/edit pages
    return location.pathname.startsWith(path) ? 'page-active' : '';
  }

  const handleDeleteClick = (discount) => {
    setDiscountToDelete(discount);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteDiscount(discountToDelete.id);
      // Refresh the list after deletion
      const response = await getDiscounts(currentPage, 10);
      setDiscounts(response.content);
      setTotalPages(response.totalPages);
      setNumberOfElements(response.numberOfElements);
      setTotalElements(response.totalElements);
      setCurrentPage(response.page);
      setShowDeleteModal(false);
      setDiscountToDelete(null);
    } catch (error) {
      console.error('Error deleting discount:', error);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDiscountToDelete(null);
  };

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
                        Quản lý giảm giá
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="breadcrumb-list text-end">
                    <ul className="list-items">
                      <li><Link to="/" className="text-white">Home</Link></li>
                      <li>Dashboard</li>
                      <li>Quản lý giảm giá</li>
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
                        <h3 className="title">Danh sách mã giảm giá</h3>
                        <p className="font-size-14">
                          Showing 1 to {Math.min(numberOfElements, 10)} of {totalElements} entries
                        </p>
                      </div>
                      <div className='col-lg-4 text-end'>
                        <Link className='btn btn-primary'
                          to={'/partner/create-discount'}
                        >Thêm mã giảm giá</Link>
                      </div>
                    </div>
                    <div className="form-content">
                      <div className="table-form table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">TT</th>
                              <th scope="col">Mã giảm giá</th>
                              <th scope="col">Giá giảm</th>
                              <th scope="col">% giảm</th>
                              <th scope="col">Số lượng</th>
                              <th scope="col">Hạn sử dụng</th>
                              <th scope="col">Trạng thái</th>
                              <th scope="col">Chức năng</th>
                            </tr>
                          </thead>
                          <tbody>
                            { discounts && discounts.length > 0 ? discounts.map((discount, index) => (
                              <tr key={discount.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                  <div className="table-content">
                                    <h3 className="title">{discount.code}</h3>
                                  </div>
                                </td>
                                <td>{discount.discountAmount}</td>
                                <td>{discount.discountPercent}</td>
                                <td>{discount.quantity}</td>
                                <td>{discount.expirationDate}</td>
                                <td>
                                  {
                                    new Date(discount.expirationDate) > new Date() ? 
                                    <div className="d-flex align-items-center">
                                      <span className="badge text-bg-success text-white py-1 px-2 me-2">
                                        <i className="la la-check-circle"></i> Còn hạn
                                      </span>
                                      <small className="text-muted">
                                        Còn {Math.ceil((new Date(discount.expirationDate) - new Date()) / (1000 * 60 * 60 * 24))} ngày
                                      </small>
                                    </div>
                                    :
                                    <div className="d-flex align-items-center">
                                      <span className="badge text-bg-danger text-white py-1 px-2 me-2">
                                        <i className="la la-times-circle"></i> Hết hạn
                                      </span>
                                      <small className="text-muted">
                                        Đã hết hạn {Math.ceil((new Date() - new Date(discount.expirationDate)) / (1000 * 60 * 60 * 24))} ngày
                                      </small>
                                    </div>
                                  }
                                </td>
                                <td>
                                  <div className="table-content">
                                    <Link
                                      to={`/partner/update-discount/${discount.id}`}
                                      className="theme-btn theme-btn-small me-2"
                                      data-bs-toggle="tooltip"
                                      data-placement="top"
                                      title="Edit"
                                    ><i className="la la-edit"></i></Link>
                                    <button
                                      onClick={() => handleDeleteClick(discount)}
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
                                <td colSpan="8">
                                  <div className="text-center py-5">
                                    <i className="la la-ticket-alt" style={{ fontSize: '48px', color: '#ccc', marginBottom: '15px' }}></i>
                                    <p className="text-muted mb-0">Chưa có mã giảm giá nào</p>
                                    <p className="text-muted small">Bạn có thể tạo mã giảm giá mới bằng cách nhấn nút "Thêm mã giảm giá" ở trên</p>
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
                          index === 0 || // First page
                          index === totalPages - 1 || // Last page
                          (index >= currentPage - 1 && index <= currentPage + 1) // Pages around current
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
            <p>Bạn có chắc chắn muốn xóa mã giảm giá "{discountToDelete?.code}"?</p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '20px' }}>
              <button
                onClick={handleCancelDelete}
                className="btn btn-secondary"
                style={{ padding: '8px 16px' }}
              >
                Hủy
              </button>
              <button
                onClick={handleConfirmDelete}
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

export default ListDiscount