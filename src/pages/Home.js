import { useQuery } from '@apollo/client'
import React from 'react'
import Character from '../components/Character'
import { ALL_CHARACTERS } from '../queries/queries'

export default function Home() {
  const { loading, error, data } = useQuery(ALL_CHARACTERS)

  if (error)
    return (
      <ul>
        <li>Error :(</li>
      </ul>
    )

  return (
    <ul>
      {data?.characters.results?.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </ul>
  )
}
