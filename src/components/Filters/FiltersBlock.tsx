

type FilterBlockProps = {
    showOnlyIncomplete: boolean;
    setShowOnlyIncomplete: (value: boolean) => void;
    themes: Set<string>;
    theme: string;
    setTheme: (value: string) => void;
}

const FilterBlock = ({showOnlyIncomplete, setShowOnlyIncomplete, themes, theme, setTheme}: FilterBlockProps) => {
    return (
        <div className="flex items-center gap-1 border px-3 border-blue-300">
            <label htmlFor="completed-task-checker">Только незавершенные:</label><input onChange={(e) => setShowOnlyIncomplete(e.target.checked)} checked={showOnlyIncomplete} id='completed-task-checker' type="checkbox" />
            <label htmlFor="theme-filter">Тема:</label>
            <select onChange={(e) => setTheme(e.currentTarget.value)} value={theme} id="theme-filter">
                <option value="all">all</option>
                {[...themes].map((theme) => <option key={theme} value={theme} id={theme}>{theme}</option>)}
            </select>
        </div>
    )
}

export default FilterBlock