import React from 'react'
import Navbar from './home/Navbar'
import Footer from './home/Footer'
import { Link } from "react-router";
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import axios from 'axios';
function Login() {
    const [email, setEmail] = useState('');
  
  const [password, setPassword] = useState('');

  const signup = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post('http://localhost:4001/user/login', {
       
        email,
        password
      });
      console.log(res.data);
      toast.success('User logined successfully!');
    } catch (error) {
      toast.error('Signup failed!');
      console.error("Signup error:", error);
    }
  };

  return (
    <>
    <Navbar/>
    <div>
        <section class="bg-gray-50 dark:bg-gray-900">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
         <img src="/public/assets/logo-removebg-preview.png" class="" alt="Flowbite Logo"  width={30}/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">UpStack</span>
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
              </h1>
              <form onSubmit={signup} class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" onChange={(e)=>{setEmail(e.target.value)}} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" onChange={(e)=>{setPassword(e.target.value)}} name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                  </div>
               
                  <button type="submit" class="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">Log in</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 flex gap-5 items-center justify-center">
                      Don’t have an account yet? <Link to={"/signup"}  class= " btn text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center me-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800" >Sign up</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </div>
    <Footer/>
    </>
  )
}

export default Login