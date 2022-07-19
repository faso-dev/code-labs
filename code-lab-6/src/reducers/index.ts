import modalReducer from "./modal/modalReducer";
import todoReducer from "./todo/todoReducer";
import {combineReducers} from "redux";

export const reducer = combineReducers({
    modal: modalReducer,
    todos: todoReducer
})