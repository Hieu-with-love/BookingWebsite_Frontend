import React, { useEffect, useState } from 'react'
import Responsive_User from '../../../components/partner/Responsive_User'
import Sidebar_Partner from '../../../components/partner/Sidebar_Partner'
import Navigation from '../../../components/partner/Navigation'
import { Link } from 'react-router-dom'
import Footer from '../../../components/partner/Footer'
import { getDiscounts, deleteDiscount, getDiscountById } from '../../../config/discountApi'

const ListDiscount = () => {
  const [discounts, setDiscounts] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [discountToDelete, setDiscountToDelete] = useState(null);

  useEffect(() => {
    const fetchDiscounts = async () => {
      try{
        const response = await getDiscounts()
        setDiscounts(response)
      } catch (error) {
        console.error('Error fetching discounts:', error)
      }
    }
    
    fetchDiscounts();
  }, [])

  const handleDeleteClick = (discount) => {
    setDiscountToDelete(discount);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteDiscount(discountToDelete.id);
      // Refresh the list after deletion
      const response = await getDiscounts();
      setDiscounts(response);
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
                        <h3 className="title">Danh sách khách sạn</h3>
                        <p className="font-size-14">Showing 1 to 8 of 20 entries</p>
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
                              <th scope="col">Phần trăm giảm</th>
                              <th scope="col">Số lượng</th>
                              <th scope="col">Hạn sử dụng</th>
                              <th scope="col">Trạng thái</th>
                              <th scope="col">Chức năng</th>
                            </tr>
                          </thead>
                          <tbody>
                            { discounts ? discounts.map((discount, index) => (
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
                                  <span
                                    className="badge text-bg-warning text-white py-1 px-2"
                                  >{discount.isActive ? 'Còn hạn' : 'Hết hạn'}</span>
                                </td>
                                <td>
                                  <div className="table-content">
                                    <Link
                                      to={`/partner/edit-discount/${discount.id}`}
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
                                <td colSpan="8" className='text-center'>Không có dữ liệu</td>
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
                  <nav aria-label="Page navigation example">
                    <ul className="pagination">
                      <li className="page-item">
                        <a
                          className="page-link page-link-nav"
                          href="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true"><i className="la la-angle-left"></i></span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link page-link-nav" href="#">1</a>
                      </li>
                      <li className="page-item active">
                        <a className="page-link page-link-nav" href="#">2 <span className="sr-only">(current)</span></a>
                      </li>
                      <li className="page-item">
                        <a className="page-link page-link-nav" href="#">3</a>
                      </li>
                      <li className="page-item">
                        <a
                          className="page-link page-link-nav"
                          href="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true"><i className="la la-angle-right"></i></span>
                          <span className="sr-only">Next</span>
                        </a>
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