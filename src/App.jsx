// import { useState } from 'react'

import { Route, Routes } from "react-router-dom"
import Home from './pages/home/Home'
import Shop from "./pages/shop/Shop"
import Details from './pages/details/Details'
import Contact from './pages/contact/Contact'
import Cart from './pages/cart/Cart'
import Blog from './pages/blog/Blog'
import Auth from "./pages/auth/Auth"
import Admin from "./pages/admin/Admin"
import Header from "./components/layout/header/Header"
import Footer from "./components/layout/footer/Footer"
import Wishlist from "./pages/wishlist/Wishlist"
import ShoppingCart from "./pages/cart/shoppingCart/ShoppingCart"
import Checkout from "./pages/cart/checkout/Checkout"
import OrderComplete from "./pages/cart/orderComplete/OrderComplete"


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />}>
          <Route path="shopping" element={<ShoppingCart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="orderComplete" element={<OrderComplete />} />
        </Route>
        <Route path="admin" element={<Admin />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
