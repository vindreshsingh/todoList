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

export const editTodo=(todoId)=>({
    type:EDIT_TODO,
    payload:todoId
});

export const done=(todoId)=>({
    type:DONE,
    payload:todoId
})
export const notDone=(todoId)=>({
    type:NOT_DONE,
    payload:todoId
})

export const searchTodo=(todId)=>({
    type:SEARCH_TODO,
    payload:todoId

})