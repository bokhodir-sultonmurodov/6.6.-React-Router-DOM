import React from 'react'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Login from './pages/login/Login'
import { Routes, Route, } from 'react-router-dom'
import Header from './components/header/Header'
import Contact from './pages/contact/Contact'
import Footer from './components/footer/Footer'
import Layout from './pages/layout/Layout'
import Post from './pages/post/Post'
import Notfound from './pages/notfoun/Notfound'
import ProductDetail from './pages/product-detail/ProductDetail'
import RecipeDetail from './pages/recipe-detail/RecipeDetail'
import PostDetail from './pages/use-detail/PostDetail'
import UserDetail from './pages/user-detail/UserDetail'
import Dashboard from './pages/dashboard/Dashboard'
import Groups from './pages/dashboard/groups/Groups'
import Admin from './pages/dashboard/admin/Admin'
import Lessons from './pages/dashboard/lessons/Lessons'
import Payment from './pages/dashboard/payment/Payment'
import Profile from './pages/dashboard/profile/Profile'
import Rating from './pages/dashboard/rating/Rating'
import Settings from './pages/dashboard/settings/Settings'
import Shop from './pages/dashboard/shop/Shop'
import Statistic from './pages/dashboard/statistics/Statistic'
import Student from './pages/dashboard/student/Student'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>

          <Route path='/' element={<Home />} />
          <Route path='/haqida' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/recipe/:id' element={<RecipeDetail />} />
          <Route path='/post/:id' element={<PostDetail />} />
          <Route path='/user/:id' element={<UserDetail />} />
          <Route path='/post' element={<Post />} />
          <Route path='*' element={<Notfound />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} >
          <Route path='' element={<Groups/>} />
          <Route path='admin' element={<Admin/>} />
          <Route path='lesson' element={<Lessons/>} />
          <Route path='payment' element={<Payment/>} />
          <Route path='profle' element={<Profile/>} />
          <Route path='rating' element={<Rating/>} />
          <Route path='settings' element={<Settings/>} />
          <Route path='shop' element={<Shop/>} />
          <Route path='statistic' element={<Statistic/>} />
          <Route path='student' element={<Student/>} />
        </Route>

      </Routes>
    </>
  )
}

export default App