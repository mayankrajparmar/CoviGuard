import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home'
import Slot from './Components/Slot'
import Navbar from './Components/Navbar';
const App = () => {
  return <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/slot' element={<Slot/>} /> 
      </Routes>
    </BrowserRouter>
  
}

export default App
