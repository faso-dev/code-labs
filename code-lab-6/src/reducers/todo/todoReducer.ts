import {ITodoAction, ITodoState} from "../../types/todoState";
import {
    ADD_TODO,
    COMPLETED_TODO,
    EDIT_TODO,
    REMOVE_TODO,
    SET_CURRENT_TODO,
    TOGGLE_TODO,
    UNCOMPLETED_TODO, UPDATE_SEARCH_PARAM
} from "../../constants";


export const initialTodosState: ITodoState = {
    todos: [],
    currentEditTodo: null,
    search: null
}

const TodoReducer = (state = initialTodosState, action: ITodoAction<string, any>) => {
    switch (action.type) {
        case COMPLETED_TODO:
            return {...state, todos: state.todos.filter(todo => todo.completed)}
        case UNCOMPLETED_TODO:
            return {...state, todos: state.todos.filter(todo => !todo.completed)}
        case ADD_TODO:
            return {...state, todos: [action.payload, ...state.todos]}
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload.id) {
                        return {...todo, ...action.payload}
                    }
                    return todo
                })
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload) {
                        return {...todo, completed: !todo.completed}
                    }
                    return todo
                })
            }
        case REMOVE_TODO:
            return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
        case SET_CURRENT_TODO:
            return {...state, currentEditTodo: action.payload}
        case UPDATE_SEARCH_PARAM:
            return {...state, search: action.payload}
        default :
            return {...state, todos: state.todos}
    }
}

export default TodoReducer