import React from 'react'
import Hero from '../component/home/Hero'
import Navbar from '../component/home/Navbar'
import '../App.css'
import Footer from '../component/home/Footer'
import Freecourse from '../component/home/Freecourse'



function Home() {
  return (
 
    <>

      <Navbar/>
      <Hero/>
      <Freecourse/>
      <Footer/>    </>
  )
}

export default Home