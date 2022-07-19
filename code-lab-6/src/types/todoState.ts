import {Todo} from "./entities/todo";

export interface ITodoState {
    todos: Todo[],
    currentEditTodo?: Todo | null
}

export interface ITodoAction<T, P> {
    readonly type: T;
    readonly payload?: P;
}

