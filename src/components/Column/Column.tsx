import type { Task } from "../../data/seed";
import TaskCard from "../TaskCard/TaskCard";

interface ColumnProps {
    tasks: Task[]
    columnName: string
}

const Column = ({tasks, columnName}: ColumnProps) => {
    if (tasks.length === 0) {
        return (
            <div>
                Список задач пуст, добавьте задачу или перетащите ее с другого статуса
            </div>
        )
    }

    return (
        <div>
            <h3>{columnName}</h3>
            <ul>
                {tasks.map(task => <TaskCard task={task}/>)}
            </ul>
        </div>
    )
}

export default Column;