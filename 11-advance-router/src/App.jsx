import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Men from './pages/Men'
import Women from './pages/Women'

const App = () => {
  return (
    <div className='h-screen bg-black text-white' >
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}>
          <Route path="men" element={<Men/>} />
          <Route path="women" element={<Women/>} />
        </Route>
        <Route path='/contact' element={<Contact/>} />

        <Route path='*' element={<Notfound/>} />  
      </Routes>
     <Footer/>
    </div>
  )
}

export default App
