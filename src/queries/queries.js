import { gql } from '@apollo/client'

export const ALL_CHARACTERS = gql`
  query GetAllCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

export const CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      gender
      status
    }
  }
`

export const CHARACTERS_BY_ID = gql`
  query GetCharacterByIDs($ids: [ID!]!) {
    charactersByIds(ids: $ids) {
      id
      name
      image
      species
      gender
      status
    }
  }
`
