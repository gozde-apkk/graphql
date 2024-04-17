import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import express from 'express'
import http from 'http'
import { ApolloServer } from '@apollo/server';
import { typeDefs, resolvers } from './graphql/schema/schema.js'
import { expressMiddleware } from '@apollo/server/express4';
import cors from "cors";
import pkg from "body-parser";



const { json } = pkg;

const app = express();
const httpServer = http.createServer(app);
const schema = makeExecutableSchema({ typeDefs, resolvers });


const server = new ApolloServer({
    schema: schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    uploads: false,
    csrfPrevention: true,
    cache: 'bounded',
});


await server.start();


app.use(
    "/graphql",
    cors(),
    json(),
    expressMiddleware(server, {
        context: async ({ req, res }) => ({
            req: req,
            res: res,
            authHeaders: req.headers.authorization,
            clientIp: req.ip,
        }),
    }),
);
app.use("/", (req, res) => {
    res.json({ message: "Hello World" })
})


httpServer.listen("3000", () => {
    console.log("Server started on port 3000")
});