import { useState } from "react"
import { taskItems, type Attempt, type Status } from "../data/seed"

export const useTasks = () => {
    const [tasks, setTasks] = useState(taskItems)

    const openTasks = tasks.filter((task) => task.status === 'backlog')
    const progressTasks = tasks.filter((task) => task.status === 'in-progress')
    const doneTasks = tasks.filter((task) => task.status === 'done')

    const themes = new Set(tasks.map((task) => task.topic))

    const handleStatusChange = (taskId: string, newStatus: Status) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId
                    ? { ...task, status: newStatus }
                    : task
            )
        )
    }
    
    const handleTaskTitleChange = (taskId: string, newTitle: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId
                    ? { ...task, title: newTitle }
                    : task
            )
        )
    }
    
    const handleDeleteTask = (taskId: string) => {
        setTasks(prevTasks =>
            prevTasks.filter(task =>
                task.id !== taskId
            )
        )
    }

    const handleAddAttempt = (taskId: string) => {
        const newAttempt: Attempt = {
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
            minutes: 60,
            solved: true,
            note: ''
        }

        setTasks(prevTasks =>
            prevTasks.map(task => 
                task.id === taskId
                    ? {...task, attempts: {...task.attempts, newAttempt}}
                    : task
            )
        )
    }

    return {
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
    }
}