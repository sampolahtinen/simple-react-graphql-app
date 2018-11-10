import gql from "graphql-tag";

const GET_PERSONS = gql`
  query allPersons($filter: PersonFilter) {
    allPersons(filter: $filter) {
      id
      name
      species {
        id
        classification
      }
    }
  } 
`;

const GET_PERSON_DETAILS = gql`
  query personDetails($id: ID!) {
      Person(id: $id) {
        name
        gender
        birthYear
        height
      mass
        homeworld {
          id
          name
        }
      films (orderBy: releaseDate_DESC) {
        id
        title
        releaseDate
        characters(filter: { species_every: { classification: "mammal"}}) {
            id
            name
            films (orderBy: releaseDate_DESC) {
              title
            }
          }
      }
      }
  }
`;

export { GET_PERSONS, GET_PERSON_DETAILS };
