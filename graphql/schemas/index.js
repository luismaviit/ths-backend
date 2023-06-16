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

const { gql } = require('apollo-server-express');
const country_type = require('./country')
const state_type = require('./state')
const city_type = require('./city')
const user_type = require('./user')
const status_type = require('./status')
const company_type = require('./company')

const root_type = gql`
 type Query {
     root: String
 }
 type Mutation {
     root: String
 }

`;

module.exports = [
  root_type,
  country_type,
  state_type,
  city_type,
  user_type,
  status_type,
  company_type,
];
