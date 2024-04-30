import React, { useEffect, useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Private from './components/private/Private'


function App() {
  const [auth, setAuth] = useState(localStorage.getItem("student"))

  return (
    <>
      <div className='relative'>
        <BrowserRouter>
          <Navbar auth={auth} setAuth={setAuth}></Navbar>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route element={<Private auth={auth}></Private>}>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/service' element={<Services></Services>}></Route>
              <Route path='/contact' element={<Contact></Contact>}></Route>
            </Route>
            <Route path='/login' element={<Login setAuth={setAuth} />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App