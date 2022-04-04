import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function Favorites({ favoriteIDs, removeFavorite }) {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetches = favoriteIDs.map((ids) =>
      fetch('https://rickandmortyapi.com/api/character/' + ids).then(
        (response) => response.json()
      )
    )
    Promise.all(fetches).then((data) => setCharacters(data))
  }, [favoriteIDs])

  return (
    <List>
      {characters?.map((character) => (
        <li key={character.id}>
          <FavButton
            onClick={() => removeFavorite(character.id.toString())}
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
