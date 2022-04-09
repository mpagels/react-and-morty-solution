import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import useStore, { getFavorites, getRemoveFavorite } from '../store/store'

export default function Favorites() {
  const [characters, setCharacters] = useState([])

  const removeFavorite = useStore(getRemoveFavorite)
  const favorites = useStore(getFavorites)

  useEffect(() => {
    const fetches = favorites.map((ids) =>
      fetch('https://rickandmortyapi.com/api/character/' + ids).then(
        (response) => response.json()
      )
    )
    Promise.all(fetches).then((data) => setCharacters(data))
  }, [favorites])

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
