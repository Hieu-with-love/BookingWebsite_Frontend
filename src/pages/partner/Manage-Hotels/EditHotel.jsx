import React from 'react'

const EditHotel = () => {
    return (
        <>
            <LoadingPage />

            <Responsive_User />

            <Sidebar_Partner />

            <section class="dashboard-area">

                {/* <!-- ================================
        START BREADCRUMB AREA
    ================================= --> */}
                <section class="breadcrumb-area bread-bg-7">
                    <div class="breadcrumb-wrap">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="breadcrumb-content text-center">
                                        <div class="section-heading">
                                            <h2 class="sec__title text-white">
                                                List your hotel with the world's <br />
                                                largest booking community
                                            </h2>
                                        </div>
                                    </div>
                                    {/* <!-- end breadcrumb-content --> */}
                                </div>
                                {/* <!-- end col-lg-12 --> */}
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                        {/* <!-- end container --> */}
                    </div>
                    {/* <!-- end breadcrumb-wrap --> */}
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
                    {/* <!-- end bread-svg --> */}
                </section>
                {/* <!-- end breadcrumb-area --> */}
                {/* <!-- ================================
        END BREADCRUMB AREA
    ================================= --> */}

                {/* <!-- ================================
        START FORM AREA
    ================================= --> */}
                <section class="listing-form section--padding">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 mx-auto">
                                <div class="listing-header pb-4">
                                    <h3 class="title font-size-28 pb-2">
                                        List an accommodation on Trizen
                                    </h3>
                                    <p class="font-size-14">
                                        If you are listing a vacation rental, please
                                        <a href="#" class="text-color">click here.</a>
                                    </p>
                                    <p class="font-size-14">
                                        <a href="#" class="text-color"
                                        >Read the complete Trizen policy for accommodations.</a
                                        >
                                    </p>
                                </div>
                                <div class="form-box">
                                    <div class="form-title-wrap">
                                        <h3 class="title">
                                            <i class="la la-user me-2 text-gray"></i>Your information
                                        </h3>
                                    </div>
                                    {/* <!-- form-title-wrap --> */}
                                    <div class="form-content contact-form-action">
                                        <form method="post" class="row">
                                            <div class="col-lg-6 responsive-column">
                                                <div class="input-box">
                                                    <label class="label-text">Your Name</label>
                                                    <div class="form-group">
                                                        <span class="la la-user form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="text"
                                                            placeholder="Your name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6 responsive-column">
                                                <div class="input-box">
                                                    <label class="label-text">Your Email</label>
                                                    <div class="form-group">
                                                        <span class="la la-envelope-o form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="email"
                                                            name="email"
                                                            placeholder="Your email"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6 responsive-column">
                                                <div class="input-box">
                                                    <label class="label-text"
                                                    >What is your role at this business?</label
                                                    >
                                                    <div
                                                        class="form-group select2-container-wrapper select-contain w-100"
                                                    >
                                                        <select class="select-contain-select">
                                                            <option value="">Select one</option>
                                                            <option value="OWNER">Owner</option>
                                                            <option value="GENERAL_MANAGER">
                                                                General Manager
                                                            </option>
                                                            <option value="INNKEEPER">Innkeeper</option>
                                                            <option value="AGENCY_CONSULTANT">
                                                                Agency / Consultant
                                                            </option>
                                                            <option value="ACCOUNTING_FINANCE">
                                                                Accounting / Finance
                                                            </option>
                                                            <option value="GUEST_SERVICES">
                                                                Guest Services / Front Office
                                                            </option>
                                                            <option value="MARKETING">Marketing</option>
                                                            <option value="REVENUE_MANAGEMENT">
                                                                Revenue Management
                                                            </option>
                                                            <option value="SALES">Sales</option>
                                                            <option value="OTHER">Other</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                        </form>
                                    </div>
                                    {/* <!-- end form-content --> */}
                                </div>
                                {/* <!-- end form-box --> */}
                                <div class="form-box">
                                    <div class="form-title-wrap">
                                        <h3 class="title">
                                            <i class="la la-gear me-2 text-gray"></i>Listing information
                                            for your accommodation
                                        </h3>
                                    </div>
                                    {/* <!-- form-title-wrap --> */}
                                    <div class="form-content contact-form-action">
                                        <form method="post" class="row">
                                            <div class="col-lg-6 responsive-column">
                                                <div class="input-box">
                                                    <label class="label-text">Official business name</label>
                                                    <div class="form-group">
                                                        <span class="la la-briefcase form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="text"
                                                            placeholder="Business name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6 responsive-column">
                                                <div class="input-box">
                                                    <label class="label-text">Country</label>
                                                    <div
                                                        class="form-group select2-container-wrapper select-contain w-100"
                                                    >
                                                        <select class="select-contain-select">
                                                            <option value="">Select a country</option>
                                                            <option value="Afghanistan">Afghanistan</option>
                                                            <option value="Åland Islands">Åland Islands</option>
                                                            <option value="Albania">Albania</option>
                                                            <option value="Algeria">Algeria</option>
                                                            <option value="American Samoa">American Samoa</option>
                                                            <option value="Andorra">Andorra</option>
                                                            <option value="Angola">Angola</option>
                                                            <option value="Anguilla">Anguilla</option>
                                                            <option value="Antarctica">Antarctica</option>
                                                            <option value="Antigua and Barbuda">
                                                                Antigua and Barbuda
                                                            </option>
                                                            <option value="Argentina">Argentina</option>
                                                            <option value="Armenia">Armenia</option>
                                                            <option value="Aruba">Aruba</option>
                                                            <option value="Australia">Australia</option>
                                                            <option value="Austria">Austria</option>
                                                            <option value="Azerbaijan">Azerbaijan</option>
                                                            <option value="Bahamas">Bahamas</option>
                                                            <option value="Bahrain">Bahrain</option>
                                                            <option value="Bangladesh">Bangladesh</option>
                                                            <option value="Barbados">Barbados</option>
                                                            <option value="Belarus">Belarus</option>
                                                            <option value="Belgium">Belgium</option>
                                                            <option value="Belize">Belize</option>
                                                            <option value="Benin">Benin</option>
                                                            <option value="Bermuda">Bermuda</option>
                                                            <option value="Bhutan">Bhutan</option>
                                                            <option value="Bolivia">Bolivia</option>
                                                            <option value="Bosnia and Herzegovina">
                                                                Bosnia and Herzegovina
                                                            </option>
                                                            <option value="Botswana">Botswana</option>
                                                            <option value="Bouvet Island">Bouvet Island</option>
                                                            <option value="Brazil">Brazil</option>
                                                            <option value="British Indian Ocean Territory">
                                                                British Indian Ocean Territory
                                                            </option>
                                                            <option value="Brunei Darussalam">
                                                                Brunei Darussalam
                                                            </option>
                                                            <option value="Bulgaria">Bulgaria</option>
                                                            <option value="Burkina Faso">Burkina Faso</option>
                                                            <option value="Burundi">Burundi</option>
                                                            <option value="Cambodia">Cambodia</option>
                                                            <option value="Cameroon">Cameroon</option>
                                                            <option value="Canada">Canada</option>
                                                            <option value="Cape Verde">Cape Verde</option>
                                                            <option value="Cayman Islands">Cayman Islands</option>
                                                            <option value="Central African Republic">
                                                                Central African Republic
                                                            </option>
                                                            <option value="Chad">Chad</option>
                                                            <option value="Chile">Chile</option>
                                                            <option value="China">China</option>
                                                            <option value="Christmas Island">
                                                                Christmas Island
                                                            </option>
                                                            <option value="Cocos (Keeling) Islands">
                                                                Cocos (Keeling) Islands
                                                            </option>
                                                            <option value="Colombia">Colombia</option>
                                                            <option value="Comoros">Comoros</option>
                                                            <option value="Congo">Congo</option>
                                                            <option value="Congo, The Democratic Republic of The">
                                                                Congo, The Democratic Republic of The
                                                            </option>
                                                            <option value="Cook Islands">Cook Islands</option>
                                                            <option value="Costa Rica">Costa Rica</option>
                                                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                            <option value="Croatia">Croatia</option>
                                                            <option value="Cuba">Cuba</option>
                                                            <option value="Cyprus">Cyprus</option>
                                                            <option value="Czech Republic">Czech Republic</option>
                                                            <option value="Denmark">Denmark</option>
                                                            <option value="Djibouti">Djibouti</option>
                                                            <option value="Dominica">Dominica</option>
                                                            <option value="Dominican Republic">
                                                                Dominican Republic
                                                            </option>
                                                            <option value="Ecuador">Ecuador</option>
                                                            <option value="Egypt">Egypt</option>
                                                            <option value="El Salvador">El Salvador</option>
                                                            <option value="Equatorial Guinea">
                                                                Equatorial Guinea
                                                            </option>
                                                            <option value="Eritrea">Eritrea</option>
                                                            <option value="Estonia">Estonia</option>
                                                            <option value="Ethiopia">Ethiopia</option>
                                                            <option value="Falkland Islands (Malvinas)">
                                                                Falkland Islands (Malvinas)
                                                            </option>
                                                            <option value="Faroe Islands">Faroe Islands</option>
                                                            <option value="Fiji">Fiji</option>
                                                            <option value="Finland">Finland</option>
                                                            <option value="France">France</option>
                                                            <option value="French Guiana">French Guiana</option>
                                                            <option value="French Polynesia">
                                                                French Polynesia
                                                            </option>
                                                            <option value="French Southern Territories">
                                                                French Southern Territories
                                                            </option>
                                                            <option value="Gabon">Gabon</option>
                                                            <option value="Gambia">Gambia</option>
                                                            <option value="Georgia">Georgia</option>
                                                            <option value="Germany">Germany</option>
                                                            <option value="Ghana">Ghana</option>
                                                            <option value="Gibraltar">Gibraltar</option>
                                                            <option value="Greece">Greece</option>
                                                            <option value="Greenland">Greenland</option>
                                                            <option value="Grenada">Grenada</option>
                                                            <option value="Guadeloupe">Guadeloupe</option>
                                                            <option value="Guam">Guam</option>
                                                            <option value="Guatemala">Guatemala</option>
                                                            <option value="Guernsey">Guernsey</option>
                                                            <option value="Guinea">Guinea</option>
                                                            <option value="Guinea-bissau">Guinea-bissau</option>
                                                            <option value="Guyana">Guyana</option>
                                                            <option value="Haiti">Haiti</option>
                                                            <option value="Heard Island and Mcdonald Islands">
                                                                Heard Island and Mcdonald Islands
                                                            </option>
                                                            <option value="Holy See (Vatican City State)">
                                                                Holy See (Vatican City State)
                                                            </option>
                                                            <option value="Honduras">Honduras</option>
                                                            <option value="Hong Kong">Hong Kong</option>
                                                            <option value="Hungary">Hungary</option>
                                                            <option value="Iceland">Iceland</option>
                                                            <option value="India">India</option>
                                                            <option value="Indonesia">Indonesia</option>
                                                            <option value="Iran, Islamic Republic of">
                                                                Iran, Islamic Republic of
                                                            </option>
                                                            <option value="Iraq">Iraq</option>
                                                            <option value="Ireland">Ireland</option>
                                                            <option value="Isle of Man">Isle of Man</option>
                                                            <option value="Israel">Israel</option>
                                                            <option value="Italy">Italy</option>
                                                            <option value="Jamaica">Jamaica</option>
                                                            <option value="Japan">Japan</option>
                                                            <option value="Jersey">Jersey</option>
                                                            <option value="Jordan">Jordan</option>
                                                            <option value="Kazakhstan">Kazakhstan</option>
                                                            <option value="Kenya">Kenya</option>
                                                            <option value="Kiribati">Kiribati</option>
                                                            <option
                                                                value="Korea, Democratic People's Republic of"
                                                            >
                                                                Korea, Democratic People's Republic of
                                                            </option>
                                                            <option value="Korea, Republic of">
                                                                Korea, Republic of
                                                            </option>
                                                            <option value="Kuwait">Kuwait</option>
                                                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                            <option value="Lao People's Democratic Republic">
                                                                Lao People's Democratic Republic
                                                            </option>
                                                            <option value="Latvia">Latvia</option>
                                                            <option value="Lebanon">Lebanon</option>
                                                            <option value="Lesotho">Lesotho</option>
                                                            <option value="Liberia">Liberia</option>
                                                            <option value="Libyan Arab Jamahiriya">
                                                                Libyan Arab Jamahiriya
                                                            </option>
                                                            <option value="Liechtenstein">Liechtenstein</option>
                                                            <option value="Lithuania">Lithuania</option>
                                                            <option value="Luxembourg">Luxembourg</option>
                                                            <option value="Macao">Macao</option>
                                                            <option
                                                                value="Macedonia, The Former Yugoslav Republic of"
                                                            >
                                                                Macedonia, The Former Yugoslav Republic of
                                                            </option>
                                                            <option value="Madagascar">Madagascar</option>
                                                            <option value="Malawi">Malawi</option>
                                                            <option value="Malaysia">Malaysia</option>
                                                            <option value="Maldives">Maldives</option>
                                                            <option value="Mali">Mali</option>
                                                            <option value="Malta">Malta</option>
                                                            <option value="Marshall Islands">
                                                                Marshall Islands
                                                            </option>
                                                            <option value="Martinique">Martinique</option>
                                                            <option value="Mauritania">Mauritania</option>
                                                            <option value="Mauritius">Mauritius</option>
                                                            <option value="Mayotte">Mayotte</option>
                                                            <option value="Mexico">Mexico</option>
                                                            <option value="Micronesia, Federated States of">
                                                                Micronesia, Federated States of
                                                            </option>
                                                            <option value="Moldova, Republic of">
                                                                Moldova, Republic of
                                                            </option>
                                                            <option value="Monaco">Monaco</option>
                                                            <option value="Mongolia">Mongolia</option>
                                                            <option value="Montenegro">Montenegro</option>
                                                            <option value="Montserrat">Montserrat</option>
                                                            <option value="Morocco">Morocco</option>
                                                            <option value="Mozambique">Mozambique</option>
                                                            <option value="Myanmar">Myanmar</option>
                                                            <option value="Namibia">Namibia</option>
                                                            <option value="Nauru">Nauru</option>
                                                            <option value="Nepal">Nepal</option>
                                                            <option value="Netherlands">Netherlands</option>
                                                            <option value="Netherlands Antilles">
                                                                Netherlands Antilles
                                                            </option>
                                                            <option value="New Caledonia">New Caledonia</option>
                                                            <option value="New Zealand">New Zealand</option>
                                                            <option value="Nicaragua">Nicaragua</option>
                                                            <option value="Niger">Niger</option>
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="Niue">Niue</option>
                                                            <option value="Norfolk Island">Norfolk Island</option>
                                                            <option value="Northern Mariana Islands">
                                                                Northern Mariana Islands
                                                            </option>
                                                            <option value="Norway">Norway</option>
                                                            <option value="Oman">Oman</option>
                                                            <option value="Pakistan">Pakistan</option>
                                                            <option value="Palau">Palau</option>
                                                            <option value="Palestinian Territory, Occupied">
                                                                Palestinian Territory, Occupied
                                                            </option>
                                                            <option value="Panama">Panama</option>
                                                            <option value="Papua New Guinea">
                                                                Papua New Guinea
                                                            </option>
                                                            <option value="Paraguay">Paraguay</option>
                                                            <option value="Peru">Peru</option>
                                                            <option value="Philippines">Philippines</option>
                                                            <option value="Pitcairn">Pitcairn</option>
                                                            <option value="Poland">Poland</option>
                                                            <option value="Portugal">Portugal</option>
                                                            <option value="Puerto Rico">Puerto Rico</option>
                                                            <option value="Qatar">Qatar</option>
                                                            <option value="Reunion">Reunion</option>
                                                            <option value="Romania">Romania</option>
                                                            <option value="Russian Federation">
                                                                Russian Federation
                                                            </option>
                                                            <option value="Rwanda">Rwanda</option>
                                                            <option value="Saint Helena">Saint Helena</option>
                                                            <option value="Saint Kitts and Nevis">
                                                                Saint Kitts and Nevis
                                                            </option>
                                                            <option value="Saint Lucia">Saint Lucia</option>
                                                            <option value="Saint Pierre and Miquelon">
                                                                Saint Pierre and Miquelon
                                                            </option>
                                                            <option value="Saint Vincent and The Grenadines">
                                                                Saint Vincent and The Grenadines
                                                            </option>
                                                            <option value="Samoa">Samoa</option>
                                                            <option value="San Marino">San Marino</option>
                                                            <option value="Sao Tome and Principe">
                                                                Sao Tome and Principe
                                                            </option>
                                                            <option value="Saudi Arabia">Saudi Arabia</option>
                                                            <option value="Senegal">Senegal</option>
                                                            <option value="Serbia">Serbia</option>
                                                            <option value="Seychelles">Seychelles</option>
                                                            <option value="Sierra Leone">Sierra Leone</option>
                                                            <option value="Singapore">Singapore</option>
                                                            <option value="Slovakia">Slovakia</option>
                                                            <option value="Slovenia">Slovenia</option>
                                                            <option value="Solomon Islands">
                                                                Solomon Islands
                                                            </option>
                                                            <option value="Somalia">Somalia</option>
                                                            <option value="South Africa">South Africa</option>
                                                            <option
                                                                value="South Georgia and The South Sandwich Islands"
                                                            >
                                                                South Georgia and The South Sandwich Islands
                                                            </option>
                                                            <option value="Spain">Spain</option>
                                                            <option value="Sri Lanka">Sri Lanka</option>
                                                            <option value="Sudan">Sudan</option>
                                                            <option value="Suriname">Suriname</option>
                                                            <option value="Svalbard and Jan Mayen">
                                                                Svalbard and Jan Mayen
                                                            </option>
                                                            <option value="Swaziland">Swaziland</option>
                                                            <option value="Sweden">Sweden</option>
                                                            <option value="Switzerland">Switzerland</option>
                                                            <option value="Syrian Arab Republic">
                                                                Syrian Arab Republic
                                                            </option>
                                                            <option value="Taiwan, Province of China">
                                                                Taiwan, Province of China
                                                            </option>
                                                            <option value="Tajikistan">Tajikistan</option>
                                                            <option value="Tanzania, United Republic of">
                                                                Tanzania, United Republic of
                                                            </option>
                                                            <option value="Thailand">Thailand</option>
                                                            <option value="Timor-leste">Timor-leste</option>
                                                            <option value="Togo">Togo</option>
                                                            <option value="Tokelau">Tokelau</option>
                                                            <option value="Tonga">Tonga</option>
                                                            <option value="Trinidad and Tobago">
                                                                Trinidad and Tobago
                                                            </option>
                                                            <option value="Tunisia">Tunisia</option>
                                                            <option value="Turkey">Turkey</option>
                                                            <option value="Turkmenistan">Turkmenistan</option>
                                                            <option value="Turks and Caicos Islands">
                                                                Turks and Caicos Islands
                                                            </option>
                                                            <option value="Tuvalu">Tuvalu</option>
                                                            <option value="Uganda">Uganda</option>
                                                            <option value="Ukraine">Ukraine</option>
                                                            <option value="United Arab Emirates">
                                                                United Arab Emirates
                                                            </option>
                                                            <option value="United Kingdom">United Kingdom</option>
                                                            <option value="United States">United States</option>
                                                            <option value="United States Minor Outlying Islands">
                                                                United States Minor Outlying Islands
                                                            </option>
                                                            <option value="Uruguay">Uruguay</option>
                                                            <option value="Uzbekistan">Uzbekistan</option>
                                                            <option value="Vanuatu">Vanuatu</option>
                                                            <option value="Venezuela">Venezuela</option>
                                                            <option value="Viet Nam">Viet Nam</option>
                                                            <option value="Virgin Islands, British">
                                                                Virgin Islands, British
                                                            </option>
                                                            <option value="Virgin Islands, U.S.">
                                                                Virgin Islands, U.S.
                                                            </option>
                                                            <option value="Wallis and Futuna">
                                                                Wallis and Futuna
                                                            </option>
                                                            <option value="Western Sahara">Western Sahara</option>
                                                            <option value="Yemen">Yemen</option>
                                                            <option value="Zambia">Zambia</option>
                                                            <option value="Zimbabwe">Zimbabwe</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6 responsive-column">
                                                <div class="input-box">
                                                    <label class="label-text"
                                                    >City/Town, State/Province/Region</label
                                                    >
                                                    <div class="form-group">
                                                        <span class="la la-map form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="text"
                                                            placeholder="example: New York"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div
                                                class="col-lg-6 responsive-column d-flex align-items-center"
                                            >
                                                <div class="input-box">
                                                    <div class="form-group custom-checkbox pt-4">
                                                        <input
                                                            type="checkbox"
                                                            class="form-check-input"
                                                            id="yourCityIsNotListed"
                                                        />
                                                        <label for="yourCityIsNotListed"
                                                        >Your city is not listed</label
                                                        >
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-4">
                                                <div class="input-box">
                                                    <label class="label-text">Country/region code</label>
                                                    <div
                                                        class="form-group select2-container-wrapper select-contain w-100"
                                                    >
                                                        <select class="select-contain-select">
                                                            <option value="">Select country code</option>
                                                            <option value="ALB">Albania (355)</option>
                                                            <option value="DZA">Algeria (213)</option>
                                                            <option value="ASM">American Samoa (1)</option>
                                                            <option value="AND">Andorra (376)</option>
                                                            <option value="AIA">Anguilla (1)</option>
                                                            <option value="ATA">Antarctica (672)</option>
                                                            <option value="ATG">Antigua and Barbuda (1)</option>
                                                            <option value="ARG">Argentina (54)</option>
                                                            <option value="ARM">Armenia (374)</option>
                                                            <option value="ABW">Aruba (297)</option>
                                                            <option value="AUS">Australia (61)</option>
                                                            <option value="AUT">Austria (43)</option>
                                                            <option value="AZE">Azerbaijan (994)</option>
                                                            <option value="BHS">Bahamas (1)</option>
                                                            <option value="BHR">Bahrain (973)</option>
                                                            <option value="BGD">Bangladesh (880)</option>
                                                            <option value="BRB">Barbados (1)</option>
                                                            <option value="BLR">Belarus (375)</option>
                                                            <option value="BEL">Belgium (32)</option>
                                                            <option value="BLZ">Belize (501)</option>
                                                            <option value="BEN">Benin (229)</option>
                                                            <option value="BMU">Bermuda (1)</option>
                                                            <option value="BTN">Bhutan (975)</option>
                                                            <option value="BOL">Bolivia (591)</option>
                                                            <option value="BES">
                                                                Bonaire, Sint Eustatius and Saba (599)
                                                            </option>
                                                            <option value="BIH">
                                                                Bosnia and Herzegovina (387)
                                                            </option>
                                                            <option value="BWA">Botswana (267)</option>
                                                            <option value="BVT">Bouvet Island (47)</option>
                                                            <option value="BRA">Brazil (55)</option>
                                                            <option value="VGB">
                                                                British Virgin Islands (1)
                                                            </option>
                                                            <option value="BRN">Brunei (673)</option>
                                                            <option value="BGR">Bulgaria (359)</option>
                                                            <option value="BFA">Burkina Faso (226)</option>
                                                            <option value="BDI">Burundi (257)</option>
                                                            <option value="KHM">Cambodia (855)</option>
                                                            <option value="CMR">Cameroon (237)</option>
                                                            <option value="CAN">Canada (1)</option>
                                                            <option value="CPV">Cape Verde (238)</option>
                                                            <option value="CYM">Cayman Islands (1)</option>
                                                            <option value="TCD">Chad (235)</option>
                                                            <option value="CHL">Chile (56)</option>
                                                            <option value="CHN">China (86)</option>
                                                            <option value="CXR">Christmas Island (61)</option>
                                                            <option value="CCK">Cocos Islands (61)</option>
                                                            <option value="COL">Colombia (57)</option>
                                                            <option value="COM">Comoros (269)</option>
                                                            <option value="COK">Cook Islands (682)</option>
                                                            <option value="CRI">Costa Rica (506)</option>
                                                            <option value="CIV">Cote d’ivoire (225)</option>
                                                            <option value="HRV">Croatia (385)</option>
                                                            <option value="CUB">Cuba (53)</option>
                                                            <option value="CUW">Curaçao (599)</option>
                                                            <option value="CYP">Cyprus (357)</option>
                                                            <option value="CZE">Czech Republic (420)</option>
                                                            <option value="COD">
                                                                Democratic Republic of the Congo (243)
                                                            </option>
                                                            <option value="DNK">Denmark (45)</option>
                                                            <option value="DJI">Djibouti (253)</option>
                                                            <option value="DMA">Dominica (1)</option>
                                                            <option value="DOM">Dominican Republic (1)</option>
                                                            <option value="ECU">Ecuador (593)</option>
                                                            <option value="EGY">Egypt (20)</option>
                                                            <option value="SLV">El Salvador (503)</option>
                                                            <option value="GNQ">Equatorial Guinea (240)</option>
                                                            <option value="ERI">Eritrea (291)</option>
                                                            <option value="EST">Estonia (372)</option>
                                                            <option value="ETH">Ethiopia (251)</option>
                                                            <option value="FLK">Falkland Islands (500)</option>
                                                            <option value="FRO">Faroe Islands (298)</option>
                                                            <option value="FJI">Fiji (679)</option>
                                                            <option value="FIN">Finland (358)</option>
                                                            <option value="FRA">France (33)</option>
                                                            <option value="GUF">French Guiana (594)</option>
                                                            <option value="PYF">French Polynesia (689)</option>
                                                            <option value="GAB">Gabon (241)</option>
                                                            <option value="GMB">Gambia (220)</option>
                                                            <option value="GEO">Georgia (995)</option>
                                                            <option value="DEU">Germany (49)</option>
                                                            <option value="GHA">Ghana (233)</option>
                                                            <option value="GIB">Gibraltar (350)</option>
                                                            <option value="GRC">Greece (30)</option>
                                                            <option value="GRL">Greenland (299)</option>
                                                            <option value="GRD">Grenada (1)</option>
                                                            <option value="GLP">Guadeloupe (590)</option>
                                                            <option value="GUM">Guam (1)</option>
                                                            <option value="GTM">Guatemala (502)</option>
                                                            <option value="GIN">Guinea (224)</option>
                                                            <option value="GNB">Guinea-Bissau (245)</option>
                                                            <option value="GUY">Guyana (592)</option>
                                                            <option value="HTI">Haiti (509)</option>
                                                            <option value="HND">Honduras (504)</option>
                                                            <option value="HKG">Hong Kong (852)</option>
                                                            <option value="HUN">Hungary (36)</option>
                                                            <option value="ISL">Iceland (354)</option>
                                                            <option value="IND">India (91)</option>
                                                            <option value="IDN">Indonesia (62)</option>
                                                            <option value="IRL">Ireland (353)</option>
                                                            <option value="ISR">Israel (972)</option>
                                                            <option value="ITA">Italy (39)</option>
                                                            <option value="JAM">Jamaica (1)</option>
                                                            <option value="JPN">Japan (81)</option>
                                                            <option value="JOR">Jordan (962)</option>
                                                            <option value="KAZ">Kazakhstan (7)</option>
                                                            <option value="KEN">Kenya (254)</option>
                                                            <option value="KIR">Kiribati (686)</option>
                                                            <option value="KWT">Kuwait (965)</option>
                                                            <option value="KGZ">Kyrgyzstan (996)</option>
                                                            <option value="LAO">Laos (856)</option>
                                                            <option value="LVA">Latvia (371)</option>
                                                            <option value="LBN">Lebanon (961)</option>
                                                            <option value="LSO">Lesotho (266)</option>
                                                            <option value="LBR">Liberia (231)</option>
                                                            <option value="LBY">Libya (218)</option>
                                                            <option value="LIE">Liechtenstein (423)</option>
                                                            <option value="LTU">Lithuania (370)</option>
                                                            <option value="LUX">Luxembourg (352)</option>
                                                            <option value="MAC">Macau (853)</option>
                                                            <option value="MKD">Macedonia (389)</option>
                                                            <option value="MDG">Madagascar (261)</option>
                                                            <option value="MWI">Malawi (265)</option>
                                                            <option value="MYS">Malaysia (60)</option>
                                                            <option value="MDV">Maldives (960)</option>
                                                            <option value="MLI">Mali (223)</option>
                                                            <option value="MLT">Malta (356)</option>
                                                            <option value="MHL">Marshall Islands (692)</option>
                                                            <option value="MTQ">Martinique (596)</option>
                                                            <option value="MRT">Mauritania (222)</option>
                                                            <option value="MUS">Mauritius (230)</option>
                                                            <option value="MYT">Mayotte (269)</option>
                                                            <option value="MEX">Mexico (52)</option>
                                                            <option value="FSM">Micronesia (691)</option>
                                                            <option value="MDA">Moldova (373)</option>
                                                            <option value="MCO">Monaco (377)</option>
                                                            <option value="MNG">Mongolia (976)</option>
                                                            <option value="MNE">Montenegro (382)</option>
                                                            <option value="MSR">Montserrat (1)</option>
                                                            <option value="MAR">Morocco (212)</option>
                                                            <option value="MOZ">Mozambique (258)</option>
                                                            <option value="MMR">Myanmar (95)</option>
                                                            <option value="NAM">Namibia (264)</option>
                                                            <option value="NRU">Nauru (674)</option>
                                                            <option value="NPL">Nepal (977)</option>
                                                            <option value="NLD">Netherlands (31)</option>
                                                            <option value="NCL">New Caledonia (687)</option>
                                                            <option value="NZL">New Zealand (64)</option>
                                                            <option value="NIC">Nicaragua (505)</option>
                                                            <option value="NER">Niger (227)</option>
                                                            <option value="NGA">Nigeria (234)</option>
                                                            <option value="NIU">Niue (683)</option>
                                                            <option value="NFK">Norfolk Island (672)</option>
                                                            <option value="MNP">
                                                                Northern Mariana Islands (1)
                                                            </option>
                                                            <option value="NOR">Norway (47)</option>
                                                            <option value="OMN">Oman (968)</option>
                                                            <option value="PAK">Pakistan (92)</option>
                                                            <option value="PLW">Palau (680)</option>
                                                            <option value="PAN">Panama (507)</option>
                                                            <option value="PNG">Papua New Guinea (675)</option>
                                                            <option value="PRY">Paraguay (595)</option>
                                                            <option value="PER">Peru (51)</option>
                                                            <option value="PHL">Philippines (63)</option>
                                                            <option value="PCN">Pitcairn Island (64)</option>
                                                            <option value="POL">Poland (48)</option>
                                                            <option value="PRT">Portugal (351)</option>
                                                            <option value="PRI">Puerto Rico (1)</option>
                                                            <option value="QAT">Qatar (974)</option>
                                                            <option value="COG">
                                                                Republic of the Congo (242)
                                                            </option>
                                                            <option value="REU">Reunion (262)</option>
                                                            <option value="ROU">Romania (40)</option>
                                                            <option value="RUS">Russia (7)</option>
                                                            <option value="RWA">Rwanda (250)</option>
                                                            <option value="WSM">Samoa (685)</option>
                                                            <option value="SMR">San Marino (378)</option>
                                                            <option value="STP">
                                                                São Tomé and Príncipe (239)
                                                            </option>
                                                            <option value="SAU">Saudi Arabia (966)</option>
                                                            <option value="SEN">Senegal (221)</option>
                                                            <option value="SRB">Serbia (381)</option>
                                                            <option value="SYC">Seychelles (248)</option>
                                                            <option value="SLE">Sierra Leone (232)</option>
                                                            <option value="SGP">Singapore (65)</option>
                                                            <option value="SXM">Sint Maarten (1)</option>
                                                            <option value="SVK">Slovakia (421)</option>
                                                            <option value="SVN">Slovenia (386)</option>
                                                            <option value="SLB">Solomon Islands (677)</option>
                                                            <option value="ZAF">South Africa (27)</option>
                                                            <option value="KOR">South Korea (82)</option>
                                                            <option value="ESP">Spain (34)</option>
                                                            <option value="LKA">Sri Lanka (94)</option>
                                                            <option value="BLM">St Barthélemy (590)</option>
                                                            <option value="SHN">St Helena (290)</option>
                                                            <option value="KNA">St Kitts and Nevis (1)</option>
                                                            <option value="LCA">St Lucia (1)</option>
                                                            <option value="MAF">St Martin (590)</option>
                                                            <option value="SPM">
                                                                St Pierre and Miquelon (508)
                                                            </option>
                                                            <option value="VCT">
                                                                St Vincent and the Grenadines (1)
                                                            </option>
                                                            <option value="SUR">Suriname (597)</option>
                                                            <option value="SJM">Svalbard (47)</option>
                                                            <option value="SWZ">Swaziland (268)</option>
                                                            <option value="SWE">Sweden (46)</option>
                                                            <option value="CHE">Switzerland (41)</option>
                                                            <option value="TWN">Taiwan (886)</option>
                                                            <option value="TJK">Tajikistan (992)</option>
                                                            <option value="TZA">Tanzania (255)</option>
                                                            <option value="THA">Thailand (66)</option>
                                                            <option value="TGO">Togo (228)</option>
                                                            <option value="TKL">Tokelau (690)</option>
                                                            <option value="TON">Tonga (676)</option>
                                                            <option value="TTO">Trinidad and Tobago (1)</option>
                                                            <option value="TUN">Tunisia (216)</option>
                                                            <option value="TUR">Turkey (90)</option>
                                                            <option value="TKM">Turkmenistan (993)</option>
                                                            <option value="TCA">Turks and Caicos (1)</option>
                                                            <option value="TUV">Tuvalu (688)</option>
                                                            <option value="UGA">Uganda (256)</option>
                                                            <option value="UKR">Ukraine (380)</option>
                                                            <option value="ARE">
                                                                United Arab Emirates (971)
                                                            </option>
                                                            <option value="GBR">United Kingdom (44)</option>
                                                            <option value="USA">
                                                                United States of America (1)
                                                            </option>
                                                            <option value="URY">Uruguay (598)</option>
                                                            <option value="VIR">US Virgin Islands (1)</option>
                                                            <option value="UZB">Uzbekistan (998)</option>
                                                            <option value="VUT">Vanuatu (678)</option>
                                                            <option value="VAT">Vatican City (39)</option>
                                                            <option value="VEN">Venezuela (58)</option>
                                                            <option value="VNM">Vietnam (84)</option>
                                                            <option value="WLF">Wallis and Futuna (681)</option>
                                                            <option value="PSE">West Bank and Gaza (970)</option>
                                                            <option value="ESH">Western Sahara (212)</option>
                                                            <option value="ZMB">Zambia (260)</option>
                                                            <option value="ZWE">Zimbabwe (263)</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-4 --> */}
                                            <div class="col-lg-8">
                                                <div class="input-box">
                                                    <label class="label-text">Street address</label>
                                                    <div class="form-group">
                                                        <span class="la la-map-marker form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="text"
                                                            placeholder="Building number and street name, example: 123 Main Street"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-8 --> */}
                                            <div class="col-lg-12">
                                                <div class="input-box">
                                                    <label class="label-text"
                                                    >Additional address information</label
                                                    >
                                                    <div class="form-group">
                                                        <span class="la la-map-marker form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="text"
                                                            placeholder="Suite number, intersection, plaza, square"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                        </form>
                                    </div>
                                    {/* <!-- end form-content --> */}
                                </div>
                                {/* <!-- end form-box --> */}
                                <div class="form-box">
                                    <div class="form-title-wrap">
                                        <h3 class="title">
                                            <i class="la la-map me-2 text-gray"></i>Map Location
                                        </h3>
                                    </div>
                                    {/* <!-- form-title-wrap --> */}
                                    <div class="form-content contact-form-action">
                                        <form method="post" class="row">
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Longitude</label>
                                                    <div class="form-group">
                                                        <span class="la la-map form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            id="longitude"
                                                            type="text"
                                                            placeholder="Map Longitude"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Latitude</label>
                                                    <div class="form-group">
                                                        <span class="la la-map form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            id="latitude"
                                                            type="text"
                                                            placeholder="Map Latitude"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-12">
                                                <div class="input-box">
                                                    <label class="label-text"
                                                    >For precise location, drag the blue marker on the
                                                        map.</label
                                                    >
                                                    <div class="form-group map-container">
                                                        <div
                                                            id="singleMap"
                                                            class="drag-map"
                                                            data-latitude="40.7427837"
                                                            data-longitude="-73.11445617675781"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                            <div class="col-lg-12">
                                                <label class="label-text"
                                                >Or enter Coordinates (longitude and latitude)
                                                    Manually.</label
                                                >
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Longitude</label>
                                                    <div class="form-group">
                                                        <span class="la la-map form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="40.731444531797315"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Latitude</label>
                                                    <div class="form-group">
                                                        <span class="la la-map form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="40.731444531797315"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-12">
                                                <div class="btn-box">
                                                    <button type="button" class="theme-btn theme-btn-small">
                                                        Find on Map
                                                    </button>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                        </form>
                                    </div>
                                    {/* <!-- end form-content --> */}
                                </div>
                                {/* <!-- end form-box --> */}
                                <div class="form-box">
                                    <div class="form-title-wrap">
                                        <h3 class="title">
                                            <i class="la la-user me-2 text-gray"></i>Contact Details
                                        </h3>
                                    </div>
                                    {/* <!-- form-title-wrap --> */}
                                    <div class="form-content contact-form-action">
                                        <form method="post" class="row">
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Phone</label>
                                                    <div class="form-group">
                                                        <span class="la la-phone form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="+1(1)8547632521"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Fax</label>
                                                    <div class="form-group">
                                                        <span class="la la-print form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="+1(1)1147521433"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Email</label>
                                                    <div class="form-group">
                                                        <span class="la la-envelope-o form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="Email for customer inquiries"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Your Website Address</label>
                                                    <div class="form-group">
                                                        <span class="la la-globe form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
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
                                                            placeholder="https://www.twitter.com/"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Linkedin Page</label>
                                                    <div class="form-group">
                                                        <span class="la la-linkedin form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            placeholder="https://www.linkedin.com/"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                        </form>
                                    </div>
                                    {/* <!-- end form-content --> */}
                                </div>
                                {/* <!-- end form-box --> */}
                                <div class="form-box">
                                    <div class="form-title-wrap">
                                        <h3 class="title">
                                            <i class="la la-building-o me-2 text-gray"></i>Information
                                            about your accommodation
                                        </h3>
                                    </div>
                                    {/* <!-- form-title-wrap --> */}
                                    <div class="form-content contact-form-action">
                                        <form method="post" class="row">
                                            <div class="col-lg-12">
                                                <div class="input-box">
                                                    <label class="label-text"
                                                    >Total number of rooms & suites</label
                                                    >
                                                    <div class="form-group">
                                                        <span class="la la-pencil form-icon"></span>
                                                        <input
                                                            class="form-control"
                                                            type="text"
                                                            name="text"
                                                            placeholder="Total number of rooms & suites"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Price range (per night)</label>
                                                    <div class="form-group d-flex align-items-center">
                                                        <input
                                                            class="form-control ps-3"
                                                            type="text"
                                                            name="text"
                                                            placeholder="Min"
                                                        />
                                                        <span class="px-2">to</span>
                                                        <input
                                                            class="form-control ps-3"
                                                            type="text"
                                                            name="text"
                                                            placeholder="Max"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text">Select a currency</label>
                                                    <div
                                                        class="form-group select2-container-wrapper select-contain w-100"
                                                    >
                                                        <select class="select-contain-select">
                                                            <option value="">--Select a currency--</option>
                                                            <option value="USD">USD U.S. Dollars</option>
                                                            <option value="GBP">GBP British Pounds</option>
                                                            <option value="EUR">EUR Euros</option>
                                                            <option value="CAD">CAD Canadian Dollars</option>
                                                            <option value="CHF">CHF Swiss Francs</option>
                                                            <option value="AUD">AUD Australian Dollars</option>
                                                            <option value="JPY">JPY Japanese Yen</option>
                                                            <option value="CNY">CNY Chinese Yuan</option>
                                                            <option value="INR">INR Indian Rupees</option>
                                                            <option value="SEK">SEK Swedish Krona</option>
                                                            <option value="BRL">BRL Brazilian Real</option>
                                                            <option value="TRY">TRY Turkish Lira</option>
                                                            <option value="">---------------------------</option>
                                                            <option value="AED">AED UAE Dirham</option>
                                                            <option value="AFN">AFN Afghan Afghanis</option>
                                                            <option value="ALL">ALL Albanian Lek</option>
                                                            <option value="AMD">AMD Armenian Dram</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-12">
                                                <div class="input-box">
                                                    <label class="label-text mb-0 line-height-20"
                                                    >Description of your accommodation</label
                                                    >
                                                    <p class="font-size-13 mb-3 line-height-20">
                                                        400 character limit
                                                    </p>
                                                    <div class="form-group">
                                                        <span class="la la-pencil form-icon"></span>
                                                        <textarea
                                                            class="message-control form-control"
                                                            name="message"
                                                            placeholder="In English only, no HTML, no web or email address, no ALL CAPS           "
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                            <div class="col-lg-12">
                                                <div class="input-box">
                                                    <label class="label-text mb-0 line-height-20"
                                                    >Additional Description</label
                                                    >
                                                    <p class="font-size-13 mb-3 line-height-20">
                                                        400 character limit
                                                    </p>
                                                    <div
                                                        class="form-group select2-container-wrapper select-contain w-100"
                                                    >
                                                        <select class="select-contain-select">
                                                            <option value="">--Select a language--</option>
                                                            <option value="ar">Arabic</option>
                                                            <option value="zh">Chinese</option>
                                                            <option value="cs">Czech</option>
                                                            <option value="da">Danish</option>
                                                            <option value="nl">Dutch</option>
                                                            <option value="fi">Finnish</option>
                                                            <option value="fr">French</option>
                                                            <option value="de">German</option>
                                                            <option value="el">Greek</option>
                                                            <option value="iw">Hebrew</option>
                                                            <option value="hu">Hungarian</option>
                                                            <option value="in">Indonesian</option>
                                                            <option value="it">Italian</option>
                                                            <option value="ja">Japanese</option>
                                                            <option value="ko">Korean</option>
                                                            <option value="no">Norwegian</option>
                                                            <option value="pl">Polish</option>
                                                            <option value="pt">Portuguese</option>
                                                            <option value="ru">Russian</option>
                                                            <option value="sr">Serbian</option>
                                                            <option value="sk">Slovak</option>
                                                            <option value="es">Spanish</option>
                                                            <option value="sv">Swedish</option>
                                                            <option value="th">Thai</option>
                                                            <option value="tr">Turkish</option>
                                                            <option value="vi">Vietnamese</option>
                                                        </select>
                                                    </div>
                                                    <div class="form-group">
                                                        <span class="la la-pencil form-icon"></span>
                                                        <textarea
                                                            class="message-control form-control"
                                                            name="message"
                                                            placeholder="No HTML, no web or email address, no ALL CAPS           "
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text text-color-6"
                                                    >Minimum stay* (not including holidays)</label
                                                    >
                                                    <div class="form-group d-flex align-items-center">
                                                        <label
                                                            for="radio-1"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-1" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>3 nights or less</span>
                                                        </label>
                                                        <label
                                                            for="radio-2"
                                                            class="radio-trigger mb-0 font-size-14"
                                                        >
                                                            <input type="radio" id="radio-2" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>More than 3 nights</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text text-color-6">Security *</label>
                                                    <div class="form-group d-flex align-items-center">
                                                        <label
                                                            for="radio-3"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-3" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>On site</span>
                                                        </label>
                                                        <label
                                                            for="radio-4"
                                                            class="radio-trigger mb-0 font-size-14"
                                                        >
                                                            <input type="radio" id="radio-4" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>None</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text text-color-6"
                                                    >On site staff *</label
                                                    >
                                                    <div class="form-group d-flex align-items-center">
                                                        <label
                                                            for="radio-5"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-5" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>Yes</span>
                                                        </label>
                                                        <label
                                                            for="radio-6"
                                                            class="radio-trigger mb-0 font-size-14"
                                                        >
                                                            <input type="radio" id="radio-6" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>No</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text text-color-6"
                                                    >Housekeeping *</label
                                                    >
                                                    <div class="form-group d-flex align-items-center">
                                                        <label
                                                            for="radio-7"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-7" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>Included in room rate</span>
                                                        </label>
                                                        <label
                                                            for="radio-8"
                                                            class="radio-trigger mb-0 font-size-14"
                                                        >
                                                            <input type="radio" id="radio-8" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>Additional Fee</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text text-color-6"
                                                    >Housekeeping frequency *</label
                                                    >
                                                    <div class="form-group d-flex align-items-center">
                                                        <label
                                                            for="radio-9"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-9" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>Daily</span>
                                                        </label>
                                                        <label
                                                            for="radio-10"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-10" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>Weekly</span>
                                                        </label>
                                                        <label
                                                            for="radio-11"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-11" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>Bi-weekly</span>
                                                        </label>
                                                        <label
                                                            for="radio-12"
                                                            class="radio-trigger mb-0 font-size-14"
                                                        >
                                                            <input type="radio" id="radio-12" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>None</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text text-color-6"
                                                    >Front desk *</label
                                                    >
                                                    <div class="form-group d-flex align-items-center">
                                                        <label
                                                            for="radio-13"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-13" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>24-hour staffing</span>
                                                        </label>
                                                        <label
                                                            for="radio-14"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-14" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>Limited hours staffing</span>
                                                        </label>
                                                        <label
                                                            for="radio-15"
                                                            class="radio-trigger mb-0 font-size-14"
                                                        >
                                                            <input type="radio" id="radio-15" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>None</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="input-box">
                                                    <label class="label-text text-color-6">Bathroom *</label>
                                                    <div class="form-group d-flex align-items-center">
                                                        <label
                                                            for="radio-16"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-16" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>All en suite</span>
                                                        </label>
                                                        <label
                                                            for="radio-17"
                                                            class="radio-trigger mb-0 font-size-14 me-3"
                                                        >
                                                            <input type="radio" id="radio-17" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>Some en suite</span>
                                                        </label>
                                                        <label
                                                            for="radio-18"
                                                            class="radio-trigger mb-0 font-size-14"
                                                        >
                                                            <input type="radio" id="radio-18" name="radio" />
                                                            <span class="checkmark"></span>
                                                            <span>Shared</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                        </form>
                                    </div>
                                    {/* <!-- end form-content --> */}
                                </div>
                                {/* <!-- end form-box --> */}
                                <div class="form-box">
                                    <div class="form-title-wrap">
                                        <h3 class="title">
                                            <i class="la la-gear me-2 text-gray"></i>Amenities
                                        </h3>
                                    </div>
                                    {/* <!-- form-title-wrap --> */}
                                    <div class="form-content contact-form-action">
                                        <form method="post" class="row">
                                            <div class="col-lg-6">
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="AirportTransportation"
                                                    />
                                                    <label for="AirportTransportation"
                                                    >Airport Transportation</label
                                                    >
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="BarLounge"
                                                    />
                                                    <label for="BarLounge">Bar / Lounge</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="Beach"
                                                    />
                                                    <label for="Beach">Beach</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="BeverageSelection"
                                                    />
                                                    <label for="BeverageSelection">Beverage Selection</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="SwimmingPool"
                                                    />
                                                    <label for="SwimmingPool">Swimming Pool</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="WIFI"
                                                    />
                                                    <label for="WIFI">WI-FI</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="Coffee"
                                                    />
                                                    <label for="Coffee">Coffee</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="AirConditioning"
                                                    />
                                                    <label for="AirConditioning">Air Conditioning</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="Entertainment"
                                                    />
                                                    <label for="Entertainment">Entertainment</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="ElevatorInBuilding"
                                                    />
                                                    <label for="ElevatorInBuilding"
                                                    >Elevator In Building</label
                                                    >
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                            <div class="col-lg-6">
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="WheelchairAccess"
                                                    />
                                                    <label for="WheelchairAccess">Wheelchair access</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="FitnessFacility"
                                                    />
                                                    <label for="FitnessFacility">Fitness Facility</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="Breakfast"
                                                    />
                                                    <label for="Breakfast">Breakfast</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="HandicapAccessible"
                                                    />
                                                    <label for="HandicapAccessible"
                                                    >Handicap Accessible</label
                                                    >
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="PetsAllowed"
                                                    />
                                                    <label for="PetsAllowed">Pets Allowed</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="SuitableForEvents"
                                                    />
                                                    <label for="SuitableForEvents">Suitable For Events</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="Restaurant"
                                                    />
                                                    <label for="Restaurant">Restaurant</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="Doorman"
                                                    />
                                                    <label for="Doorman">Doorman</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="FreeParking"
                                                    />
                                                    <label for="FreeParking">Free Parking</label>
                                                </div>
                                                <div class="custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        class="form-check-input"
                                                        id="WineBar"
                                                    />
                                                    <label for="WineBar">Wine Bar</label>
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-6 --> */}
                                        </form>
                                    </div>
                                    {/* <!-- end form-content --> */}
                                </div>
                                {/* <!-- end form-box --> */}
                                <div class="form-box">
                                    <div class="form-title-wrap">
                                        <h3 class="title">
                                            <i class="la la-photo me-2 text-gray"></i>Choose a photo to
                                            represent this listing
                                        </h3>
                                    </div>
                                    {/* <!-- form-title-wrap --> */}
                                    <div class="form-content contact-form-action">
                                        <form method="post" class="row">
                                            <div class="col-lg-12">
                                                <div class="file-upload-wrap">
                                                    <input
                                                        type="file"
                                                        name="files[]"
                                                        class="multi file-upload-input with-preview"
                                                        multiple
                                                        maxlength="3"
                                                    />
                                                    <span class="file-upload-text"
                                                    ><i class="la la-upload me-2"></i>Click or drag images
                                                        here to upload</span
                                                    >
                                                </div>
                                            </div>
                                            {/* <!-- end col-lg-12 --> */}
                                        </form>
                                    </div>
                                    {/* <!-- end form-content --> */}
                                </div>
                                {/* <!-- end form-box --> */}
                                <div class="submit-box">
                                    <h3 class="title pb-3">Submit this listing</h3>
                                    <div class="custom-checkbox">
                                        <input type="checkbox" class="form-check-input" id="agreeChb" />
                                        <label for="agreeChb"
                                        >Check this box to certify that you are an official
                                            representative of the property for which you are submitting
                                            this listing and that the information you have submitted is
                                            correct. In submitting a photo, you also certify that you have
                                            the right to use the photo on the web and agree to hold Trizen
                                            harmless for any and all copyright issues arising from your
                                            use of the image.</label
                                        >
                                    </div>
                                    <div class="btn-box pt-3">
                                        <button type="submit" class="theme-btn">
                                            Submit Listing <i class="la la-arrow-right ms-1"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <!-- end submit-box --> */}
                            </div>
                            {/* <!-- end col-lg-9 --> */}
                        </div>
                        {/* <!-- end row --> */}
                    </div>
                    {/* <!-- end container --> */}
                </section>
                {/* <!-- end listing-form --> */}
                {/* <!-- ================================
        END FORM AREA
    ================================= --> */}
            </section>
        </>
    )
}

export default EditHotel