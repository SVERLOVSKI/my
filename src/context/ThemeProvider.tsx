import { useState, type ReactNode } from 'react'
import { ThemeContext, type Theme } from './ThemeContext'

type ThemeProviderProps = {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () => {
        setTheme((currentTheme) => currentTheme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div className={`${theme} min-h-dvh bg-white scheme-light dark:bg-gray-950 dark:text-gray-100 dark:scheme-dark`}>
                {children}
            </div>
        </ThemeContext.Provider>
    )
}
