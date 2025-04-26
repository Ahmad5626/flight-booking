import { useState } from 'react'
import Home from './pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import FlightListing from './pages/FlightListing'
import FlightBooking from './pages/FlightBooking'
import Header from './component/Header'
import Footer from './component/Footer'
import HotelListing from './pages/HotelListing'
import HotelBooking from './pages/HotelBooking'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {


  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
        
          <Route path="/" element={<Home/>}/>
          <Route path="/Flight-Listing" element={<FlightListing/>}/>
          <Route path="/FlightBooking" element={<FlightBooking/>}/>
          <Route path="/Hotel-Listing" element={<HotelListing/>}/>
          <Route path="/HotelBooking" element={<HotelBooking/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
        </Routes>
        <Footer/>
        
      </BrowserRouter>

    </>
  )
}

export default App
