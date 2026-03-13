import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Snippets from './Components/Snippets'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<><Navbar/><Home/><Footer/></>}/>
      <Route path='/snippet' element={<><Snippets/><Footer/></>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
