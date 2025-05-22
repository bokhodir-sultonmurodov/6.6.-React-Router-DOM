import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import { Routes, Route,  } from 'react-router-dom'
import Header from './components/header/Header'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Layout from './pages/layout/Layout'
import Post from './pages/post/Post'
import Notfound from './pages/notfoun/Notfound'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>

        <Route path='/' element={<Home/>}/>
        <Route path='/haqida' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/post' element={<Post/>}/>
        <Route path='*' element={<Notfound/>}/>
        </Route>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </>
  )
}

export default App