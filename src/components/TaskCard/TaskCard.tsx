import type { Task } from "../../data/seed"
import DifficultBadge from "../DifficultBadge/DifficultBadge"

type TaskCardProps = {
  task: Task
}

const TaskCard = ({task}: TaskCardProps) => {

    return (
        <div className="border m-1 p-2 h-44 w-80">
        <h3 className="pb-2 font-bold text-lg">Задача: {task.title}</h3>
        <p>Тема: {task.topic}</p>
        <div className="pb-2 flex items-center gap-2">Сложность: <DifficultBadge difficult={task.difficulty}/></div>
        <p>Стаус: {task.status}</p>
        {task.attempts.length === 0 && <p className="'p-1 border border-gray-200 bg-gray-300">Не начата</p>}
        </div>
    )
}

export default TaskCard