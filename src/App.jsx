import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'

function App() {

  return (
    <div>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/About' element={<About/>}></Route>
              <Route path='/Contact' element={<Contact/>}></Route>
              <Route path='/Portfolio' element={<Portfolio/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App 
