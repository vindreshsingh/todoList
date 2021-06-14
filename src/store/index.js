import {createStore} from "redux";
import reducer from "../reducer";
let store;
export function configureStore(){
    store=createStore(reducer);
    return store;
}