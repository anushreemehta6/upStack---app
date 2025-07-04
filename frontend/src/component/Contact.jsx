import React from 'react'
import Footer from './home/Footer'
import Navbar from './home/Navbar'
import toast from 'react-hot-toast';
import axios from 'axios'
import { useEffect,useState } from 'react'
function Contact() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');


 
      const savedata = async (req , res)=>{
        try {
            const response = await axios.post("http://localhost:4001/submit/contact", {
        email,
        subject,
        message
      });
            console.log("form submitted ")
            toast.success('Successfully created!');
            
        } catch (error) {
            console.log("error", error)
            toast.error('This is an error!');
        }
        

      }
    
     
    
    
  return (
   <> 
   <Navbar/>
   <section class="bg-white dark:bg-gray-900">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">📞 Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">We’d love to hear from you!

Whether you have a question about our services, need support, or just want to say hello — our team is ready to answer all your queries.</p>
<h2 class="mb-4 text-2xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">📬 Get in Touch</h2>    
      <form onSubmit={savedata} action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input  onChange={(e) => setEmail(e.target.value)} type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@email.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input onChange={(e) => setSubject(e.target.value)} type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea onChange={(e) => setMessage(e.target.value)} id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button  onClick={savedata} type="submit"  class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-cyan-800 sm:w-fit hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 cursor-pointer">Send message</button> 
      </form>
  </div>
</section>
<Footer/>
   </>
  )
}

export default Contact