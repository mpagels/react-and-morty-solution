import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailedCharacter from './pages/DetailedCharacter'
import Favorites from './pages/Favorites'
import RandomCharacter from './pages/RandomCharacter'

function App() {
  const [favoriteIDs, setFavoriteIDs] = useState(
    () => JSON.parse(localStorage.getItem('favoriteIDs')) || []
  )

  function toggleFavorite(id) {
    if (favoriteIDs.includes(id)) {
      const updatedFavoriteIDs = favoriteIDs.filter((favID) => favID !== id)
      setFavoriteIDs(updatedFavoriteIDs)
    } else {
      setFavoriteIDs([...favoriteIDs, id])
    }
  }

  useEffect(() => {
    localStorage.setItem('favoriteIDs', JSON.stringify(favoriteIDs))
  }, [favoriteIDs])

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="character/:id"
            element={
              <DetailedCharacter
                favoriteIDs={favoriteIDs}
                toggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="favorites"
            element={
              <Favorites
                toggleFavorite={toggleFavorite}
                favoriteIDs={favoriteIDs}
              />
            }
          />
          <Route path="random" element={<RandomCharacter />} />
        </Routes>
      </main>
      <NavBar />
    </div>
  )
}

export default App
