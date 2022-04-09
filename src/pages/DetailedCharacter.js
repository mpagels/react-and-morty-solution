import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import useStore, {
  getAddFavorite,
  getFavorites,
  getRemoveFavorite,
} from '../store/store'

export default function DetailedCharacter() {
  const { id } = useParams()

  const removeFavorite = useStore(getRemoveFavorite)
  const favorites = useStore(getFavorites)
  const addFavorite = useStore(getAddFavorite)

  const [character, setCharacter] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  console.log('hi')
  const toggleFavorites = () => {
    if (favorites.includes(id)) {
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

  const isFavorite = favorites.includes(character?.id?.toString())
  return (
    <List>
      <li>
        <FavButton onClick={toggleFavorites} isFavorite={isFavorite}>
          {isFavorite ? 'Remove as favorite' : 'Save as favorite'}
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
