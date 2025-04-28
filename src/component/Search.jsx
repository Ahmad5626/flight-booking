import React from 'react'

const Search = () => {
  const handlePassenger=()=>{
    const pass=document.getElementById('passenger')
    pass.classList.toggle('d-none')
  }
  const handlePassenger2=()=>{
    const pass=document.getElementById('passenger-2')
    pass.classList.toggle('d-none')
  }
  return (
    <div>
      <section className="booking mb-20">
      <div className="container-fluid">
        <div className="content">
          <div className="card">
            <div className="card-header">
              <ul className="nav nav-tabs card-header-tabs" data-bs-tabs="tabs">
                <li className="nav-item">
                  <a
                    href="#flight"
                    className="cus-btn primary active"
                    aria-current="true"
                    data-bs-toggle="tab"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_502_1331)">
                        <path
                          d="M31.6933 0.544584C30.6572 -0.491824 27.1402 1.34503 26.1041 2.38143L21.9545 6.53127H3.07887C2.63024 6.53127 2.24462 6.85011 2.16055 7.29104C2.07669 7.73189 2.31798 8.16995 2.73524 8.3348L15.2174 13.2677L7.5633 20.9216H0.323909C0.168651 20.9221 0.0346723 21.0323 0.00576263 21.1852C-0.023357 21.3385 0.060152 21.4901 0.20498 21.5471L6.29687 23.9548C6.33201 24.1078 6.38108 24.2574 6.44394 24.4038L6.17745 24.6709C5.79778 25.0503 5.79778 25.6651 6.17745 26.045C6.55664 26.4247 7.17263 26.4247 7.55182 26.045L7.81194 25.785C7.95935 25.8501 8.11132 25.9014 8.26623 25.9382L10.6144 31.9561C10.6709 32.1013 10.8229 32.1851 10.976 32.1568C11.0419 32.145 11.1002 32.1123 11.1451 32.0673C11.2044 32.0087 11.2399 31.9274 11.2399 31.8382V24.7512L19.0155 16.976L23.9019 29.4993C24.0654 29.9177 24.5037 30.1608 24.9452 30.0781C25.136 30.0421 25.3038 29.9498 25.4333 29.8212C25.6038 29.6499 25.7071 29.4151 25.7077 29.1591V10.284L29.8573 6.13423C30.893 5.09789 32.7293 1.58085 31.6933 0.544584Z"
                          fill="#16191A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_502_1331">
                          <rect width={32} height={32} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Flights
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#hotel"
                    className="cus-btn primary "
                    aria-current="false"
                    data-bs-toggle="tab"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={32}
                      height={32}
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_502_1334)">
                        <path
                          d="M10.7589 9.00703H12.6339V10.882H10.7589V9.00703Z"
                          fill="#16191A"
                        />
                        <path
                          d="M10.7589 13.3106H12.6339V15.1856H10.7589V13.3106Z"
                          fill="#16191A"
                        />
                        <path
                          d="M19.3661 13.3106H21.2411V15.1856H19.3661V13.3106Z"
                          fill="#16191A"
                        />
                        <path
                          d="M23.6696 13.3106H25.5446V15.1856H23.6696V13.3106Z"
                          fill="#16191A"
                        />
                        <path
                          d="M19.3661 17.6142H21.2411V19.4892H19.3661V17.6142Z"
                          fill="#16191A"
                        />
                        <path
                          d="M23.6696 17.6142H25.5446V19.4892H23.6696V17.6142Z"
                          fill="#16191A"
                        />
                        <path
                          d="M19.3661 21.9178H21.2411V23.7928H19.3661V21.9178Z"
                          fill="#16191A"
                        />
                        <path
                          d="M23.6696 21.9178H25.5446V23.7928H23.6696V21.9178Z"
                          fill="#16191A"
                        />
                        <path
                          d="M19.3661 26.2213H21.2411V28.0963H19.3661V26.2213Z"
                          fill="#16191A"
                        />
                        <path
                          d="M23.6696 26.2213H25.5446V28.0963H23.6696V26.2213Z"
                          fill="#16191A"
                        />
                        <path
                          d="M6.45538 13.3106H8.33037V15.1856H6.45538V13.3106Z"
                          fill="#16191A"
                        />
                        <path
                          d="M10.7589 17.6142H12.6339V19.4892H10.7589V17.6142Z"
                          fill="#16191A"
                        />
                        <path
                          d="M6.45538 17.6142H8.33037V19.4892H6.45538V17.6142Z"
                          fill="#16191A"
                        />
                        <path
                          d="M10.7589 21.9178H12.6339V23.7928H10.7589V21.9178Z"
                          fill="#16191A"
                        />
                        <path
                          d="M6.45538 21.9178H8.33037V23.7928H6.45538V21.9178Z"
                          fill="#16191A"
                        />
                        <path
                          d="M29.8482 30.5249V9.00703H16.9375V4.53428L14.7857 4.8929V0.399902H4.30356V6.63997L2.15181 6.99859V30.5249H0V32.3999H32V30.5249H29.8482ZM27.9732 10.882V30.5249H16.9375V10.882H27.9732ZM6.17856 2.2749H12.9107V5.2054L6.17856 6.32747V2.2749ZM4.02681 8.58696L15.0625 6.74765V30.5249H12.6339V26.2213H6.45538V30.5249H4.02681V8.58696ZM10.7589 30.5249H8.33037V28.0963H10.7589V30.5249Z"
                          fill="#16191A"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_502_1334">
                          <rect width={32} height={32} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    Hotel
                  </a>
                </li>
                
              </ul>
            </div>
            <div className="card-body tab-content">
              <div className="tab-pane fade show active" id="flight">
                <div className="card">
                 
                  <div className="card-body tab-content">
                    {/* StopOver tab Start */}
                    <div className="tab-pane fade show active" id="stopover">
                      <form
                        action="https://uiparadox.co.uk/templates/flynow/v3/flight-listing.html"
                        method="post"
                      >
                        
                        <div className="booking-info mb-32">
                          <div className="d-xl-flex align-items-center gap-24 d-lg-block d-flex">
                            <div className="custom-sel-input-block">
                              <label
                                htmlFor="flightFrom"
                                className="h6 color-medium-gray"
                              >
                                From
                              </label>
                              <input
                                type="text"
                                className="sel-input auto-input"
                                id="flightFrom"
                                placeholder="From"
                              />
                              <div className="slector-wrapper" />
                            </div>
                            <div className="arrows">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <g clipPath="url(#clip0_518_2277)">
                                  <path
                                    d="M23.6804 6.07409L18.2259 0.619583C17.7999 0.193537 17.1092 0.193537 16.6831 0.619583C16.2571 1.04563 16.2571 1.73628 16.6831 2.16233L20.2754 5.75464H1.09096C0.488472 5.75464 3.51626e-05 6.24307 3.51626e-05 6.84556C3.51626e-05 7.44804 0.488472 7.93648 1.09096 7.93648H20.2754L16.6832 11.5287C16.2571 11.9548 16.2571 12.6455 16.6832 13.0715C16.8961 13.2845 17.1753 13.391 17.4545 13.391C17.7337 13.391 18.0129 13.2845 18.2258 13.0714L23.6804 7.61688C24.1064 7.19084 24.1064 6.50013 23.6804 6.07409Z"
                                    fill="#4D73FC"
                                  />
                                  <path
                                    d="M22.9091 16.6637H3.72462L7.31683 13.0714C7.74288 12.6453 7.74288 11.9547 7.31683 11.5286C6.89088 11.1026 6.20013 11.1026 5.77409 11.5286L0.319535 16.9831C-0.106512 17.4092 -0.106512 18.0998 0.319535 18.5259L5.77404 23.9804C5.98713 24.1935 6.26627 24.3 6.54546 24.3C6.82465 24.3 7.10388 24.1935 7.31679 23.9804C7.74283 23.5544 7.74283 22.8637 7.31679 22.4377L3.72457 18.8455H22.9091C23.5116 18.8455 24 18.357 24 17.7546C24 17.1521 23.5116 16.6637 22.9091 16.6637Z"
                                    fill="#4D73FC"
                                  />
                                </g>
                                <defs>
                                  <clipPath id="clip0_518_2277">
                                    <rect width={24} height={24} fill="white" />
                                  </clipPath>
                                </defs>
                              </svg>
                            </div>
                            <div className="custom-sel-input-block">
                              <label
                                htmlFor="flightTo"
                                className="h6 color-medium-gray"
                              >
                                To
                              </label>
                              <input
                                type="text"
                                className="sel-input auto-input"
                                id="flightTo"
                                placeholder="To"
                              />
                              <div className="slector-wrapper" />
                            </div>
                            <div className="vertical-line d-xl-block d-none" />
                          </div>
                          <div className="d-xl-flex align-items-center gap-24 d-lg-block ">
                            <div className="input-date-picker">
                              <label
                                htmlFor="flightDep"
                                className="h6 color-medium-gray"
                              >
                                Departing
                              </label>
                              <input
                                type="date"
                                className="sel-input date_from"
                                id="flightDep"
                                placeholder="Aug 18, 2023"
                              />
                            </div>
                            <div className="input-date-picker">
                              <label
                                htmlFor="flightTime"
                                className="h6 color-medium-gray"
                              >
                                Returning
                              </label>
                              <input
                                type="date"
                                className="sel-input date_to"
                                id="flightTime"
                                placeholder="Aug 20, 2023"
                              />
                            </div>
                            <div className="custom-sel-input-block ">
                              <div className="h6 color-medium-gray mb-2">
                                Passengers and Class
                              </div>
                              <div className="seat-booking color-black" onClick={handlePassenger}>
                                {" "}
                                <span className="total-pasenger">2</span>{" "}
                                Passengers /{" "}
                                <span className="pasenger-class">Business</span>
                              </div>
                              <div className="passenger-area pessenger-box bg-white light-shadow br-5 p-24 d-none" id="passenger">
                                <h4 className="color-black mb-32">Passenger</h4>
                                <div className="passenger-box mb-24">
                                  <div className="row">
                                    <div className="col-md-7 col-sm-6 col-6">
                                      <div className="content-box">
                                        <h5 className="lightest-black">
                                          Adult
                                        </h5>
                                        <p className="color-medium-gray light">
                                          {" "}
                                          Above 12 years.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-5 col-sm-6 col-6">
                                      <div className="quantity quantity-wrap">
                                        <input
                                          className="decrement"
                                          type="button"
                                          defaultValue="-"
                                        />
                                        <input
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                          maxLength={2}
                                          size={1}
                                          id="adult"
                                          className="number"
                                        />
                                        <input
                                          className="increment"
                                          type="button"
                                          defaultValue="+"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="passenger-box mb-24">
                                  <div className="row">
                                    <div className="col-md-7 col-sm-6 col-6">
                                      <div className="content-box">
                                        <h5 className="lightest-black">
                                          Child
                                        </h5>
                                        <p className="color-medium-gray light">
                                          {" "}
                                          2-11 years on travel date.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-5 col-sm-6 col-6">
                                      <div className="quantity quantity-wrap">
                                        <input
                                          className="decrement"
                                          type="button"
                                          defaultValue="-"
                                        />
                                        <input
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                          maxLength={2}
                                          size={1}
                                          id="child"
                                          className="number"
                                        />
                                        <input
                                          className="increment"
                                          type="button"
                                          defaultValue="+"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="passenger-box mb-32">
                                  <div className="row">
                                    <div className="col-md-7 col-sm-6 col-6">
                                      <div className="content-box">
                                        <h5 className="lightest-black">
                                          Infant
                                        </h5>
                                        <p className="color-medium-gray light">
                                          {" "}
                                          Below 2 years.
                                        </p>
                                      </div>
                                    </div>
                                    <div className="col-md-5 col-sm-6 col-6">
                                      <div className="quantity quantity-wrap">
                                        <input
                                          className="decrement"
                                          type="button"
                                          defaultValue="-"
                                        />
                                        <input
                                          type="text"
                                          name="quantity"
                                          defaultValue={0}
                                          maxLength={2}
                                          size={1}
                                          id="infant"
                                          className="number"
                                        />
                                        <input
                                          className="increment"
                                          type="button"
                                          defaultValue="+"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <p className="color-medium-gray light mb-32">
                                  Please note: You can book for a maximum of
                                  nine passengers.
                                </p>
                                {/* <h4 className="color-black mb-32">
                                  Travel Class
                                </h4>
                                <div className="radio-tile-group">
                                  <div className="input-container">
                                    <input
                                      id="economy"
                                      className="radio-button"
                                      type="radio"
                                      name="radio"
                                      defaultValue="Economy"
                                    />
                                    <div className="radio-tile">
                                      <label
                                        htmlFor="economy"
                                        className="radio-tile-label"
                                      >
                                        Economy
                                      </label>
                                    </div>
                                  </div>
                                  <div className="input-container">
                                    <input
                                      id="business"
                                      className="radio-button"
                                      type="radio"
                                      name="radio"
                                      defaultValue="Business"
                                    />
                                    <div className="radio-tile">
                                      <label
                                        htmlFor="business"
                                        className="radio-tile-label"
                                      >
                                        Business
                                      </label>
                                    </div>
                                  </div>
                                  <div className="input-container">
                                    <input
                                      id="firstClass"
                                      className="radio-button"
                                      type="radio"
                                      name="radio"
                                      defaultValue="First Class"
                                    />
                                    <div className="radio-tile">
                                      <label
                                        htmlFor="firstClass"
                                        className="radio-tile-label"
                                      >
                                        First Class
                                      </label>
                                    </div>
                                  </div>
                                  <div className="input-container">
                                    <input
                                      id="pre-eco"
                                      className="radio-button"
                                      type="radio"
                                      name="radio"
                                      defaultValue="Premium Economy"
                                    />
                                    <div className="radio-tile">
                                      <label
                                        htmlFor="pre-eco"
                                        className="radio-tile-label"
                                      >
                                        Premium Economy
                                      </label>
                                    </div>
                                  </div>
                                </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center">
                        
                       
                          <div className="col-xl-4 col-lg-6 col-md-6 col-sm-9">
                            <div className="row align-items-center">
                              
                              <div className="col-sm-6">
                                <button type="submit" className="cus-btn">
                                  Show Flight
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_502_1331)">
                                      <path
                                        d="M31.6933 0.544584C30.6572 -0.491824 27.1402 1.34503 26.1041 2.38143L21.9545 6.53127H3.07887C2.63024 6.53127 2.24462 6.85011 2.16055 7.29104C2.07669 7.73189 2.31798 8.16995 2.73524 8.3348L15.2174 13.2677L7.5633 20.9216H0.323909C0.168651 20.9221 0.0346723 21.0323 0.00576263 21.1852C-0.023357 21.3385 0.060152 21.4901 0.20498 21.5471L6.29687 23.9548C6.33201 24.1078 6.38108 24.2574 6.44394 24.4038L6.17745 24.6709C5.79778 25.0503 5.79778 25.6651 6.17745 26.045C6.55664 26.4247 7.17263 26.4247 7.55182 26.045L7.81194 25.785C7.95935 25.8501 8.11132 25.9014 8.26623 25.9382L10.6144 31.9561C10.6709 32.1013 10.8229 32.1851 10.976 32.1568C11.0419 32.145 11.1002 32.1123 11.1451 32.0673C11.2044 32.0087 11.2399 31.9274 11.2399 31.8382V24.7512L19.0155 16.976L23.9019 29.4993C24.0654 29.9177 24.5037 30.1608 24.9452 30.0781C25.136 30.0421 25.3038 29.9498 25.4333 29.8212C25.6038 29.6499 25.7071 29.4151 25.7077 29.1591V10.284L29.8573 6.13423C30.893 5.09789 32.7293 1.58085 31.6933 0.544584Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_502_1351">
                                        <rect
                                          width={32}
                                          height={32}
                                          fill="black"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    {/* StopOver tab End */}
                    {/* Manage tab Start */}
                    <div className="tab-pane fade" id="manage">
                      <div className="booking-bar">
                        <ul className="nav nav-tabs " data-bs-tabs="tabs">
                          <li className="nav-item">
                            <a
                              href="#manageBooking"
                              className="nav-link active"
                              aria-current="true"
                              data-bs-toggle="tab"
                            >
                              Manage Booking
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#checkIn"
                              className="nav-link "
                              aria-current="false"
                              data-bs-toggle="tab"
                            >
                              Check in
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="manageBooking"
                        >
                          <form
                            action="https://uiparadox.co.uk/templates/flynow/v3/flight-booking.html"
                            method="post"
                          >
                            <div className="row align-items-center">
                              <div className="col-xl-10 col-lg-10 col-md-10">
                                <div className="booking-info d-block">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                      <div className="custom-sel-input-block v-2">
                                        <input
                                          type="text"
                                          className="sel-input"
                                          name="reference"
                                          id="ref-name"
                                          placeholder="Booking Reference"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                      <div className="custom-sel-input-block m-0">
                                        <input
                                          type="text"
                                          className="sel-input"
                                          name="name"
                                          id="last-name"
                                          placeholder="Last Name"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 col-lg-2 col-md-2 mt-md-0 mt-32">
                                <button type="submit" className="cus-btn">
                                  Check Booking
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="tab-pane fade" id="checkIn">
                          <form
                            action="https://uiparadox.co.uk/templates/flynow/v3/flight-booking.html"
                            method="post"
                          >
                            <div className="row align-items-center">
                              <div className="col-xl-10 col-lg-10 col-md-10">
                                <div className="booking-info d-block">
                                  <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                      <div className="custom-sel-input-block v-2 m-0">
                                        <input
                                          type="text"
                                          className="sel-input"
                                          name="reference"
                                          id="refNname"
                                          placeholder="Booking Reference"
                                        />
                                      </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                      <div className="custom-sel-input-block m-0">
                                        <input
                                          type="text"
                                          className="sel-input"
                                          name="name"
                                          id="lasName"
                                          placeholder="Last Name"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 col-lg-2 col-md-2 mt-md-0 mt-32">
                                <button type="submit" className="cus-btn">
                                  Check Booking
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* Manage tab End */}
                    {/* Flight Status tab Start */}
                    <div className="tab-pane fade" id="status">
                      <div className="booking-bar">
                        <ul className="nav nav-tabs " data-bs-tabs="tabs">
                          <li className="nav-item">
                            <a
                              href="#byRoute"
                              className="nav-link active"
                              aria-current="true"
                              data-bs-toggle="tab"
                            >
                              By Route
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              href="#flightNo"
                              className="nav-link "
                              aria-current="false"
                              data-bs-toggle="tab"
                            >
                              By flight Number
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="card-body tab-content">
                        <div className="tab-pane fade show active" id="byRoute">
                          <form
                            action="https://uiparadox.co.uk/templates/flynow/v3/flight-listing.html"
                            method="post"
                          >
                            <div className="row align-items-center">
                              <div className="col-xl-10 col-lg-10">
                                <div className="booking-info v-2 d-md-flex d-inline-block justify-content-between">
                                  <div className="custom-sel-input-block m-0">
                                    <input
                                      type="text"
                                      className="sel-input auto-input"
                                      id="flightDepart"
                                      placeholder="From"
                                    />
                                    <div className="slector-wrapper" />
                                  </div>
                                  <div className="custom-sel-input-block m-0 d-flex flex-row align-items-center">
                                    <div className="vertical-line d-md-flex d-none" />
                                    <input
                                      type="text"
                                      className="sel-input auto-input"
                                      id="flightArrive"
                                      placeholder="To"
                                    />
                                    <div className="slector-wrapper" />
                                  </div>
                                  <div>
                                    <div className="input-date-picker date-time m-0">
                                      <input
                                        type="text"
                                        className="sel-input date_from"
                                        id="flightTimeDate"
                                        placeholder="Aug 20, 2023"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 col-lg-2 d-flex align-items-center mt-lg-0 mt-32">
                                <button type="submit" className="cus-btn">
                                  Show Flight
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_502_1331)">
                                      <path
                                        d="M31.6933 0.544584C30.6572 -0.491824 27.1402 1.34503 26.1041 2.38143L21.9545 6.53127H3.07887C2.63024 6.53127 2.24462 6.85011 2.16055 7.29104C2.07669 7.73189 2.31798 8.16995 2.73524 8.3348L15.2174 13.2677L7.5633 20.9216H0.323909C0.168651 20.9221 0.0346723 21.0323 0.00576263 21.1852C-0.023357 21.3385 0.060152 21.4901 0.20498 21.5471L6.29687 23.9548C6.33201 24.1078 6.38108 24.2574 6.44394 24.4038L6.17745 24.6709C5.79778 25.0503 5.79778 25.6651 6.17745 26.045C6.55664 26.4247 7.17263 26.4247 7.55182 26.045L7.81194 25.785C7.95935 25.8501 8.11132 25.9014 8.26623 25.9382L10.6144 31.9561C10.6709 32.1013 10.8229 32.1851 10.976 32.1568C11.0419 32.145 11.1002 32.1123 11.1451 32.0673C11.2044 32.0087 11.2399 31.9274 11.2399 31.8382V24.7512L19.0155 16.976L23.9019 29.4993C24.0654 29.9177 24.5037 30.1608 24.9452 30.0781C25.136 30.0421 25.3038 29.9498 25.4333 29.8212C25.6038 29.6499 25.7071 29.4151 25.7077 29.1591V10.284L29.8573 6.13423C30.893 5.09789 32.7293 1.58085 31.6933 0.544584Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_502_1391">
                                        <rect
                                          width={32}
                                          height={32}
                                          fill="black"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="tab-pane fade" id="flightNo">
                          <form
                            action="https://uiparadox.co.uk/templates/flynow/v3/flight-listing.html"
                            method="post"
                          >
                            <div className="row align-items-center">
                              <div className="col-xl-10 col-lg-10">
                                <div className="booking-info v-2 d-md-flex d-inline-block justify-content-between">
                                  <div className="custom-sel-input-block m-0">
                                    <input
                                      type="text"
                                      className="sel-input auto-input"
                                      id="flightDepat"
                                      placeholder="From"
                                    />
                                    <div className="slector-wrapper" />
                                  </div>
                                  <div className="custom-sel-input-block m-0 d-flex flex-row align-items-center">
                                    <div className="vertical-line d-md-flex d-none" />
                                    <input
                                      type="text"
                                      className="sel-input auto-input"
                                      id="flightArive"
                                      placeholder="To"
                                    />
                                    <div className="slector-wrapper" />
                                  </div>
                                  <div>
                                    <div className="input-date-picker date-time m-0">
                                      <input
                                        type="text"
                                        className="sel-input date_from"
                                        id="flightTieDate"
                                        placeholder="Aug 20, 2023"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xl-2 col-lg-2 d-flex align-items-center mt-lg-0 mt-32">
                                <button type="submit" className="cus-btn">
                                  Show Flight
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 32 32"
                                    fill="none"
                                  >
                                    <g clipPath="url(#clip0_502_1331)">
                                      <path
                                        d="M31.6933 0.544584C30.6572 -0.491824 27.1402 1.34503 26.1041 2.38143L21.9545 6.53127H3.07887C2.63024 6.53127 2.24462 6.85011 2.16055 7.29104C2.07669 7.73189 2.31798 8.16995 2.73524 8.3348L15.2174 13.2677L7.5633 20.9216H0.323909C0.168651 20.9221 0.0346723 21.0323 0.00576263 21.1852C-0.023357 21.3385 0.060152 21.4901 0.20498 21.5471L6.29687 23.9548C6.33201 24.1078 6.38108 24.2574 6.44394 24.4038L6.17745 24.6709C5.79778 25.0503 5.79778 25.6651 6.17745 26.045C6.55664 26.4247 7.17263 26.4247 7.55182 26.045L7.81194 25.785C7.95935 25.8501 8.11132 25.9014 8.26623 25.9382L10.6144 31.9561C10.6709 32.1013 10.8229 32.1851 10.976 32.1568C11.0419 32.145 11.1002 32.1123 11.1451 32.0673C11.2044 32.0087 11.2399 31.9274 11.2399 31.8382V24.7512L19.0155 16.976L23.9019 29.4993C24.0654 29.9177 24.5037 30.1608 24.9452 30.0781C25.136 30.0421 25.3038 29.9498 25.4333 29.8212C25.6038 29.6499 25.7071 29.4151 25.7077 29.1591V10.284L29.8573 6.13423C30.893 5.09789 32.7293 1.58085 31.6933 0.544584Z"
                                        fill="white"
                                      />
                                    </g>
                                    <defs>
                                      <clipPath id="clip0_502_1321">
                                        <rect
                                          width={32}
                                          height={32}
                                          fill="black"
                                        />
                                      </clipPath>
                                    </defs>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* Flight Status tab End */}
                  </div>
                </div>
              </div>
              {/* Hotel tab Start */}
              <div className="tab-pane fade" id="hotel">
                <form
                  action="https://uiparadox.co.uk/templates/flynow/v3/hotel-listing.html"
                  method="post"
                >
                  <div className="row align-items-center">
                    <div className="col-xxl-10 col-xl-12">
                      <div className="booking-info">
                        <div>
                          <div className="custom-sel-input-block">
                            <input
                              type="text"
                              className="sel-input auto-input-hotel"
                              id="flight_Destination"
                              placeholder="Destination"
                            />
                          </div>
                        </div>
                        <div className="vertical-line d-xl-flex d-none" />
                        <div className="d-md-flex justify-content-between d-sm-block">
                          <div className="input-date-picker">
                            <label
                              htmlFor="checkIn_19"
                              className="h6 color-medium-gray"
                            >
                              Check In
                            </label>
                            <input
                              type="text"
                              className="sel-input date_from"
                              id="checkIn_19"
                              placeholder="Aug 18, 2023"
                            />
                          </div>
                          <div className="vertical-line d-xl-flex d-none" />
                          <div className="input-date-picker">
                            <label
                              htmlFor="checkOut_20"
                              className="h6 color-medium-gray"
                            >
                              Check Out
                            </label>
                            <input
                              type="text"
                              className="sel-input date_to"
                              id="checkOut_20"
                              placeholder="Aug 20, 2023"
                            />
                          </div>
                        </div>
                        <div className="vertical-line d-xl-flex d-none" />
                        <div>
                          <div className="custom-sel-input-block">
                            <div className="h6 color-medium-gray" >
                              Guests and Room
                            </div>
                            <div className="room-booking color-black" onClick={handlePassenger2}>
                              {" "}
                              <span className="total-guest">2</span> Guests /{" "}
                              <span className="guest-class">Room</span>
                            </div>
                            <div className="passenger-area room-box bg-white light-shadow br-5 p-24 d-none" id="passenger-2">
                              <h4 className="color-black mb-32">Room</h4>
                              <div className="passenger-box mb-24">
                                <div className="row">
                                  <div className="col-md-7 col-sm-6">
                                    <div className="content-box">
                                      <h5 className="lightest-black">Adult</h5>
                                      <p className="color-medium-gray light">
                                        Above 12 years.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-5 col-sm-6">
                                    <div className="quantity quantity-wrap">
                                      <input
                                        className="decrement"
                                        type="button"
                                        defaultValue="-"
                                      />
                                      <input
                                        type="text"
                                        name="quantity"
                                        defaultValue={0}
                                        maxLength={2}
                                        size={1}
                                        id="adult_2"
                                        className="number"
                                      />
                                      <input
                                        className="increment"
                                        type="button"
                                        defaultValue="+"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="passenger-box mb-24">
                                <div className="row">
                                  <div className="col-md-7 col-sm-6">
                                    <div className="content-box">
                                      <h5 className="lightest-black">Child</h5>
                                      <p className="color-medium-gray light">
                                        2-11 years on travel date.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-5 col-sm-6">
                                    <div className="quantity quantity-wrap">
                                      <input
                                        className="decrement"
                                        type="button"
                                        defaultValue="-"
                                      />
                                      <input
                                        type="text"
                                        name="quantity"
                                        defaultValue={0}
                                        maxLength={2}
                                        size={1}
                                        id="child_2"
                                        className="number"
                                      />
                                      <input
                                        className="increment"
                                        type="button"
                                        defaultValue="+"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="passenger-box mb-32">
                                <div className="row">
                                  <div className="col-md-7 col-sm-6">
                                    <div className="content-box">
                                      <h5 className="lightest-black">Infant</h5>
                                      <p className="color-medium-gray light">
                                        Below 2 years.
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-5 col-sm-6">
                                    <div className="quantity quantity-wrap">
                                      <input
                                        className="decrement"
                                        type="button"
                                        defaultValue="-"
                                      />
                                      <input
                                        type="text"
                                        name="quantity"
                                        defaultValue={0}
                                        maxLength={2}
                                        size={1}
                                        id="infant_2"
                                        className="number"
                                      />
                                      <input
                                        className="increment"
                                        type="button"
                                        defaultValue="+"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="d-flex justify-content-between align-items-center">
                                <a href="#addroom" className="color-primary">
                                  <i className="fal fa-plus color-primary" />
                                  &nbsp;Add Rooms
                                </a>
                                <a href="#done" className="cus-btn done">
                                  Done
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xxl-2 mt-xxl-0 mt-32">
                      <button type="submit" className="cus-btn extra-width">
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* Hotel tab End */}
              {/* Car Rental tab Start */}
              <div className="tab-pane fade" id="rental">
                <div className="card">
                  <div className="card-header">
                    <ul
                      className="nav nav-tabs card-header-tabs "
                      data-bs-tabs="tabs"
                    >
                      <li className="nav-item v-2">
                        <a
                          href="#carRental"
                          className="cus-btn primary-light primary active"
                          aria-current="true"
                          data-bs-toggle="tab"
                        >
                          Car Rental
                        </a>
                      </li>
                      <li className="nav-item v-2">
                        <a
                          href="#airPort"
                          className="cus-btn primary-light primary"
                          aria-current="false"
                          data-bs-toggle="tab"
                        >
                          Airport Transfer
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body tab-content">
                    <div className="tab-pane fade show active" id="carRental">
                      <form
                        action="https://uiparadox.co.uk/templates/flynow/v3/car-listing.html"
                        method="post"
                      >
                        <div className="row align-items-center mb-32">
                          <div className="col-xl-10 col-lg-10 col-md-12">
                            <div className="booking-info d-block">
                              <div className="row align-items-center">
                                <div className="col-lg-6 col-md-6 col-sm-6">
                                  <div className="custom-sel-input-block location-select">
                                    <label
                                      htmlFor="pick_Up"
                                      className="h6 color-medium-gray"
                                    >
                                      Pick-up Location
                                    </label>
                                    <i className="fal fa-map-marker-alt" />
                                    <input
                                      type="text"
                                      className="sel-input location-input auto-input-location"
                                      id="pick_Up"
                                      placeholder="Pick-up Location"
                                    />
                                    <div className="slector-wrapper" />
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 d-flex gap-8">
                                  <div className="vertical-line" />
                                  <div className="custom-sel-input-block location-select">
                                    <label
                                      htmlFor="drop_Off"
                                      className="h6 color-medium-gray"
                                    >
                                      Drop-off Location
                                    </label>
                                    <i className="fal fa-map-marker-alt" />
                                    <input
                                      type="text"
                                      className="sel-input location-input auto-input-location"
                                      id="drop_Off"
                                      placeholder="Drop-off Location"
                                    />
                                    <div className="slector-wrapper" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-2 col-lg-2 mt-lg-0 mt-32">
                            <div className="filter-checkbox">
                              <input type="checkbox" id="out" />
                              <label htmlFor="out" className="">
                                Return to a different location
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center mb-32">
                          <div className="col-xl-5 col-lg-6 mb-lg-0 mb-24">
                            <div className="booking-info d-block">
                              <div className="row align-items-center">
                                <div className="col-md-6 col-sm-6 mb-sm-0 mb-16">
                                  <div className="custom-sel-input-block m-0">
                                    <label
                                      htmlFor="pickUpDate"
                                      className="h6 color-medium-gray"
                                    >
                                      Pick-up Date
                                    </label>
                                    <div className="d-flex align-items-center gap-8">
                                      <i className="fal fa-calendar-alt " />
                                      <input
                                        type="text"
                                        className="sel-input date_from"
                                        id="pickUpDate"
                                        placeholder="Start Date"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-1 col-sm-1 d-sm-block d-none p-0">
                                  <div className="vertical-line" />
                                </div>
                                <div className="col-md-5 col-sm-5">
                                  <div className="input-date-picker">
                                    <div className="d-flex align-items-center gap-8">
                                      <i className="fal fa-clock" />
                                      <input
                                        type="text"
                                        className="sel-input location-input timepicker p-0"
                                        id="time_Date"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-5 col-lg-6 mb-lg-0 mb-24">
                            <div className="booking-info d-block">
                              <div className="row align-items-center">
                                <div className="col-md-6 col-sm-6 mb-sm-0 mb-16">
                                  <div className="custom-sel-input-block m-0">
                                    <label
                                      htmlFor="date_return"
                                      className="h6 color-medium-gray"
                                    >
                                      Return Date
                                    </label>
                                    <div className="d-flex align-items-center gap-8">
                                      <i className="fal fa-calendar-alt " />
                                      <input
                                        type="text"
                                        className="sel-input date_to"
                                        id="date_return"
                                        placeholder="End Date"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-1 col-sm-1 d-sm-block d-none p-0">
                                  <div className="vertical-line" />
                                </div>
                                <div className="col-md-5 col-sm-5">
                                  <div className="input-date-picker">
                                    <div className="d-flex align-items-center gap-8">
                                      <i className="fal fa-clock" />
                                      <input
                                        type="text"
                                        className="sel-input location-input timepicker p-0"
                                        id="flightTimePick"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xl-2 mt-xl-0 mt-16">
                            <button
                              type="submit"
                              className="cus-btn extra-width"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                        <h5 className="dark-gray mb-16">Driver's age</h5>
                        <div className="custom-control">
                          <div className=" radio-button">
                            <input
                              type="radio"
                              name="age"
                              className="custom-control-input"
                              id="age-18"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="age-18"
                            >
                              18-29
                            </label>
                          </div>
                          <div className=" radio-button">
                            <input
                              type="radio"
                              name="age"
                              className="custom-control-input"
                              id="age-30"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="age-30"
                            >
                              30-49
                            </label>
                          </div>
                          <div className="radio-button">
                            <input
                              type="radio"
                              name="age"
                              className="custom-control-input"
                              id="age-50"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="age-50"
                            >
                              50-70
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="airPort">
                      <form
                        action="https://uiparadox.co.uk/templates/flynow/v3/car-listing.html"
                        method="post"
                      >
                        <div className="row align-items-center mb-32">
                          <div className="col-xl-12 mb-xl-0 mb-16">
                            <div className="booking-info d-block">
                              <div className="row align-items-center">
                                <div className="col-lg-6">
                                  <div className="custom-sel-input-block location-select">
                                    <label
                                      htmlFor="flight_locationInput"
                                      className="h6 color-medium-gray"
                                    >
                                      Pick-up Location
                                    </label>
                                    <i className="fal fa-map-marker-alt" />
                                    <input
                                      type="text"
                                      className="sel-input location-input auto-input-location"
                                      id="flight_locationInput"
                                      placeholder="Pick-up Location"
                                    />
                                    <div className="slector-wrapper" />
                                  </div>
                                </div>
                                <div className="col-lg-6 d-flex gap-8">
                                  <div className="vertical-line d-lg-flex- d-none" />
                                  <div className="custom-sel-input-block location-select">
                                    <label
                                      htmlFor="flight_dropOff"
                                      className="h6 color-medium-gray"
                                    >
                                      Drop-off Location
                                    </label>
                                    <i className="fal fa-map-marker-alt" />
                                    <input
                                      type="text"
                                      className="sel-input location-input auto-input-location"
                                      id="flight_dropOff"
                                      placeholder="Drop-off Location"
                                    />
                                    <div className="slector-wrapper" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center mb-32">
                          <div className="col-xxl-4 col-xl-6 col-lg-6 mb-xxl-0 mb-24">
                            <div className="booking-info d-block">
                              <div className="row align-items-center">
                                <div className="col-md-6 col-sm-6 mb-sm-0 mb-16">
                                  <div className="custom-sel-input-block m-0">
                                    <label
                                      htmlFor="flight_ArrivalDate"
                                      className="h6 color-medium-gray"
                                    >
                                      Pick-up Date
                                    </label>
                                    <div className="d-flex align-items-center gap-8">
                                      <i className="fal fa-calendar-alt " />
                                      <input
                                        type="text"
                                        className="sel-input date_from"
                                        id="flight_ArrivalDate"
                                        placeholder="Pick-up Date"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-1 col-sm-1 d-sm-block d-none p-0">
                                  <div className="vertical-line" />
                                </div>
                                <div className="col-md-5 col-sm-5">
                                  <div className="input-date-picker">
                                    <div className="d-flex align-items-center gap-8">
                                      <i className="fal fa-clock" />
                                      <input
                                        type="text"
                                        className="sel-input location-input timepicker p-0"
                                        id="time_location"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 col-xl-6 col-lg-6 mb-xxl-0 mb-24">
                            <div className="booking-info d-block">
                              <div className="row align-items-center">
                                <div className="col-md-6 col-sm-6 mb-sm-0 mb-16">
                                  <div className="custom-sel-input-block m-0">
                                    <label
                                      htmlFor="flight_returnDate"
                                      className="h6 color-medium-gray"
                                    >
                                      Return Date
                                    </label>
                                    <div className="d-flex align-items-center gap-8">
                                      <i className="fal fa-calendar-alt" />
                                      <input
                                        type="text"
                                        className="sel-input date_to"
                                        id="flight_returnDate"
                                        placeholder="Return Date"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-1 col-sm-1 d-sm-block d-none p-0">
                                  <div className="vertical-line" />
                                </div>
                                <div className="col-md-5 col-sm-5">
                                  <div className="input-date-picker">
                                    <div className="d-flex align-items-center gap-8">
                                      <i className="fal fa-clock" />
                                      <input
                                        type="text"
                                        className="sel-input location-input timepicker p-0"
                                        id="flight_timeNow"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-xxl-4 ">
                            <div className="booking-info">
                              <div className="custom-sel-input-block location-select">
                                <label
                                  htmlFor="passenger_Popup"
                                  className="h6 color-medium-gray mb-1"
                                >
                                  Passenger
                                </label>
                                <i className="fal fa-user" />
                                <input
                                  type="text"
                                  className="sel-input location-input"
                                  id="passenger_Popup"
                                  placeholder="Number of Passenger"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="offset-xl-10 col-xl-2 mt-32">
                            <button
                              type="submit"
                              className="cus-btn extra-width"
                            >
                              Search
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Car Rental tab End */}
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Search
