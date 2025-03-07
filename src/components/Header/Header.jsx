import React from 'react'

const Header = () => {
    return (
        <>
            {/* START HEADER AREA */}
            <header class="header-area">
                <div class="header-top-bar padding-right-100px padding-left-100px">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="header-top-content">
                                    <div class="header-left">
                                        <ul class="list-items">
                                            <li>
                                                <a href="#"
                                                ><i class="la la-phone me-1"></i>(123) 123-456</a
                                                >
                                            </li>
                                            <li>
                                                <a href="#"
                                                ><i class="la la-envelope me-1"></i
                                                >trizen@example.com</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="header-top-content">
                                    <div
                                        class="header-right d-flex align-items-center justify-content-end"
                                    >
                                        <div class="header-right-action">
                                            <div class="select-contain select--contain w-auto">
                                                <select class="select-contain-select">
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-id me-1"></span> Bahasa Indonesia'
                                                    >
                                                        Bahasa Indonesia
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-de me-1"></span> Deutsch'
                                                    >
                                                        Deutsch
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-us me-1"></span> English(US)'
                                                        selected
                                                    >
                                                        English US
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-gb-eng me-1"></span> English(UK)'
                                                    >
                                                        English UK
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-ro me-1"></span> Romanian'
                                                    >
                                                        Romanian
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-es me-1"></span> Español'
                                                    >
                                                        Español
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-fr me-1"></span> Francais'
                                                    >
                                                        Francais
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-it me-1"></span> Italiano'
                                                    >
                                                        Italiano
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-pl me-1"></span> Polski'
                                                    >
                                                        Polski
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-pt me-1"></span> Portuguese'
                                                    >
                                                        Portuguese
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-tr me-1"></span> Turkish'
                                                    >
                                                        Turkish
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-ru me-1"></span> Russian'
                                                    >
                                                        Russian
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-jp me-1"></span> Japanese'
                                                    >
                                                        Japanese
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-cn me-1"></span> Mandarin'
                                                    >
                                                        Mandarin
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-tw me-1"></span> Mandarin Chinese'
                                                    >
                                                        Mandarin Chinese
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-kr me-1"></span> Korean'
                                                    >
                                                        Korean
                                                    </option>
                                                    <option
                                                        data-content='<span class="flag-icon flag-icon-in me-1"></span> Hindi'
                                                    >
                                                        Hindi
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="header-right-action">
                                            <div class="select-contain select--contain w-auto">
                                                <select class="select-contain-select">
                                                    <option value="1">AED</option>
                                                    <option value="2">AUD</option>
                                                    <option value="3">BRL</option>
                                                    <option value="4">CAD</option>
                                                    <option value="5">CHF</option>
                                                    <option value="6">CNY</option>
                                                    <option value="7">EUR</option>
                                                    <option value="8">GBP</option>
                                                    <option value="9">HKD</option>
                                                    <option value="10">IDR</option>
                                                    <option value="11">INR</option>
                                                    <option value="12">JPY</option>
                                                    <option value="13">KRW</option>
                                                    <option value="14">MYR</option>
                                                    <option value="15">NZD</option>
                                                    <option value="16">PHP</option>
                                                    <option value="17">PLN</option>
                                                    <option value="18">RUB</option>
                                                    <option value="19">SAR</option>
                                                    <option value="20">SGD</option>
                                                    <option value="21">THB</option>
                                                    <option value="22">TRY</option>
                                                    <option value="23">TWD</option>
                                                    <option value="24" selected>USD</option>
                                                    <option value="25">VND</option>
                                                    <option value="26">MXN</option>
                                                    <option value="27">ARS</option>
                                                    <option value="28">INR</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="header-right-action">
                                            <a
                                                href="#"
                                                class="theme-btn theme-btn-small theme-btn-transparent me-1"
                                                data-bs-toggle="modal"
                                                data-bs-target="#signupPopupForm"
                                            >Sign Up</a
                                            >
                                            <a
                                                href="#"
                                                class="theme-btn theme-btn-small"
                                                data-bs-toggle="modal"
                                                data-bs-target="#loginPopupForm"
                                            >Login</a
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*end header-menu-wrapper*/}
            </header>
            { /*END HEADER AREA */}
        </>
    )
}

export default Header