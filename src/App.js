import { useEffect, useState } from 'react'
import './App.css'
import Character from './components/Character'
import Header from './components/Header'
import NavBar from './components/NavBar'

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((reponse) => reponse.json())
      .then((data) => setCharacters(data.results))
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <ul>
          {characters?.map((character) => (
            <Character key={character.id} character={character} />
          ))}
        </ul>
      </main>
      <NavBar />
    </div>
  )
}

export default App
