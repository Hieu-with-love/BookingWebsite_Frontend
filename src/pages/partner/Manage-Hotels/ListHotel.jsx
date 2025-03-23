import React from 'react'
import Responsive_User from '../../../components/admin/Responsive_User'
import Sidebar_Admin from '../../../components/Sidebar/Sidebar_Admin'
import Navigation from '../../../components/admin/Navigation'

const ListHotel = () => {
  return (
    <>
      <Responsive_User />
      <Sidebar_Admin />

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
                      Visa Application
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
                    <li>Visa Application</li>
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
                  <div class="form-title-wrap">
                    <h3 class="title">Visa Application Lists</h3>
                    <p class="font-size-14">Showing 1 to 8 of 20 entries</p>
                  </div>
                  <div class="form-content">
                    <div class="table-form table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Application Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
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
                          <tr>
                            <th scope="row">2</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">Alex Smith</h3>
                              </div>
                            </td>
                            <td>Canada</td>
                            <td>3 Days</td>
                            <td>Apr 02 2020</td>
                            <td>
                              <span class="badge text-bg-success py-1 px-2"
                                >Approved</span
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
                          <tr>
                            <th scope="row">3</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">Kamran Adi</h3>
                              </div>
                            </td>
                            <td>New York</td>
                            <td>12 Days</td>
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
                          <tr>
                            <th scope="row">4</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">Josh Purdila</h3>
                              </div>
                            </td>
                            <td>Istanbul, Turkey</td>
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
                          <tr>
                            <th scope="row">5</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">Mark Hardson</h3>
                              </div>
                            </td>
                            <td>Beijing, China</td>
                            <td>7 Days</td>
                            <td>Apr 02 2020</td>
                            <td>
                              <span class="badge text-bg-success py-1 px-2"
                                >Approved</span
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
                          <tr>
                            <th scope="row">6</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">David Martin</h3>
                              </div>
                            </td>
                            <td>Dubai</td>
                            <td>7 Days</td>
                            <td>Apr 02 2020</td>
                            <td>
                              <span class="badge text-bg-success py-1 px-2"
                                >Approved</span
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
                          <tr>
                            <th scope="row">7</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">Kevin Powel</h3>
                              </div>
                            </td>
                            <td>Nepal</td>
                            <td>7 Days</td>
                            <td>Apr 02 2020</td>
                            <td>
                              <span class="badge text-bg-success py-1 px-2"
                                >Approved</span
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
                          <tr>
                            <th scope="row">8</th>
                            <td>
                              <div class="table-content">
                                <h3 class="title">Amir Hamja</h3>
                              </div>
                            </td>
                            <td>Bangladesh</td>
                            <td>7 Days</td>
                            <td>Apr 02 2020</td>
                            <td>
                              <span class="badge text-bg-info py-1 px-2"
                                >Pending</span
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