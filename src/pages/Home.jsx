import React from 'react'
import { motion } from "motion/react"
import '@splidejs/react-splide/css'; // Default theme
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../assets/css/vendor/font-awesome.css'
import '../assets/css/fonts/icomoon/style.css'
import '../assets/css/vendor/bootstrap.min.css'
import '../assets/css/vendor/slick.css'
import '../assets/css/vendor/slick-theme.css'
import '../assets/css/vendor/datetime.css'
import '../assets/css/vendor/calendar/classic.css'
import '../assets/css/vendor/calendar/classic.date.css'
import '../assets/css/vendor/jquery.timepicker.min.css'
import '../assets/css/vendor/ui-autocomplete.css'
// import '../assets/css/vendor/sal.css'
import '../assets/css/app.css'


// JS
import '../assets/js/vendor/jquery-3.6.3.min.js'
// import '../assets/js/vendor/calendar/popper.min.js'
import '../assets/js/vendor/bootstrap.min.js'
// import '../assets/js/vendor/slick.min.js'
// import '../assets/js/vendor/jquery-appear.js'
// import '../assets/js/vendor/jquery-validator.js'
// import '../assets/js/vendor/aksVideoPlayer.js'
// import '../assets/js/vendor/tilt.jquery.js'
// import '../assets/js/vendor/calendar/picker.js'
// import '../assets/js/vendor/calendar/picker.date.js'
// import '../assets/js/vendor/autoComplete.js'
// import '../assets/js/vendor/jquery.timepicker.min.js'
// import '../assets/js/vendor/sal.js'
// import '../assets/js/date.js'
// import '../assets/js/app.js'
import Footer from '../component/Footer.jsx';
import Header from '../component/Header.jsx';
import Search from '../component/Search.jsx';

// imgs

const Home = () => {
  return (
    <div>
    
      <>
  {/* Preloader*/}
  {/* <div id="preloader">
    <div className="loader">
      <div className="plane">
        <img
          src="../../../../www.zupimages.net/viewerfdbe.html"
          className="plane-img"
          alt=""
        />
      </div>
      <div className="earth-wrapper">
        <div className="earth" />
      </div>
    </div>
  </div> */}
  {/* Main Wrapper Start */}
  <div id="main-wrapper" className="main-wrapper mr-4">
 
    {/* Hero Banner start */}
    <section className="hero-banner-1">
      <div className="container-fluid">
        <div className="content">
          <div className="vector-image">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={1414}
              height={319}
              viewBox="0 0 1414 319"
              fill="none"
            >
              <path
                className="path"
                d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5"
                stroke="#ECECF2"
                strokeWidth={6}
                strokeLinecap="round"
                strokeDasharray="round"
              />
              <path
                className="dashed"
                d="M-0.5 215C62.4302 220.095 287 228 373 143.5C444.974 72.7818 368.5 -3.73136 320.5 1.99997C269.5 8.08952 231.721 43.5 253.5 119C275.279 194.5 367 248.212 541.5 207.325C675.76 175.867 795.5 82.7122 913 76.7122C967.429 73.9328 1072.05 88.6813 1085 207.325C1100 344.712 882 340.212 922.5 207.325C964.415 69.7967 1354 151.5 1479 183.5"
                stroke="#212627"
                strokeWidth={6}
                strokeLinecap="round"
                strokeDasharray="22 22"
              />
            </svg>
            <div className="location-image">
              <img src="./assets/media/icons/location-blue.png" alt="" />
            </div>
          </div>
          <div className="row align-items-center row-gap-5">
            <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-5 col-sm-5">
              <div className="content-block">
                <h1 className="lightest-black mb-16">
                  <span className="color-primary">Book</span> Your <br /> Dream{" "}
                  <span className="color-primary">Flights</span> Now!
                </h1>
                <p className="dark-gray mb-24">
                  Lorem ipsum dolor sit amet consectetur. Felis tristique
                  pretium leo nisi at risus ac enim.
                </p>
                <a href="flight-booking.html" className="cus-btn ">
                  Book Now
                </a>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-7 col-sm-7">
              <div
                className="image flynow-tilt"
                data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 3, "speed": 700, "scale": 1.02 }'
              >
                <img src="./assets/media/banner/plane.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Hero Banner End */}
    {/* Booking Area Start */}
    <Search/>
    {/* Booking Area End */}
    {/* Benefits Start */}
    <section
      className="benefit p-40"
      
      
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 mb-xl-0 mb-24">
            <div className="benefit-block bg-white">
              <div className="image-box">
                <img src="./assets/media/vector/benefit-1.png" alt="" />
              </div>
              <div className="text-box">
                <h4 className="lightest-black mb-8">We are Now Available</h4>
                <p className="color-medium-gray">
                  Call +1 555 666 888 contact with us
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 mb-lg-0 mb-24">
            <div className="benefit-block bg-white">
              <div className="image-box">
                <img src="./assets/media/vector/benefit-2.png" alt="" />
              </div>
              <div className="text-box">
                <h4 className="lightest-black mb-8">International Flight</h4>
                <p className="color-medium-gray">
                  Call +1 555 666 888 contact with us
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6 col-md-6 ">
            <div className="benefit-block bg-white">
              <div className="image-box">
                <img src="./assets/media/vector/benefit-3.png" alt="" />
              </div>
              <div className="text-box">
                <h4 className="lightest-black mb-8">Check Refund</h4>
                <p className="color-medium-gray">
                  Call +1 555 666 888 contact with us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Benefits End */}
    {/* Flight Card Slider Start */}
    <section
      className="flight-card p-40 mb-40"
      data-sal="slide-down"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
    </section>
    {/* Flight Card Slider End */}
    {/* Travel us sec Start */}
    <div className="travel-sec mb-40">
      <div className="cloud-vector-block">
        <img
          src="./assets/media/vector/cloud-vector.png"
          alt=""
          className="cloud-vector"
        />
      </div>
      <img
        src="./assets/media/vector/vector-line.png"
        alt=""
        className="line-vector"
      />
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center row-gap-sm-5 row-gap-4">
          <div
            className="col-xxl-3 col-lg-4 col-md-8"
            data-sal="slide-right"
            data-sal-duration={800}
            data-sal-delay={100}
            data-sal-easing="ease-in-out"
          >
            <div className="left-content">
              <img src="./assets/media/logo.png" alt="" className="mb-40" />
              <div className="text mb-40">
                <span className="h1 review-block bg-lightest-gray">
                  {" "}
                  TRAVEL
                </span>{" "}
                <span className="h1 review-block bg-lightest-gray">All</span>
                <span className="h1 bg-lightest-gray"> OVER</span>{" "}
                <span className="h1 bg-lightest-gray color-primary">The</span>
                <span className="h1 bg-lightest-gray color-primary">
                  {" "}
                  WORLD
                </span>
              </div>
              <a href="flight-booking.html" className="cus-btn">
                Booking Now
              </a>
            </div>
          </div>
          <div className="offset-xxl-1 col-xxl-8 col-lg-8 col-md-10">
            <div
              className="right-images-block"
              data-sal="slide-up"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <img
                src="./assets/media/vector/border-line.png"
                alt=""
                className="border-image"
              />
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-3 col-md-3 col-3">
                  <img
                    src="./assets/media/images/paris.png"
                    alt=""
                    className="side-image"
                  />
                </div>
                <div className="col-lg-5 col-md-5 col-5">
                  <img
                    src="./assets/media/images/dubai.png"
                    alt=""
                    className="center-image"
                  />
                </div>
                <div className="col-lg-3 col-md-3 col-3">
                  <img
                    src="./assets/media/images/italy.png"
                    alt=""
                    className="side-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Travel us sec End */}
    {/* Global Travel Start */}
    <section className="global-travel-hotel p-40">
      <div className="container-fluid">
        <div className="d-flex justify-content-between mb-40 flex-md-nowrap flex-wrap">
          <h3 className="fw-700 lightest-black mb-md-0 mb-3">
            Popular Global Travel Destinations
          </h3>
          <a href="hotel-listing.html" className="cus-btn ">
            Show More
          </a>
        </div>
        <div className="row justify-content-center row-gap-4">
          <div
            className="col-xxl-6 col-lg-5 col-md-7 col-10"
            data-sal="slide-right"
            data-sal-duration={800}
            data-sal-delay={100}
            data-sal-easing="ease-in-out"
          >
            <img src="./assets/media/images/map.png" alt="" />
          </div>
          <div className="col-xxl-6 col-lg-7">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6"
                data-sal="slide-left"
                data-sal-duration={800}
                data-sal-delay={100}
                data-sal-easing="ease-in-out"
              >
                <div className="hotel-block bg-white p-24 light-shadow mb-24">
                  <div className="image-box mb-24">
                    <a href="hotel-detail.html">
                      <img src="./assets/media/cities/image-1.png" alt="" />
                    </a>
                    <div className="price">
                      <h6>
                        form <span className="color-sec">$350</span>
                      </h6>
                    </div>
                  </div>
                  <div className="content-box">
                    <h5 className="black mb-8">
                      <a href="hotel-detail.html">Rome</a>
                    </h5>
                    <div className="d-flex gap-8 mb-24">
                      <div className="icon d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/location.png" alt="" />
                        <h6 className="color-medium-gray">Italy - </h6>
                      </div>
                      <div className="icon d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/hotel.png" alt="" />
                        <h6 className="color-medium-gray">Hotels </h6>
                      </div>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Discover
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="hotel-block bg-white p-24 light-shadow mb-24">
                  <div className="image-box mb-24">
                    <a href="hotel-detail.html">
                      <img src="./assets/media/cities/image-2.png" alt="" />
                    </a>
                    <div className="price">
                      <h6>
                        form <span className="color-sec">$260</span>
                      </h6>
                    </div>
                  </div>
                  <div className="content-box">
                    <h5 className="black mb-8">
                      <a href="hotel-detail.html">Tokyo</a>
                    </h5>
                    <div className="d-flex gap-8 mb-24">
                      <div className="icon d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/location.png" alt="" />
                        <h6 className="color-medium-gray">Japan - </h6>
                      </div>
                      <div className="icon d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/hotel.png" alt="" />
                        <h6 className="color-medium-gray">Hotels </h6>
                      </div>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Discover
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="hotel-block bg-white p-24 light-shadow mb-24">
                  <div className="image-box mb-24">
                    <a href="hotel-detail.html">
                      <img src="./assets/media/cities/image-3.png" alt="" />
                    </a>
                    <div className="price">
                      <h6>
                        form <span className="color-sec">$290</span>
                      </h6>
                    </div>
                  </div>
                  <div className="content-box">
                    <h5 className="black mb-8">
                      <a href="hotel-detail.html">Sydney</a>
                    </h5>
                    <div className="d-flex gap-8 mb-24">
                      <div className="icon d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/location.png" alt="" />
                        <h6 className="color-medium-gray">Australia - </h6>
                      </div>
                      <div className="icon d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/hotel.png" alt="" />
                        <h6 className="color-medium-gray">Hotels </h6>
                      </div>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Discover
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="hotel-block bg-white p-24 light-shadow mb-24">
                  <div className="image-box mb-24">
                    <a href="hotel-detail.html">
                      <img src="./assets/media/cities/image-4.png" alt="" />
                    </a>
                    <div className="price">
                      <h6>
                        form <span className="color-sec">$340</span>
                      </h6>
                    </div>
                  </div>
                  <div className="content-box">
                    <h5 className="black mb-8">
                      <a href="hotel-detail.html">London</a>
                    </h5>
                    <div className="d-flex gap-8 mb-24">
                      <div className="icon d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/location.png" alt="" />
                        <h6 className="color-medium-gray">
                          United Kingdom (UK) -{" "}
                        </h6>
                      </div>
                      <div className="icon d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/hotel.png" alt="" />
                        <h6 className="color-medium-gray">Hotels </h6>
                      </div>
                    </div>
                    <a href="hotel-detail.html" className="cus-btn full-width">
                      Discover
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Global Travel End */}
    {/* Achievement Section Start */}
    <section className="achievement p-40">
      <div className="container-fluid">
        <div className="bg-white light-shadow br-20 achievements-block">
          <div className="row align-items-center">
            <div
              className="col-xl-6 col-lg-12 mb-xl-0 mb-24"
              data-sal="slide-up"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <h5 className="color-primary mb-16">Achievement</h5>
              <h3 className="h3 bold mb-8">
                Your Destination Awaits, Book Now
              </h3>
              <p className="dark-gray mb-24 w-90">
                Lorem ipsum dolor sit amet consectetur. Sed leo sit semper sed
                facilisis ultrices urna eu. In tellus interdum vel ac massa
                interdum viverra elementum auctor.
              </p>
              <div className="counter-section mb-24">
                <div className="row row-gap-4">
                  <div className="col-sm-6">
                    <div className="counter-count bg-lightest-gray">
                      <div>
                        <span className="count h3 bold color-primary">
                          12870
                        </span>
                        <span className="h3 bold color-primary">+</span>
                        <h5 className="title white">Happy Customers</h5>
                      </div>
                      <img src="./assets/media/icons/user.png" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-count bg-lightest-gray">
                      <div>
                        <span className="count h3 bold color-primary">100</span>
                        <span className="h3 bold color-primary">%</span>
                        <h5 className="title white">Client Satisfied</h5>
                      </div>
                      <img src="./assets/media/icons/user-2.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-md-flex gap-32 align-items-center">
                <h5 className="lightest-black mb-md-0 mb-16">
                  Let's Connect Reach Out for More Information
                </h5>
                <a href="contact-us.html" className="cus-btn">
                  Contact us
                </a>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12"
              data-sal="slide-down"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <img
                src="./assets/media/images/achievement-image.png"
                alt=""
                className="achievement-image light-shadow br-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Achievement Section End */}
    {/* Testimonials Section Start */}
    <section className="testimonials p-40">
      <div className="container-fluid">
        <div className="testimonials-box bg-white light-shadow br-20">
          <div className="row align-items-center row-gap-4">
            <div
              className="col-xl-4"
              data-sal="slide-left"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="text-area">
                <h5 className="color-primary mb-16">Testimonials</h5>
                <h3 className="h1 bold lightest-black">
                  What our clients think about us?
                </h3>
              </div>
            </div>
            <div
              className="col-xl-7 offset-xl-1"
              data-sal="slide-right"
              data-sal-duration={800}
              data-sal-delay={100}
              data-sal-easing="ease-in-out"
            >
              <div className="testimonial-slider">

              <Splide
      options={{
        type: 'slide',
        // perPage: 1,
        autoplay: false,
        gap: '1rem',
        pagination: true,
        arrows: false,
      }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
      <div className="review-block bg-lightest-gray pad-32 br-10">
                  <div className="user-image d-flex mb-32">
                    <img src="./assets/media/user/user-1.png" alt="" />
                    <img src="./assets/media/user/user-2.png" alt="" />
                    <img src="./assets/media/user/user-3.png" alt="" />
                  </div>
                  <h6 className="light-black mb-32">
                    Lorem ipsum dolor sit amet consectetur. Eget ornare ac
                    eleifend leo mauris suspendisse. Bibendum suspendisse proin
                    aliquet porttitor sed vulputate proin ultrices et. Ut leo
                    integer nunc amet curabitur nulla ipsum. Ultrices proin sit
                    a aliquet lorem. Nisl lobortis amet eu vitae eget hendrerit
                    a. Erat amet facilisi sed nunc consectetur.
                  </h6>
                  <h5 className="light-black mb-2">Mr John Deo</h5>
                  <p className="dark-gray">CEO at FlyNow</p>
                </div>
      </SplideSlide>

      <SplideSlide>
      <div className="review-block bg-lightest-gray pad-32 br-10">
                  <div className="user-image d-flex mb-32">
                    <img src="./assets/media/user/user-2.png" alt="" />
                    <img src="./assets/media/user/user-1.png" alt="" />
                    <img src="./assets/media/user/user-3.png" alt="" />
                  </div>
                  <h6 className="light-black mb-32">
                    Lorem ipsum dolor sit amet consectetur. Eget ornare ac
                    eleifend leo mauris suspendisse. Bibendum suspendisse proin
                    aliquet porttitor sed vulputate proin ultrices et. Ut leo
                    integer nunc amet curabitur nulla ipsum. Ultrices proin sit
                    a aliquet lorem. Nisl lobortis amet eu vitae eget hendrerit
                    a. Erat amet facilisi sed nunc consectetur.{" "}
                  </h6>
                  <h5 className="light-black mb-2">Mr John Deo</h5>
                  <p className="dark-gray">CEO at FlyNow</p>
                </div>
        </SplideSlide>


      {/* <SplideSlide>
      <div className="review-block bg-lightest-gray pad-32 br-10">
                  <div className="user-image d-flex mb-32">
                    <img src="./assets/media/user/user-3.png" alt="" />
                    <img src="./assets/media/user/user-1.png" alt="" />
                    <img src="./assets/media/user/user-2.png" alt="" />
                  </div>
                  <h6 className="light-black mb-32">
                    Lorem ipsum dolor sit amet consectetur. Eget ornare ac
                    eleifend leo mauris suspendisse. Bibendum suspendisse proin
                    aliquet porttitor sed vulputate proin ultrices et. Ut leo
                    integer nunc amet curabitur nulla ipsum. Ultrices proin sit
                    a aliquet lorem. Nisl lobortis amet eu vitae eget hendrerit
                    a. Erat amet facilisi sed nunc consectetur.{" "}
                  </h6>
                  <h5 className="light-black mb-2">Mr John Deo</h5>
                  <p className="dark-gray">CEO at FlyNow</p>
                </div>
     </SplideSlide> */}


    </Splide>
              
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Testimonials Section End */}
    {/* Blog Area Start */}
    <section
      className="news-blog p-40"
      data-sal="slide-up"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
      <div className="container-fluid">
        <div className="d-flex justify-content-between mb-40">
          <h3 className="h3 bold lightest-black p-0">Our Latest News</h3>
          <a href="blog-listing.html" className="cus-btn">
            Show More
          </a>
        </div>
        <div className="row row-gap-4">
          <div className="col-xxl-6 col-xl-4 col-lg-12 col-md-6 col-sm-6">
            <div className="blog-box bg-white light-shadow p-24 br-20">
              <div className="row align-items-center row-gap-3">
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="image-box">
                    <a href="blog-detail.html">
                      <img src="./assets/media/blog/blog-1.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="content-box">
                    <div className="d-flex gap-16 mb-24">
                      <div className="d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/user-bk.png" alt="" />
                        <p className="h6 dark-gray">Malisa John</p>
                      </div>
                      <div className="vr-line" />
                      <div className="d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/calender.png" alt="" />
                        <p className="h6 dark-gray">08 Aug, 2023</p>
                      </div>
                    </div>
                    <h5 className="lightest-black mb-8">
                      <a href="blog-detail.html">
                        Roaming with Purpose: Traveling Responsibly and
                        Sustainably
                      </a>
                    </h5>
                    <p className="dark-gray mb-24">
                      Lorem ipsum dolor sit amet consectetur. Feugiat sit
                      eleifend tortor.
                    </p>
                    <a href="blog-detail.html" className="cus-btn small-pad">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-4 col-lg-12 col-md-6 col-sm-6">
            <div className="blog-box bg-white light-shadow p-24 br-20">
              <div className="row align-items-center row-gap-3">
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="image-box">
                    <a href="blog-detail.html">
                      <img src="./assets/media/blog/blog-3.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="content-box">
                    <div className="d-flex gap-16 mb-24">
                      <div className="d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/user-bk.png" alt="" />
                        <p className="h6 dark-gray">Malisa John</p>
                      </div>
                      <div className="vr-line" />
                      <div className="d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/calender.png" alt="" />
                        <p className="h6 dark-gray">08 Aug, 2023</p>
                      </div>
                    </div>
                    <h5 className="lightest-black mb-8">
                      <a href="blog-detail.html">
                        Navigating Cultures: Cross-Cultural Encounters and
                        Insights
                      </a>
                    </h5>
                    <p className="dark-gray mb-24">
                      Lorem ipsum dolor sit amet consectetur. Feugiat sit
                      eleifend tortor.
                    </p>
                    <a href="blog-detail.html" className="cus-btn small-pad">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-4 col-lg-12 col-md-6 col-sm-6">
            <div className="blog-box bg-white light-shadow p-24 br-20">
              <div className="row align-items-center row-gap-3">
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="image-box">
                    <a href="blog-detail.html">
                      <img src="./assets/media/blog/blog-2.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="content-box">
                    <div className="d-flex gap-16 mb-24">
                      <div className="d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/user-bk.png" alt="" />
                        <p className="h6 dark-gray">Malisa John</p>
                      </div>
                      <div className="vr-line" />
                      <div className="d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/calender.png" alt="" />
                        <p className="h6 dark-gray">08 Aug, 2023</p>
                      </div>
                    </div>
                    <h5 className="lightest-black mb-8">
                      <a href="blog-detail.html">
                        Urban Explorations: Navigating Cities and Urban
                        Landscapes
                      </a>
                    </h5>
                    <p className="dark-gray mb-24">
                      Lorem ipsum dolor sit amet consectetur. Feugiat sit
                      eleifend tortor.
                    </p>
                    <a href="blog-detail.html" className="cus-btn small-pad">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-4 col-lg-12 col-md-6 col-sm-6 d-xxl-block d-xl-none">
            <div className="blog-box bg-white light-shadow p-24 br-20">
              <div className="row align-items-center row-gap-3">
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="image-box">
                    <a href="blog-detail.html">
                      <img src="./assets/media/blog/blog-4.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-xxl-6 col-xl-12 col-lg-6">
                  <div className="content-box">
                    <div className="d-flex gap-16 mb-24">
                      <div className="d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/user-bk.png" alt="" />
                        <p className="h6 dark-gray">Malisa John</p>
                      </div>
                      <div className="vr-line" />
                      <div className="d-flex align-items-center gap-8">
                        <img src="./assets/media/icons/calender.png" alt="" />
                        <p className="h6 dark-gray">08 Aug, 2023</p>
                      </div>
                    </div>
                    <h5 className="lightest-black mb-8">
                      <a href="blog-detail.html">
                        Wings of Adventure: Exploring the World by Air
                      </a>
                    </h5>
                    <p className="dark-gray mb-24">
                      Lorem ipsum dolor sit amet consectetur. Feugiat sit
                      eleifend tortor.
                    </p>
                    <a href="blog-detail.html" className="cus-btn small-pad">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Blog Area End */}
    
    

    
    {/* modal-popup area Start  */}
    <div className="search-popup">
      <div className="search-popup__overlay search-toggler" />
      <div className="search-popup__content">
        <form
          role="search"
          method="get"
          className="search-popup__form"
          action="https://uiparadox.co.uk/templates/flynow/v3/index.html"
        >
          <input type="text" id="search" placeholder="Search Here..." />
          <button type="submit">
            <i className="fal fa-search" />
          </button>
        </form>
      </div>
    </div>
    {/* search-popup end*/}
  </div>
  {/* Back To Top Start */}
  <a href="#main-wrapper" id="backto-top" className="back-to-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Mobile Menu Start */}
  {/* expanded */}
  <div className="mobile-nav__wrapper ">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler" />
      <div className="logo-box">
        <a href="index-2.html" aria-label="logo image">
          <img src="./assets/media/logo.png" alt="" className="invisible" />
        </a>
      </div>
      <div className="mobile-nav__container" ></div>
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <i className="fas fa-envelope" />
          <a href="mailto:example@company.com">example@company.com</a>
        </li>
        <li>
          <i className="fa fa-phone-alt" />
          <a href="tel:+12345678">+123 (4567) -890</a>
        </li>
      </ul>
      {/* <div className="mobile-nav__social">
  <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
  <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
  <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
</div> */}
    </div>
  </div>
</>

    </div>
  )
}

export default Home
