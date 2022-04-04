import React from 'react'
import styled from 'styled-components'

export default function Character({ character }) {
  return (
    <Wrapper>
      <img src={character.image} alt="rick-and-morty-character" />
      <h2>{character.name}</h2>
      <button>show more</button>
    </Wrapper>
  )
}

const Wrapper = styled.li`
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
