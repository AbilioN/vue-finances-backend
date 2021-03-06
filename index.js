const { prisma } = require('./generated/prisma-client');
const { GraphQLServer } = require('graphql-yoga');


const resolvers  = {
    Query: {
        user(parent, args, context, info){
            return prisma.user({id: args.id});
        }
    }
}



const server = new GraphQLServer({
    typeDefs: './schema.graphql',
    resolvers: resolvers
});



server.start().then(() => console.log('server running on http://localhost:4000...'));
