import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Favorites({ favoriteIDs, toggleFavorite }) {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (favoriteIDs.length === 0) {
      setCharacters([])
    } else {
      fetch(`https://rickandmortyapi.com/api/character/[${favoriteIDs.join()}]`)
        .then((response) => response.json())
        .then((characters) => setCharacters(characters))
    }
  }, [favoriteIDs])

  return (
    <List>
      {characters?.map((character) => (
        <li key={character.id}>
          <FavButton
            onClick={() => toggleFavorite(character.id.toString())}
            isFavorite={true}
          >
            Remove as favorite
          </FavButton>
          <img src={character.image} alt="character-pic" />
          <h2>{character.name}</h2>
        </li>
      ))}
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
