import React from 'react'
import './About.css'
import img1 from "../../assets/img1.avif"
import brainstorming from "../../assets/brainstorming.png"
const About = () => {
  return (
    <div className='about'>
        <div className='aboutfirst'>
             <div className='Left'>
                <div className="leftbox"></div>
                <div className='leftbutton'>
                <div className='brainstorming'>
                    <img src={brainstorming}/>
                </div>
                <div className='text'>
                    <p>30 Years Of Quality Service</p>
                </div>
            </div>
             
            </div>
             <div className='right-box'>
             <div className='Right'>
                  <div className='img2'>

             </div> 


            </div>
            <div className="rightbox"></div>

          </div>
        </div>
        <div className='aboutsecond'>
             <div className='book1'>
             <i className="fa-solid fa-book-open"></i> 
              &nbsp;&nbsp;
              <p>ABOUT US</p>
             </div>

             <div className='para'>
             <h1>Empowering Students to <span>Achieve</span>  Dreams</h1>
             <p>Our university is dedicated to fostering an educational environment that promotes personal growth, and academic excellence.</p>
             </div>
             <div className='service'>
              <div className='imgservice'>
                <img src="" alt="" />
              </div>
              <div></div>
             </div>
        </div>
    </div>
  )
}

export default About