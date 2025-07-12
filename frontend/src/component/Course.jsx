import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './home/Navbar'
import Footer from './home/Footer'

function Course() {
    const [course, setcourse] = useState([])
    useEffect(() => {
      const getcourse = async ()=>{
        try {
            const res = await axios.get("http://localhost:4001/course")
            setcourse(res.data);

            
        } catch (error) {
            console.log("error: ", error )
            
        }
      }

      getcourse();
    
      
    }, [])
    
  return (
    <>
    <Navbar/>
    <div className='dark:bg-gray-900 text-center pb-10 pt-10'>
        <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white">Discover Courses That Match Your Interests and Goals</h1>
        <p class=" text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Browse through a wide range of courses, from beginner to expert levels, and take the next step in your learning journey.</p>
    </div>
     <div className='dark:bg-gray-900 py-8 px-5 flex flex-wrap justify-around '>
                {course.map((item) => {
    
    return (
        <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-10">
            <a href="#">
                <img className="p-8 rounded-t-lg"  src={typeof item.image === "string" ? item.image : item.image?.url} />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                </a>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{item.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white"> {item.price || "N/A"} </span>
                    <a href="#" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Add to cart</a>
                </div>
            </div>
        </div>
    );
})}

            </div>
            <Footer/>
    </>
  )
}

export default Course