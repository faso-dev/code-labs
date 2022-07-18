import {ReactNode} from "react";
import {Todo} from "../entities/todo";

export interface IAppContainerProps {
    children: ReactNode
}

export interface IPageProps {
    children: ReactNode
}

export interface IAppRouteProps {
    children: ReactNode
}

export interface ITodoListProps {
    todos: Todo[]
}

export interface ITodoProps {
    todo: Todo
}

