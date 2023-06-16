const { gql } = require('apollo-server-express');

module.exports = gql`

 type Company { id: Int!, img:String, City:City, Status:Status, User:[User] }

 extend type Mutation {
     CreateCompany( name:String!, img:String, CityId:Int, StatusId:Int, UserId:[Int] ): ResponseCompany
     UpdateCompany( id:Int!, name:String, img:String, CityId:Int, StatusId:Int, UserId:[Int] ): ResponseCompany
     DeleteCompany(id:Int!):Boolean
 }

 extend type Query {

     getAllCompany( id:Int, name:String, img:String ): [JSON]
     getAllCompaniesName( name:String ): [JSON]
     getCompanyByName( id:Int, name:String, img:String ): [Company!]
 }

 type ResponseCompany { id: Int!, name: String! }
`;
