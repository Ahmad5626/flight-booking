import React from 'react'

const Login = () => {
  return (
    <div>
    <>
  {/* Main Wrapper Start */}
  <div id="main-wrapper" className="main-wrapper overflow-hidden">
    {/* Main Content Start */}
    <div className="page-content m-0">
      {/* Signup Form Start */}
      <section className="signup bg-white">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 col-md-9 col-sm-10 p-0">
            <div className="container-fluid">
              <div className="form-block">
                <a href="index-2.html" className="color-primary h6 mb-30">
                  <i className="fal fa-chevron-left" />
                  &nbsp;&nbsp;Back To Home
                </a>
                <h2 className="mb-30 light-black">Log in</h2>
               
                <h5 className="or mb-8">or</h5>
                <h6 className="mb-24 text-center">
                  Sign up with your email address
                </h6>
                <form
                  method="post"
                  action="https://uiparadox.co.uk/templates/flynow/v3/login.html"
                  className="form-group contact-form"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="mb-24">
                        <input
                          type="email"
                          className="form-control"
                          id="signup-mail"
                          name="email"
                          required=""
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="mb-24">
                        <input
                          type="password"
                          className="form-control"
                          id="create-password"
                          name="password"
                          required=""
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button type="submit" className="cus-btn small-pad mb-24">
                        Login
                      </button>
                      {/* Alert Message */}
                      <div id="message" className="alert-msg" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7 p-0">
            <div className="img-block">
              <img src="assets/media/images/login.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* Signup Form End */}
    </div>
    {/* Main Content End */}
  </div>
  {/* Mobile Menu Start */}
  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler" />
      <div className="logo-box">
        <a href="index-2.html" aria-label="logo image">
          <img src="assets/media/logo.png" alt="" className="invisible" />
        </a>
      </div>
      <div className="mobile-nav__container" />
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
      {/* <div class="mobile-nav__social">
  <a href="https://twitter.com/"><i class="fab fa-twitter"></i></a>
  <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
  <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
</div> */}
    </div>
  </div>
</>

      
    </div>
  )
}

export default Login
