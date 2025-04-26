import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
         {/* Header Area Start */}
    <header>
      <nav className="main-menu">
        <div className="container-fluid">
          <div className="main-menu__block">
            <div className="main-menu__left">
              <div className="main-menu__logo">
                <Link   to="/" >
                  <img src="./assets/logo-1.png" alt="FlyNow" />
                </Link>
              </div>
              <div className="main-menu__nav">
                <ul className="main-menu__list">
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li >
                    <Link to="/flight-Listing" >Flight Booking</Link>
                    
                  </li>
                  
                  <li className="dropdown">
                    <Link to="/Hotel-Listing">Hotel Booking</Link>
                    
                  </li>
                 
                  <li className="dropdown">
                    <a href="javascript:void(0);">Pages</a>
                    <ul className="sub-menu">
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                      <li>
                        <Link to="/sign-up">Signup</Link>
                      </li>
                    </ul>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="main-menu__right">
              {/* <a
                href="#"
                className="main-menu__search search-toggler d-xl-flex d-none"
              >
                <i className="fal fa-search" />
              </a> */}
              <div className="main-menu-signup__login d-xl-flex d-none">
                <Link to="/login" className="main-menu__login">
                  Login
                </Link>
                <div className="center_slach d-xl-flex d-none">/</div>
                <Link to="/sign-up" className="main-menu__login">
                  Signup
                </Link>
              </div>
              <a href="#" className="main-menu__toggler mobile-nav__toggler">
                <i className="fa fa-bars" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    {/* Header Area end */}
    </div>
  )
}

export default Header
