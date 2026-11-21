import { useState } from 'react'

import Column from '../Column/Column'
import FilterBlock from '../Filters/FiltersBlock'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import type { DifficultyFilter } from '../../data/seed'

const TasksList = () => {
    const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false)
    const [theme, setTheme] = useState('all')
    const [difficulty, setDifficulty] = useState<DifficultyFilter>('all')
    const [searchInput, setSearchInput] = useState('')

    return (
        <>
            <div>
                <FilterBlock 
                    showOnlyIncomplete={showOnlyIncomplete}
                    setShowOnlyIncomplete={setShowOnlyIncomplete} 
                    theme={theme}
                    setTheme={setTheme}
                    difficulty={difficulty}
                    setDifficulty={setDifficulty}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    />
            </div>
            <div className='flex'>
                <div className='flex'>
                    <div id="open_tasks" className="">
                        <Column
                            columnName='Открытые'
                            theme={theme}
                            difficulty={difficulty}
                            searchInput={searchInput}
                            status='backlog'
                            />
                    </div>
                    <div id="progress_tasks" className="">
                        <Column
                            columnName='В работе'
                            theme={theme}
                            difficulty={difficulty}
                            searchInput={searchInput}
                            status='in-progress'
                            />
                    </div>
                    <div id="completed_tasks">
                        <Column
                            showOnlyIncomplete={showOnlyIncomplete}
                            columnName='Выполненные'
                            theme={theme}
                            difficulty={difficulty}
                            searchInput={searchInput}
                            status='done'
                            />
                    </div>
                </div>
                <div>
                    <AddTaskForm/>
                </div>
            </div>
        </>
    )
}

export default TasksList
