import React from 'react'

const CtaArea = () => {
    return (
        <>
            <section
                class="cta-area subscriber-area section-bg-2 padding-top-60px padding-bottom-60px"
            >
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-7">
                            <div class="section-heading">
                                <p class="sec__desc text-white-50 pb-1">Newsletter Sign up</p>
                                <h2 class="sec__title font-size-30 text-white">
                                    Subscribe to Get Special Offers
                                </h2>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="subscriber-box">
                                <div class="contact-form-action">
                                    <form action="#">
                                        <div class="input-box">
                                            <label class="label-text text-white"
                                            >Enter email address</label
                                            >
                                            <div class="form-group mb-0">
                                                <span class="la la-envelope form-icon"></span>
                                                <input
                                                    class="form-control"
                                                    type="email"
                                                    name="email"
                                                    placeholder="Email address"
                                                />
                                                <button
                                                    class="theme-btn theme-btn-small submit-btn"
                                                    type="submit"
                                                >
                                                    Subscribe
                                                </button>
                                                <span class="font-size-14 pt-1 text-white-50"
                                                ><i class="la la-lock me-1"></i>Don't worry your
                                                    information is safe with us.</span
                                                >
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CtaArea