const { gql } = require('apollo-server-express');

module.exports = gql`

 type City { id: Int!, name: String, postal_code:String, State:State, User:[User], Company:[Company] }

 extend type Mutation {
     CreateCity(name:String!, postal_code:String, StateId:Int!): ResponseCity
     UpdateCity(id:Int!, name:String, postal_code:String, StateId:Int): ResponseCity
     DeleteCity(id:Int!):Boolean
 }

 extend type Query {
     getAllCities(id:Int, name:String, postal_code:String, StatusId:Int): [City!]
 }

 type ResponseCity { id: Int!, name: String!, postal_code:String! }
`;
