import {ADD_TODO,DONE,NOT_DONE,DELETE_TODO,EDIT_TODO} from "../action/actionTypes";

const initialState=[
  {id:1,title:"abc",completed:true}
];
const addTodo=(state,newTodo)=>{
  console.log("add todo",state);
    const { title, completed } = newTodo;
    const ids = state.map(todo => todo.id);
    const newId = Math.max(...ids) + 1;
    const todo = {
      id: newId,
      title,
      completed,
    };
    const newState = [...state, todo]
    return newState
}
const done=(state, todoId)=> {
  console.log(todoId);
  const newState = state.map(todo => {

    if (todo.id === Number(todoId)) {
      return {
        id: todo.id,
        title: todo.title,
        completed: false,
      };
    }
    return todo;
  });
  return newState
}

const deleteTodo=(state, todoId)=>  {
  const newState = state.filter(todo => {
    console.log("test", todo);
    return todo.id !== todoId
  });
  return newState
}

const notDone=(state, todoId)=>{
  const newState = state.map(todo => {
    if (todo.id === todoId) {
      return {
        id: todo.id,
        title: todo.title,
        completed: true,
      };
    }
    return todo;
  });
  return newState
  }

  const editTodo = (state, updateTodo) => {
    console.log(" ", updateTodo);
    const newState = state.map(todo => {
      console.log("tod and id",todo,todo.id);
      if (todo.id === updateTodo.id) {
        return {
          id: todo.id,
          title: updateTodo.title,
          completed: todo.completed
        };
      }
      return todo;
    });
    return newState;
  }
const todoList=(state=initialState,action)=>{
  console.log("action ",state);
  switch(action.type) {
    case ADD_TODO: return addTodo(state, action.payload);
    case DONE:return done(state, action.payload);
    case NOT_DONE:return notDone(state, action.payload);
    case DELETE_TODO:return deleteTodo(state, action.payload);
    case EDIT_TODO:return editTodo(state,action.payload);
    default: return state;
  }
}
export default todoList;