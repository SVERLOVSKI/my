import { useState } from 'react'
import { useBoard } from '../../hooks/useBoard'
import Header from '../Header/Header'
import Statistics from '../Statistics/Statistics'
import TaskModal from '../TaskModal/TaskModal'
import TasksList from '../TasksList/TasksList'
import Today from '../Today/Today'

const tabs = [
    { id: 'board', label: 'Доска' },
    { id: 'today', label: 'Сегодня' },
    { id: 'statistics', label: 'Статистика' },
] as const

type BoardTab = typeof tabs[number]['id']

type BoardView = {
    tab: BoardTab
    now: number
}

const Board = () => {
    const { tasks, selectedTaskId, setSelectedTaskId } = useBoard()
    const [view, setView] = useState<BoardView>(() => ({ tab: 'board', now: Date.now() }))

    const selectedTask = tasks.find((task) => task.id === selectedTaskId)

    return (
        <>
            <Header />

            <nav aria-label="Разделы" className="my-3 flex flex-wrap gap-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        type="button"
                        aria-pressed={view.tab === tab.id}
                        className="cursor-pointer rounded border px-3 py-1 aria-pressed:bg-blue-100 aria-pressed:font-semibold dark:border-gray-700 dark:aria-pressed:bg-blue-900"
                        onClick={() => setView({ tab: tab.id, now: Date.now() })}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>

            <main>
                <div hidden={view.tab !== 'board'}>
                    <TasksList />
                </div>

                {view.tab === 'today' && (
                    <Today tasks={tasks} now={view.now} onSelectTask={setSelectedTaskId} />
                )}

                {view.tab === 'statistics' && <Statistics tasks={tasks} now={view.now} />}
            </main>

            {selectedTask && (
                <TaskModal
                    key={selectedTask.id}
                    task={selectedTask}
                    onClose={() => setSelectedTaskId(null)}
                />
            )}
        </>
    )
}

export default Board
