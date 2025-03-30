import React, { useState } from 'react'
import Responsive_User from '../../../components/partner/Responsive_User'
import Sidebar_Partner from '../../../components/partner/Sidebar_Partner'
import Navigation from '../../../components/partner/Navigation'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../../../components/partner/Footer'
import { createDiscount } from '../../../config/discountApi'

const CreateDiscount = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    code: '',
    discountAmount: '',
    discountPercent: '',
    quantity: '',
    expirationDate: '',
    isActive: true
  });

  const validateForm = () => {
    if (!formData.code.trim()) {
      setError('Vui lòng nhập mã giảm giá');
      return false;
    }
    if (!formData.discountAmount || formData.discountAmount <= 0) {
      setError('Vui lòng nhập số tiền giảm hợp lệ');
      return false;
    }
    if (!formData.discountPercent || formData.discountPercent <= 0 || formData.discountPercent > 100) {
      setError('Vui lòng nhập phần trăm giảm hợp lệ (0-100)');
      return false;
    }
    if (!formData.quantity || formData.quantity <= 0) {
      setError('Vui lòng nhập số lượng hợp lệ');
      return false;
    }
    if (!formData.expirationDate) {
      setError('Vui lòng chọn hạn sử dụng');
      return false;
    }
    const expirationDate = new Date(formData.expirationDate);
    const today = new Date();
    if (expirationDate < today) {
      setError('Hạn sử dụng không được nhỏ hơn ngày hiện tại');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Format the data before sending
      const discountData = {
        ...formData,
        discountAmount: Number(formData.discountAmount),
        discountPercent: Number(formData.discountPercent),
        quantity: Number(formData.quantity),
        expirationDate: new Date(formData.expirationDate).toISOString()
      };

      await createDiscount(discountData);
      // Show success message or redirect
      navigate('/partner/list-discount');
    } catch (error) {
      console.error('Error creating discount:', error);
      setError(error.response?.data?.message || 'Có lỗi xảy ra khi tạo mã giảm giá');
    } finally {
      setLoading(false);
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
                        Thêm mã giảm giá
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
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
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
                              placeholder="Nhập mã giảm giá"
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
                              min="0"
                              placeholder="Nhập số tiền giảm"
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
                              min="0"
                              max="100"
                              placeholder="Nhập phần trăm giảm"
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
                              min="1"
                              placeholder="Nhập số lượng"
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
                              min={new Date().toISOString().split('T')[0]}
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
                        <button 
                          type="submit" 
                          className="btn btn-primary"
                          disabled={loading}
                        >
                          {loading ? 'Đang xử lý...' : 'Thêm mã giảm giá'}
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

export default CreateDiscount 