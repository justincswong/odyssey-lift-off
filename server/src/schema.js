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
    "The track's complete description, can be in MD format"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "The track's complete array of modules"
    modules: [Module!]!
}

"Author of a complete Track or a Module"
type Author {
    id: ID!
    name: String!
    photo: String
}

"A Module is a single unit of teaching. Multiple Modules compose a Track"
type Module {
    id: ID!
    title: String!
    length: Int
}

type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    track(id: ID!): Track
}

type Mutation {
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse!
}

type IncrementTrackViewsResponse {
    code: Int!
    success: Boolean!
    message: String!
    track: Track
}
`;

module.exports = typeDefs;