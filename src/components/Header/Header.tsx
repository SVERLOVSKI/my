import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { useBoard } from '../../hooks/useBoard'

const Header = () => {
    const { openTasks, progressTasks, doneTasks } = useBoard()
    const themeContext = useContext(ThemeContext)

    if (themeContext === undefined) {
        throw new Error('Header must be used within ThemeProvider')
    }

    const { theme, toggleTheme } = themeContext

    return (
        <header className="flex flex-wrap items-center gap-3">
            <h1>Шапка сайта</h1>

            <ul className="flex flex-wrap gap-3">
                <li>Открытые: {openTasks.length}</li>
                <li>В работе: {progressTasks.length}</li>
                <li>Выполненные: {doneTasks.length}</li>
            </ul>

            <button
                type="button"
                aria-pressed={theme === 'dark'}
                className="cursor-pointer rounded border px-3 py-1 aria-pressed:bg-blue-100 dark:border-gray-700 dark:aria-pressed:bg-blue-900"
                onClick={toggleTheme}
            >
                Тёмная тема
            </button>
        </header>
    )
}

export default Header
