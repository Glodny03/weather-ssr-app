import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { CityPage } from './pages/CityPage'
import { Container } from '@mui/material'
import { SearchForm } from './components/SearchForm'

const App = () => {
  return (
    <Container>
      <SearchForm />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:city" element={<CityPage />} />
      </Routes>
    </Container>
  )
}

export default App
