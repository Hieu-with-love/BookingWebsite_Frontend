import React, { useEffect, useState } from 'react'
import Header from '../../../components/customer/Header/Header'
import HeroWrapper from '../../../components/customer/HeroWrapper/HeroWrapper'
import InfoArea from '../../../components/customer/InfoArea/InfoArea'
import Popular from '../../../components/customer/Popular/Popular'
import TestimonialArea from '../../../components/customer/TestimonialArea/TestimonialArea'
import CtaArea from '../../../components/customer/CTAArea/CtaArea'
import Footer from '../../../components/customer/Footer/Footer'
import SignupPage from '../../auth/SignupPage'
import LoginPage from '../../auth/LoginPage'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { verifyAccount } from '../../../config/apiConfig'

import img5 from '../../../assets/images/img5.jpg'
import img6 from '../../../assets/images/img6.jpg'
import img7 from '../../../assets/images/img7.jpg'
import smallTeam1 from '../../../assets/images/small-team1.jpg'
import smallTeam2 from '../../../assets/images/small-team2.jpg'
import smallTeam3 from '../../../assets/images/small-team3.jpg'

const Home = () => {
    const [user, setUser] = useState(null);
    const [jwt, setJwt] = useState(localStorage.getItem('jwt'));
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [verificationStatus, setVerificationStatus] = useState(null);

    useEffect(() => {
        // Check for existing JWT on component mount
        const storedJwt = localStorage.getItem('jwt');
        const storedUser = localStorage.getItem('user');
        
        if (storedJwt && storedUser) {
            setJwt(storedJwt);
            setUser(JSON.parse(storedUser));
        }

        // Check for verification token in URL
        const token = searchParams.get('token');
        const error = searchParams.get('error');
        
        if (error === 'verification_failed') {
            setVerificationStatus('error');
            // Clean up URL
            navigate('/home', { replace: true });
            return;
        }

        if (token) {
            handleVerification(token);
        }

        // Preloader
        $(window).on("load", function () {
            $("#my-preloader").fadeOut(1000);
        });
    }, [searchParams, navigate]);

    const handleVerification = async (token) => {
        try {
            const response = await verifyAccount(token);
            if (response.status && response.jwt) {
                // Create a default user object
                const defaultUser = {
                    email: response.email || 'Verified User',
                    avatar: 'https://ui-avatars.com/api/?name=Verified+User&background=random'
                };
                
                // Save the JWT and user data
                localStorage.setItem('jwt', response.jwt);
                localStorage.setItem('user', JSON.stringify(defaultUser));
                
                // Update state
                setJwt(response.jwt);
                setUser(defaultUser);
                setVerificationStatus('success');
                
                // Clean up URL
                navigate('/home', { replace: true });
                
                // Open login modal after a short delay
                setTimeout(() => {
                    const loginModal = new bootstrap.Modal(document.getElementById('loginPopupForm'));
                    if (loginModal) {
                        loginModal.show();
                    }
                }, 1000);
            }
        } catch (error) {
            console.error("Verification error:", error);
            setVerificationStatus('error');
            // Clean up URL
            navigate('/home', { replace: true });
        }
    };

    const handleLogin = (userData, token) => {
        setUser(userData);
        setJwt(token);
        localStorage.setItem('jwt', token);
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/home');
    };

    const handleLogout = () => {
        setUser(null);
        setJwt(null);
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        navigate('/home');
    };

    return (
        <>
            <div className="preloader" id="my-preloader">
                <div className="loader">
                    <svg className="spinner" viewBox="0 0 50 50">
                        <circle
                            className="path"
                            cx="25"
                            cy="25"
                            r="20"
                            fill="none"
                            strokeWidth="5"
                        ></circle>
                    </svg>
                </div>
            </div>

            {/* Verification Status Messages */}
            {verificationStatus === 'success' && (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Account verified successfully! Please log in.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}
            {verificationStatus === 'error' && (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    Account verification failed. Please try again or contact support.
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            )}

            <Header 
                user={user} 
                onLogout={handleLogout}
            />
            <HeroWrapper />
            <InfoArea />
            <Popular />

            <h1>Load all hotels/rooms at here</h1>

            <TestimonialArea />
            <div className="section-block"></div>

            <section className="blog-area section--padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading text-center">
                                <h2 className="sec__title">Recent Articles</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row padding-top-50px">
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item blog-card">
                                <div className="card-img">
                                    <img src={img5} alt="blog-img" />
                                    <div className="post-format icon-element">
                                        <i className="la la-photo"></i>
                                    </div>
                                    <div className="card-body">
                                        <div className="post-categories">
                                            <a href="#" className="badge">Travel</a>
                                            <a href="#" className="badge">lifestyle</a>
                                        </div>
                                        <h3 className="card-title line-height-26">
                                            <a href="blog-single.html"
                                            >Best Scandinavian Accommodation – Treat Yourself</a
                                            >
                                        </h3>
                                        <p className="card-meta">
                                            <span className="post__date"> 1 January, 2020</span>
                                            <span className="post-dot"></span>
                                            <span className="post__time">5 Mins read</span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="card-footer d-flex align-items-center justify-content-between"
                                >
                                    <div className="author-content d-flex align-items-center">
                                        <div className="author-img">
                                            <img src={smallTeam1} alt="testimonial image" />
                                        </div>
                                        <div className="author-bio">
                                            <a href="#" className="author__title">Leroy Bell</a>
                                        </div>
                                    </div>
                                    <div className="post-share">
                                        <ul>
                                            <li>
                                                <i className="la la-share icon-element"></i>
                                                <ul className="post-share-dropdown d-flex align-items-center">
                                                    <li>
                                                        <a href="#"><i className="lab la-facebook-f"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="lab la-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="lab la-instagram"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item blog-card">
                                <div className="card-img">
                                    <img src={img6} alt="blog-img" />
                                    <div className="post-format icon-element">
                                        <i className="la la-play"></i>
                                    </div>
                                    <div className="card-body">
                                        <div className="post-categories">
                                            <a href="#" className="badge">Video</a>
                                        </div>
                                        <h3 className="card-title line-height-26">
                                            <a href="blog-single.html"
                                            >Amazing Places to Stay in Norway</a
                                            >
                                        </h3>
                                        <p className="card-meta">
                                            <span className="post__date"> 1 February, 2020</span>
                                            <span className="post-dot"></span>
                                            <span className="post__time">4 Mins read</span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="card-footer d-flex align-items-center justify-content-between"
                                >
                                    <div className="author-content d-flex align-items-center">
                                        <div className="author-img">
                                            <img src={smallTeam2} alt="testimonial image" />
                                        </div>
                                        <div className="author-bio">
                                            <a href="#" className="author__title">Phillip Hunt</a>
                                        </div>
                                    </div>
                                    <div className="post-share">
                                        <ul>
                                            <li>
                                                <i className="la la-share icon-element"></i>
                                                <ul className="post-share-dropdown d-flex align-items-center">
                                                    <li>
                                                        <a href="#"><i className="lab la-facebook-f"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="lab la-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="lab la-instagram"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 responsive-column">
                            <div className="card-item blog-card">
                                <div className="card-img">
                                    <img src={img7} alt="blog-img" />
                                    <div className="post-format icon-element">
                                        <i className="la la-music"></i>
                                    </div>
                                    <div className="card-body">
                                        <div className="post-categories">
                                            <a href="#" className="badge">audio</a>
                                        </div>
                                        <h3 className="card-title line-height-26">
                                            <a href="blog-single.html"
                                            >Feel Like Home on Your Business Trip</a
                                            >
                                        </h3>
                                        <p className="card-meta">
                                            <span className="post__date"> 1 March, 2020</span>
                                            <span className="post-dot"></span>
                                            <span className="post__time">3 Mins read</span>
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="card-footer d-flex align-items-center justify-content-between"
                                >
                                    <div className="author-content d-flex align-items-center">
                                        <div className="author-img">
                                            <img src={smallTeam3} alt="testimonial image" />
                                        </div>
                                        <div className="author-bio">
                                            <a href="#" className="author__title">Luke Jacobs</a>
                                        </div>
                                    </div>
                                    <div className="post-share">
                                        <ul>
                                            <li>
                                                <i className="la la-share icon-element"></i>
                                                <ul className="post-share-dropdown d-flex align-items-center">
                                                    <li>
                                                        <a href="#"><i className="lab la-facebook-f"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="lab la-twitter"></i></a>
                                                    </li>
                                                    <li>
                                                        <a href="#"><i className="lab la-instagram"></i></a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CtaArea />
            <Footer />

            <div id="back-to-top">
                <i className="la la-angle-up" title="Go top"></i>
            </div>

            <SignupPage />
            <LoginPage onLogin={handleLogin} />
        </>
    )
}

export default Home