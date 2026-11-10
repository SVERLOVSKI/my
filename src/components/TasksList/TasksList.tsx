import { useState } from 'react'

import { useTasks } from '../../hooks/useTasks'

import Column from '../Column/Column'
import FilterBlock from '../Filters/FiltersBlock'
import AddTaskForm from '../AddTaskForm/AddTaskForm'

const TasksList = () => {
    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)
    const [theme, setTheme] = useState('all')

    const {
        tasks,
        setTasks,
        openTasks,
        progressTasks,
        doneTasks,
        themes,
        handleStatusChange,
        handleTaskTitleChange,
        handleDeleteTask,
        handleAddAttempt
    } = useTasks()

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
                <div className='flex'>
                    <div id="open_tasks" className="">
                        <Column
                            tasks={openTasks}
                            columnName='Открытые'
                            theme={theme} onStatusChange={handleStatusChange}
                            onTitleChange={handleTaskTitleChange}
                            onDeleteTask={handleDeleteTask}
                            onAddAttempt={handleAddAttempt}/>
                    </div>
                    <div id="progress_tasks" className="">
                        <Column
                            tasks={progressTasks}
                            columnName='В работе'
                            theme={theme} onStatusChange={handleStatusChange}
                            onTitleChange={handleTaskTitleChange}
                            onDeleteTask={handleDeleteTask}
                            onAddAttempt={handleAddAttempt}/>
                    </div>
                    <div id="completed_tasks">
                        <Column
                            tasks={doneTasks}
                            showOnlyIncomplete={showOnlyIncomplete}
                            columnName='Выполненные'
                            theme={theme}
                            onStatusChange={handleStatusChange}
                            onTitleChange={handleTaskTitleChange}
                            onDeleteTask={handleDeleteTask}
                            onAddAttempt={handleAddAttempt}/>
                    </div>
                </div>
                <div>
                    <AddTaskForm
                        tasks={tasks}
                        setTasks={setTasks}/>
                </div>
            </div>
        </>
    )
}

export default TasksList