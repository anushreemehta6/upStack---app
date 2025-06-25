import { useState } from 'react'

import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import Home from './component/Home';
import Signup from './component/Signup';
import Login from './component/Login';
import Course from './component/Course';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
           <Route path="/course" element={<Course/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
