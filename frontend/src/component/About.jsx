import React from 'react'
import Footer from './home/Footer'
import Navbar from './home/Navbar'

function About() {
  return (
    <> 
    <Navbar/>
    <div className='dark:bg-slate-900 p-5 '>
<h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-cyan-400 mb-5">About UpStack - </span> <br/> Your Gateway to Smarter Engineering Education.</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 m-5">At UpStack, we’re on a mission to make learning more accessible, practical, and affordable for every engineering student.

We understand the challenges students face in finding quality resources tailored to their academic and career goals. That’s why we’ve created a platform where you can explore top-notch courses curated by experts, covering everything from core engineering subjects to the latest in tech and industry skills.

Whether you’re preparing for exams, upgrading your skills, or just curious to explore new domains — we’re here to guide you at every step.</p>
<h1 class=" mt-8 text-2xl font-extrabold dark:text-white md:text-4xl lg:text-5xl"> <span class= "text-transparent bg-clip-text bg-gradient-to-r to-violet-400 from-cyan-400 mb-5"> About Creator</span> </h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 m-5">Hi! I’m the creator of UpStack, a passionate mern stack developer and an engineering student who understands the struggles of fellow students trying to find quality learning resources. With a love for tech, education, and building meaningful projects, I created UpStack to help engineering students access affordable, practical, and relevant courses that actually make a difference.

Whether you're just starting out or looking to upgrade your skills, UpStack is built for you — by someone who's walked the same path. Let’s grow, learn, and build together</p>
</div>
<Footer/>
    </>
  )
}

export default About