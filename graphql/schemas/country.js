const { gql } = require('apollo-server-express');

module.exports = gql`

 type Country {
     id: Int!
     name: String
     State:[State]
 }

 extend type Mutation {
     CreateCountry(name:String): ResponseCountry
     UpdateCountry(id:Int!,name:String): ResponseCountry
     DeleteCountry(id:Int!):Boolean
 }

 extend type Query {
     getAllCountries(id:Int, name:String): [Country!]
 }

 type ResponseCountry {
    id: Int!
    name: String!
 }
`;
