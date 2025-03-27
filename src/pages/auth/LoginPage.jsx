import React, { useState } from 'react'
import { login } from '../../config/apiConfig';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = ({onLogin}) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);


    const handleChangeForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log("formData: ", formData);
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await login(formData);
            if (response.jwt) {
                localStorage.setItem('jwt', response.jwt);
                onLogin(response.message, response.jwt);
                navigate('/home');
            } else {
                console.error("Login failed: No JWT received");
            }
        } catch (error) {
            console.error("Login error: ", error);
        }
    }


    return (
        <div class="modal-popup">
            <div
                class="modal fade"
                id="loginPopupForm"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div>
                                <h5 class="modal-title title" id="exampleModalLongTitle2">
                                    Login
                                </h5>
                                <p class="font-size-14">Hello! Welcome to your account</p>
                            </div>
                            <button
                                type="button"
                                class="btn-close close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true" class="la la-close"></span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="contact-form-action">
                                <form method="post">
                                    <div class="input-box">
                                        <label class="label-text">Email</label>
                                        <div class="form-group">
                                            <span class="la la-user form-icon"></span>
                                            <input
                                                class="form-control"
                                                type="email"
                                                name="email"
                                                placeholder="Type your username"
                                                onChange={handleChangeForm}
                                            />
                                        </div>
                                    </div>
                                    <div class="input-box">
                                        <label class="label-text">Password</label>
                                        <div class="form-group mb-2">
                                            <span class="la la-lock form-icon"></span>
                                            <input
                                                class="form-control"
                                                type="password"
                                                name="password"
                                                placeholder="Type your password"
                                                onChange={handleChangeForm}
                                            />
                                        </div>
                                        <div
                                            class="d-flex align-items-center justify-content-between"
                                        >
                                            <div class="custom-checkbox mb-0">
                                                <input
                                                    type="checkbox"
                                                    class="form-check-input"
                                                    id="rememberchb"
                                                />
                                                <label for="rememberchb">Remember me</label>
                                            </div>
                                            <p class="forgot-password">
                                                <Link to="/recover-password">Forgot Password?</Link>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="btn-box pt-3 pb-4">
                                        <button type="button" class="theme-btn w-100"
                                            onClick={handleSubmitForm}
                                        >
                                            Login Account
                                        </button>
                                    </div>
                                    <div class="action-box text-center">
                                        <p class="font-size-14">Or Login Using</p>
                                        <ul class="social-profile py-3">
                                            <li>
                                                <a href="#" class="bg-5 text-white"
                                                ><i class="lab la-facebook-f"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="#" class="bg-6 text-white"
                                                ><i class="lab la-twitter"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="#" class="bg-7 text-white"
                                                ><i class="lab la-instagram"></i
                                                ></a>
                                            </li>
                                            <li>
                                                <a href="#" class="bg-5 text-white"
                                                ><i class="lab la-linkedin-in"></i
                                                ></a>
                                            </li>
                                        </ul>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage