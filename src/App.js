import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailedCharacter from './pages/DetailedCharacter'
import Favorites from './pages/Favorites'
import RandomCharacter from './pages/RandomCharacter'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="character/:id" element={<DetailedCharacter />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="random" element={<RandomCharacter />} />
        </Routes>
      </main>
      <NavBar />
    </div>
  )
}

export default App
