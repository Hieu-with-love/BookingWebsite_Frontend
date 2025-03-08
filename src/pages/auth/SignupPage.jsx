import React, { useState } from 'react'
import { register } from '../../config/apiConfig'

const SignupPage = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        role: null
    })
    const [message, setMessage] = useState('')

    const handleChangeForm = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        console.log("formData: ", formData);
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const response = await register(formData);
            console.log("response: ", response);
            setMessage("User registered successfully");
        } catch (error) {
            console.log("error: ", error);
            setMessage("User registration failed")
        }
    }

    return (
        <div class="modal-popup">
            <div
                class="modal fade"
                id="signupPopupForm"
                tabindex="-1"
                role="dialog"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <div>
                                <h5 class="modal-title title" id="exampleModalLongTitle">
                                    Sign Up
                                </h5>
                                <p class="font-size-14">Hello! Welcome Create a New Account</p>
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
                                        <label class="label-text">Email Address</label>
                                        <div class="form-group">
                                            <span class="la la-envelope form-icon"></span>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="email"
                                                placeholder="Type your email"
                                                onChange={handleChangeForm}
                                            />
                                        </div>
                                    </div>
                                    <div class="input-box">
                                        <label class="label-text">Password</label>
                                        <div class="form-group">
                                            <span class="la la-lock form-icon"></span>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="password"
                                                placeholder="Type password"
                                                onChange={handleChangeForm}
                                            />
                                        </div>
                                    </div>
                                    <div class="input-box">
                                        <label class="label-text">Repeat Password</label>
                                        <div class="form-group">
                                            <span class="la la-lock form-icon"></span>
                                            <input
                                                class="form-control"
                                                type="text"
                                                name="confirmPassword"
                                                placeholder="Type again password"
                                                onChange={handleChangeForm}
                                            />
                                        </div>
                                    </div>
                                    <div class="btn-box pt-3 pb-4">
                                        <button type="button" class="theme-btn w-100" onClick={handleSubmitForm}>
                                            Register Account
                                        </button>
                                    </div>
                                    <div class="action-box text-center">
                                        <p class="font-size-14">Or Sign up Using</p>
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

export default SignupPage