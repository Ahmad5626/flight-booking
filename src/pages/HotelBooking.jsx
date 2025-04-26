import React from 'react'

const HotelBooking = () => {
  return (
    <div>
    <>
  {/* Title-Banner Start */}
  <div className="title-banner">
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
              Hotel <br className="title-break" /> Booking
            </h1>
          </div>
          <img
            src="assets/media/banner/hotel.png"
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
      data-sal="slide-down"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 mb-xl-0 mb-32">
            <div className="flight-booking-detail light-shadow mb-32">
              <div className="flight-title">
                <h4 className="color-black">Hotel Info</h4>
              </div>
              <div className="content-block bg-white p-24 light-shadow">
                <h4 className="color-black mb-12">GLOBALSTAY Holiday Homes</h4>
                <p className="dark-gray mb-32">
                  Lorem ipsum dolor sit amet consectetur. Orci elementum egestas
                  blandit a. Elementum blandit sit egestas urna.
                </p>
                <h5 className="color-black mb-24">Facilities</h5>
                <div className="d-flex gap-24 flex-wrap">
                  <div className="d-flex align-items-center facility gap-8">
                    <img src="assets/media/hotel/icons/kitchen.png" alt="" />
                    <h6 className="light-black">Kitchen</h6>
                  </div>
                  <div className="d-flex align-items-center facility gap-8">
                    <img src="assets/media/hotel/icons/pets.png" alt="" />
                    <h6 className="light-black">Pet allowed</h6>
                  </div>
                  <div className="d-flex align-items-center facility gap-8">
                    <img src="assets/media/hotel/icons/wifi.png" alt="" />
                    <h6 className="light-black">Free WiFi</h6>
                  </div>
                  <div className="d-flex align-items-center facility gap-8">
                    <img src="assets/media/hotel/icons/parking.png" alt="" />
                    <h6 className="light-black">Free Parking</h6>
                  </div>
                  <div className="d-flex align-items-center facility gap-8">
                    <img src="assets/media/hotel/icons/balcony.png" alt="" />
                    <h6 className="light-black">Balcony</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="flight-booking-detail light-shadow mb-32">
              <div className="flight-title">
                <h4 className="color-black">Your Booking Detail</h4>
              </div>
              <div className="content-block bg-white p-24 light-shadow">
                <div className="d-flex justify-content-between mb-32">
                  <div className="flight-departure">
                    <h6 className="dark-gray">Departure</h6>
                    <h5 className="color-black">14 Aug, 2023</h5>
                    <h6 className="dark-gray">To 10:00 AM</h6>
                  </div>
                  <div className="vr-line d-xl-flex d-none" />
                  <div className="flight-departure">
                    <h6 className="dark-gray">Arrival</h6>
                    <h5 className="color-black">14 Aug, 2023</h5>
                    <h6 className="dark-gray">From 12:00 AM</h6>
                  </div>
                </div>
                <div className="text mb-32">
                  <h6 className="color-medium-gray mb-2">
                    Total Length of Stay
                  </h6>
                  <h5 className="color-black">3 Days</h5>
                </div>
                <hr className="bg-medium-gray mb-32" />
                <div className="text">
                  <h6 className="color-primary mb-2">You Selected</h6>
                  <h5 className="color-black">1 Room for 2 Guests</h5>
                </div>
              </div>
            </div>
            <div className="flight-booking-detail light-shadow">
              <div className="flight-title">
                <h4 className="color-black">Price Summary</h4>
              </div>
              <div className="content-block bg-white p-24">
                <div className="d-flex align-items-center justify-content-between mb-24">
                  <div>
                    <h5 className="color-black">Room</h5>
                    <p className="dark-gray">
                      Lorem ipsum dolor sit amet consectetur.
                    </p>
                  </div>
                  <h5 className="color-black">$140</h5>
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
          <div className="col-xl-8">
            <div className="booking-form">
              <form
                action="https://uiparadox.co.uk/templates/flynow/v3/hotel-listing.html"
                id="hotel-form"
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
                        <div className="row">
                          <h5 className="light-black mb-16">
                            Are you travelling for work?
                          </h5>
                          <div className="custom-control d-flex gap-16 mb-32">
                            <div className="radio-button">
                              <input
                                type="radio"
                                name="choice"
                                className="custom-control-input"
                                id="yes"
                              />
                              <label
                                className="custom-control-label light-black"
                                htmlFor="yes"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="radio-button">
                              <input
                                type="radio"
                                name="choice"
                                className="custom-control-input"
                                id="no"
                              />
                              <label
                                className="custom-control-label light-black"
                                htmlFor="no"
                              >
                                No
                              </label>
                            </div>
                          </div>
                          <div className="col-sm-6 mb-30">
                            <input
                              type="text"
                              className="form-control wizard-required"
                              id="first-name"
                              name="name"
                              placeholder="First Name"
                            />
                            <div className="wizard-form-error" />
                          </div>
                          <div className="col-sm-6 mb-30">
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
                          <h5 className="light-black mb-16">
                            Who are you booking for?
                          </h5>
                          <div className="custom-control d-flex gap-16">
                            <div className="radio-button">
                              <input
                                type="radio"
                                name="booking_choice"
                                className="custom-control-input"
                                id="guest"
                              />
                              <label
                                className="custom-control-label color-black"
                                htmlFor="guest"
                              >
                                I am the main guest
                              </label>
                            </div>
                            <div className="radio-button">
                              <input
                                type="radio"
                                name="booking_choice"
                                className="custom-control-input"
                                id="booking"
                              />
                              <label
                                className="custom-control-label color-black"
                                htmlFor="booking"
                              >
                                Booking is for someone else
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="detail-form term_conditions mb-32">
                        <h5 className="black p-0 mb-24">
                          Premier Deluxe Room with Complimentary Private Beach
                          &amp; Wild Wadi Waterpark Access
                        </h5>
                        <div className="d-flex align-items-center facility gap-2 mb-24">
                          <img
                            src="assets/media/hotel/icons/tick-lg.png"
                            alt=""
                          />
                          <h6 className="light-black">
                            Free Cancellation{" "}
                            <span className="dark-gray">
                              before 26 August 2023
                            </span>
                          </h6>
                        </div>
                        <div className="d-flex align-items-center facility gap-2 mb-24">
                          <img
                            src="assets/media/hotel/icons/tick-lg.png"
                            alt=""
                          />
                          <h6 className="light-black">
                            Guest{" "}
                            <span className="dark-gray">
                              2 Adults, 0 Child (inder 13 of age)
                            </span>
                          </h6>
                        </div>
                        <div className="d-flex align-items-center facility gap-2 mb-32">
                          <img
                            src="assets/media/hotel/icons/tick-lg.png"
                            alt=""
                          />
                          <h6 className="light-black">
                            Parking &amp; High Speed Internet{" "}
                          </h6>
                        </div>
                        <div className="d-flex flex-wrap align-items-center gap-16 mb-24">
                          <div className="d-flex align-items-center facility gap-8">
                            <img
                              src="assets/media/hotel/icons/icon-2.png"
                              alt=""
                            />
                            <h6 className="light-black">Sound Proof</h6>
                          </div>
                          <div className="d-flex align-items-center facility gap-8">
                            <img
                              src="assets/media/hotel/icons/icon-3.png"
                              alt=""
                            />
                            <h6 className="light-black">44m²</h6>
                          </div>
                          <div className="d-flex align-items-center facility gap-8">
                            <img
                              src="assets/media/hotel/icons/icon-4.png"
                              alt=""
                            />
                            <h6 className="light-black">Landmarks</h6>
                          </div>
                          <div className="d-flex align-items-center facility gap-8">
                            <img
                              src="assets/media/hotel/icons/icon-5.png"
                              alt=""
                            />
                            <h6 className="light-black">City View</h6>
                          </div>
                          <div className="d-flex align-items-center facility gap-8">
                            <img
                              src="assets/media/hotel/icons/icon-6.png"
                              alt=""
                            />
                            <h6 className="light-black">Air Conditioning</h6>
                          </div>
                          <div className="d-flex align-items-center facility gap-8">
                            <img
                              src="assets/media/hotel/icons/icon-7.png"
                              alt=""
                            />
                            <h6 className="light-black">Private bathroom</h6>
                          </div>
                          <div className="d-flex align-items-center facility gap-8">
                            <img
                              src="assets/media/hotel/icons/icon-8.png"
                              alt=""
                            />
                            <h6 className="light-black">Flat-screen TV</h6>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-6">
                            <input
                              type="text"
                              className="form-control wizard-required"
                              id="full_name"
                              name="name"
                              placeholder="Full Guest Name"
                            />
                            <div className="wizard-form-error" />
                          </div>
                        </div>
                      </div>
                      <div className="detail-form extra-item p-24 mb-32">
                        <h4 className="black p-0 mb-16">Special Requests</h4>
                        <p className="dark-gray fw-400 mb-24">
                          Lorem ipsum dolor sit amet consectetur. Enim sodales
                          aliquet interdum vitae mi. <br /> Habitant fusce sit
                          quis sit lorem. Porta lectus vitae pharet.{" "}
                          <span className="h6 light-black"> (Optional)</span>
                        </p>
                        <textarea
                          name="message"
                          className="form-control"
                          id="msg"
                          cols={30}
                          rows={3}
                          placeholder="Your Text"
                          defaultValue={""}
                        />
                      </div>
                      <div className="detail-form extra-item p-24 mb-32">
                        <h4 className="black p-0 mb-16">Your Arrival Time</h4>
                        <ul>
                          <li className="dark-gray mb-8">
                            Lorem ipsum dolor sit amet consectetur. Enim sodales
                            aliquet interdum vitae mi. <br /> Habitant fusce sit
                            quis sit lorem. Porta lectus vitae pharet.
                          </li>
                          <li className="dark-gray mb-24">
                            Lorem ipsum dolor sit amet consectetur. Lorem proin
                            faucibus sit non.
                          </li>
                        </ul>
                        <div className="hotel-booking-time">
                          <div className="input-date-picker">
                            <label
                              htmlFor="dateCheck"
                              className="h6 color-medium-gray"
                            >
                              Check In
                            </label>
                            <div className="d-flex align-items-center gap-2">
                              <i className="fal fa-calendar-alt" />
                              <input
                                type="text"
                                className="sel-input date_from"
                                id="dateCheck"
                                placeholder="Aug 18, 2023"
                              />
                            </div>
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
                    {/* <form action="hotel-booking.html" method="post" class="contact-form"> */}
                    <div className="detail-form mb-32">
                      <h4 className="black p-0 mb-24">Enter you info</h4>
                      <div className="row">
                        <div className="col-sm-6">
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
                        <div className="col-sm-6">
                          <input
                            type="text"
                            className="form-control wizard-required"
                            required=""
                            name="phone"
                            id="ph_number"
                            placeholder="Number"
                          />
                          <div className="wizard-form-error" />
                        </div>
                      </div>
                    </div>
                    <div className="detail-form mb-32">
                      <h4 className="black p-0 mb-8">Save your details!</h4>
                      <p className="dark-gray mb-24">
                        Use your contact details to create an account and speed
                        up future <br /> bookings.(We won't save your payment
                        information.)
                      </p>
                      <div className="filter-checkbox mb-24">
                        <input type="checkbox" id="save_detail" />
                        <label htmlFor="save_detail" className="dark-gray">
                          Save my detail so I can book faster next time.
                        </label>
                      </div>
                      <p className="dark-gray">
                        By signing in or creating an account, you agree with our{" "}
                        <a href="privacy-policy.html" className="color-primary">
                          Terms &amp; conditions
                        </a>
                      </p>
                    </div>
                    <div className="detail-form mb-32">
                      <h4 className="black p-0 mb-24">
                        When would you like to pay?
                      </h4>
                      <div className="custom-control">
                        <div className="radio-button mb-8">
                          <input
                            type="radio"
                            name="payMentmethod"
                            required=""
                            className="custom-control-input input-control"
                            id="payLater"
                          />
                          <label
                            className="custom-control-label pay light-black"
                            htmlFor="payLater"
                          >
                            Pay Later
                          </label>
                        </div>
                        <p className="dark-gray mb-24 pl-36">
                          Lorem ipsum dolor sit amet consectetur. Orci elementum
                          egestas blandit a. Elementum blandit sit egestas urna.
                        </p>
                        <div className="radio-button mb-8">
                          <input
                            type="radio"
                            name="payMentmethod"
                            required=""
                            className="custom-control-input input-control"
                            id="payNow"
                          />
                          <label
                            className="custom-control-label pay light-black"
                            htmlFor="payNow"
                          >
                            Pay Now
                          </label>
                        </div>
                        <p className="dark-gray pl-36">
                          Lorem ipsum dolor sit amet consectetur. Orci elementum
                          egestas blandit a. Elementum blandit sit egestas urna.
                        </p>
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
                                  className="radio-button"
                                  type="radio"
                                  name="radio"
                                  defaultValue="payment"
                                />
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
                                  className="radio-button"
                                  type="radio"
                                  name="radio"
                                  defaultValue="g-pay"
                                />
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
                            required=""
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
                            required=""
                            name="number"
                            id="card-name"
                            placeholder="Card Number"
                          />
                          <div className="wizard-form-error" />
                        </div>
                        <div className="col-sm-6 mb-24">
                          <div className="input-date-picker">
                            <input
                              type="text"
                              className="sel-input date_from form-control wizard-required"
                              name="date"
                              id="exp-date"
                              required=""
                              placeholder="Expiry Date"
                            />
                            <div className="wizard-form-error" />
                          </div>
                        </div>
                        <div className="col-sm-6 mb-24">
                          <input
                            type="text"
                            className="form-control wizard-required"
                            required=""
                            name="cvc"
                            id="cVc"
                            placeholder="CVC"
                          />
                          <div className="wizard-form-error" />
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                    <div className="d-flex gap-24">
                      <a
                        href="javascript:;"
                        className="form-wizard-previous-btn cus-btn w-100"
                      >
                        Back
                      </a>
                      <a
                        href="hotel-listing.html"
                        className="form-wizard-next-btn cus-btn w-100"
                      >
                        Submit
                      </a>
                    </div>
                  </fieldset>
                </div>
                {/* <h6><a href="#step-2" class="cus-btn float-end btn"><span class="icon"><img src="assets/media/icons/orange-cart.png" alt=""></span>Continue</a></h6>
                               <div class="sw-toolbar-elm toolbar toolbar-bottom" role="toolbar">
                                   <button class="btn sw-btn-prev sw-btn" type="button">Continue</button>
                                  <button class="btn sw-btn-next sw-btn" type="button">Next</button> 
                              </div> */}
              </form>
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

export default HotelBooking
