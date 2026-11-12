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
        searchInput,
        handleStatusChange,
        handleTaskTitleChange,
        handleDeleteTask,
        handleAddAttempt,
        handleSearchInput
    } = useTasks()

    return (
        <>
            <div>
                <FilterBlock 
                    showOnlyIncomplete={showOnlyIncomplete}
                    setShowOnlyIncomplete={setShowOnlyIncomplete} 
                    themes={themes}
                    theme={theme}
                    setTheme={setTheme}
                    search={searchInput}
                    onHandleInput={handleSearchInput}
                    />
            </div>
            <div className='flex'>
                <div className='flex'>
                    <div id="open_tasks" className="">
                        <Column
                            searchInput={searchInput}
                            tasks={openTasks}
                            columnName='Открытые'
                            theme={theme} onStatusChange={handleStatusChange}
                            onTitleChange={handleTaskTitleChange}
                            onDeleteTask={handleDeleteTask}
                            onAddAttempt={handleAddAttempt}/>
                    </div>
                    <div id="progress_tasks" className="">
                        <Column
                            searchInput={searchInput}
                            tasks={progressTasks}
                            columnName='В работе'
                            theme={theme} onStatusChange={handleStatusChange}
                            onTitleChange={handleTaskTitleChange}
                            onDeleteTask={handleDeleteTask}
                            onAddAttempt={handleAddAttempt}/>
                    </div>
                    <div id="completed_tasks">
                        <Column
                            searchInput={searchInput}
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