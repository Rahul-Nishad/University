import React from 'react'
import "./HeroSection.css"
import image from "../../assets/image.png"
const HeroSection = () => {
  return (
    <div className='box'>
      <div className='first'>
        <div className='first-child'>
          <div className='book'>
            <i class="fa-solid fa-book-open"></i>
            &nbsp; &nbsp;
            <p>Welcome to our college</p>
          </div>
          <h1>Start Your <span>Bright</span> Journey With Us</h1>
          <p>There are many variations of passanges available, but the majority have suffered alterations in some form.</p>
          <div className='buttons'>
            <button>ABOUT MORE &nbsp; &nbsp;<i className="fa-solid fa-arrow-right"></i></button>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <button>LERN MORE &nbsp; &nbsp;<i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>


      <div className='second'>
        <img src={image} alt="img" />
      </div>
    </div>
  )
}

export default HeroSection