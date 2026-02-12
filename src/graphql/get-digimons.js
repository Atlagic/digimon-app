import gql from 'graphql-tag'

export const GET_DIGIMONS = gql`
    query {
        digimon {
            id
            name
            level
            img
            description
            types
            digivolutions {
                id
                name
                img
            }
        }
    }
`
