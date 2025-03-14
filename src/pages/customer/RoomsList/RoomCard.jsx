import React from 'react'
import image5 from '../../../assets/images/img5.jpg'
import image29 from '../../../assets/images/img29.jpg'
import image30 from '../../../assets/images/img30.jpg'
import image31 from '../../../assets/images/img31.jpg'
import image32 from '../../../assets/images/img32.jpg'
import image33 from '../../../assets/images/img33.jpg'

const RoomCard = ({ room }) => {
    return (
        <div class="col-lg-12">
            <div class="card-item card-item-list room-card">
                <div
                    class="card-img-carousel carousel-action carousel--action"
                >
                    <div class="card-img">
                        <a href="room-details.html" class="d-block">
                            <img src={image5} alt="hotel-img" />
                        </a>
                    </div>
                    <div class="card-img">
                        <a href="room-details.html" class="d-block">
                            <img src={image29} alt="hotel-img" />
                        </a>
                    </div>
                    <div class="card-img">
                        <a href="room-details.html" class="d-block">
                            <img src={image30} alt="hotel-img" />
                        </a>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-price pb-2">
                        <p>
                            <span class="price__from">From</span>
                            <span class="price__num">${room.price}</span>
                        </p>
                    </div>
                    <h3 class="card-title font-size-26">
                        <a href="room-details.html">{room.name}</a>
                    </h3>
                    <p class="card-text pt-2">
                        {room.description}
                    </p>
                    <div class="card-attributes pt-3 pb-4">
                        <ul class="d-flex align-items-center">
                            <li class="d-flex align-items-center">
                                <i class="la la-bed"></i><span>{room.numberOfBeds} Beds</span>
                            </li>
                            <li class="d-flex align-items-center">
                                <i class="la la-building"></i
                                ><span>24 ft<sup>2</sup></span>
                            </li>
                            <li class="d-flex align-items-center">
                                <i class="la la-bathtub"></i><span>2 Bathrooms</span>
                            </li>
                        </ul>
                    </div>
                    <div class="card-btn">
                        <a
                            href="room-details.html"
                            class="theme-btn theme-btn-transparent"
                        >Book Now</a
                        >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomCard