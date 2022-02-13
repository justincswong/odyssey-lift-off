const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
    Query: () => ({
        tracksForHome: () => [...new Array(6)]
    }),
    Track: () => ({
        id: () => 'track_01',
        title: () => 'Hachibee',
        author: () => {
            return {
                name: 'Killer Bee',
                photo: 'https://static.wikia.nocookie.net/naruto-bleach-and-sonic/images/3/36/Killer_Bee.png/revision/latest?cb=20140824165856'
            }
        },
        thumbnail: () => 'http://shorturl.at/cdfxK',
        length: () => 2,
        modulesCount: () => 1
    })
}

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
    `)
})