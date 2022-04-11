import { useQuery } from '@apollo/client'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { CHARACTER } from '../queries/queries'

export default function DetailedCharacter({ favoriteIDs, toggleFavorite }) {
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState(false)

  const { loading, error, data } = useQuery(CHARACTER, {
    variables: { id },
  })

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  if (error)
    return (
      <ul>
        <li>Error :(</li>
      </ul>
    )
  if (loading) return null
  const { character } = data
  return (
    <List>
      <li>
        <FavButton
          onClick={() => toggleFavorite(id)}
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
