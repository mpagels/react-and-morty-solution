import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

export default function DetailedCharacter({
  favoriteIDs,
  removeFavorite,
  addFavorite,
}) {
  const { id } = useParams()
  const [character, setCharacter] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  const toggleFavorites = () => {
    if (favoriteIDs.includes(id)) {
      removeFavorite(id)
    } else {
      addFavorite(id)
    }
  }

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
    <List>
      <li>
        <FavButton
          onClick={toggleFavorites}
          isFavorite={favoriteIDs.includes(id)}
        >
          Save as favorite
        </FavButton>
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
    </List>
  )
}

const List = styled.ul`
  position: relative;
  margin: 0;
`

const FavButton = styled.button`
  position: absolute;
  right: 0;
  background-color: ${(props) => (props.isFavorite ? 'lightgreen' : '')};
`
