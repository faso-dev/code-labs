import {ITodoAction, ITodoState} from "../types/todoState";
import {ADD_TODO, COMPLETED_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO, UNCOMPLETED_TODO} from "../constants";


export const initialTodosState: ITodoState = {
    todos: []
}

const TodoReducer = (state = initialTodosState, action: ITodoAction<string, any>) => {
    switch (action.type) {
        case COMPLETED_TODO:
            return {todos: state.todos.filter(todo => todo.completed)}
        case UNCOMPLETED_TODO:
            return {todos: state.todos.filter(todo => !todo.completed)}
        case ADD_TODO:
            return {todos: [action.payload, ...state.todos]}
        case EDIT_TODO:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {...todo, ...action.payload}
                    }
                    return todo
                })
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo
                })
            }
        case REMOVE_TODO:
            return {todos: state.todos.filter(todo => todo.id !== action.payload)}
        default :
            return {todos: state.todos}
    }
}

export default TodoReducer