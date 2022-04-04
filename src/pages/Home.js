import React, { useEffect, useState } from 'react'
import Character from '../components/Character'

export default function Home() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((reponse) => reponse.json())
      .then((data) => setCharacters(data.results))
  }, [])

  return (
    <ul>
      {characters?.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </ul>
  )
}
