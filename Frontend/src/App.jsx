import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Navbar/><Home/></>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
