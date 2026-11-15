import type { Status, Task } from "../../data/seed"
import DifficultBadge from "../DifficultBadge/DifficultBadge"
import { useBoard } from "../../hooks/useBoard"

type TaskCardProps = {
  task: Task,
}

const TaskCard = ({
    task,
    }: TaskCardProps) => {
    const {handleStatusChange, handleTaskTitleChange, handleDeleteTask, handleAddAttempt} = useBoard()

    return (
        <div className="border m-1 p-2 h-52 w-80">
        <input type="text" value={task.title} onChange={(e) => handleTaskTitleChange(task.id, e.target.value)}/>
        <p>Тема: {task.topic}</p>
        <div className="pb-2 flex items-center gap-2">Сложность: <DifficultBadge difficult={task.difficulty}/></div>
        <select value={task.status} onChange={(e) => handleStatusChange(task.id, e.target.value as Status)} name="" id="task-difficult">
            <option value="backlog">backlog</option>
            <option value="in-progress">in-progress</option>
            <option value="done">done</option>
        </select>
        {task.attempts.length === 0 && <p className="'p-1 border border-gray-200 bg-gray-300">Не начата</p>}
        <button className='block cursor-pointer'onClick={() => handleAddAttempt(task.id)}>Добавить попытку</button>
        <button className='block cursor-pointer'onClick={() => handleDeleteTask(task.id)}>Удалить</button>
        </div>
    )
}

export default TaskCard