import { tasks } from '../../data/seed'
import Column from '../Column/Column'

const TasksList = () => {
    const openTasks = tasks.filter((task) => task.status === 'backlog')
    const progressTasks = tasks.filter((task) => task.status === 'in-progress')
    const doneTasks = tasks.filter((task) => task.status === 'done')

    return (
        <div className='flex'>
            <div id="open_tasks" className="">
                <Column tasks={openTasks} columnName='Открытые'/>
            </div>
            <div id="progress_tasks" className="">
                <Column tasks={progressTasks} columnName='В работе'/>
            </div>
            <div id="completed_tasks" className="">
                <Column tasks={doneTasks} columnName='Выполненные'/>
            </div>
        </div>
    )
}

export default TasksList