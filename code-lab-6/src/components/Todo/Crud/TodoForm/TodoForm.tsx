import {TextField} from "../../../../lib/ui/src/components/Field/TextField/TextField";
import {TextareaField} from "../../../../lib/ui/src/components/Field/TextariaField/TextareaField";
import {Button} from "../../../../lib/ui/src/components/Button";
import {SaveIcon} from "../../../../lib/ui/src/components/Icon/SaveIcon";
import {Modal} from "../../../../lib/ui/src/components/Modal";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../../../../types/todoStore";
import {useCallback, useRef} from "react";
import {addTodoAction, editTodoAction, setCurrentEditTodo} from "../../../../reducers/todo/actions";
import {hideModal} from "../../../../reducers/modal/actions";
import {modalStateSelector} from "../../../../reducers/modal/selectors";
import {currentEditTodoSelector} from "../../../../reducers/todo/selectors";

export const TodoForm = () => {
    const dispatch = useDispatch<AppDispatch>()
    const editTodo = useSelector(currentEditTodoSelector)
    const open = useSelector(modalStateSelector)
    const todoNameRef = useRef<HTMLInputElement | null>(null)
    const todoDescriptionRef = useRef<HTMLTextAreaElement | null>(null)

    const resetForm = useCallback(() => {
        if (null !== todoNameRef.current && null !== todoDescriptionRef.current) {
            todoNameRef.current.value = editTodo?.title ?? ''
            todoDescriptionRef.current.value = editTodo?.description ?? ''
        }
    }, [editTodo])

    return (
        <>
            <Modal
                open={open}
                onClose={() => {
                    dispatch(setCurrentEditTodo(null))
                    dispatch(hideModal())
                }}
                title='Ajouter une nouvelle tâche'
                titleColor='#0d6efd'
                radius={'12px'}
                beforeOnOpen={resetForm}
                beforeOnClose={resetForm}
            >
                <div className="mt-2">
                    <TextField
                        ref={todoNameRef}
                        defaultValue={editTodo?.title ?? ''}
                        maxwidth='100%'
                        placeholder={'Tâche...'}
                        radius={'12px'}
                        type='text'/>
                </div>
                <div className="mt-2">
                    <TextareaField
                        ref={todoDescriptionRef}
                        defaultValue={editTodo?.description ?? ''}
                        maxwidth='100%'
                        placeholder={'Description...'}
                        radius={'12px'}
                    />
                </div>
                <div className="mt-2 flex content-end">
                    <Button
                        radius={'12px'}
                        variant={'primary'}
                        onClick={() => {
                            const todoName = todoNameRef.current?.value || ''
                            const todoDescription = todoDescriptionRef.current?.value || ''

                            if (todoName.trim().length > 2) {
                                if (editTodo?.id) {
                                    dispatch(editTodoAction({
                                        ...editTodo,
                                        title: todoName,
                                        description: todoDescription
                                    }))
                                } else {
                                    dispatch(addTodoAction({
                                        id: Date.now().toString(),
                                        title: todoName,
                                        description: todoDescription,
                                        completed: false,
                                        createdAt: new Date()
                                    }))
                                }
                                dispatch(hideModal())
                                dispatch(setCurrentEditTodo(null))
                            }

                        }}
                    >
                        <SaveIcon
                            color={'#fff'}
                        />
                    </Button>
                </div>
            </Modal>
        </>
    )
}