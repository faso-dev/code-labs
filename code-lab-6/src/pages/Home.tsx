import {TodoList} from "../components/Todo";
import {useSelector} from "react-redux";
import {todoListSelector} from "../reducers/todo/selectors";

export const Home = () => {

    const todos = useSelector(todoListSelector)

    return (
        <>
            <h4 className='text-primary mb-2'>
                Liste de vos tâches ({todos.length})
            </h4>
            <div className="mt-2">
                <TodoList todos={todos}/>
            </div>
        </>
    )
}