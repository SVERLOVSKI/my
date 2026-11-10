import type { Status, Task } from "../../data/seed";
import TaskCard from "../TaskCard/TaskCard";

interface ColumnProps {
    tasks: Task[]
    columnName: string
    showOnlyIncomplete?: boolean
    theme: string
    onStatusChange: (taskId: string, newStatus: Status) => void
    onTitleChange: (taskId: string, newTitle: string) => void
    onDeleteTask: (taskId: string) => void
    onAddAttempt: (taskId: string) => void
}

const Column = ({
    tasks,
    columnName,
    showOnlyIncomplete,
    theme,
    onStatusChange,
    onTitleChange,
    onDeleteTask,
    onAddAttempt}: ColumnProps) => {
    
    if (tasks.length === 0 || showOnlyIncomplete) {
        return (
            <div className="max-w-40">
                Список задач пуст, добавьте задачу или перетащите ее с другого статуса
            </div>
        )
    }

    const filteredTasks = tasks.filter(task => theme === 'all' || task.topic === theme)

    return (
        <div>
            <h3>{columnName}</h3>
            <ul>
                {filteredTasks.map(task => <TaskCard
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onTitleChange={onTitleChange}
                    onDeleteTask={onDeleteTask}
                    onAddAttempt={onAddAttempt}/>)}
            </ul>
        </div>
    )
}

export default Column;