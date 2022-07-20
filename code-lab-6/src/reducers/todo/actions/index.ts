import {Todo} from "../../../types/entities/todo";
import {ADD_TODO, EDIT_TODO, REMOVE_TODO, SET_CURRENT_TODO, TOGGLE_TODO, UPDATE_SEARCH_PARAM} from "../../../constants";


export const addTodoAction = (todo: Partial<Todo>) => ({
    type: ADD_TODO,
    payload: {
        ...todo,
        completed: false,
        id: Date.now(),
        createdAt: new Date()
    }
})

export const editTodoAction = (todo: Partial<Todo>) => ({
    type: EDIT_TODO,
    payload: todo
})

export const setCurrentEditTodo = (todo: null | Todo) => ({
    type: SET_CURRENT_TODO,
    payload: todo
})

export const toggleTodoAction = (id: string) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const removeTodoAction = (id: string) => ({
    type: REMOVE_TODO,
    payload: id
})

export const performSearch = (q: string | null) => ({
    type: UPDATE_SEARCH_PARAM,
    payload: q
})
