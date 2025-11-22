import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedCollection from './components/FeaturedCollection'
import Quality from './components/Quality'
import About from './components/About'
import NewArrivals from './components/NewArrivals'
import LimitedDrop from './components/LimitedDrop'
import Footer from './components/Footer'
import CollectionPage from './components/CollectionPage'
import ProductPage from './components/ProductPage'
import CartPage from './components/CartPage'

function HomePage() {
  return (
    <div className="bg-black">
      <Header />
      <main className="pt-16">
        <Hero />
        <FeaturedCollection />
        <Quality />
        <About />
        <NewArrivals />
        <LimitedDrop />
      </main>
      <Footer />
    </div>
  )
}

function ShopPage() {
  return (
    <div className="bg-black">
      <Header />
      <CollectionPage />
      <Footer />
    </div>
  )
}

function PDP() {
  return (
    <div className="bg-black">
      <Header />
      <ProductPage />
      <Footer />
    </div>
  )
}

function Cart() {
  return (
    <div className="bg-black">
      <Header />
      <CartPage />
      <Footer />
    </div>
  )
}

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/product" element={<PDP />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}
