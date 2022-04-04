import React, { useState } from 'react'
import styled from 'styled-components'
import Character from '../components/Character'

const MAX = 826

export default function RandomCharacter() {
  const [character, setCharacter] = useState(null)

  function getRandomCharacter() {
    const randomID = Math.floor(Math.random() * MAX)
    fetch('https://rickandmortyapi.com/api/character/' + randomID)
      .then((response) => response.json())
      .then((data) => setCharacter(data))
  }
  return (
    <Wrapper>
      {character ? (
        <Character character={character} />
      ) : (
        <QuestionMark>?</QuestionMark>
      )}
      <button onClick={getRandomCharacter}>Get random character</button>
    </Wrapper>
  )
}

const QuestionMark = styled.h2`
  font-size: 9rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
