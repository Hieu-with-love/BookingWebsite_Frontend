import React from 'react'
import discountImg from "../../assets/images/discount-hotel-img.jpg"

const DiscountArea = () => {
    return (
        <section class="discount-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="discount-box">
                            <div class="discount-img">
                                <img src="images/discount-hotel-img.jpg" alt="discount img" />
                            </div>
                            <div class="discount-content">
                                <div class="section-heading">
                                    <p class="sec__desc text-white">Hot deal, save 50%</p>
                                    <h2 class="sec__title mb-0 line-height-50 text-white">
                                        Discount 50% for the <br />
                                        First Booking
                                    </h2>
                                </div>
                                <div class="btn-box pt-4">
                                    <a href="#" class="theme-btn border-0"
                                    >Learn More <i class="la la-arrow-right ms-1"></i
                                    ></a>
                                </div>
                            </div>
                            <div class="company-logo">
                                <img src={discountImg} alt="" />
                                <p class="text-white font-size-14 text-end">*Terms applied</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DiscountArea