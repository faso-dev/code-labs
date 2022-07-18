import {TodoList} from "../components/Todo";

export const CompletedTodo = () => {
    const todos = Array.from(Array(10).keys()).map(index => ({
        id: index.toString(),
        title: 'Une tâche à faire',
        completed: index % 2 === 0,
        description: 'La description de ma tâche',
        createdAt: new Date()
    })).filter(t => t.completed)
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