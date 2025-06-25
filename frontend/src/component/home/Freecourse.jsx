import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

function Freecourse() {
   const [cource, setcource] = useState([])
useEffect(() => {
    const cources = async ()=>{
try {
    
    const res = await axios.get('http://localhost:4001/course')
    setcource(res.data.filter((data) => data.price === 'Free'))

  }
 catch (error) {
    console.log("error: ", error)
}}

  cources();
}, [])

    return (
        <>
            <div className='dark:bg-gray-900 py-8 px-5 flex flex-wrap justify-around '>
                {
                    cource.map((item) => (
                        <div key={item.id} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mb-10">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={item.image} alt={item.title} />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
                                </a>
                                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">{item.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.price}</span>
                                    <a href="#" className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Add to cart</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Freecourse
