import gql from "graphql-tag";

const todo = [];

export const utils_typeDef = gql`

    type Todo {
        id : Int!
        title : String
        description : String
        date : String
    }

    type Query {
        hello : String
        AllTodo : [Todo]
        TodoById(id : Int!) : Todo
     
    }
   
    type DeleteSuccess {
        DeletedId : Int
        Result : String
    }
     
    type Mutation {
        arithmetich_operation(arr : [Int!]!) : Float
        add_Todo(id : Int!, title : String!, description : String!, date : String!) : Todo
        delete_Todo(id : Int!) : DeleteSuccess
        update_Todo(id : Int!, title : String, description : String, date : String) : Todo
    }

`;