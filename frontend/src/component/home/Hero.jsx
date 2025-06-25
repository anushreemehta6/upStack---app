import React from 'react'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <section class="bg-white dark:bg-gray-900 ">
                <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                    <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
                        <span class=" bg-primary-600 rounded-full text-white px-4 py-1 test-4xl">🚀</span> <span class="text-sm font-medium">Unlock Your Engineering Potential with UpStack</span>
                        <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Learn. Build. Succeed — with UpStack.</h1>
                    <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Discover expertly crafted courses designed to help engineering students master skills, ace exams, and build industry-ready knowledge.</p>
                    <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                       <Link to={"/course"}  class= " btn text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800" > 
Explore Course</Link>
                    </div>

                </div>
            </section>
            <div className='dark:bg-gray-900 flex justify-evenly text-white'>
            <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">7M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
            </div>
            <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">10M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Courses</dd>
            </div>


            <div class="flex flex-col items-center justify-center">
                <dt class="mb-2 text-3xl font-extrabold">1M+</dt>
                <dd class="text-gray-500 dark:text-gray-400">Organizations</dd>
            </div>
</div>
           
        </>
    )
}

export default Hero