import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "../resolvers/index";
const typeDefs = 	`
        type Query {
                hello: String
                greet: Int
            }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})