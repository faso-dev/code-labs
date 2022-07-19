import {RootState} from "../../../types/todoStore";
import {ITodoState} from "../../../types/todoState";

export const todoListSelector = (state: RootState, filter?: string) => {
    const {todos} = state.todos as ITodoState
    if (filter === 'completed') {
        return todos.filter(t => t.completed)
    }
    if (filter === 'progress') {
        return todos.filter(t => !t.completed)
    }

    return todos
}

export const currentEditTodoSelector = (state: RootState) => {
    console.log(state.todos.currentEditTodo)
    return (state.todos as ITodoState).currentEditTodo
}