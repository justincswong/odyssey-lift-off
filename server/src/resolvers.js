const resolvers = {
    Query: {
        // returns an array of Tracks that will be used to populate
        // the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            return dataSources.trackAPI.getTracksForHome();
        },
        // returns a single track by ID
        track: (_, { id: trackId }, { dataSources }) => {
            return dataSources.trackAPI.getTrack(trackId);
        }
    },
    Track: {
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
        modules: ({ id: trackId }, _, { dataSources }) => {
            return dataSources.trackAPI.getTrackModules(trackId);
        }
    }
};

module.exports = resolvers;