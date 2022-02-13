const { gql } = require('apollo-server');

const typeDefs = gql`
"A track is a group of Modules that teaches about a specific topic"
type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    "The approximate time it takes to complete the track, in minutes"
    length: Int
    "The number of modules the track contains"
    modulesCount: Int
}

"Author of a complete Track or a Module"
type Author {
    id: ID!
    name: String!
    photo: String
}

type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
}
`;

module.exports = typeDefs;