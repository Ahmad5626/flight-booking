import React from 'react'

const Contact = () => {
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
              Contact <br className="title-break" /> Us
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
    {/* Contact Us Form Start */}
    <div className="contact-us p-60">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-8 offset-lg-2"
            data-sal="slide-right"
            data-sal-duration={800}
            data-sal-delay={100}
            data-sal-easing="ease-in-out"
          >
            <form
              action="https://uiparadox.co.uk/templates/flynow/v3/contact.html"
              method="post"
              className="contact-form"
            >
              <div className="row">
                <div className="col-sm-6 mb-24">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="f-name"
                    placeholder="Name"
                    required=""
                  />
                </div>
                <div className="col-sm-6 mb-24">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="mail"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="col-sm-6 mb-24">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    id="p_number"
                    placeholder="Mobile Number"
                    required=""
                  />
                </div>
                <div className="col-sm-6 mb-24">
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    id="subj"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="col-sm-12 mb-24">
                  <textarea
                    name="message"
                    className="form-control"
                    id="comment"
                    cols={30}
                    rows={10}
                    placeholder="Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <button type="submit" className="cus-btn">
                  Send Message
                </button>
                {/* Alert Message */}
                <div id="message" className="alert-msg" />
              </div>
            </form>
          </div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701097.9613410516!2d151.92069762902617!3d-33.619391886943205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2s!4v1701407434711!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          data-sal="slide-left"
          data-sal-duration={800}
          data-sal-delay={100}
          data-sal-easing="ease-in-out"
        />
      </div>
    </div>
    {/* Contact Us Form End */}
  </div>
  {/* Main Content End */}
</>

    </div>
  )
}

export default Contact
