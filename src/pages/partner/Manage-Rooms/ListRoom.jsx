import React, { useEffect, useState } from 'react'
import Responsive_User from '../../../components/partner/Responsive_User';
import Sidebar_Partner from '../../../components/partner/Sidebar_Partner';
import Navigation from '../../../components/partner/Navigation';
import { Link } from 'react-router-dom';
import { getRooms } from '../../../config/roomApi'; // You'll need to create this
import Footer from '../../../components/partner/Footer';

const ListRoom = () => {
    const [rooms, setRooms] = useState([]);
    const [totalElements, setTotalElements] = useState(0);
    const [numberOfElements, setNumberOfElements] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        document.title = 'Partner Dashboard | List Rooms'

        const fetchRooms = async () => {
            const response = await getRooms(currentPage, 10);
            if (response){
                setRooms(response.content);
                setTotalElements(response.totalElements);
                setNumberOfElements(response.numberOfElements);
                setTotalPages(response.totalPages);
            }else{
                alert('Không thể lấy danh sách phòng');
            }
        }

        fetchRooms();
    }, []);

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
                                            <li>Quản lý phòng</li>
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
                                                <h3 className="title">Danh sách phòng</h3>
                                                <p className="font-size-14">
                                                    Showing 1 to {Math.min(numberOfElements, 10)} of {totalElements} entries
                                                </p>
                                            </div>
                                            <div className='col-lg-4 text-end'>
                                                <Link className='btn btn-primary'
                                                    to={'/partner/create-room'}
                                                >Thêm phòng</Link>
                                            </div>
                                        </div>
                                        <div className="form-content">
                                            <div className="table-form table-responsive">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">TT</th>
                                                            <th scope="col">Số phòng</th>
                                                            <th scope="col">Loại phòng</th>
                                                            <th scope="col">Giá/đêm</th>
                                                            <th scope="col">Sức chứa</th>
                                                            <th scope="col">Trạng thái</th>
                                                            <th scope="col">Chức năng</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {rooms && rooms.length > 0 ? rooms.map((room, index) => (
                                                            <tr key={room.id}>
                                                                <th scope="row">{index + 1}</th>
                                                                <td>
                                                                    <div className="table-content">
                                                                        <h3 className="title">{room.roomNumber}</h3>
                                                                    </div>
                                                                </td>
                                                                <td>{room.roomType}</td>
                                                                <td>{room.pricePerNight.toLocaleString('vi-VN')} VNĐ</td>
                                                                <td>{room.capacity} người</td>
                                                                <td>
                                                                    <span className={`badge text-white py-1 px-2 ${room.isAvailable ? 'text-bg-success' : 'text-bg-danger'}`}>
                                                                        {room.isAvailable ? 'Trống' : 'Đã đặt'}
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <div className="table-content">

                                                                        <Link
                                                                            to={`/partner/rooms/update-room/${room.id}`}
                                                                            className="theme-btn theme-btn-small me-2"
                                                                            data-bs-toggle="tooltip"
                                                                            data-placement="top"
                                                                            title="Edit"
                                                                        ><i className="la la-edit"></i></Link>

                                                                        <button
                                                                            onClick={() => handleDeleteClick(room)}
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
                                                                        <i className="la la-bed" style={{ fontSize: '48px', color: '#ccc', marginBottom: '15px' }}></i>
                                                                        <p className="text-muted mb-0">Chưa có phòng nào</p>
                                                                        <p className="text-muted small">Bạn có thể thêm phòng mới bằng cách nhấn nút "Thêm phòng" ở trên</p>
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
        </>
    )
}

export default ListRoom