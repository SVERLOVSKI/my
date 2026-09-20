import { tasks } from '../../data/seed'
import TaskCard from "../TaskCard/TaskCard"

const TasksList = () => {
    const openTasks = tasks.filter((task) => task.status === 'backlog')
    const progressTasks = tasks.filter((task) => task.status === 'in-progress')
    const doneTasks = tasks.filter((task) => task.status === 'done')

    return (
        <div className='flex'>
            <div id="open_tasks" className="">
                {openTasks.map((task) => <TaskCard key={task.id} task={task}/>)}
            </div>
            <div id="progress_tasks" className="">
                {progressTasks.map((task) => <TaskCard key={task.id} task={task}/>)}
            </div>
            <div id="completed_tasks" className="">
                {doneTasks.map((task) => <TaskCard key={task.id} task={task}/>)}
            </div>
        </div>
    )
}

export default TasksList