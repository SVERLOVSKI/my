import { useState } from 'react'

import Column from '../Column/Column'
import FilterBlock from '../Filters/FiltersBlock'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import { BoardProvider } from '../../context/BoardProvider'

const TasksList = () => {
    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)
    const [theme, setTheme] = useState('all')

    return (
        <>
        <BoardProvider>
            <div>
                <FilterBlock 
                    showOnlyIncomplete={showOnlyIncomplete}
                    setShowOnlyIncomplete={setShowOnlyIncomplete} 
                    theme={theme}
                    setTheme={setTheme}
                    />
            </div>
            <div className='flex'>
                <div className='flex'>
                    <div id="open_tasks" className="">
                        <Column
                            columnName='Открытые'
                            theme={theme}
                            status='backlog'
                            />
                    </div>
                    <div id="progress_tasks" className="">
                        <Column
                            columnName='В работе'
                            theme={theme}
                            status='in-progress'
                            />
                    </div>
                    <div id="completed_tasks">
                        <Column
                            showOnlyIncomplete={showOnlyIncomplete}
                            columnName='Выполненные'
                            theme={theme}
                            status='done'
                            />
                    </div>
                </div>
                <div>
                    <AddTaskForm/>
                </div>
            </div>
        </BoardProvider>
        </>
    )
}

export default TasksList