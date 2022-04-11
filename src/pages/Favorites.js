import { useLazyQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { CHARACTERS_BY_ID } from '../queries/queries'

export default function Favorites({ favoriteIDs, toggleFavorite }) {
  const [getCharactersByID, { loading, error, data, previousData }] =
    useLazyQuery(CHARACTERS_BY_ID)

  useEffect(() => {
    if (favoriteIDs.length !== 0) {
      getCharactersByID({
        variables: { ids: favoriteIDs },
        nextFetchPolicy: 'cache-first',
      })
    }
  }, [favoriteIDs, getCharactersByID])

  if (error)
    return (
      <ul>
        <li>Error :(</li>
      </ul>
    )

  const { charactersByIds: characters } = data || previousData || []

  if (favoriteIDs.length === 0) {
    return null
  }

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
