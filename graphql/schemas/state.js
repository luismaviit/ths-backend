const { gql } = require('apollo-server-express');

module.exports = gql`

 type State { id: Int!, name: String, Country:Country, City:[City] }

 extend type Mutation {
     CreateState(name:String!, CountryId:Int!): ResponseState
     UpdateState(id:Int!, name:String, CountryId:Int): ResponseState
     DeleteState(id:Int!):Boolean
 }

 extend type Query {
     getAllStates(id:Int, name:String, CountryId:Int): [State!]
 }

 type ResponseState { id: Int!, name: String! }
`;
