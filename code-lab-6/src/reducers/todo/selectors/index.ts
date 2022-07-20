import {RootState} from "../../../types/todoStore";
import {ITodoState} from "../../../types/todoState";

export const todoListSelector = (state: RootState, filter: string | null = null) => {
    const {todos, search: q} = state.todos as ITodoState

    if (filter === 'completed') {
        return todos.filter(t => {
            if (null !== q) {
                return t.completed && t.title.toLowerCase().indexOf(q.toLowerCase()) !== -1
            }
            return t.completed
        })
    }
    if (filter === 'progress') {
        return todos.filter(t => {
            if (null !== q) {
                return !t.completed && t.title.toLowerCase().indexOf(q.toLowerCase()) !== -1
            }
            return !t.completed
        })
    }

    if (null !== q) {
        return todos.filter(t => t.title.toLowerCase().indexOf(q.toLowerCase()) !== -1)
    }

    return todos
}

export const currentEditTodoSelector = (state: RootState) => {
    console.log(state.todos.currentEditTodo)
    return (state.todos as ITodoState).currentEditTodo
}