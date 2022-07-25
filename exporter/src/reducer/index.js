import { combineReducers } from 'redux';

import todoList from "./todoList"
console.log(todoList);
const reducer =combineReducers({
    todos:todoList
})
export default reducer;