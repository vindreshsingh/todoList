import {ADD_TODO,
    EDIT_TODO,
    DELETE_TODO,
    DONE,
    NOT_DONE,
    SEARCH_TODO}
   from "./actionTypes";

export const addTodo = (newTodo) => ({
    type: ADD_TODO,
    payload: newTodo,
  });
  
export const deleteTodo=(todoId)=>({
    type:DELETE_TODO,
    payload:todoId
})

export const editTodo=(todo)=>({
    type:EDIT_TODO,
    payload:todo
});

export const done=(todoId)=>({
    type:DONE,
    payload:todoId
})
export const notDone=(todoId)=>({
    type:NOT_DONE,
    payload:todoId
})

export const searchTodo=()=>({
    type:SEARCH_TODO,
    payload:1

})
