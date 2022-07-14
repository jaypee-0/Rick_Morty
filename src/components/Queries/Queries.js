import { gql } from '@apollo/client';

const getAllCharacters = gql`
  query GetCharacters {
  characters {
    results {
      id
      name
      status
      species
      gender
      created
      image
    }
  }
}
`
export { getAllCharacters };
