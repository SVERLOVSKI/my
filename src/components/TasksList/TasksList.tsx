import { useState } from 'react'

import { tasks } from '../../data/seed'
import Column from '../Column/Column'
import FilterBlock from '../Filters/FiltersBlock'

const TasksList = () => {
    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)
    const [theme, setTheme] = useState('all')

    const openTasks = tasks.filter((task) => task.status === 'backlog')
    const progressTasks = tasks.filter((task) => task.status === 'in-progress')
    const doneTasks = tasks.filter((task) => task.status === 'done')

    const themes = new Set(tasks.map((task) => task.topic))

    return (
        <>
        <div>
            <FilterBlock 
            showOnlyIncomplete={showOnlyIncomplete}
            setShowOnlyIncomplete={setShowOnlyIncomplete} 
            themes={themes}
            theme={theme}
            setTheme={setTheme}/>
        </div>
        <div className='flex'>
            <div id="open_tasks" className="">
                <Column tasks={openTasks} columnName='Открытые' theme={theme}/>
            </div>
            <div id="progress_tasks" className="">
                <Column tasks={progressTasks} columnName='В работе' theme={theme}/>
            </div>
            <div id="completed_tasks" className="flex items-center">
                <Column tasks={doneTasks} showOnlyIncomplete={showOnlyIncomplete} columnName='Выполненные' theme={theme}/>
            </div>
        </div>
        </>
    )
}

export default TasksList