import React from 'react'
import styled from 'styled-components'
import Character from '../components/Character'
import { useLazyQuery } from '@apollo/client'
import { CHARACTER } from '../queries/queries'

const MAX = 826

export default function RandomCharacter() {
  const [getCharacter, { loading, error, data, previousData }] =
    useLazyQuery(CHARACTER)

  function getRandomCharacter() {
    const randomID = Math.floor(Math.random() * MAX)
    getCharacter({
      variables: { id: randomID },
      nextFetchPolicy: 'cache-first',
    })
  }

  if (error)
    return (
      <ul>
        <li>Error :(</li>
      </ul>
    )

  const { character } = data || previousData || []

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
