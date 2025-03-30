import React, { useState, useEffect } from 'react'
import Responsive_User from '../../../components/partner/Responsive_User'
import Sidebar_Partner from '../../../components/partner/Sidebar_Partner'
import Navigation from '../../../components/partner/Navigation'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Footer from '../../../components/partner/Footer'
import { getDiscountById, updateDiscount } from '../../../config/discountApi'

const EditDiscount = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    code: '',
    discountAmount: '',
    discountPercent: '',
    quantity: '',
    expirationDate: '',
    isActive: true
  });

  useEffect(() => {
    const fetchDiscount = async () => {
      try {
        const discount = await getDiscountById(id);
        setFormData(discount);
      } catch (error) {
        console.error('Error fetching discount:', error);
        navigate('/partner/list-discount');
      }
    };
    fetchDiscount();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDiscount(id, formData);
      navigate('/partner/list-discount');
    } catch (error) {
      console.error('Error updating discount:', error);
    }
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
                        Chỉnh sửa mã giảm giá
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
                    <div className="form-title-wrap">
                      <h3 className="title">Thông tin mã giảm giá</h3>
                    </div>
                    <form onSubmit={handleSubmit} className="form-content">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-label">Mã giảm giá</label>
                            <input
                              type="text"
                              className="form-control"
                              name="code"
                              value={formData.code}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-label">Số tiền giảm</label>
                            <input
                              type="number"
                              className="form-control"
                              name="discountAmount"
                              value={formData.discountAmount}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-label">Phần trăm giảm</label>
                            <input
                              type="number"
                              className="form-control"
                              name="discountPercent"
                              value={formData.discountPercent}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-label">Số lượng</label>
                            <input
                              type="number"
                              className="form-control"
                              name="quantity"
                              value={formData.quantity}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label className="form-label">Hạn sử dụng</label>
                            <input
                              type="date"
                              className="form-control"
                              name="expirationDate"
                              value={formData.expirationDate}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <div className="form-check mt-4">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                name="isActive"
                                checked={formData.isActive}
                                onChange={handleChange}
                              />
                              <label className="form-check-label">Còn hạn</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group mt-4">
                        <button type="submit" className="btn btn-primary">
                          Cập nhật mã giảm giá
                        </button>
                        <Link to="/partner/list-discount" className="btn btn-secondary ms-2">
                          Hủy
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="border-top mt-5"></div>
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EditDiscount 