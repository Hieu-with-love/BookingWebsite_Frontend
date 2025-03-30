import React, { useEffect, useState } from 'react'
import Responsive_User from '../../../components/partner/Responsive_User'
import Navigation from '../../../components/partner/Navigation'
import { getHotels } from '../../../config/hotelApi'
import { Link } from 'react-router-dom'
import Sidebar_Partner from '../../../components/partner/Sidebar_Partner'

const ListHotel = () => {
  const [hotels, setHotels] = useState([])

  useEffect(() => {
    const fetchHotels = async () => {
      try{
        const data = await getHotels();
        if (Array.isArray(data)){
          setHotels(data);
          console.log("hotel", data)
        }
      }catch(error){
        alert("Failed to fetch hotels")
      }
    };

    fetchHotels();
  }, [])

  return (
    <>
      <Responsive_User />
      <Sidebar_Partner />

      <section className='dashboard-area'>
        <Navigation />

        <div class="dashboard-content-wrap">
        <div class="dashboard-bread dashboard--bread dashboard-bread-2">
          <div class="container-fluid">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="breadcrumb-content">
                  <div class="section-heading">
                    <h2 class="sec__title font-size-30 text-white">
                      Quản lý khách sạn
                    </h2>
                  </div>
                </div>
                {/* <!-- end breadcrumb-content --> */}
              </div>
              {/* <!-- end col-lg-6 --> */}
              <div class="col-lg-6">
                <div class="breadcrumb-list text-end">
                  <ul class="list-items">
                    <li><a href="index.html" class="text-white">Home</a></li>
                    <li>Dashboard</li>
                    <li>Quản lý khách sạn</li>
                  </ul>
                </div>
                {/* <!-- end breadcrumb-list --> */}
              </div>
              {/* <!-- end col-lg-6 --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
        </div>
        {/* <!-- end dashboard-bread --> */}
        <div class="dashboard-main-content">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-12">
                <div class="form-box">
                  <div class="form-title-wrap row">
                    <div className='col-lg-8'>
                    <h3 class="title">Danh sách khách sạn</h3>
                    <p class="font-size-14">Showing 1 to 8 of 20 entries</p>
                    </div>
                    <div className='col-lg-4 text-end'>
                      <Link className='btn btn-primary'
                        to={'/partner/add-hotel'}
                      >Thêm khách sạn</Link>
                    </div>
                  </div>
                  <div class="form-content">
                    <div class="table-form table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">TT</th>
                            <th scope="col">Tên</th>
                            <th scope="col">Địa chỉ</th>
                            <th scope="col">Ngày tạo</th>
                            <th scope="col">Số lượng phòng</th>
                            <th scope="col">Trạng thái</th>
                            <th scope="col">Chức năng</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">john Smith</h3>
                              </div>
                            </td>
                            <td>Italy</td>
                            <td>7 Days</td>
                            <td>Apr 02 2020</td>
                            <td>
                              <span
                                class="badge text-bg-warning text-white py-1 px-2"
                                >New</span
                              >
                            </td>
                            <td>
                              <div class="table-content">
                                <a
                                  href="#"
                                  class="theme-btn theme-btn-small me-2"
                                  data-bs-toggle="tooltip"
                                  data-placement="top"
                                  title="View"
                                  ><i class="la la-eye"></i
                                ></a>
                                <a
                                  href="#"
                                  class="theme-btn theme-btn-small"
                                  data-bs-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                  ><i class="la la-edit"></i
                                ></a>
                              </div>
                            </td>
                          </tr>

                          { hotels.map((hotel, index) => (
                            <tr key={hotel.id || index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">{hotel.name}</h3>
                              </div>
                            </td>
                            <td>{hotel.address.city}</td>
                            <td>7 Days</td>
                            <td>Apr 02 2020</td>
                            <td>
                              <span
                                class="badge text-bg-warning text-white py-1 px-2"
                                >New</span
                              >
                            </td>
                            <td>
                              <div class="table-content">
                                <a
                                  href="#"
                                  class="theme-btn theme-btn-small me-2"
                                  data-bs-toggle="tooltip"
                                  data-placement="top"
                                  title="View"
                                  ><i class="la la-eye"></i
                                ></a>
                                <a
                                  href="#"
                                  class="theme-btn theme-btn-small"
                                  data-bs-toggle="tooltip"
                                  data-placement="top"
                                  title="Edit"
                                  ><i class="la la-edit"></i
                                ></a>
                              </div>
                            </td>
                          </tr>
                          ))
                          }
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* <!-- end form-box --> */}
              </div>
              {/* <!-- end col-lg-12 --> */}
            </div>
            {/* <!-- end row --> */}
            <div class="row">
              <div class="col-lg-12">
                <nav aria-label="Page navigation example">
                  <ul class="pagination">
                    <li class="page-item">
                      <a
                        class="page-link page-link-nav"
                        href="#"
                        aria-label="Previous"
                      >
                        <span aria-hidden="true"
                          ><i class="la la-angle-left"></i
                        ></span>
                        <span class="sr-only">Previous</span>
                      </a>
                    </li>
                    <li class="page-item">
                      <a class="page-link page-link-nav" href="#">1</a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link page-link-nav" href="#"
                        >2 <span class="sr-only">(current)</span></a
                      >
                    </li>
                    <li class="page-item">
                      <a class="page-link page-link-nav" href="#">3</a>
                    </li>
                    <li class="page-item">
                      <a
                        class="page-link page-link-nav"
                        href="#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true"
                          ><i class="la la-angle-right"></i
                        ></span>
                        <span class="sr-only">Next</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="border-top mt-5"></div>
            <div class="row align-items-center">
              <div class="col-lg-7">
                <div class="copy-right padding-top-30px">
                  <p class="copy__desc">
                    &copy; Copyright Trizen <span id="get-year"></span> . Made
                    with <span class="la la-heart"></span> by
                    <a href="https://themeforest.net/user/techydevs/portfolio"
                      >TechyDevs</a
                    >
                  </p>
                </div>
                {/* <!-- end copy-right --> */}
              </div>
              {/* <!-- end col-lg-7 --> */}
              <div class="col-lg-5">
                <div class="copy-right-content text-end padding-top-30px">
                  <ul class="social-profile">
                    <li>
                      <a href="#"><i class="lab la-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="lab la-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="lab la-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="lab la-linkedin-in"></i></a>
                    </li>
                  </ul>
                </div>
                {/* <!-- end copy-right-content --> */}
              </div>
              {/* <!-- end col-lg-5 --> */}
            </div>
            {/* <!-- end row --> */}
          </div>
          {/* <!-- end container-fluid --> */}
        </div>
        {/* <!-- end dashboard-main-content --> */}
      </div>
      {/* <!-- end dashboard-content-wrap --> */}
      </section>
    </>
  )
}

export default ListHotel