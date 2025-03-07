import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Shop from './Pages/Shop'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NotFound from './Pages/NotFound'
import Layout from './Components/Layout'
import Cart from './Pages/Cart'
import FavouriteItems from './Components/FavouriteItems'

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route index element={<Home />} />
        <Route path='menu' element={<Menu />} />
        <Route path='shop' element={<Shop />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path='cart' element={<Cart />} />
        <Route path='favourite-items' element={<FavouriteItems />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App