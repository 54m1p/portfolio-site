import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/site-header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Services from './components/services/Services'
import Works from './components/works/Works'

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/About' element={<About/>}></Route>
              <Route path='/Contact' element={<Contact/>}></Route>
              <Route path='/Services' element={<Services/>}></Route>
              <Route path='/Works' element={<Works/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App 
