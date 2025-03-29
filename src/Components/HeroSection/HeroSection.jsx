import React from 'react'
import './HeroSection.css'
import image from "../../assets/image.png"
const HeroSection = () => {
  return (
    <div className='home'>
      <div className='left'>
        <div className='left-content'>

          <div className='book'>
            <i className="fa-solid fa-book-open"></i>
            &nbsp;&nbsp;
            <p>Welcome to our college</p>
          </div>

          <h1>Start Your <span>Bright</span> Journey With Us</h1>
          <p>There are many variations of passages available, but the majority have suffered alteration in some form.</p>
          <div className='buttons'>
            <button>ABOUT MORE &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button>LEARN MORE &nbsp;&nbsp;<i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      </div>


      <div className='right'>
        <div className='right-content'>
          <img src={image} alt="img" />
        </div>
        <div className='service'>
          <div className='imgService'>
            <img src={service} />
          </div>
          &nbsp;&nbsp;
          <div className='h3'>
            <h3>Academic Excellence</h3>
          </div>

        </div>
        <div className='para1'>
          <p>Our faculty, resources, and state-of-the-art facilities ensure that students have access to everything they need to succeed and thrive.</p>
        </div>
      </div>

    </div>
  )
}

export default HeroSection