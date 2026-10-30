import type { Task } from "../../data/seed";
import TaskCard from "../TaskCard/TaskCard";

interface ColumnProps {
    tasks: Task[]
    columnName: string
    showOnlyIncomplete?: boolean
    theme: string
}

const Column = ({tasks, columnName, showOnlyIncomplete, theme}: ColumnProps) => {
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
                {filteredTasks.map(task => <TaskCard task={task}/>)}
            </ul>
        </div>
    )
}

export default Column;