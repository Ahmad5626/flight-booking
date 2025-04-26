import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'

const FlightBooking = () => {
  return (
    <div>
    
    <>
  {/* Title-Banner Start */}
  <div className="title-banner mb-20">
    <div className="container-fluid">
      <div className="row">
        <div className="banner-area">
          <img
            src="assets/media/banner/vacation.png"
            alt=""
            className="left-image"
          />
          <div className="content-box">
            <h1 className="fw-700 lightest-black">
              Flight <br className="title-break" /> Booking
            </h1>
          </div>
          <img
            src="assets/media/banner/plane-2.png"
            alt=""
            className="right-image"
          />
        </div>
      </div>
    </div>
  </div>
  {/* Title-Banner End */}
  {/* Main Content Start */}
  <div className="page-content m-0">
    {/* Flight-Booking Start */}
    <section
      className="flight-booking"
      data-sal="slide-up"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-8">
            <div className="booking-form">
              <form
                action="https://uiparadox.co.uk/templates/flynow/v3/flight-booking.html"
                id="flight-form"
                method="post"
                role="form"
                className="contact-form form-wizard"
              >
                <div className="form-wizard-header">
                  <ul className="nav list-unstyled form-wizard-steps clearfix">
                    <li className="nav-item activated">
                      <button className="nav-link">
                        <span className="number">1</span>
                        <i className="fal fa-check" />
                      </button>
                      <h5 className="color-black">Your Selection</h5>
                    </li>
                    <li className="nav-item active">
                      <button className="nav-link">
                        <span className="number">2</span>
                        <i className="fal fa-check" />
                      </button>
                      <h5 className="color-black">Your Details</h5>
                    </li>
                    <li className="nav-item">
                      <button className="nav-link">
                        <span className="number">3</span>
                        <i className="fal fa-check" />
                      </button>
                      <h5 className="color-black">Final Step</h5>
                    </li>
                  </ul>
                </div>
                <div className="wizard-content overflow-visible mb-24">
                  <fieldset
                    id="step-2"
                    className="tab-pane show wizard-fieldset p-0"
                  >
                    <div id="wizardValidator">
                      <div className="detail-form mb-32">
                        <h4 className="black p-0 mb-40">Enter Your Details</h4>
                        <div className="row ">
                          <div className="col-sm-3 mb-40">
                            <div className="gender-select">
                              <div className="select">
                                <select
                                  name="gender"
                                  id="gender"
                                  className="wizard-required"
                                >
                                  <option selected="" disabled="">
                                    Gender
                                  </option>
                                  <option value="male">Male</option>
                                  <option value="female">Female</option>
                                  <option value="other">Other</option>
                                </select>
                              </div>
                              <div className="wizard-form-error" />
                            </div>
                          </div>
                          <div className="col-sm-5 mb-40">
                            <input
                              type="text"
                              className="form-control wizard-required"
                              id="first-name"
                              name="first-name"
                              placeholder="First Name"
                            />
                            <div className="wizard-form-error" />
                          </div>
                          <div className="col-sm-4 mb-40">
                            <input
                              type="text"
                              className="form-control wizard-required"
                              id="last-name"
                              name="last-name"
                              placeholder="Last Name"
                            />
                            <div className="wizard-form-error" />
                          </div>
                          <div className="col-sm-6 mb-40">
                            <input
                              type="email"
                              className="form-control wizard-required"
                              id="email"
                              name="email"
                              placeholder="Email"
                            />
                            <div className="wizard-form-error" />
                          </div>
                          <div className="col-sm-6 mb-40">
                            <div className="gender-select">
                              <div className="select">
                                <select
                                  name="nationality"
                                  id="nationality"
                                  className="wizard-required"
                                >
                                  <option selected="" disabled="">
                                    Nationality
                                  </option>
                                  <option value="american">American</option>
                                  <option value="britian">Britian</option>
                                  <option value="indian">Indian</option>
                                  <option value="canadian">Canadian</option>
                                  <option value="pakistani">Pakistani</option>
                                </select>
                                <div className="wizard-form-error" />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6 mb-40">
                            <input
                              type="tel"
                              className="form-control wizard-required"
                              id="phone"
                              name="phone"
                              placeholder="Your Number"
                            />
                            <div className="wizard-form-error" />
                          </div>
                          <div className="col-sm-6 mb-40">
                            <div className="input-date-picker">
                              <input
                                type="text"
                                className="sel-input date_from form-control wizard-required"
                                id="flightDep"
                                placeholder="Date of Birth"
                              />
                              <div className="wizard-form-error" />
                            </div>
                          </div>
                          <div className="col-sm-6 mb-sm-0 mb-40">
                            <input
                              type="number"
                              className="form-control wizard-required"
                              id="post_code"
                              name="code"
                              placeholder="Postal Code"
                            />
                            <div className="wizard-form-error" />
                          </div>
                          <div className="col-sm-6">
                            <input
                              type="number"
                              className="form-control wizard-required"
                              id="f_number"
                              name="f_number"
                              placeholder="Flight Number"
                            />
                            <div className="wizard-form-error" />
                          </div>
                        </div>
                      </div>
                      <div className="detail-form term_conditions mb-32">
                        <h4 className="black p-0 mb-8">Save your details!</h4>
                        <div className="row">
                          <div className="col-sm-6">
                            <p className="dark-gray mb-24 fw-400">
                              Use your contact details to create an account and
                              speed up future bookings.(We won't save your
                              payment information.)
                            </p>
                            <div className="filter-checkbox mb-24">
                              <input
                                type="checkbox"
                                id="save"
                                className="wizard-required"
                              />
                              <label
                                htmlFor="save"
                                className="dark-gray fw-400"
                              >
                                Save my detail so i can book faster next time.
                              </label>
                            </div>
                            <p className="dark-gray fw-400">
                              By signing in or creating an account, you agree
                              with our{" "}
                              <a
                                href="privacy-policy.html"
                                className="color-primary"
                              >
                                {" "}
                                Terms &amp; conditions
                              </a>
                            </p>
                            <div className="wizard-form-error" />
                          </div>
                        </div>
                      </div>
                      <div className="detail-form extra-item p-24 mb-32">
                        <h4 className="black p-0 mb-24">Extras</h4>
                        <div className="col-sm-12 mb-24">
                          <div className="select-1">
                            <select
                              name="format"
                              id="format"
                              className="wizard-required"
                            >
                              <option selected="" disabled="">
                                Select Meal Type
                              </option>
                              <option value="fast">Fast Food</option>
                              <option value="vegetarian">Vegetarian</option>
                              <option value="non">Non-Veg</option>
                            </select>
                            <div className="wizard-form-error" />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="select-2">
                            <select
                              name="format-2"
                              id="format-2"
                              className="wizard-required"
                            >
                              <option selected="" disabled="">
                                Request Wheelchair
                              </option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                            <div className="wizard-form-error" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex gap-24">
                      <a
                        href="javascript:;"
                        className="form-wizard-next-btn cus-btn w-100"
                      >
                        Next
                      </a>
                    </div>
                  </fieldset>
                  <fieldset
                    id="step-3"
                    className="tab-pane wizard-fieldset p-0"
                  >
                    {/* <form action="flight-booking.html" method="post" class="contact-form"> */}
                    <div className="detail-form mb-32">
                      <h4 className="black p-0 mb-24">
                        When would you like to pay?
                      </h4>
                      <div className="custom-control">
                        <div className="radio-button mb-24">
                          <input
                            type="radio"
                            name="payment"
                            className="custom-control-input input-control"
                            id="later"
                          />
                          {/* <div class="wizard-form-error"></div> */}
                          <label
                            className="custom-control-label paynow color-black"
                            htmlFor="later"
                          >
                            Pay Later
                          </label>
                          <p className="dark-gray pl-36">
                            Lorem ipsum dolor sit amet consectetur. Orci
                            elementum egestas blandit a. Elementum blandit sit
                            egestas urna.
                          </p>
                        </div>
                        <div className="radio-button">
                          <input
                            type="radio"
                            name="payment"
                            className="custom-control-input input-control"
                            id="now"
                          />
                          {/* <div class="wizard-form-error"></div> */}
                          <label
                            className="custom-control-label paynow color-black"
                            htmlFor="now"
                          >
                            Pay Now
                          </label>
                          <p className="dark-gray pl-36">
                            Lorem ipsum dolor sit amet consectetur. Orci
                            elementum egestas blandit a. Elementum blandit sit
                            egestas urna.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="detail-form v-2">
                      <h4 className="black p-0 mb-24">
                        How would you like to pay?
                      </h4>
                      <div className="content-block mb-32">
                        <div className="radio-tile-group sidebar d-block">
                          <div className="row">
                            <div className="col-sm-6">
                              <div className="input-container">
                                <input
                                  id="payment"
                                  className="radio-button wizard-required"
                                  type="radio"
                                  name="radio"
                                  defaultValue="payment"
                                />
                                <div className="wizard-form-error" />
                                <div className="radio-tile wizard-page">
                                  <label
                                    htmlFor="payment"
                                    className="radio-tile-label wizard-label"
                                  >
                                    <i className="fal fa-credit-card-front" />
                                    &nbsp;&nbsp;New Card
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-6">
                              <div className="input-container">
                                <input
                                  id="g-pay"
                                  className="radio-button wizard-required"
                                  type="radio"
                                  name="radio"
                                  defaultValue="g-pay"
                                />
                                <div className="wizard-form-error" />
                                <div className="radio-tile wizard-page">
                                  <label
                                    htmlFor="g-pay"
                                    className="radio-tile-label wizard-label"
                                  >
                                    <img
                                      src="assets/media/icons/google.png"
                                      alt=""
                                    />
                                    &nbsp;&nbsp;Google Pay
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h4 className="black p-0 mb-24">
                        Account Holder Details
                      </h4>
                      <div className="row">
                        <div className="col-sm-6 mb-24">
                          <input
                            type="text"
                            className="form-control wizard-required"
                            name="name"
                            id="holder-name"
                            placeholder="Card Holder's Name"
                          />
                          <div className="wizard-form-error" />
                        </div>
                        <div className="col-sm-6 mb-24">
                          <input
                            type="text"
                            className="form-control wizard-required"
                            name="number"
                            id="card-name"
                            placeholder="Card Number"
                          />
                          <div className="wizard-form-error" />
                        </div>
                        <div className="col-sm-6 mb-24">
                          {/* <input type="text" class="form-control " name="date" id="exp-date" placeholder="Expiry Date"> */}
                          <div className="wizard-form-error" />
                          <div className="input-date-picker">
                            <input
                              type="text"
                              className="sel-input date_from form-control wizard-required "
                              name="date"
                              id="exp-date"
                              placeholder="Expiry Date"
                            />
                            <div className="wizard-form-error" />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-24">
                          <input
                            type="text"
                            className="form-control wizard-required"
                            name="cvc"
                            id="cVc"
                            placeholder="CVC"
                          />
                          <div className="wizard-form-error" />
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                    <div className="d-flex gap-24 mt-24">
                      <a
                        href="javascript:;"
                        className="form-wizard-previous-btn cus-btn btn-sec w-100"
                      >
                        Back
                      </a>
                      <a
                        href="flight-booking.html"
                        className="form-wizard-next-btn cus-btn w-100"
                      >
                        Submit
                      </a>
                    </div>
                  </fieldset>
                </div>
                {/* <h6><a href="#step-2" class="cus-btn float-end btn"><span class="icon"><img src="assets/media/icons/orange-cart.png" alt=""></span>Continue</a></h6> */}
                {/* <div class="sw-toolbar-elm toolbar toolbar-bottom" role="toolbar">
                              <button class="btn sw-btn-prev sw-btn" type="button">Continue</button>
                              <button class="btn sw-btn-next sw-btn" type="button">Continue</button>
                          </div> */}
              </form>
            </div>
          </div>
          <div className="col-xl-4 mb-lg-0 mb-32">
            <div className="flight-booking-detail light-shadow mb-32">
              <div className="flight-title">
                <h4 className="color-black">Your Booking Detail</h4>
              </div>
              <div className="box bg-white p-24">
                <div className="flight-detail mb-32">
                  <div className="flight-departure">
                    <h5 className="color-black">12:00</h5>
                    <h5 className="dark-gray text-end">DUB</h5>
                  </div>
                  <div className="d-inline-flex align-items-center gap-8">
                    <span className="">From</span>
                    <div className="from-to text-center">
                      <h5 className="dark-gray">0h 50m</h5>
                      <img src="assets/media/icons/route-plan.png" alt="" />
                      <h6 className="color-black">1 Stop</h6>
                    </div>
                    <span className="">To</span>
                  </div>
                  <div className="flight-departure">
                    <h5 className="color-black">12:50</h5>
                    <h5 className="dark-gray">SHJ</h5>
                  </div>
                </div>
                <div className="d-flex justify-content-around mb-32">
                  <div className="flight-departure">
                    <h6 className="dark-gray">Departure</h6>
                    <h5 className="color-black">14 Aug, 2023</h5>
                  </div>
                  <div className="vr-line" />
                  <div className="flight-departure">
                    <h6 className="dark-gray">Arrival</h6>
                    <h5 className="color-black">14 Aug, 2023</h5>
                  </div>
                </div>
                <hr className="bg-medium-gray mb-32" />
                <div className="text">
                  <h6 className="color-medium-gray">Tpm Line</h6>
                  <h6 className="color-medium-gray">
                    Operated by Feel Dubai Airlines
                  </h6>
                  <h6 className="color-medium-gray">
                    Economy | Flight FK234 | Aircraft BOEING 777-90
                  </h6>
                  <h6 className="color-medium-gray">
                    Adult(s): 25KG luggage free
                  </h6>
                </div>
              </div>
            </div>
            <div className="flight-booking-detail light-shadow">
              <div className="flight-title">
                <h4 className="color-black">Price Summary</h4>
              </div>
              <div className="box bg-white p-24">
                <div className="d-flex align-items-center justify-content-between mb-24">
                  <div>
                    <h5 className="color-black">Adult x 1</h5>
                    <p className="dark-gray">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <h5 className="color-black">$540</h5>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-24">
                  <div>
                    <h5 className="color-black">Room Service</h5>
                    <p className="dark-gray">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <h5 className="color-black">$50</h5>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-24">
                  <div>
                    <h5 className="color-black">Gym Fee</h5>
                    <p className="dark-gray">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <h5 className="color-black">$30</h5>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-24">
                  <div>
                    <h5 className="color-black">Service Charges</h5>
                    <p className="dark-gray">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <h5 className="color-black">$20</h5>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-24">
                  <div>
                    <h5 className="color-black">Sub Total</h5>
                    <p className="dark-gray">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <h5 className="color-black">$640</h5>
                </div>
                <hr className="bg-medium-gray mb-24" />
                <div className="d-flex align-items-center justify-content-between mb-24">
                  <div>
                    <h4 className="color-black">Deal / Discount</h4>
                  </div>
                  <h4 className="color-black">$40</h4>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h4 className="color-black">Total</h4>
                  </div>
                  <h4 className="color-black">$600</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Flight-Booking End */}
  </div>
  {/* Main Content End */}
</>

    
      
    </div>
  )
}

export default FlightBooking
