import type { Status, Task } from "../../data/seed"
import DifficultBadge from "../DifficultBadge/DifficultBadge"
import { useBoard } from "../../hooks/useBoard"

type TaskCardProps = {
  task: Task,
}

const TaskCard = ({
    task,
}: TaskCardProps) => {
    const {
        moveTask,
        renameTask,
        removeTask,
        logAttempt,
        setSelectedTaskId,
    } = useBoard()

    const handleAddAttempt = () => {
        logAttempt(task.id, {
            date: new Date().toISOString(),
            minutes: 60,
            solved: true,
            note: '',
        })
    }

    return (
        <div className="border m-1 p-2 min-h-52 w-80 dark:border-gray-700">
            <input type="text" value={task.title} onChange={(e) => renameTask(task.id, e.target.value)}/>
            <p>Тема: {task.topic}</p>
            <div className="pb-2 flex items-center gap-2">Сложность: <DifficultBadge difficult={task.difficulty}/></div>
            <select value={task.status} onChange={(e) => moveTask(task.id, e.target.value as Status)} name="">
                <option value="backlog">backlog</option>
                <option value="in-progress">in-progress</option>
                <option value="done">done</option>
            </select>

            {task.attempts.length === 0 && (
                <p className="p-1 border border-gray-200 bg-gray-300 dark:border-gray-700 dark:bg-gray-800">
                    Не начата
                </p>
            )}

            <button
                type="button"
                aria-haspopup="dialog"
                className="block cursor-pointer"
                onClick={() => setSelectedTaskId(task.id)}
            >
                Подробнее
            </button>
            <button className='block cursor-pointer' onClick={handleAddAttempt}>Добавить попытку</button>
            <button className='block cursor-pointer' onClick={() => removeTask(task.id)}>Удалить</button>
        </div>
    )
}

export default TaskCard
