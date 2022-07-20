import {Button} from "../../lib/ui/src/components/Button"
import {TrashIcon} from "../../lib/ui/src/components/Icon/TrashIcon";
import {EditIcon} from "../../lib/ui/src/components/Icon/EditIcon";
import {ITodoProps} from "../../types/props";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../types/todoStore";
import {removeTodoAction, setCurrentEditTodo, toggleTodoAction} from "../../reducers/todo/actions";
import {openModal} from "../../reducers/modal/actions";
import {Switchable} from "../../lib/ui/src/components/Switchable";

export const TodoItem = ({todo}: ITodoProps) => {
    const dispatch = useDispatch<AppDispatch>()

    return (
        <>
            <div className={`todo ${todo.completed ? 'success' : ''}`}>
                <div className="title mb-1">
                    <h4 className='text-primary'>
                        {todo.title}
                    </h4>
                </div>
                <div className="description">
                    <p>
                        {todo.description}
                    </p>
                </div>
                <div className="actions flex space-between gap-2 mt-1">
                        <span className='text-muted'>
                            {todo.createdAt.toLocaleString()}
                        </span>

                    <div className="flex content-end items-end gap-2">
                        <Switchable
                            disabled={todo.completed}
                            defaultChecked={todo.completed}
                            onClick={() => {
                            dispatch(toggleTodoAction(todo.id))
                        }}/>
                        {!todo.completed && (
                            <>
                                <Button
                                    onClick={() => {
                                        dispatch(setCurrentEditTodo(todo))
                                        dispatch(openModal())
                                    }}
                                    style={{
                                        padding: '5px 10px',
                                        width: 'max-content',
                                        height: 'max-content'
                                    }}
                                    variant={'warning'}
                                    radius={'6px'}>
                                    <EditIcon color={'#fff'}/>
                                </Button>
                                <Button
                                    onClick={() => {
                                        if (window.confirm('Are u sure to perform this action ?')) {
                                            dispatch(removeTodoAction(todo.id))
                                        }
                                    }}
                                    style={{
                                        padding: '5px 10px',
                                        width: 'max-content',
                                        height: 'max-content'
                                    }}
                                    variant={'danger'}
                                    radius={'6px'}>
                                    <TrashIcon color={'#fff'}/>
                                </Button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}