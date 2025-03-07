import React from 'react'

const InfoArea = () => {
    return (
        <>{/* START INFO AREA */}
            < section
                class="info-area info-bg info-area2 padding-top-80px padding-bottom-45px"
            >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 responsive-column">
                            <div class="icon-box icon-layout-2 d-flex">
                                <div class="info-icon flex-shrink-0 bg-rgb text-color-2">
                                    <i class="las la-radiation"></i>
                                </div>
                                <div class="info-content">
                                    <h4 class="info__title">Unique Atmosphere</h4>
                                    <p class="info__desc">Varius quam quisque id diam vel quam</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 responsive-column">
                            <div class="icon-box icon-layout-2 d-flex">
                                <div class="info-icon flex-shrink-0 bg-rgb-2 text-color-3">
                                    <i class="la la-tree"></i>
                                </div>
                                <div class="info-content">
                                    <h4 class="info__title">Environment</h4>
                                    <p class="info__desc">Varius quam quisque id diam vel quam</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 responsive-column">
                            <div class="icon-box icon-layout-2 d-flex">
                                <div class="info-icon flex-shrink-0 bg-rgb-3 text-color-4">
                                    <i class="las la-map-marked-alt"></i>
                                </div>
                                <div class="info-content">
                                    <h4 class="info__title">Great Location</h4>
                                    <p class="info__desc">Varius quam quisque id diam vel quam</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 responsive-column">
                            <div class="icon-box icon-layout-2 d-flex">
                                <div class="info-icon flex-shrink-0 bg-rgb-4 text-color-5">
                                    <i class="las la-bed"></i>
                                </div>
                                <div class="info-content">
                                    <h4 class="info__title">Phòng nghỉ thoải mái</h4>
                                    <p class="info__desc">Phù hợp cho tất cả mọi người</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* END INFO AREA */}
        </>
    )
}

export default InfoArea