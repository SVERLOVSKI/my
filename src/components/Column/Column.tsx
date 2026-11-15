import { useBoard } from "../../hooks/useBoard";
import TaskCard from "../TaskCard/TaskCard";
import type { Status } from "../../data/seed";

interface ColumnProps {
    columnName: string
    showOnlyIncomplete?: boolean
    theme: string
    status: Status
}

const Column = ({
    columnName,
    showOnlyIncomplete,
    theme,
    status,
    }: ColumnProps) => {
    const {tasks, searchInput} = useBoard()
    
    if (tasks.length === 0 || showOnlyIncomplete) {
        return (
            <div className="max-w-40">
                Список задач пуст, добавьте задачу или перетащите ее с другого статуса
            </div>
        )
    }

    const filteredTasks = tasks.filter(task => task.title.includes(searchInput))
    const tasksList = filteredTasks.filter(task => task.status === status && theme === 'all' || task.topic === theme)

    return (
        <div>
            <h3>{columnName}</h3>
            <ul>
                {tasksList.map(task => <TaskCard
                    key={task.id}
                    task={task}
                />)}
            </ul>
        </div>
    )
}

export default Column;