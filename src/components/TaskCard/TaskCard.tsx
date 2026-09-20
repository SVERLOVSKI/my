import type { Task } from "../../data/seed"

type TaskCardProps = {
  task: Task
}

const TaskCard = ({task}: TaskCardProps) => {
    return (
        <div className="border m-1 p-2">
        <h3 className="pb-2 font-bold text-lg">Задача: {task.title}</h3>
        <p>Тема: {task.topic}</p>
        <p className="pb-2">Сложность: {task.difficulty}</p>
        <p>Стаус: {task.status}</p>
        </div>
    )
}

export default TaskCard