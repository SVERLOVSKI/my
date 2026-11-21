import { useState } from "react"
import { taskItems, type Attempt, type Status, type Task } from "../data/seed"

type NewTask = Pick<Task, 'title' | 'topic' | 'difficulty'>
type NewAttempt = Omit<Attempt, 'id'>

export const useTasks = () => {
    const [tasks, setTasks] = useState(taskItems);
    const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null)

    const openTasks = tasks.filter((task) => task.status === 'backlog')
    const progressTasks = tasks.filter((task) => task.status === 'in-progress')
    const doneTasks = tasks.filter((task) => task.status === 'done')

    const themes = new Set(tasks.map((task) => task.topic))

    const addTask = ({ title, topic, difficulty }: NewTask) => {
        const task: Task = {
            id: crypto.randomUUID(),
            title,
            topic,
            difficulty,
            status: 'backlog',
            attempts: [],
            createdAt: new Date().toISOString(),
        }

        setTasks((previousTasks) => [...previousTasks, task])
    }

    const moveTask = (taskId: string, newStatus: Status) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId
                    ? { ...task, status: newStatus }
                    : task
            )
        )
    }
    
    const renameTask = (taskId: string, newTitle: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId
                    ? { ...task, title: newTitle }
                    : task
            )
        )
    }
    
    const removeTask = (taskId: string) => {
        setTasks(prevTasks =>
            prevTasks.filter(task =>
                task.id !== taskId
            )
        )

        setSelectedTaskId((currentTaskId) => currentTaskId === taskId ? null : currentTaskId)
    }

    const logAttempt = (taskId: string, attempt: NewAttempt) => {
        const newAttempt: Attempt = {
            ...attempt,
            id: crypto.randomUUID(),
        }

        setTasks(prevTasks =>
            prevTasks.map(task => 
                task.id === taskId
                    ? {...task, attempts: [...task.attempts, newAttempt]}
                    : task
            )
        )
    }

    return {
        tasks,
        selectedTaskId,
        setSelectedTaskId,
        openTasks,
        progressTasks,
        doneTasks,
        themes,
        addTask,
        moveTask,
        renameTask,
        removeTask,
        logAttempt,
    }
}
