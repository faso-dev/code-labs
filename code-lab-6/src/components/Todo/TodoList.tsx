import {TodoItem} from "./TodoItem";
import {ITodoListProps} from "../../types/props";

export const TodoList = ({todos}: ITodoListProps) => {
    return (
        <>
            {todos.map((todo, index) => (
                <TodoItem
                    todo={todo}
                    key={index}
                />
            ))}
        </>
    )
}