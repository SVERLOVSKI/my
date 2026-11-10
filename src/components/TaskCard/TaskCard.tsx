import { type ChangeEvent } from "react"
import type { Status, Task } from "../../data/seed"
import type { SelectChangeEvent } from "../AddTaskForm/AddTaskForm"
import DifficultBadge from "../DifficultBadge/DifficultBadge"

type TaskCardProps = {
  task: Task,
  onStatusChange: (taskId: string, newStatus: Status) => void;
  onTitleChange: (taskId: string, newTitle: string) => void;
  onDeleteTask: (taskId: string) => void
  onAddAttempt: (taskId: string) => void
}

const TaskCard = ({
    task,
    onStatusChange,
    onTitleChange,
    onDeleteTask,
    onAddAttempt}: TaskCardProps) => {

    const handleTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onTitleChange(task.id, e.target.value)
    }

    const handleTaskStatusChange = (e: SelectChangeEvent<Status>) => {
        onStatusChange(task.id, e.target.value)
    }

    const handleDeleteTask = () => {
        onDeleteTask(task.id)
    }
    
    const handleAddAttempt = () => {
        onAddAttempt(task.id)
    }

    return (
        <div className="border m-1 p-2 h-52 w-80">
        <input type="text" value={task.title} onChange={handleTaskTitleChange}/>
        <p>Тема: {task.topic}</p>
        <div className="pb-2 flex items-center gap-2">Сложность: <DifficultBadge difficult={task.difficulty}/></div>
        <select value={task.status} onChange={handleTaskStatusChange} name="" id="task-difficult">
            <option value="backlog">backlog</option>
            <option value="in-progress">in-progress</option>
            <option value="done">done</option>
        </select>
        {task.attempts.length === 0 && <p className="'p-1 border border-gray-200 bg-gray-300">Не начата</p>}
        <button className='block cursor-pointer'onClick={handleAddAttempt}>Добавить попытку</button>
        <button className='block cursor-pointer'onClick={handleDeleteTask}>Удалить</button>
        </div>
    )
}

export default TaskCard