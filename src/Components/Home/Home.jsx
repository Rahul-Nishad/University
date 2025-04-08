import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import About from '../About/About'
import Couses from '../Courses/Courses'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <About/>
        <Couses/>
        <Footer/>
    </div>
  )
}

export default Home