import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Slot from './Components/Slot';
const App = () => {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/slot" element={<Slot/>} /> 
        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  
}

export default App
