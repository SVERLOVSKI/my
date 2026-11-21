import { useBoard } from "../../hooks/useBoard";
import TaskCard from "../TaskCard/TaskCard";
import type { DifficultyFilter, Status } from "../../data/seed";

interface ColumnProps {
    columnName: string
    showOnlyIncomplete?: boolean
    theme: string
    difficulty: DifficultyFilter
    searchInput: string
    status: Status
}

const Column = ({
    columnName,
    showOnlyIncomplete,
    theme,
    difficulty,
    searchInput,
    status,
    }: ColumnProps) => {
    const { tasks } = useBoard()

    const filteredTasks = tasks.filter((task) =>
        task.status === status &&
        (theme === 'all' || task.topic === theme) &&
        (difficulty === 'all' || task.difficulty === difficulty) &&
        task.title.includes(searchInput)
    )

    if (filteredTasks.length === 0 || showOnlyIncomplete) {
        return (
            <div className="max-w-40">
                Список задач пуст, добавьте задачу или перетащите ее с другого статуса
            </div>
        )
    }

    const sortedTasks = filteredTasks.toSorted((firstTask, secondTask) =>
        Date.parse(secondTask.createdAt) - Date.parse(firstTask.createdAt)
    )

    return (
        <div>
            <h3>{columnName}</h3>
            <ul>
                {sortedTasks.map(task => <TaskCard
                    key={task.id}
                    task={task}
                />)}
            </ul>
        </div>
    )
}

export default Column;
