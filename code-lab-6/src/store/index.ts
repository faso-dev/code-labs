import {createStore} from "redux";
import TodoReducer from "../reducers/todoReducer";


const store = createStore(TodoReducer)

export default store