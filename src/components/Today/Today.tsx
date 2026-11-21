import type { Task } from '../../data/seed'
import { getTasksToReview } from '../../utils/getTasksToReview'

type TodayProps = {
    tasks: readonly Task[]
    now: number
    onSelectTask: (taskId: string) => void
}

const Today = ({ tasks, now, onSelectTask }: TodayProps) => {
    const tasksToReview = getTasksToReview(tasks, now)

    return (
        <section className="space-y-3">
            <h2 className="text-lg font-semibold">Задачи для повторения</h2>

            {tasksToReview.length === 0 ? (
                <p>Нет задач для повторения</p>
            ) : (
                <ul className="max-w-lg space-y-2">
                    {tasksToReview.map((task) => (
                        <li key={task.id} className="flex flex-wrap items-center justify-between gap-2 rounded border p-3 dark:border-gray-700">
                            <span className="min-w-0 wrap-break-word">{task.title}</span>

                            <button
                                type="button"
                                aria-haspopup="dialog"
                                className="cursor-pointer rounded border px-3 py-1"
                                onClick={() => onSelectTask(task.id)}
                            >
                                Подробнее
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}

export default Today
