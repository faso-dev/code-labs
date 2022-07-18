import {Todo} from "../../types/entities/todo";
import {ADD_TODO, COMPLETED_TODO, EDIT_TODO, REMOVE_TODO, TOGGLE_TODO, UNCOMPLETED_TODO} from "../../constants";

export const CompletedTodosAction = () => ({
    type: COMPLETED_TODO,
    payload: {}
})

export const UnCompletedTodosAction = () => ({
    type: UNCOMPLETED_TODO,
    payload: {}
})

export const AddTodoAction = (todo: Todo) => ({
    type: ADD_TODO,
    payload: todo
})

export const EditTodoAction = (todo: Partial<Todo>) => ({
    type: EDIT_TODO,
    payload: todo
})

export const ToggleTodoAction = (id: number) => ({
    type: TOGGLE_TODO,
    payload: id
})

export const RemoveTodoAction = (id: number) => ({
    type: REMOVE_TODO,
    payload: id
})
