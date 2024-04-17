import { AllTodo, TodoById, addTodo, deleteTodo, updateTodo } from "../../components/util/todo.js"
import { arithmetic } from "../../components/util/aritmetic.js"



export const utils_resolver = {

    Query : {

        hello : () => {
            return "Hello World"    
        },
        
        AllTodo : () => {
            return AllTodo();
        },

        TodoById : (_, args) => {

         return TodoById(_, args);
        }
    },

    Mutation : {
        arithmetich_operation : (_, args) => {

            return arithmetic(args.arr)
        },
        
        add_Todo : (_, args) => {
            return addTodo(_, args);
        },
        
        delete_Todo : (_ , args) => {
            return deleteTodo(_, args);
        },
        
        update_Todo : (_, args) => {
            return updateTodo(_, args);
        }
    }
}