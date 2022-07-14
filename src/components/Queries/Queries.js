import { gql } from '@apollo/client';

const getAllCharacters = gql`
query getAllCharacters {
 characters {
  results {
  	id
  	name
  	status
  	species
  	gender
  	created
  	image
    location {
      id
      dimension
    	}
    type 
    origin {
      id
      name
    }
  	}
	}
}
`
export { getAllCharacters };
