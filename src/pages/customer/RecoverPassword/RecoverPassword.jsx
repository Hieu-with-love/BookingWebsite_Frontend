import React, { useEffect } from 'react'
import LoadingPage from '../../../common/LoadingPage'
import Header from '../../../components/Header/Header'
import Footer from '../../../components/Footer/Footer'

const RecoverPassword = () => {

    useEffect(() => {
        document.title = "Zotel Stay | Recover Password"
    }, [])

    return (
        <>
            <LoadingPage />
            <Header />

            <section class="breadcrumb-area bread-bg-9">
                <div class="breadcrumb-wrap">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="breadcrumb-content">
                                    <div class="section-heading">
                                        <h2 class="sec__title text-white">Recover Password</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="breadcrumb-list text-end">
                                    <ul class="list-items">
                                        <li><a href="index.html">Home</a></li>
                                        <li>Pages</li>
                                        <li>Recover Password</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bread-svg-box">
                    <svg
                        class="bread-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 10"
                        preserveAspectRatio="none"
                    >
                        <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
                    </svg>
                </div>
            </section>
            <section class="contact-area padding-top-100px padding-bottom-70px">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 mx-auto">
                            <div class="form-box">
                                <div class="form-title-wrap">
                                    <h3 class="title">Recover Password</h3>
                                    <p class="font-size-15 pt-2">
                                        Enter the email of your account to reset password. Then you
                                        will receive a new password, you can use it to Login. If you have
                                        any issue about reset password
                                        <a href="contact.html" class="text-color"> contact us</a>
                                    </p>
                                </div>
                                <div class="form-content">
                                    <div class="contact-form-action">
                                        <form method="post">
                                            <div class="input-box">
                                                <label class="label-text">Your Email</label>
                                                <div class="form-group">
                                                    <span class="la la-envelope-o form-icon"></span>
                                                    <input
                                                        class="form-control"
                                                        type="email"
                                                        name="email"
                                                        placeholder="Enter email address"
                                                    />
                                                </div>
                                            </div>
                                            <div class="btn-box">
                                                <button type="button" class="theme-btn">
                                                    Reset Password
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default RecoverPassword