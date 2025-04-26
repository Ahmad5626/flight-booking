import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer Start */}
    <footer
      className="bg-white p-40"
      data-sal="slide-down"
      data-sal-duration={800}
      data-sal-delay={100}
      data-sal-easing="ease-in-out"
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-lg-0 mb-32 ">
            <a href="#">
              <img src="./assets/logo-1.png" alt="" className="mb-16" />
            </a>
            <p className="dark-gray mb-16">
              Lorem ipsum dolor sit amet consectetur. Aliquet vulputate augue
              penatibus in libero et id aliquam. In ridiculus pretium est velit
              euismod.{" "}
            </p>
            <h6 className="lightest-black mb-8">
              Subscribe to our special offers
            </h6>
            <form
              action="https://uiparadox.co.uk/templates/flynow/v3/index.html"
              method="post"
            >
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
                name="email"
              />
              <button type="submit" className="subscribe">
                Subscribe
              </button>
            </form>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-lg-0 mb-32">
            <h4 className="light-black mb-24">Booking</h4>
            <div className="our-links">
              <ul className="unstyled">
                <li className="mb-16">
                  <a href="flight-booking.html" className="light-black">
                    Book Flights
                  </a>
                </li>
                <li className="mb-16">
                  <a href="tour-packages.html" className="light-black">
                    Travel Services
                  </a>
                </li>
                <li className="mb-16">
                  <a href="car-booking.html" className="light-black">
                    Transportation
                  </a>
                </li>
                <li className="mb-16">
                  <a href="tour-packages.html" className="light-black">
                    Planning Your Trip
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-lg-0 mb-32">
            <h4 className="light-black mb-24">Useful Links</h4>
            <div className="our-links">
              <ul className="unstyled">
                <li className="mb-16">
                  <a href="index-2.html" className="light-black">
                    Home
                  </a>
                </li>
                <li className="mb-16">
                  <a href="blog-listing.html" className="light-black">
                    Blogs
                  </a>
                </li>
                <li className="mb-16">
                  <a href="about-us.html" className="light-black">
                    About{" "}
                  </a>
                </li>
                <li className="mb-16">
                  <a href="contact.html" className="light-black">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-lg-2 col-md-6 col-6 mb-md-0 mb-32">
            <h4 className="light-black mb-24">Manage</h4>
            <div className="our-links">
              <ul className="unstyled">
                <li className="mb-16">
                  <a href="flight-booking.html" className="light-black">
                    Check-in
                  </a>
                </li>
                <li className="mb-16">
                  <a href="tour-packages.html" className="light-black">
                    Manage Your Booking
                  </a>
                </li>
                <li className="mb-16">
                  <a href="car-listing.html" className="light-black">
                    Chaurfeur Drive
                  </a>
                </li>
                <li className="mb-16">
                  <a href="flight-listing.html" className="light-black">
                    Flight Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
            <h4 className="light-black mb-16">Contact Us</h4>
            <div className="follow-us">
              <ul className="unstyled">
                <li className="mb-8">
                  <img src="./assets/media/icons/location-bk.png" alt="" />
                  &nbsp;&nbsp;123 Main Street, Anytown, USA.
                </li>
                <li className="mb-8 h4 color-primary">
                  <img src="./assets/media/icons/telephone.png" alt="" />
                  &nbsp;&nbsp;+1 234 567 890
                </li>
                <li className="mb-24">
                  <a href="#">
                    <img src="./assets/media/icons/mail.png" alt="" />
                    &nbsp;&nbsp;email@example.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="social-link mb-32">
              <h6 className="light-black mb-8">Follow Us!</h6>
              <ul className="unstyled">
                <li>
                  <a href="#" className="active">
                    <img src="./assets/media/icons/instagram.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./assets/media/icons/facebook.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./assets/media/icons/linkedin.png" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="./assets/media/icons/twitter.png" alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <p className="light-black">©2025 FlyNow All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
    {/* Footer Area End  */}
    </div>
  )
}

export default Footer
