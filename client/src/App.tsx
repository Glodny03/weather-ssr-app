import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'
import { HomePage } from './components/pages/HomePage'
import { CityPage } from './components/pages/CityPage'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:city" element={<CityPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
