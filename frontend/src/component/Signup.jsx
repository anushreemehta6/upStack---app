import React, { useState } from 'react'
import Navbar from './home/Navbar'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Footer from './home/Footer'

function Signup() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (e) => {
    e.preventDefault(); 
    try {
      const res = await axios.post('http://localhost:4001/user/signup', {
        firstname,
        lastname,
        email,
        password
      });
      console.log(res.data);
      toast.success('User signed up successfully!');
    } catch (error) {
      toast.error('Signup failed!');
      console.error("Signup error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='bg-slate-800 p-5 pt-15'>
        <form onSubmit={signup} className="max-w-lg mx-auto">
          <div className="mb-5">
            <h1 className="text-2xl font-bold dark:text-white m-5">Join us and get started right away!</h1>

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input
              type="text"
              onChange={(e) => setFirstname(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input
              type="text"
              onChange={(e) => setLastname(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="name@flowbite.com"
              required
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
