import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import DetailedCharacter from './DetailedCharacter'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="character/:id" element={<DetailedCharacter />} />
        </Routes>
      </main>
      <NavBar />
    </div>
  )
}

export default App
