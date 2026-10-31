import { useState, type ChangeEvent, type SubmitEvent } from "react";
import type { Difficulty, Task, Topic } from "../../data/seed"

type AddTaskFormProps = {
    tasks: Task[];
    setTasks: (value:Task[]) => void
}

type SelectChangeEvent<T extends string> = ChangeEvent<HTMLSelectElement & {value: T}>

const AddTaskForm = ({tasks, setTasks}: AddTaskFormProps) => {
    const [title, setTitle] = useState('')
    const [topic, setTopic] = useState<Topic>('algorithms')
    const [difficult, setDifficult] = useState<Difficulty>('easy')

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const handleTopicChange = (e: SelectChangeEvent<Topic>) => {
        setTopic(e.target.value)
    }
    const handleDifficultChange = (e: SelectChangeEvent<Difficulty>) => {
        setDifficult(e.target.value)
    }
    
    const handeAddTask = (e: SubmitEvent<HTMLFormElement>) => {
        setTasks([
            ...tasks,
            {
                id: title,
                title: title,
                topic: topic,
                difficulty: difficult,
                status: 'backlog',
                attempts: [],
                createdAt: String(new Date()),
            }
        ]);
        e.preventDefault()
    }

    return (
        <form onSubmit={handeAddTask} action="" className="flex flex-col">
            <h3 className="">Добавление задачи</h3>
            
            <label htmlFor="task-title">Название задачи</label>
            <input value={title} onChange={handleTitleChange} type="text" name="title" id="task-title" required placeholder="Введите название"/>

            <label htmlFor="task-topic">Тема</label>
            <select value={topic} onChange={handleTopicChange} name="" id="task-topic">
                <option value="algorithms">algorithms</option>
                <option value="react">react</option>
                <option value="typescript">typescript</option>
                <option value="css">css</option>
            </select>

            <label htmlFor="task-difficult">Укажите сложность</label>
            <select value={difficult} onChange={handleDifficultChange} name="" id="task-difficult">
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>

            <button type="submit">Создать задачу</button>
        </form>
    )
}

export default AddTaskForm