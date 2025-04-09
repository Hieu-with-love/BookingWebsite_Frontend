import React, { useState, useEffect } from 'react'
import LoadingPage from '../../../common/LoadingPage';
import Responsive_User from '../../../components/partner/Responsive_User';
import Sidebar_Partner from '../../../components/partner/Sidebar_Partner';
import { createHotel, updateHotelImages } from '../../../config/hotelApi';

const CreateHotel = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        // Basic Info
        name: "",
        businessName: "",
        description: "",
        images: [],

        // Location
        address: {
            number:"",
            street:"",
            district: "",
            city: "",
        },  

        // Contact Details
        phone: "",
        email: "",
        website: "",
        fax: "",
        socialMedia: {
            facebook: "",
            instagram: "",
            twitter: "",
            linkedin: ""
        },

        // Hotel Details
        totalRooms: "",
        priceRange: {
            min: "",
            max: ""
        },
        currency: "VND",
        minimumStay: "3_OR_LESS",

        // Amenities
        amenities: {
            airportTransfer: false,
            barLounge: false,
            beach: false,
            beverages: false,
            pool: false,
            wifi: false,
            coffee: false,
            airConditioning: false,
            entertainment: false,
            elevator: false,
            wheelchairAccess: false,
            fitness: false,
            breakfast: false,
            petsAllowed: false,
            restaurant: false,
            freeParking: false,
            wineBar: false
        }
    });

    useEffect(() => {
        // Simulate loading delay
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData(prev => ({
                ...prev,
                amenities: {
                    ...prev.amenities,
                    [name]: checked
                }
            }));

            console.log("Checkbox changed:", name, checked);
        }
        // Get email ? 
        else if (name.includes('.')) {
            const [parent, child] = name.split('.');
            setFormData(prev => ({
                ...prev,
                [parent]: {
                    ...prev[parent],
                    [child]: value
                }
            }));
            console.log("Nested input changed:", parent, child, value);
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
            console.log("Input changed:", name, value);
        }
    };

    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        setFormData(prev => ({
            ...prev,
            images: files
        }));
    };

    const validation = () => {
        const errors = {};

        // Basic validations
        if (!formData.name) errors.name = "Hotel name is required";
        if (!formData.businessName) errors.businessName = "Business name is required";
        if (!formData.description) errors.description = "Description is required";
        if (formData.description.length > 400) errors.description = "Description must be less than 400 characters";

        // Location validations
        if (!formData.address.district) errors.district = "District is required";
        if (!formData.address.city) errors.city = "City is required";
        if (!formData.address.street) errors.streetAddress = "Street address is required";
        if (!formData.address.number) errors.houseNumber = "House number is required";

        // Contact validations
        if (!formData.phone) errors.phone = "Phone number is required";
        if (!formData.email) errors.email = "Email is required";
        if (formData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
            errors.email = "Invalid email address";
        }

        // Price validations
        if (!formData.priceRange.min || !formData.priceRange.max) {
            errors.priceRange = "Price range is required";
        } else if (Number(formData.priceRange.min) > Number(formData.priceRange.max)) {
            errors.priceRange = "Minimum price cannot be greater than maximum price";
        }

        return Object.keys(errors).length === 0 ? null : errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errors = validation();
        
        if (errors) {
            setError(errors);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            
            // First, create the hotel without images
            const { images, ...hotelDataToSubmit } = formData;
            const response = await createHotel(hotelDataToSubmit);
            
            if (response && response.id) {
                // If hotel was created successfully and we have images
                if (images && images.length > 0) {
                    // Create FormData for image upload
                    const formData = new FormData();
                    images.forEach((image, index) => {
                        formData.append('images', image);
                    });

                    // Upload images
                    await updateHotelImages(response.id, formData);
                }

                // Show success message
                alert("Hotel created successfully!");
                // Redirect to hotel list
                window.location.href = '/partner/list-hotel';
            } else {
                throw new Error("Failed to create hotel");
            }
        } catch (err) {
            console.error("Error creating hotel:", err);
            setError(err.message || "Failed to create hotel. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <LoadingPage />;
    }

    return (
        <>
            <Responsive_User />
            <Sidebar_Partner />
            <section className="dashboard-area">
                <section className="breadcrumb-area bread-bg-7">
                    <div className="breadcrumb-wrap">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="breadcrumb-content text-center">
                                        <div className="section-heading">
                                            <h2 className="sec__title text-white">
                                                List your hotel with the world's <br />
                                                largest booking community
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bread-svg-box">
                        <svg
                            className="bread-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 10"
                            preserveAspectRatio="none"
                        >
                            <polygon points="100 0 50 10 0 0 0 10 100 10"></polygon>
                        </svg>
                    </div>
                </section>
                <section className="listing-form section--padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <form onSubmit={handleSubmit}>
                                    {/* Basic Information */}
                                    <div className="form-box">
                                        <div className="form-title-wrap">
                                            <h3 className="title">Basic Information</h3>
                                        </div>
                                        <div className="form-content">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="label-text">Hotel Name</label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            placeholder="Enter hotel name"
                                                        />
                                                        {error?.name && <span className="text-danger">{error.name}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="label-text">Business Name</label>
                                                        <input
                                                            type="text"
                                                            name="businessName"
                                                            value={formData.businessName}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            placeholder="Enter business name"
                                                        />
                                                        {error?.businessName && <span className="text-danger">{error.businessName}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="label-text">Description</label>
                                                        <textarea
                                                            name="description"
                                                            value={formData.description}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            rows="4"
                                                            placeholder="Write description"
                                                        ></textarea>
                                                        {error?.description && <span className="text-danger">{error.description}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label className="label-text">Hotel Images</label>
                                                        <div className="file-upload-wrap">
                                                            <input
                                                                type="file"
                                                                name="images"
                                                                onChange={handleImageUpload}
                                                                className="multi-file-upload"
                                                                multiple
                                                                accept="image/*"
                                                            />
                                                            <span className="file-upload-text"><i className="la la-upload mr-2"></i>Drop files here or click to upload</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="form-box">
                                        <div className="form-title-wrap">
                                            <h3 className="title">Location</h3>
                                        </div>
                                        <div className="form-content">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="label-text">City</label>
                                                        <input
                                                            type="text"
                                                            name="address.city"
                                                            value={formData.address.city}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            placeholder="Enter city"
                                                        />
                                                        {error?.city && <span className="text-danger">{error.city}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="label-text">District</label>
                                                        <input
                                                            type="text"
                                                            name="address.district"
                                                            value={formData.address.district}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            placeholder="Enter district"
                                                        />
                                                        {error?.district && <span className="text-danger">{error.district}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="label-text">Street</label>
                                                        <input
                                                            type="text"
                                                            name="address.street"
                                                            value={formData.address.street}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            placeholder="Enter street name"
                                                        />
                                                        {error?.streetAddress && <span className="text-danger">{error.streetAddress}</span>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="label-text">House Number</label>
                                                        <input
                                                            type="text"
                                                            name="address.number"
                                                            value={formData.address.number}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            placeholder="Enter house number"
                                                        />
                                                        {error?.houseNumber && <span className="text-danger">{error.houseNumber}</span>}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Details */}
                                    <div className="form-box form-content contact-form-action">
                                        <div className="form-title-wrap">
                                            <h3 className="title">Contact Details</h3>
                                        </div>
                                        <div className="form-content">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="input-box">
                                                        <label className="label-text">Phone Number</label>
                                                        <div className='form-group'>

                                                            <span class="la la-phone form-icon"></span>
                                                            <input
                                                                type="tel"
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleInputChange}
                                                                className="form-control"
                                                                placeholder="Enter phone number"
                                                            />
                                                            {error?.phone && <span className="text-danger">{error.phone}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-box">
                                                        <label className="label-text">Email</label>
                                                        <div className="form-group">
                                                            <span className="la la-envelope form-icon"></span>
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleInputChange}
                                                                className="form-control"
                                                                placeholder="Enter email"
                                                            />
                                                            {error?.email && <span className="text-danger">{error.email}</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input-box">
                                                        <label className="label-text">Your Website Address</label>
                                                        <div className="form-group">
                                                            <span className="la la-globe form-icon"></span>
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                name="website"
                                                                value={formData.website}
                                                                onChange={handleInputChange}
                                                                placeholder="https://www.techydevs.com/"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end col-lg-6 --> */}
                                                <div class="col-lg-6">
                                                    <div class="input-box">
                                                        <label class="label-text">Facebook Page</label>
                                                        <div class="form-group">
                                                            <span class="la la-facebook form-icon"></span>
                                                            <input
                                                                class="form-control"
                                                                type="text"
                                                                name="socialMedia.facebook"
                                                                value={formData.socialMedia.facebook}
                                                                onChange={handleInputChange}
                                                                placeholder="https://www.facebook.com/"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end col-lg-6 --> */}
                                                <div class="col-lg-6">
                                                    <div class="input-box">
                                                        <label class="label-text">Instagram Page</label>
                                                        <div class="form-group">
                                                            <span class="la la-instagram form-icon"></span>
                                                            <input
                                                                class="form-control"
                                                                type="text"
                                                                name="socialMedia.instagram"
                                                                value={formData.socialMedia.instagram}
                                                                onChange={handleInputChange}
                                                                placeholder="https://www.instagram.com/"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end col-lg-6 --> */}
                                                <div class="col-lg-6">
                                                    <div class="input-box">
                                                        <label class="label-text">Twitter Page</label>
                                                        <div class="form-group">
                                                            <span class="la la-twitter form-icon"></span>
                                                            <input
                                                                class="form-control"
                                                                type="text"
                                                                name="socialMedia.twitter"
                                                                value={formData.socialMedia.twitter}
                                                                onChange={handleInputChange}
                                                                placeholder="https://www.twitter.com/"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end col-lg-6 --> */}
                                                <div class="col-lg-6">
                                                    <div class="input-box">
                                                        <label class="label-text">LinkedIn Page</label>
                                                        <div class="form-group">
                                                            <span class="la la-linkedin form-icon"></span>
                                                            <input
                                                                class="form-control"
                                                                type="text"
                                                                name="socialMedia.linkedin"
                                                                value={formData.socialMedia.linkedin}
                                                                onChange={handleInputChange}
                                                                placeholder="https://www.linkedin.com/"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <!-- end col-lg-6 --> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price Range */}
                                    <div className="form-box">
                                        <div className="form-title-wrap">
                                            <h3 className="title">Pricing Information</h3>
                                        </div>
                                        <div className="form-content">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="label-text">Minimum Price (VND)</label>
                                                        <input
                                                            type="number"
                                                            name="priceRange.min"
                                                            value={formData.priceRange.min}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            placeholder="Enter minimum price"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <label className="label-text">Maximum Price (VND)</label>
                                                        <input
                                                            type="number"
                                                            name="priceRange.max"
                                                            value={formData.priceRange.max}
                                                            onChange={handleInputChange}
                                                            className="form-control"
                                                            placeholder="Enter maximum price"
                                                        />
                                                    </div>
                                                </div>
                                                {error?.priceRange && <span className="text-danger col-12">{error.priceRange}</span>}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Amenities */}
                                    <div className="form-box">
                                        <div className="form-title-wrap">
                                            <h3 className="title">Amenities</h3>
                                            <p className="font-size-14">Select the amenities available at your hotel</p>
                                        </div>
                                        <div className="form-content">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="amenities-wrap">
                                                        <h4 className="fs-16 pb-2 mb-4 border-bottom">Popular Amenities</h4>
                                                        <div className="row">
                                                            <div className="col-lg-4 responsive-column">
                                                                <div className="single-amenities">
                                                                    <h5 className="fs-14 font-weight-medium pb-2">Essential Comforts</h5>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="wifi"
                                                                            id="wifi"
                                                                            checked={formData.amenities.wifi}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="wifi">
                                                                            <span className="la la-wifi mr-2"></span>Free WiFi
                                                                        </label>
                                                                    </div>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="airConditioning"
                                                                            id="airConditioning"
                                                                            checked={formData.amenities.airConditioning}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="airConditioning">
                                                                            <span className="la la-snowflake mr-2"></span>Air Conditioning
                                                                        </label>
                                                                    </div>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="elevator"
                                                                            id="elevator"
                                                                            checked={formData.amenities.elevator}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="elevator">
                                                                            <span className="la la-building mr-2"></span>Elevator
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 responsive-column">
                                                                <div className="single-amenities">
                                                                    <h5 className="fs-14 font-weight-medium pb-2">Food & Drinks</h5>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="restaurant"
                                                                            id="restaurant"
                                                                            checked={formData.amenities.restaurant}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="restaurant">
                                                                            <span className="la la-utensils mr-2"></span>Restaurant
                                                                        </label>
                                                                    </div>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="barLounge"
                                                                            id="barLounge"
                                                                            checked={formData.amenities.barLounge}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="barLounge">
                                                                            <span className="la la-glass-martini mr-2"></span>Bar/Lounge
                                                                        </label>
                                                                    </div>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="breakfast"
                                                                            id="breakfast"
                                                                            checked={formData.amenities.breakfast}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="breakfast">
                                                                            <span className="la la-coffee mr-2"></span>Breakfast Available
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 responsive-column">
                                                                <div className="single-amenities">
                                                                    <h5 className="fs-14 font-weight-medium pb-2">Activities & Relaxation</h5>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="pool"
                                                                            id="pool"
                                                                            checked={formData.amenities.pool}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="pool">
                                                                            <span className="la la-swimming-pool mr-2"></span>Swimming Pool
                                                                        </label>
                                                                    </div>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="fitness"
                                                                            id="fitness"
                                                                            checked={formData.amenities.fitness}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="fitness">
                                                                            <span className="la la-dumbbell mr-2"></span>Fitness Center
                                                                        </label>
                                                                    </div>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="beach"
                                                                            id="beach"
                                                                            checked={formData.amenities.beach}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="beach">
                                                                            <span className="la la-umbrella-beach mr-2"></span>Beach Access
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        <h4 className="fs-16 pb-2 mb-4 mt-5 border-bottom">Additional Amenities</h4>
                                                        <div className="row">
                                                            <div className="col-lg-4 responsive-column">
                                                                <div className="single-amenities">
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="airportTransfer"
                                                                            id="airportTransfer"
                                                                            checked={formData.amenities.airportTransfer}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="airportTransfer">
                                                                            <span className="la la-plane mr-2"></span>Airport Transfer
                                                                        </label>
                                                                    </div>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="freeParking"
                                                                            id="freeParking"
                                                                            checked={formData.amenities.freeParking}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="freeParking">
                                                                            <span className="la la-parking mr-2"></span>Free Parking
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 responsive-column">
                                                                <div className="single-amenities">
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="entertainment"
                                                                            id="entertainment"
                                                                            checked={formData.amenities.entertainment}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="entertainment">
                                                                            <span className="la la-tv mr-2"></span>Entertainment
                                                                        </label>
                                                                    </div>
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="wheelchairAccess"
                                                                            id="wheelchairAccess"
                                                                            checked={formData.amenities.wheelchairAccess}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="wheelchairAccess">
                                                                            <span className="la la-wheelchair mr-2"></span>Wheelchair Access
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-4 responsive-column">
                                                                <div className="single-amenities">
                                                                    <div className="custom-checkbox">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="petsAllowed"
                                                                            id="petsAllowed"
                                                                            checked={formData.amenities.petsAllowed}
                                                                            onChange={handleInputChange}
                                                                        />
                                                                        <label htmlFor="petsAllowed">
                                                                            <span className="la la-paw mr-2"></span>Pets Allowed
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="submit-box">
                                        <div className="btn-box pt-3">
                                            <button type="submit" className="theme-btn">
                                                Create Hotel <i className="la la-arrow-right ms-1"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};

export default CreateHotel;