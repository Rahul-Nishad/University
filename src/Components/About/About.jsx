import React from 'react'
import "./About.css"
import brainstorming from "../../assets/brainstorming.png"
import img2 from "../../assets/img2.avif"
import service1 from "../../assets/service1.jpg"

const About = () => {
  return (
    <div className='about'>
        <div className='about-first'>
             <div className='left'>
                  <div className='left-box'></div>
                  <div className='leftbutton'>
                    <div className='brainstorming'>
                      <img src={brainstorming} alt="" />
                    </div>
                    <div className='text'>
                       <p>30 Years Of Quality Services</p>
                    </div>
                  </div>
             </div>

             <div className='right'>
                  <div className='right-one'>
                    <div className='img2'>

                    </div>
                    {/* <img src={img2} alt="img2" /> */}
                  </div>
                  <div className='right-two'>
                    
                  </div>
             </div>
        </div>
        <div className='about-second'>
            <div className='book1'>
               <i className="fa-solid fa-book-open"></i>
                &nbsp;&nbsp;
               <p>ABOUT US</p>
             

            </div>
            <div className='para'>
               <h1>Empowering Students to <span>Achieve</span> Dreams.</h1>
               <p>Our university is dedicated to fostering an educational environment that promotes personal growth, innovation, and academic excellence.</p> 
              </div>
              <div className='service'>
                <div className="imgservice">
                   <img src={service1} alt="img" />
                   <h3>Academic Excellence</h3>
               </div>
               <div className='servicepara'>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla qui quaerat ipsa similique ea consectetur vitae voluptatibus fuga quam labore.</p>
                 </div>
              </div>
        </div>
    </div>
  )
}

export default About