import React from 'react'

const About = () => {
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
            <h1 className="fw-700 lightest-black">About Us</h1>
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
    {/* Video Section Start */}
    <section
      className="blog-video-sec p-40 mb-16"
      data-sal="slide-up"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
      <div className="container-fluid">
        <div className="video-block bg-white light-shadow p-24 br-20">
          <h2 className="light-black text-center mb-16">
            Where Your Journey Begins with <br className="d-md-flex d-none" />{" "}
            Quality and Reliability
          </h2>
          <p className="light-black text-center mb-32">
            Lorem ipsum dolor sit amet consectetur. Nibh vivamus quis risus
            augue odio eget donec leo phasellus. <br /> Auctor est aliquam
            commodo enim auctor libero. Cras sed sagittis id in ridiculus amet
            vel euismod. Eu nunc <br /> lacus dui natoque. Consequat aenean
            tristique accumsan dictum augue.
          </p>
          <img
            src="assets/media/blog/blog-banner.png"
            alt=""
            className="main-image br-20 light-shadow"
          />
          <a
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#videoModal"
            className="play-btn"
          >
            <img
              src="assets/media/blog/play-btn.png"
              alt=""
              className="video-btn"
            />
          </a>
        </div>
      </div>
    </section>
    {/* Video Section End */}
    {/* Our History Start */}
    <section
      className="our-history p-40 mb-16"
      data-sal="slide-down"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-6 mb-xl-0 mb-24">
            <div className="left-block bg-white light-shadow p-24 br-20">
              <h2 className="light-black mb-8">Our History</h2>
              <h5 className="color-primary mb-8">Since 1998</h5>
              <p className="light-black mb-32">
                Lorem ipsum dolor sit amet consectetur. Nibh vivamus quis risus
                augue odio eget donec leo phasellus. Auctor est aliquam commodo
                enim auctor libero. Cras sed sagittis id in ridiculus amet vel
                euismod. Eu nunc lacus dui natoque. Consequat aenean tristique
                accumsan dictum augue.
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className="benefit-box bg-lightest-gray br-30">
                    <img
                      src="assets/media/icons/car.png"
                      alt=""
                      className="mb-16"
                    />
                    <h4 className="light-black">
                      Extensive Selection of Luxury Cars
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-30">
                  <div className="benefit-box bg-lightest-gray br-30">
                    <img
                      src="assets/media/icons/hotel-lg.png"
                      alt=""
                      className="mb-16"
                    />
                    <h4 className="light-black">
                      Well-Maintained &amp; Luxury Hotels
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 mb-lg-0 mb-30">
                  <div className="benefit-box bg-lightest-gray br-30">
                    <img
                      src="assets/media/icons/calender-lg.png"
                      alt=""
                      className="mb-16"
                    />
                    <h4 className="light-black">
                      Easy and Intuitive Booking Process
                    </h4>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="benefit-box bg-lightest-gray br-30">
                    <img
                      src="assets/media/icons/support-lg.png"
                      alt=""
                      className="mb-16"
                    />
                    <h4 className="light-black">
                      Exceptional Customer Service
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                <img
                  src="assets/media/blog/since-1.png"
                  alt=""
                  className="br-20 light-shadow"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                <img
                  src="assets/media/blog/since-2.png"
                  alt=""
                  className="br-20 light-shadow"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 mb-sm-0 mb-30">
                <img
                  src="assets/media/blog/since-3.png"
                  alt=""
                  className="br-20 light-shadow"
                />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <img
                  src="assets/media/blog/since-4.png"
                  alt=""
                  className="br-20 light-shadow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Our History End */}
    {/* Achievement Section Start */}
    <section
      className="achievement p-40 mb-16"
      data-sal="slide-up"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
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
                      <img src="assets/media/icons/user.png" alt="" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-count bg-lightest-gray">
                      <div>
                        <span className="count h3 bold color-primary">100</span>
                        <span className="h3 bold color-primary">%</span>
                        <h5 className="title white">Client Satisfied</h5>
                      </div>
                      <img src="assets/media/icons/user-2.png" alt="" />
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
                src="assets/media/images/achievement-image.png"
                alt=""
                className="achievement-image light-shadow br-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Achievement Section End */}
    {/* Benefits Start */}
    <section
      className="benefit p-40"
      data-sal="slide-down"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-4 col-lg-6 col-md-6 mb-xl-0 mb-24">
            <div className="benefit-block bg-white">
              <div className="image-box">
                <img src="assets/media/vector/benefit-1.png" alt="" />
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
                <img src="assets/media/vector/benefit-2.png" alt="" />
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
                <img src="assets/media/vector/benefit-3.png" alt="" />
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
    
  </div>
  {/* Main Content End */}
</>

    </div>
  )
}

export default About
