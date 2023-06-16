const { gql } = require('apollo-server-express');

module.exports = gql`

 type User { id: Int!, name: String, last_name:String, email:String,
 phone:String, user:String, password:String, company:String, work_department:String,
 born_date:Date, enabled:Boolean
 }

 extend type Mutation {
     Login( user:String, password:String ): LoginResponse

     Create_Reg_Password( token:String, password:String ):JSON

     CreateUser( name: String!, last_name:String!, email:String!, phone:String, user:String!,
     password:String!, company:String!, work_department:String!, enabled:Boolean ): ResponseUser

     UpdateUser( id:Int!, name: String, last_name:String, email:String, phone:String, 
     user:String, password:String, company:String, work_department:String,
     enabled:Boolean ): ResponseUser
     
     UpdateManyUsers( input: [ManyUsers] ):JSON
     
     DeleteUser(id:[Int!]):Boolean
 }

 extend type Query {

     getAllUsers(id:Int!, name: String, last_name:String, email:String, phone:String, 
     user:String, password:String, company:String, work_department:String,
     enabled:Boolean ): [User!]

 }

 input ManyUsers{ id:Int!, name: String, last_name:String, email:String, phone:String, password:String,
 company:String, work_department:String, born_date:Date, enabled:Boolean }
 
 type ResponseUser { id: Int, name: String, last_name:String, email:String, phone:String, user:String,
 password:String, company:String, work_department: String, born_date: Date, enable: Boolean }

 type LoginResponse { id: Int!, name: String!, email: String!, last_name:String, token: String! }
`;
