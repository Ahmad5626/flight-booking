import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Search from '../component/Search'

const FlightListing = () => {
  return (
    <div>

<>
  {/* Title-Banner Start */}
  <div className="title-banner">
    <div className="container-fluid">
      <div className="row">
        <div className="banner-area v-2">
          <img
            src="./assets/media/banner/vacation.png"
            alt=""
            className="left-image"
          />
          <div className="content-box text-alignment">
            <h1 className="fw-700 lightest-black">Flight Listing</h1>
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
    {/* Booking Area Start */}
    <Search/>
    {/* Booking Area End */}
    {/* Flight Listing Start */}
    <section className="flight-listing-page mb-60">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-4 mb-xl-0 mb-32">
            <div className="sidebar bg-white br-10 light-shadow">
              <div className="sidebar-title">
                <h4 className="lightest-black">Filter Search</h4>
              </div>
              <div
                className="filter-block p-24 box-1"
                data-sal="slide-left"
                data-sal-duration={800}
                data-sal-delay={100}
                data-sal-easing="ease-in-out"
              >
                <div className="title mb-32" data-count={1}>
                  <h4 className="color-black">Cabin </h4>
                  <i className="fal fa-chevron-up color-primary" />
                </div>
                <div className="content-block mb-32">
                  <div className="radio-tile-group sidebar">
                    <div className="input-container">
                      <input
                        id="economyClas"
                        className="radio-button"
                        type="radio"
                        name="radio"
                        defaultValue="Economy"
                      />
                      <div className="radio-tile sidebar-radio">
                        <label
                          htmlFor="economyClas"
                          className="radio-tile-label sidebar-label"
                        >
                          Economy Class
                        </label>
                      </div>
                    </div>
                    <div className="input-container">
                      <input
                        id="businessCl"
                        className="radio-button"
                        type="radio"
                        name="radio"
                        defaultValue="Business"
                      />
                      <div className="radio-tile sidebar-radio">
                        <label
                          htmlFor="businessCl"
                          className="radio-tile-label sidebar-label"
                        >
                          Business Class
                        </label>
                      </div>
                    </div>
                    <div className="input-container">
                      <input
                        id="firstClas"
                        className="radio-button"
                        type="radio"
                        name="radio"
                        defaultValue="First Class"
                      />
                      <div className="radio-tile sidebar-radio">
                        <label
                          htmlFor="firstClas"
                          className="radio-tile-label sidebar-label"
                        >
                          First Class
                        </label>
                      </div>
                    </div>
                    <div className="input-container">
                      <input
                        id="preEco"
                        className="radio-button"
                        type="radio"
                        name="radio"
                        defaultValue="Premium Economy"
                      />
                      <div className="radio-tile sidebar-radio">
                        <label
                          htmlFor="preEco"
                          className="radio-tile-label sidebar-label"
                        >
                          Premium Economy
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-sec-gray mb-8" />
              </div>
              <div
                className="filter-block plr-24 box-2"
                data-sal="slide-right"
                data-sal-duration={800}
                data-sal-delay={100}
                data-sal-easing="ease-in-out"
              >
                <div className="title mb-32" data-count={2}>
                  <h4 className="color-black">Price Range </h4>
                  <i className="fal fa-chevron-up color-primary" />
                </div>
                <div className="content-block">
                  <div className="slider-track mb-32">
                    <div className="d-flex justify-content-between mb-4p">
                      <h5>$100</h5>
                      <h5>$3000</h5>
                    </div>
                    <input
                      type="text"
                      className="js-slider form-control"
                      defaultValue={0}
                    />
                  </div>
                </div>
                <hr className="bg-sec-gray mb-32" />
              </div>
              <div
                className="filter-block plr-24 box-3"
                data-sal="slide-left"
                data-sal-duration={800}
                data-sal-delay={100}
                data-sal-easing="ease-in-out"
              >
                <div className="title mb-32" data-count={3}>
                  <h4 className="color-black fw-500">Airlines</h4>
                  <i className="fal fa-chevron-up color-primary" />
                </div>
                <div className="content-block">
                  <div className="custom-control mb-32">
                    <div className="d-flex justify-content-between align-items-center mb-24">
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="airline"
                          className="custom-control-input"
                          id="emirates"
                        />
                        <label
                          className="custom-control-label lightest-black"
                          htmlFor="emirates"
                        >
                          Emirates Airline
                        </label>
                      </div>
                      <h5 className="light-black">(02)</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-24">
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="airline"
                          className="custom-control-input"
                          id="qatar"
                        />
                        <label
                          className="custom-control-label lightest-black"
                          htmlFor="qatar"
                        >
                          Qatar Airways
                        </label>
                      </div>
                      <h5 className="light-black">(04)</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-24">
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="airline"
                          className="custom-control-input"
                          id="arabian"
                        />
                        <label
                          className="custom-control-label lightest-black"
                          htmlFor="arabian"
                        >
                          Saudi Arabian Airlines
                        </label>
                      </div>
                      <h5 className="light-black">(06)</h5>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-24">
                      <div className="radio-button">
                        <input
                          type="radio"
                          name="airline"
                          className="custom-control-input"
                          id="asian"
                        />
                        <label
                          className="custom-control-label lightest-black"
                          htmlFor="asian"
                        >
                          Air Asia
                        </label>
                      </div>
                      <h5 className="light-black">(08)</h5>
                    </div>
                    <div className="filter-block-2 box-6">
                      <div
                        className="title justify-content-start load-more-btn h5 mb-24 color-primary"
                        data-count={6}
                      >
                        {" "}
                        Show all airlines&nbsp;&nbsp;
                        <i className="fas fa-caret-down" />{" "}
                      </div>
                      <div className="content-block">
                        <div className="d-flex justify-content-between align-items-center mb-24">
                          <div className="radio-button">
                            <input
                              type="radio"
                              name="airline"
                              className="custom-control-input"
                              id="saudi"
                            />
                            <label
                              className="custom-control-label lightest-black"
                              htmlFor="saudi"
                            >
                              Saudi Arabian Airlines
                            </label>
                          </div>
                          <h5 className="light-black">(06)</h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-24">
                          <div className="radio-button">
                            <input
                              type="radio"
                              name="airline"
                              className="custom-control-input"
                              id="air_asia"
                            />
                            <label
                              className="custom-control-label lightest-black"
                              htmlFor="air_asia"
                            >
                              Air Asia
                            </label>
                          </div>
                          <h5 className="light-black">(08)</h5>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-24">
                          <div className="radio-button">
                            <input
                              type="radio"
                              name="airline"
                              className="custom-control-input"
                              id="pia-air"
                            />
                            <label
                              className="custom-control-label lightest-black"
                              htmlFor="pia-air"
                            >
                              Pakistan International Airline
                            </label>
                          </div>
                          <h5 className="light-black">(10)</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="bg-sec-gray mb-32" />
              </div>
              <div
                className="filter-block plr-24 border-0 box-4"
                data-sal="slide-right"
                data-sal-duration={800}
                data-sal-delay={100}
                data-sal-easing="ease-in-out"
              >
                <div className="title mb-32" data-count={4}>
                  <h4 className="color-black">Stops</h4>
                  <i className="fal fa-chevron-up color-primary" />
                </div>
                <div className="content-block mb-32">
                  <div className="content-block">
                    <div className="radio-tile-group sidebar mb-24">
                      <div className="input-container">
                        <input
                          id="any"
                          className="radio-button"
                          type="radio"
                          name="radio"
                          defaultValue="any"
                        />
                        <div className="radio-tile sidebar-radio">
                          <label
                            htmlFor="any"
                            className="radio-tile-label sidebar-label"
                          >
                            Any
                          </label>
                        </div>
                      </div>
                      <div className="input-container">
                        <input
                          id="non-stop"
                          className="radio-button"
                          type="radio"
                          name="radio"
                          defaultValue="non-stop"
                        />
                        <div className="radio-tile sidebar-radio">
                          <label
                            htmlFor="non-stop"
                            className="radio-tile-label sidebar-label"
                          >
                            Non-Stop
                          </label>
                        </div>
                      </div>
                      <div className="input-container">
                        <input
                          id="stop_1"
                          className="radio-button"
                          type="radio"
                          name="radio"
                          defaultValue="stop_1"
                        />
                        <div className="radio-tile sidebar-radio">
                          <label
                            htmlFor="stop_1"
                            className="radio-tile-label sidebar-label"
                          >
                            1 Stop
                          </label>
                        </div>
                      </div>
                      <div className="input-container">
                        <input
                          id="stop_2"
                          className="radio-button"
                          type="radio"
                          name="radio"
                          defaultValue="stop_2"
                        />
                        <div className="radio-tile sidebar-radio">
                          <label
                            htmlFor="stop_2"
                            className="radio-tile-label sidebar-label"
                          >
                            2 Stop
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="filter-checkbox">
                    <input type="checkbox" id="night" />
                    <label htmlFor="night" className="allow_over">
                      Allow overnight stopovers
                    </label>
                  </div>
                </div>
                <hr className="bg-sec-gray mb-32" />
              </div>
              <div
                className="filter-block plr-24 box-5"
                data-sal="slide-left"
                data-sal-duration={800}
                data-sal-delay={100}
                data-sal-easing="ease-in-out"
              >
                <div className="title mb-16 pb-4" data-count={5}>
                  <h4 className="color-black">Departure </h4>
                  <i className="fal fa-chevron-up color-primary" />
                </div>
                <div className="content-block">
                  <div className="radio-tile-group sidebar pb-24">
                    <div className="input-container">
                      <input
                        id="e-morning"
                        className="radio-button"
                        type="radio"
                        name="clock-time"
                        defaultValue="e-morning"
                      />
                      <div className="radio-tile sidebar-departure-radio">
                        <i className="fal fa-clock" />
                        <label
                          htmlFor="e-morning"
                          className="radio-tile-label departure-radio"
                        >
                          Early Morning
                        </label>
                        <h6>4:00am - 5:59am</h6>
                      </div>
                    </div>
                    <div className="input-container">
                      <input
                        id="morning"
                        className="radio-button"
                        type="radio"
                        name="clock-time"
                        defaultValue="morning"
                      />
                      <div className="radio-tile sidebar-departure-radio">
                        <i className="fal fa-clock" />
                        <label
                          htmlFor="morning"
                          className="radio-tile-label departure-radio"
                        >
                          Morning
                        </label>
                        <h6>6:00am - 11:59pm</h6>
                      </div>
                    </div>
                    <div className="input-container">
                      <input
                        id="afternoon"
                        className="radio-button"
                        type="radio"
                        name="clock-time"
                        defaultValue="after-noon"
                      />
                      <div className="radio-tile sidebar-departure-radio">
                        <i className="fal fa-clock" />
                        <label
                          htmlFor="afternoon"
                          className="radio-tile-label departure-radio"
                        >
                          Afternoon
                        </label>
                        <h6>12:00pm - 4:59pm</h6>
                      </div>
                    </div>
                    <div className="input-container">
                      <input
                        id="evening"
                        className="radio-button"
                        type="radio"
                        name="clock-time"
                        defaultValue="evening"
                      />
                      <div className="radio-tile sidebar-departure-radio">
                        <i className="fal fa-clock" />
                        <label
                          htmlFor="evening"
                          className="radio-tile-label departure-radio"
                        >
                          Evening
                        </label>
                        <h6>5:00pm - 7:59pm</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div
              className="flight-block bg-white light-shadow p-24 br-10 mb-16"
              data-sal="slide-up"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="flight-area">
                <div className="airline-name">
                  <img src="assets/media/flight_icon/icon-1.png" alt="" />
                  <div>
                    <h5 className="lightest-black mb-8">Feel Dubai Airline</h5>
                    <h6 className="dark-gray">Boeing 777-90</h6>
                  </div>
                </div>
                <div className="flight-detail">
                  <div className="flight-departure">
                    <h5 className="color-black">12:00</h5>
                    <h5 className="dark-gray text-end">DUB</h5>
                  </div>
                  <div className="d-inline-flex align-items-center gap-8">
                    <span className="">To</span>
                    <div className="from-to text-center">
                      <h5 className="dark-gray">0h 50m</h5>
                      <img src="assets/media/icons/route-plan.png" alt="" />
                      <h6 className="color-black">1 Stop</h6>
                    </div>
                    <span className="">From</span>
                  </div>
                  <div className="flight-departure">
                    <h5 className="color-black">12:50</h5>
                    <h5 className="dark-gray">SHJ</h5>
                  </div>
                </div>
                <div className="flight-button">
                  <div className="amount">
                    <h5 className="color-black">$240</h5>
                    <h6 className="dark-gray text-end">Price</h6>
                  </div>
                  <a href="flight-booking.html" className="cus-btn btn-sec">
                    Book Now
                  </a>
                </div>
              </div>
              <hr className="bg-light-gray mt-24 mb-24" />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="color-black">Monday 14 August</h5>
                <div>
                  <a
                    href="#"
                    className="accordion-button color-primary h5 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#flightDetail"
                    aria-expanded="true"
                  >
                    {" "}
                    <i className="fal fa-chevron-down color-primary " />
                    &nbsp;Flight Detail
                  </a>
                </div>
              </div>
            </div>
            <div
              id="flightDetail"
              className="accordion-collapse collapse mb-32"
              data-bs-parent="#accordionExample"
            >
              <div className="row bg-white br-10 light-shadow p-24 m-0 align-items-center">
                <div className="col-lg-3 col-sm-4">
                  <div className="time-detail">
                    <h6 className="flight-date mb-32"> 14 August, 2023</h6>
                    <h6 className="color-black mb-8">Monday, Aug 14 - 12:00</h6>
                    <h6 className="dark-gray mb-16">0h 50m</h6>
                    <h6 className="dark-gray">Monday, Aug 14 - 12:50</h6>
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8">
                  <div className="detail-block">
                    <div className="d-sm-flex d-block align-items-center gap-24">
                      <img src="assets/media/flight_icon/icon-1.png" alt="" />
                      <div className="content">
                        <h6 className="dark-gray">Tpm Line</h6>
                        <h6 className="dark-gray">
                          Operated by Feel Dubai Airlines
                        </h6>
                        <h6 className="dark-gray">
                          Economy | Flight FK234 | Aircraft BOEING 777-90
                        </h6>
                        <h6 className="dark-gray">
                          Adult(s): 25KG luggage free
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flight-block bg-white light-shadow p-24 br-10 mb-16"
              data-sal="slide-down"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="flight-area">
                <div className="airline-name">
                  <img src="assets/media/flight_icon/icon-2.png" alt="" />
                  <div>
                    <h5 className="lightest-black mb-8">
                      United Dubai Airlines
                    </h5>
                    <h6 className="dark-gray">Boeing 777-90</h6>
                  </div>
                </div>
                <div className="flight-detail">
                  <div className="flight-departure">
                    <h5 className="color-black">12:00</h5>
                    <h5 className="dark-gray text-end">DUB</h5>
                  </div>
                  <div className="d-inline-flex align-items-center gap-8">
                    <span className="">To</span>
                    <div className="from-to text-center">
                      <h5 className="dark-gray">0h 50m</h5>
                      <img src="assets/media/icons/route-plan.png" alt="" />
                      <h6 className="color-black">1 Stop</h6>
                    </div>
                    <span className="">From</span>
                  </div>
                  <div className="flight-departure">
                    <h5 className="color-black">12:50</h5>
                    <h5 className="dark-gray">SHJ</h5>
                  </div>
                </div>
                <div className="flight-button">
                  <div className="amount">
                    <h5 className="color-black">$240</h5>
                    <h6 className="dark-gray text-end">Price</h6>
                  </div>
                  <a href="flight-booking.html" className="cus-btn btn-sec">
                    Book Now
                  </a>
                </div>
              </div>
              <hr className="bg-light-gray mt-24 mb-24" />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="color-black">Monday 14 August</h5>
                <div>
                  <a
                    href="#"
                    className="accordion-button color-primary h5 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#unitedDubai"
                    aria-expanded="true"
                  >
                    {" "}
                    <i className="fal fa-chevron-down color-primary " />
                    &nbsp;Flight Detail
                  </a>
                </div>
              </div>
            </div>
            <div
              id="unitedDubai"
              className="accordion-collapse collapse mb-32"
              data-bs-parent="#accordionExample"
            >
              <div className="row bg-white br-10 light-shadow p-24 m-0 align-items-center">
                <div className="col-lg-3 col-sm-4">
                  <div className="time-detail">
                    <h6 className="flight-date mb-32"> 14 August, 2023</h6>
                    <h6 className="color-black mb-8">Monday, Aug 14 - 12:00</h6>
                    <h6 className="dark-gray mb-16">0h 50m</h6>
                    <h6 className="dark-gray">Monday, Aug 14 - 12:50</h6>
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8">
                  <div className="detail-block">
                    <div className="d-sm-flex d-block align-items-center gap-24">
                      <img src="assets/media/flight_icon/icon-2.png" alt="" />
                      <div className="content">
                        <h6 className="dark-gray">Tpm Line</h6>
                        <h6 className="dark-gray">
                          Operated by Feel Dubai Airlines
                        </h6>
                        <h6 className="dark-gray">
                          Economy | Flight FK234 | Aircraft BOEING 777-90
                        </h6>
                        <h6 className="dark-gray">
                          Adult(s): 25KG luggage free
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flight-block bg-white light-shadow p-24 br-10 mb-16"
              data-sal="slide-up"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="flight-area">
                <div className="airline-name">
                  <img src="assets/media/flight_icon/icon-1.png" alt="" />
                  <div>
                    <h5 className="lightest-black mb-8">Feel Dubai Airline</h5>
                    <h6 className="dark-gray">Boeing 777-90</h6>
                  </div>
                </div>
                <div className="flight-detail">
                  <div className="flight-departure">
                    <h5 className="color-black">12:00</h5>
                    <h5 className="dark-gray text-end">DUB</h5>
                  </div>
                  <div className="d-inline-flex align-items-center gap-8">
                    <span className="">To</span>
                    <div className="from-to text-center">
                      <h5 className="dark-gray">0h 50m</h5>
                      <img src="assets/media/icons/route-plan.png" alt="" />
                      <h6 className="color-black">1 Stop</h6>
                    </div>
                    <span className="">From</span>
                  </div>
                  <div className="flight-departure">
                    <h5 className="color-black">12:50</h5>
                    <h5 className="dark-gray">SHJ</h5>
                  </div>
                </div>
                <div className="flight-button">
                  <div className="amount">
                    <h5 className="color-black">$240</h5>
                    <h6 className="dark-gray text-end">Price</h6>
                  </div>
                  <a href="flight-booking.html" className="cus-btn btn-sec">
                    Book Now
                  </a>
                </div>
              </div>
              <hr className="bg-light-gray mt-24 mb-24" />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="color-black">Monday 14 August</h5>
                <div>
                  <a
                    href="#"
                    className="accordion-button color-primary h5 collapsed"
                    data-bs-toggle="collapse"
                    data-bs-target="#feelDubai"
                    aria-expanded="true"
                  >
                    {" "}
                    <i className="fal fa-chevron-down color-primary " />
                    &nbsp;Flight Detail
                  </a>
                </div>
              </div>
            </div>
            <div
              id="feelDubai"
              className="accordion-collapse collapse mb-32"
              data-bs-parent="#accordionExample"
            >
              <div className="row bg-white br-10 light-shadow p-24 m-0 align-items-center">
                <div className="col-lg-3 col-sm-4">
                  <div className="time-detail">
                    <h6 className="flight-date mb-32"> 14 August, 2023</h6>
                    <h6 className="color-black mb-8">Monday, Aug 14 - 12:00</h6>
                    <h6 className="dark-gray mb-16">0h 50m</h6>
                    <h6 className="dark-gray">Monday, Aug 14 - 12:50</h6>
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8">
                  <div className="detail-block">
                    <div className="d-sm-flex d-block align-items-center gap-24">
                      <img src="assets/media/flight_icon/icon-1.png" alt="" />
                      <div className="content">
                        <h6 className="dark-gray">Tpm Line</h6>
                        <h6 className="dark-gray">
                          Operated by Feel Dubai Airlines
                        </h6>
                        <h6 className="dark-gray">
                          Economy | Flight FK234 | Aircraft BOEING 777-90
                        </h6>
                        <h6 className="dark-gray">
                          Adult(s): 25KG luggage free
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flight-block bg-white light-shadow p-24 br-10 mb-16"
              data-sal="slide-down"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="flight-area">
                <div className="airline-name">
                  <img src="assets/media/flight_icon/icon-2.png" alt="" />
                  <div>
                    <h5 className="lightest-black mb-8">
                      United Dubai Airline
                    </h5>
                    <h6 className="dark-gray">Boeing 777-90</h6>
                  </div>
                </div>
                <div className="flight-detail">
                  <div className="flight-departure">
                    <h5 className="color-black">12:00</h5>
                    <h5 className="dark-gray text-end">DUB</h5>
                  </div>
                  <div className="d-inline-flex align-items-center gap-8">
                    <span className="">To</span>
                    <div className="from-to text-center">
                      <h5 className="dark-gray">0h 50m</h5>
                      <img src="assets/media/icons/route-plan.png" alt="" />
                      <h6 className="color-black">1 Stop</h6>
                    </div>
                    <span className="">From</span>
                  </div>
                  <div className="flight-departure">
                    <h5 className="color-black">12:50</h5>
                    <h5 className="dark-gray">SHJ</h5>
                  </div>
                </div>
                <div className="flight-button">
                  <div className="amount">
                    <h5 className="color-black">$240</h5>
                    <h6 className="dark-gray text-end">Price</h6>
                  </div>
                  <a href="flight-booking.html" className="cus-btn btn-sec">
                    Book Now
                  </a>
                </div>
              </div>
              <hr className="bg-light-gray mt-24 mb-24" />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="color-black">Monday 14 August</h5>
                <div>
                  <a
                    href="#"
                    className="accordion-button color-primary collapsed h5"
                    data-bs-toggle="collapse"
                    data-bs-target="#dubaiAirlines"
                    aria-expanded="true"
                  >
                    {" "}
                    <i className="fal fa-chevron-down color-primary " />
                    &nbsp;Flight Detail
                  </a>
                </div>
              </div>
            </div>
            <div
              id="dubaiAirlines"
              className="accordion-collapse collapse mb-32"
              data-bs-parent="#accordionExample"
            >
              <div className="row bg-white br-10 light-shadow p-24 m-0 align-items-center">
                <div className="col-lg-3 col-sm-4">
                  <div className="time-detail">
                    <h6 className="flight-date mb-32"> 14 August, 2023</h6>
                    <h6 className="color-black mb-8">Monday, Aug 14 - 12:00</h6>
                    <h6 className="dark-gray mb-16">0h 50m</h6>
                    <h6 className="dark-gray">Monday, Aug 14 - 12:50</h6>
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8">
                  <div className="detail-block">
                    <div className="d-sm-flex d-block align-items-center gap-24">
                      <img src="assets/media/flight_icon/icon-2.png" alt="" />
                      <div className="content">
                        <h6 className="dark-gray">Tpm Line</h6>
                        <h6 className="dark-gray">
                          Operated by Feel Dubai Airlines
                        </h6>
                        <h6 className="dark-gray">
                          Economy | Flight FK234 | Aircraft BOEING 777-90
                        </h6>
                        <h6 className="dark-gray">
                          Adult(s): 25KG luggage free
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flight-block bg-white light-shadow p-24 br-10 mb-16"
              data-sal="slide-up"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="flight-area">
                <div className="airline-name">
                  <img src="assets/media/flight_icon/icon-1.png" alt="" />
                  <div>
                    <h5 className="lightest-black mb-8">Feel Dubai Airline</h5>
                    <h6 className="dark-gray">Boeing 777-90</h6>
                  </div>
                </div>
                <div className="flight-detail">
                  <div className="flight-departure">
                    <h5 className="color-black">12:00</h5>
                    <h5 className="dark-gray text-end">DUB</h5>
                  </div>
                  <div className="d-inline-flex align-items-center gap-8">
                    <span className="">To</span>
                    <div className="from-to text-center">
                      <h5 className="dark-gray">0h 50m</h5>
                      <img src="assets/media/icons/route-plan.png" alt="" />
                      <h6 className="color-black">1 Stop</h6>
                    </div>
                    <span className="">From</span>
                  </div>
                  <div className="flight-departure">
                    <h5 className="color-black">12:50</h5>
                    <h5 className="dark-gray">SHJ</h5>
                  </div>
                </div>
                <div className="flight-button">
                  <div className="amount">
                    <h5 className="color-black">$240</h5>
                    <h6 className="dark-gray text-end">Price</h6>
                  </div>
                  <a href="flight-booking.html" className="cus-btn btn-sec">
                    Book Now
                  </a>
                </div>
              </div>
              <hr className="bg-light-gray mt-24 mb-24" />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="color-black">Monday 14 August</h5>
                <div>
                  <a
                    href="#"
                    className="accordion-button color-primary collapsed h5"
                    data-bs-toggle="collapse"
                    data-bs-target="#unitedAirline"
                    aria-expanded="true"
                  >
                    {" "}
                    <i className="fal fa-chevron-down color-primary " />
                    &nbsp;Flight Detail
                  </a>
                </div>
              </div>
            </div>
            <div
              id="unitedAirline"
              className="accordion-collapse collapse mb-32"
              data-bs-parent="#accordionExample"
            >
              <div className="row bg-white br-10 light-shadow p-24 m-0 align-items-center">
                <div className="col-lg-3 col-sm-4">
                  <div className="time-detail">
                    <h6 className="flight-date mb-32"> 14 August, 2023</h6>
                    <h6 className="color-black mb-8">Monday, Aug 14 - 12:00</h6>
                    <h6 className="dark-gray mb-16">0h 50m</h6>
                    <h6 className="dark-gray">Monday, Aug 14 - 12:50</h6>
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8">
                  <div className="detail-block">
                    <div className="d-sm-flex d-block align-items-center gap-24">
                      <img src="assets/media/flight_icon/icon-1.png" alt="" />
                      <div className="content">
                        <h6 className="dark-gray">Tpm Line</h6>
                        <h6 className="dark-gray">
                          Operated by Feel Dubai Airlines
                        </h6>
                        <h6 className="dark-gray">
                          Economy | Flight FK234 | Aircraft BOEING 777-90
                        </h6>
                        <h6 className="dark-gray">
                          Adult(s): 25KG luggage free
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flight-block bg-white light-shadow  p-24 br-10 mb-16"
              data-sal="slide-down"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="flight-area">
                <div className="airline-name">
                  <img src="assets/media/flight_icon/icon-2.png" alt="" />
                  <div>
                    <h5 className="lightest-black mb-8">
                      United Dubai Airline
                    </h5>
                    <h6 className="dark-gray">Boeing 777-90</h6>
                  </div>
                </div>
                <div className="flight-detail">
                  <div className="flight-departure">
                    <h5 className="color-black">12:00</h5>
                    <h5 className="dark-gray text-end">DUB</h5>
                  </div>
                  <div className="d-inline-flex align-items-center gap-8">
                    <span className="">To</span>
                    <div className="from-to text-center">
                      <h5 className="dark-gray">0h 50m</h5>
                      <img src="assets/media/icons/route-plan.png" alt="" />
                      <h6 className="color-black">1 Stop</h6>
                    </div>
                    <span className="">From</span>
                  </div>
                  <div className="flight-departure">
                    <h5 className="color-black">12:50</h5>
                    <h5 className="dark-gray">SHJ</h5>
                  </div>
                </div>
                <div className="flight-button">
                  <div className="amount">
                    <h5 className="color-black">$240</h5>
                    <h6 className="dark-gray text-end">Price</h6>
                  </div>
                  <a href="flight-booking.html" className="cus-btn btn-sec">
                    Book Now
                  </a>
                </div>
              </div>
              <hr className="bg-light-gray mt-24 mb-24" />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="color-black">Monday 14 August</h5>
                <div>
                  <a
                    href="#"
                    className="accordion-button color-primary collapsed h5"
                    data-bs-toggle="collapse"
                    data-bs-target="#feelAirline"
                    aria-expanded="true"
                  >
                    {" "}
                    <i className="fal fa-chevron-down color-primary " />
                    &nbsp;Flight Detail
                  </a>
                </div>
              </div>
            </div>
            <div
              id="feelAirline"
              className="accordion-collapse collapse mb-32"
              data-bs-parent="#accordionExample"
            >
              <div className="row bg-white br-10 light-shadow p-24 m-0 align-items-center">
                <div className="col-lg-3 col-sm-4">
                  <div className="time-detail">
                    <h6 className="flight-date mb-32"> 14 August, 2023</h6>
                    <h6 className="color-black mb-8">Monday, Aug 14 - 12:00</h6>
                    <h6 className="dark-gray mb-16">0h 50m</h6>
                    <h6 className="dark-gray">Monday, Aug 14 - 12:50</h6>
                  </div>
                </div>
                <div className="col-lg-9 col-sm-8">
                  <div className="detail-block">
                    <div className="d-sm-flex d-block align-items-center gap-24">
                      <img src="assets/media/flight_icon/icon-2.png" alt="" />
                      <div className="content">
                        <h6 className="dark-gray">Tpm Line</h6>
                        <h6 className="dark-gray">
                          Operated by Feel Dubai Airlines
                        </h6>
                        <h6 className="dark-gray">
                          Economy | Flight FK234 | Aircraft BOEING 777-90
                        </h6>
                        <h6 className="dark-gray">
                          Adult(s): 25KG luggage free
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="paginations mt-8">
              <ul className="unstyled">
                <li className="active">
                  <a href="#" className="h6 fw-600 mb-0">
                    1
                  </a>
                </li>
                <li>
                  <a href="#" className="h6 fw-600 mb-0">
                    2
                  </a>
                </li>
                <li>
                  <a href="#" className="h6 fw-600 mb-0">
                    3
                  </a>
                </li>
                <li>
                  <a href="#" className="h6 fw-600 mb-0">
                    4
                  </a>
                </li>
                <li className="arrow">
                  <a href="#" className="h4 fw-600 mb-0">
                    <i className="far fa-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Flight Listing End */}
  </div>
  {/* Main Content End */}
</>

      
    </div>
  )
}

export default FlightListing
