
 const todo = [];

export const addTodo = (_, args) => {
     
    console.log("args", args);
    const {id, title , description, date} = args;
    const newTodo = {id, title, description, date};
    todo.push(newTodo);
    return newTodo;
    console.log(todo);
}


export const deleteTodo = (_, args) => {
    console.log("args", args);
    const {id} = args;
    
    todo.splice(todo.findIndex(todo => todo.id === id), 1);
    return {DeletedId : id, Result : ` ${id} todo silindi.`};
}


export const updateTodo = (_, args) => {
    console.log("args", args);
    const {id, title, description, date} = args;
    const index = todo.findIndex((todo) => todo.id === id);
    todo[index].title = title;
    todo[index].description = description;
    todo[index].date = date;
    return todo[index];
}

export const AllTodo = () => [...todo];


export const TodoById = (_, args) => {
    const {id} = args;
    return todo.find(todo => todo.id === id);
}