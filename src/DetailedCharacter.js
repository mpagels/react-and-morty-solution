import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function DetailedCharacter() {
  const { id } = useParams()
  const [character, setCharacter] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/' + id).then((response) =>
      response.json().then((data) => setCharacter(data))
    )
  }, [])

  console.log(id)
  return (
    <li>
      <img src={character.image} alt="character-pic" />
      <h2>{character.name}</h2>
      <button onClick={toggle}>show more</button>
      {isOpen ? (
        <ul>
          <li>species: {character.species}</li>
          <li>gender: {character.gender}</li>
          <li>status: {character.status}</li>
        </ul>
      ) : (
        ''
      )}
    </li>
  )
}
