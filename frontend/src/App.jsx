import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';
import Course from './component/Course';
import Contact from './component/Contact';
import About from './component/About';
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
           <Route path="/course" element={<Course/>} />
           <Route path="/contact" element={<Contact/>} />
           <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
