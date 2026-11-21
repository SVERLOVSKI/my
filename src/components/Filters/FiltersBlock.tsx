import type { ChangeEvent } from "react";
import type { DifficultyFilter } from "../../data/seed";
import { useBoard } from "../../hooks/useBoard";

const difficultyOptions: readonly DifficultyFilter[] = ['all', 'easy', 'medium', 'hard']

type FilterBlockProps = {
    showOnlyIncomplete: boolean;
    setShowOnlyIncomplete: (value: boolean) => void;
    theme: string;
    setTheme: (value: string) => void;
    difficulty: DifficultyFilter;
    setDifficulty: (value: DifficultyFilter) => void;
    searchInput: string;
    setSearchInput: (value: string) => void;
}

const FilterBlock = ({
    showOnlyIncomplete,
    setShowOnlyIncomplete,
    theme,
    setTheme,
    difficulty,
    setDifficulty,
    searchInput,
    setSearchInput,
    }: FilterBlockProps) => {
    const { themes } = useBoard()

    const handleDifficultyChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setDifficulty(event.currentTarget.value as DifficultyFilter)
    }

    return (
        <div className="flex items-center gap-1 border px-3 border-blue-300 dark:border-blue-700">
            <label htmlFor="completed-task-checker">Только незавершенные:</label><input onChange={(e) => setShowOnlyIncomplete(e.target.checked)} checked={showOnlyIncomplete} id='completed-task-checker' type="checkbox" />
            <label htmlFor="theme-filter">Тема:</label>
            <select onChange={(e) => setTheme(e.currentTarget.value)} value={theme} id="theme-filter">
                <option value="all">all</option>
                {[...themes].map((theme) => <option key={theme} value={theme} id={theme}>{theme}</option>)}
            </select>
            <label htmlFor="difficulty-filter">Сложность:</label>
            <select onChange={handleDifficultyChange} value={difficulty} id="difficulty-filter">
                {difficultyOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
            <label htmlFor="search-input">Поиск:</label><input value={searchInput} onChange={(e) => setSearchInput(e.currentTarget.value)} type="text" name="" id="search-input" />
        </div>
    )
}

export default FilterBlock
