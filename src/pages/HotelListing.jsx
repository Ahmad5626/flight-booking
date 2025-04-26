import React from 'react'

const HotelListing = () => {
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
              Hotel <br className="title-break" /> Listing
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
    {/* Benefits Start */}
    <section
      className="benefit p-40"
      data-sal="slide-right"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 mb-xl-0 mb-24">
            <div className="benefit-block bg-white">
              <div className="image-box">
                <img src="assets/media/icons/benefit-1.png" alt="" />
              </div>
              <div className="text-box">
                <h4 className="lightest-black">Free Cancellation</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-lg-0 mb-24">
            <div className="benefit-block bg-white">
              <div className="image-box">
                <img src="assets/media/icons/benefit-2.png" alt="" />
              </div>
              <div className="text-box">
                <h4 className="lightest-black">No Hidden Charges</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 ">
            <div className="benefit-block bg-white">
              <div className="image-box">
                <img src="assets/media/icons/benefit-3.png" alt="" />
              </div>
              <div className="text-box">
                <h4 className="lightest-black">24/7 Customer Service</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Benefits End */}
    {/* Hotel Listing Start */}
    <section className="hotel-listing p-40 mb-24">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 mb-xl-0 mb-32">
            <div className="hotel-sidebar mb-32">
              <div className="hotel-sidebar_title">
                <h4 className="color-black">Search</h4>
              </div>
              <form
                action="https://uiparadox.co.uk/templates/flynow/v3/hotel-listing.html"
                method="post"
                className="bg-white contact-form"
              >
                <div className="hotel-info mb-16">
                  <div className="custom-sel-input-block location-select">
                    <label
                      htmlFor="destinationSearch"
                      className="h6 color-medium-gray mb-2"
                    >
                      Destination/ property
                    </label>
                    <i className="fal fa-search" />
                    <input
                      type="text"
                      className="sel-input location-input auto-input-location"
                      id="destinationSearch"
                      placeholder="Search"
                    />
                    <div className="slector-wrapper" />
                  </div>
                </div>
                <div className="hotel-info mb-16">
                  <div className="custom-sel-input-block m-0">
                    <label
                      htmlFor="dateCheckIn"
                      className="h6 color-medium-gray mb-1"
                    >
                      Check-in date
                    </label>
                    <div className="d-flex align-items-center gap-8">
                      <i className="fal fa-calendar-alt " />
                      <input
                        type="text"
                        className="sel-input date_to"
                        id="dateCheckIn"
                        placeholder="Check-in date"
                      />
                    </div>
                  </div>
                </div>
                <div className="hotel-info mb-16">
                  <div className="custom-sel-input-block m-0">
                    <label
                      htmlFor="dateCheckOut"
                      className="h6 color-medium-gray mb-1"
                    >
                      Check-out date
                    </label>
                    <div className="d-flex align-items-center gap-8">
                      <i className="fal fa-calendar-alt " />
                      <input
                        type="text"
                        className="sel-input date_to"
                        id="dateCheckOut"
                        placeholder="Check-out date"
                      />
                    </div>
                  </div>
                </div>
                <div className="hotel-info mb-16">
                  <div>
                    <div className="custom-sel-input-block">
                      <div className="h6 color-medium-gray">
                        Guests and Room
                      </div>
                      <div className="room-booking color-black h6">
                        {" "}
                        <span className="total-guest">2</span> Guests /{" "}
                        <span className="guest-class">Room</span>
                      </div>
                      <div className="passenger-area room-box bg-white light-shadow br-5 p-24">
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
                <div className="filter-checkbox mb-16">
                  <input type="checkbox" id="rentalHoliday" />
                  <label htmlFor="rentalHoliday" className="">
                    Show me holiday rentals
                  </label>
                </div>
                <div className="filter-checkbox mb-32">
                  <input type="checkbox" id="travel" />
                  <label htmlFor="travel" className="">
                    I'm travelling for work
                  </label>
                </div>
                <button type="submit" className="cus-btn full-width">
                  Search
                </button>
              </form>
            </div>
            <div
              className="hotel-sidebar"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="hotel-sidebar_title">
                <h4 className="color-black">Filter By:</h4>
              </div>
              <div className="filter-block p-24 bg-white">
                <div className="title mb-32">
                  <h4 className="color-black">Price Range (Per Night) </h4>
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
                <h4 className="color-black mb-24">Popular Filters </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="bed" />
                    <label htmlFor="bed" className="color-black">
                      Twin Beds
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="self" />
                    <label htmlFor="self" className="color-black">
                      Self Catering
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="prepayment" />
                    <label htmlFor="prepayment" className="color-black">
                      No Prepayment
                    </label>
                  </div>
                  <h6 className="color-black">(06) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="stars" />
                    <label htmlFor="stars" className="color-black">
                      3 Stars
                    </label>
                  </div>
                  <h6 className="color-black">(08) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Travel Sustainable </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="level" />
                    <label htmlFor="level" className="color-black">
                      Level 3+
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="level-3" />
                    <label htmlFor="level-3" className="color-black">
                      Level 3 and Higher
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="level-2" />
                    <label htmlFor="level-2" className="color-black">
                      Level 2 and Higher
                    </label>
                  </div>
                  <h6 className="color-black">(06) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="level-1" />
                    <label htmlFor="level-1" className="color-black">
                      Level 1 and Higher
                    </label>
                  </div>
                  <h6 className="color-black">(08) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Property Rating </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="star-1" />
                    <label htmlFor="star-1" className="color-black">
                      1 Star
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="star-2" />
                    <label htmlFor="star-2" className="color-black">
                      2 Star
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="star-3" />
                    <label htmlFor="star-3" className="color-black">
                      3 Star
                    </label>
                  </div>
                  <h6 className="color-black">(06) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="star-4" />
                    <label htmlFor="star-4" className="color-black">
                      4 Stars
                    </label>
                  </div>
                  <h6 className="color-black">(08) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="star-5" />
                    <label htmlFor="star-5" className="color-black">
                      5 Stars
                    </label>
                  </div>
                  <h6 className="color-black">(10) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="unrated" />
                    <label htmlFor="unrated" className="color-black">
                      Unrated
                    </label>
                  </div>
                  <h6 className="color-black">(00) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">
                  Distance from center of Dubai{" "}
                </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="km_1" />
                    <label htmlFor="km_1" className="color-black">
                      Less than 1 km
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="km_3" />
                    <label htmlFor="km_3" className="color-black">
                      Less than 3 km
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="km_5" />
                    <label htmlFor="km_5" className="color-black">
                      Less than 5 km
                    </label>
                  </div>
                  <h6 className="color-black">(06) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Fun things to do</h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="fitness" />
                    <label htmlFor="fitness" className="color-black">
                      Fitness Center
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="fit" />
                    <label htmlFor="fit" className="color-black">
                      Fitness
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="sauna" />
                    <label htmlFor="sauna" className="color-black">
                      Sauna
                    </label>
                  </div>
                  <h6 className="color-black">(06) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="wellness" />
                    <label htmlFor="wellness" className="color-black">
                      Spa and wellness Center
                    </label>
                  </div>
                  <h6 className="color-black">(08) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="spa_room" />
                    <label htmlFor="spa_room" className="color-black">
                      Fitness/ Spa locker rooms
                    </label>
                  </div>
                  <h6 className="color-black">(08) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Cancellation Policy </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="freeCancel" />
                    <label htmlFor="freeCancel" className="color-black">
                      Free cancellations
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="book" />
                    <label htmlFor="book" className="color-black">
                      Book without Credit Card
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="prePay" />
                    <label htmlFor="prePay" className="color-black">
                      No Prepayment
                    </label>
                  </div>
                  <h6 className="color-black">(06) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Meals </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="selfCater" />
                    <label htmlFor="selfCater" className="color-black">
                      Self Catering
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="breakfast" />
                    <label htmlFor="breakfast" className="color-black">
                      Beakfast
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="inclusive" />
                    <label htmlFor="inclusive" className="color-black">
                      All Inclusive
                    </label>
                  </div>
                  <h6 className="color-black">(06) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="lunch" />
                    <label htmlFor="lunch" className="color-black">
                      Beakfast &amp; lunch included
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="dinner" />
                    <label htmlFor="dinner" className="color-black">
                      Beakfast &amp; dinner included
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Property Type </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="holidayRent" />
                    <label htmlFor="holidayRent" className="color-black">
                      Holiday Rentals
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="apartment" />
                    <label htmlFor="apartment" className="color-black">
                      Apartments
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="hotels" />
                    <label htmlFor="hotels" className="color-black">
                      Hotels
                    </label>
                  </div>
                  <h6 className="color-black">(06) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="hostel" />
                    <label htmlFor="hostel" className="color-black">
                      Hostels
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="villas" />
                    <label htmlFor="villas" className="color-black">
                      Villas
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Number of Bedrooms </h4>
                <div className="d-flex justify-content-between align-items-center mb-32">
                  <h5 className="color-black">Bedrooms </h5>
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
                      id="adultQuantityinput"
                      className="number"
                    />
                    <input
                      className="increment bg-primary color-white"
                      type="button"
                      defaultValue="+"
                    />
                  </div>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Number of Bathrooms </h4>
                <div className="d-flex justify-content-between align-items-center mb-32">
                  <h5 className="color-black">Bathrooms </h5>
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
                      id="adultInput"
                      className="number"
                    />
                    <input
                      className="increment bg-primary color-white"
                      type="button"
                      defaultValue="+"
                    />
                  </div>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Landmarks </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="burj" />
                    <label htmlFor="burj" className="color-black">
                      Burj Khalifa
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="dubaiMall" />
                    <label htmlFor="dubaiMall" className="color-black">
                      Dubai Mall
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Bed Preference </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="twinBed" />
                    <label htmlFor="twinBed" className="color-black">
                      Twin beds
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="doubleBed" />
                    <label htmlFor="doubleBed" className="color-black">
                      Double bed
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Review Score </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="superb" />
                    <label htmlFor="superb" className="color-black">
                      Superb: 9+
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="veryGood" />
                    <label htmlFor="veryGood" className="color-black">
                      Very Good: 8+
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="good" />
                    <label htmlFor="good" className="color-black">
                      Good: 7+
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="pleasent" />
                    <label htmlFor="pleasent" className="color-black">
                      Pleasent: 6+
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Facilities </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="non_smoking" />
                    <label htmlFor="non_smoking" className="color-black">
                      Non-smoking rooms
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="f_wifi" />
                    <label htmlFor="f_wifi" className="color-black">
                      Free Wifi
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="fitNess" />
                    <label htmlFor="fitNess" className="color-black">
                      Fitness Center
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="family" />
                    <label htmlFor="family" className="color-black">
                      Family rooms
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Room Facilities </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="air_condition" />
                    <label htmlFor="air_condition" className="color-black">
                      Air Conditioning
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="priv_bath" />
                    <label htmlFor="priv_bath" className="color-black">
                      Private bathroom
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="balcony" />
                    <label htmlFor="balcony" className="color-black">
                      Balcony
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="pool" />
                    <label htmlFor="pool" className="color-black">
                      Private Pool
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="seaView" />
                    <label htmlFor="seaView" className="color-black">
                      Sea View
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Neighbourhood </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="beach" />
                    <label htmlFor="beach" className="color-black">
                      Beach &amp; Coast
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="deira" />
                    <label htmlFor="deira" className="color-black">
                      Deira
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="shRoad" />
                    <label htmlFor="shRoad" className="color-black">
                      Sheikh Zayed Road
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="burDubai" />
                    <label htmlFor="burDubai" className="color-black">
                      Bur Dubai
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="palm" />
                    <label htmlFor="palm" className="color-black">
                      Palm Jumeirah
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Brands </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="hotelBeach" />
                    <label htmlFor="hotelBeach" className="color-black">
                      Millennium Hotels
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="jumeirah" />
                    <label htmlFor="jumeirah" className="color-black">
                      Jumeirah
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="rove" />
                    <label htmlFor="rove" className="color-black">
                      Rove Hotels
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="maison" />
                    <label htmlFor="maison" className="color-black">
                      Maison Privee
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="rotana" />
                    <label htmlFor="rotana" className="color-black">
                      Rotana Hotels &amp; Resorts
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Property Accessbility </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="wheelchairAccess" />
                    <label htmlFor="wheelchairAccess" className="color-black">
                      Wheelchair accessible
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="toilet" />
                    <label htmlFor="toilet" className="color-black">
                      Toilet with grab rails
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="higherLevel" />
                    <label htmlFor="higherLevel" className="color-black">
                      Higher level toilet
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="auditory" />
                    <label htmlFor="auditory" className="color-black">
                      Auditory guidance
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <hr className="bg-sec-gray mb-32" />
                <h4 className="color-black mb-24">Room Accessbility </h4>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="showerWalkin" />
                    <label htmlFor="showerWalkin" className="color-black">
                      Walk-in shower
                    </label>
                  </div>
                  <h6 className="color-black">(02) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="rollShower" />
                    <label htmlFor="rollShower" className="color-black">
                      Roll-in shower
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="grabToitels" />
                    <label htmlFor="grabToitels" className="color-black">
                      Toilet with grab rails
                    </label>
                  </div>
                  <h6 className="color-black">(04) </h6>
                </div>
                <div className="d-flex justify-content-between mb-24">
                  <div className="filter-checkbox">
                    <input type="checkbox" id="adapted" />
                    <label htmlFor="adapted" className="color-black">
                      Adapted bath
                    </label>
                  </div>
                  <h6 className="color-black">(08) </h6>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224647.0148824593!2d55.16388137376826!3d25.103091957624738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1701182306704!5m2!1sen!2s"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-8">
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Sofitel Dubai Jumeirah Beach Opens in new window
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-right"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-2.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      SJW Marriott Marquis Dubai
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-3.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Hilton Dubai Al Habtoor City
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-right"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-4.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Grosvenor House West Marina Beach Dubai
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-5.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      InterContinental Dubai Festival City
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-right"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-6.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Sheraton Dubai Creek Hotel &amp; Towers
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-7.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Dubai Marine Beach Resort &amp; Spa
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-right"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-8.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      The Ritz Carlton, Dubai International Financial Centre
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-9.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Sofitel Dubai Jumeirah Beach Opens in new window
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-right"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-10.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Kempinski Hotel Mall of the Emirates
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-11.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Sofitel Dubai Jumeirah Beach Opens in new window
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-right"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-12.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      InterContinental Dubai Festival City
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-13.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Golden Sands Hotel Apartments
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-right"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-14.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Rose Rayhaan by Rotana
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hotel-block bg-white mb-32"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="row align-items-center  row-gap-3">
                <div className="col-lg-5 col-md-4 col-sm-12">
                  <div className="image-box">
                    <a href="hotel-detail.html">
                      <img src="assets/media/hotel/hotel-1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-5 col-sm-6">
                  <div className="hotel-detail p-0">
                    <div className="rating-star mb-8">
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                      <i className="fas fa-star color-sec" />
                    </div>
                    <a href="hotel-detail.html" className="mb-32 h5">
                      Sofitel Dubai Jumeirah Beach Opens in new window
                    </a>
                    <div className="apartment-detail mb-12">
                      <h6 className="light-black">Standard Apartment</h6>
                      <h6 className="dark-gray">
                        Entire apartment • 1 bedroom • 1 living room • 1
                        bathroom • 1 kitchen • 110m²
                      </h6>
                      <h6 className="dark-gray mb-12">
                        1 extra-large double bed
                      </h6>
                      <h6 className="color-primary">
                        Only 1 left at this price on our site
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-6">
                  <div className="pricing p-0">
                    <div className="review mb-64">
                      <div className="text-sm-end text-center">
                        <h6 className="color-black">Superb</h6>
                        <h6 className="dark-gray">1500 reviews</h6>
                      </div>
                      <h6 className="rating-number">9.6</h6>
                    </div>
                    <div className="text-sm-end text-center mb-64">
                      <p className="color-black">3 Night, 2 adults</p>
                      <h3 className="color-black fw-700">$ 340:00</h3>
                      <p className="color-black">$ 130 taxes and charges</p>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Select
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="paginations">
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
    {/* Hotel Listing End */}
  </div>
  {/* Main Content End */}
</>

    </div>
  )
}

export default HotelListing
