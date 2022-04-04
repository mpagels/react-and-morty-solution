import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DetailedCharacter from './pages/DetailedCharacter'
import Favorites from './pages/Favorites'

function App() {
  const [favoriteIDs, setFavoriteIDs] = useState(
    JSON.parse(localStorage.getItem('favoriteIDs')) || []
  )
  console.log('hello')
  function addFavorite(id) {
    setFavoriteIDs([...favoriteIDs, id])
  }
  console.log(favoriteIDs)
  function removeFavorite(id) {
    console.log('this', id)
    const updatedFavoriteIDs = favoriteIDs.filter((favID) => favID !== id)
    setFavoriteIDs(updatedFavoriteIDs)
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
                removeFavorite={removeFavorite}
                addFavorite={addFavorite}
              />
            }
          />
          <Route
            path="favorites"
            element={
              <Favorites
                removeFavorite={removeFavorite}
                favoriteIDs={favoriteIDs}
              />
            }
          />
        </Routes>
      </main>
      <NavBar />
    </div>
  )
}

export default App
