import {Todo} from "./entities/todo";

export interface ITodoState {
    todos : Todo[]
}

export interface ITodoAction<T, P> {
    readonly type: T;
    readonly payload: P;
}

