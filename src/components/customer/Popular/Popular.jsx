import React, { useEffect } from 'react'
import hotel1 from '../../../assets/images/img1.jpg'
import hotel2 from '../../../assets/images/img2.jpg'
import hotel3 from '../../../assets/images/img3.jpg'
import hotel4 from '../../../assets/images/img4.jpg'
import hotel5 from '../../../assets/images/img5.jpg'
import hotel6 from '../../../assets/images/img6.jpg'
import { getPopularHotels } from '../../../config/hotelApi'

const Popular = () => {

    const [popularHotels, setPopularHotels] = React.useState([
        {
            name: 'The Millennium Hilton New York',
            address: {
                number: '124 E Huron St',
                street: 'New York',
                district: 'NY',
                city: 'New York'
            },
            price: 90,
            images: [hotel1]
        },
        {
            name: 'Best Western Grant Park Hotel',
            address: {
                number: '124 E Huron St',
                street: 'Chicago',
                district: 'IL',
                city: 'Chicago'
            },
            price: 58,
            images: [hotel2]
        },
        
    ]);

    useEffect(() => {
        const fetchPopularHotels = async () => {
            try {
                const response = await getPopularHotels();
                setPopularHotels(response);
                console.log(response);
            } catch (error) {
                alert('Error fetching popular hotels:', error);
            }
        };

        fetchPopularHotels();
    }, [])

    return (
        <section
            className="hotel-area section-bg padding-top-100px padding-bottom-200px overflow-hidden"
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading text-center">
                            <h2 className="sec__title line-height-55">
                                Popular Hotel Destinations <br />
                                You Might Like
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row padding-top-50px">
                    <div className="col-lg-12">
                        <div className="hotel-card-wrap">
                            <div className="hotel-card-carousel-2 carousel-action">
                                {
                                    popularHotels && popularHotels.map((hotel, index) => (
                                        <div className="card-item" key={index}>
                                            <div className="card-img">
                                                <a href="hotel-single.html" className="d-block">
                                                    <img src={hotel.images && hotel.images[0]} alt="hotel-img" />
                                                </a>
                                                <span className="badge">Bestseller</span>
                                                <span className="badge badge-ribbon">30% off</span>
                                            </div>
                                            <div className="card-body">
                                                <h3 className="card-title">
                                                    <a href="hotel-single.html"
                                                    >{hotel.name}</a
                                                    >
                                                </h3>
                                                <p className="card-meta">{
                                                    `${hotel.address.number} ${hotel.address.street}, ${hotel.address.district}, ${hotel.address.city}` 
                                                }</p>
                                                <div className="card-rating">
                                                    <span className="badge text-white">4.4/5</span>
                                                    <span className="review__text">Average</span>
                                                    <span className="rating__text">(30 Reviews)</span>
                                                </div>
                                                <div
                                                    className="card-price d-flex align-items-center justify-content-between"
                                                >
                                                    <p>
                                                        <span className="price__num">${hotel.price}.00</span>
                                                        <span className="price__num before-price color-text-3"
                                                        >${hotel.price+40}.00</span
                                                        >
                                                        <span className="price__text">Per night</span>
                                                    </p>
                                                    <a href="hotel-single.html" className="btn-text"
                                                    >See details<i className="la la-angle-right"></i
                                                    ></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular