"use strict"



// {
//     id: 1,
//     text: "Todo",
//     is_completed: false,
// }


let todos = [];


const getNewTodoId = (todos) => {
    return todos.reduce((maxId, todo) => {
        if (todo.id > maxId) {
            return todo.id;
        }  else {
            return maxId;
        }
    }, 0) + 1;
}

const createTodo = (todos, text) => {
    const newTodo = { 
        id: getNewTodoId(todos), 
        text:text, 
        is_complete: false, 
    };
    todos.push(newTodo);
    return newTodo;
};

const completeTodoById = (todos, todoId) => {
    const todo = todos.find((todo) => todo.id === todoId);
    if(todo === undefined) {
        console.error(`The todo with the ID ${todoId} has not been found.`);
        return null;
    }
    todo.is_complete = !todo.is_complete;
    return todo;
};

const deleteTodoById = (todos, todoId) => {
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    if (todoIndex === -1) {
        console.error(`The todo with the ID ${todoId} has not been found.`)
        return todos;
    };
    todos.splice(todoIndex, 1);
    return todos;
};