import {TodoList} from "../components/Todo";
import {useSelector} from "react-redux";
import {RootState} from "../types/todoStore";
import {todoListSelector} from "../reducers/todo/selectors";

export const CompletedTodo = () => {

    const todos = useSelector((state: RootState) => todoListSelector(state, 'completed'))

    return (
        <>
            <h4 className='text-primary mb-2'>
                Tâches terminées ({todos.length})
            </h4>
            <div className="mt-2">
                <TodoList todos={todos}/>
            </div>
        </>
    )
}