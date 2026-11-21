import { useId } from 'react'
import type { Task } from '../../data/seed'
import DifficultBadge from '../DifficultBadge/DifficultBadge'

type TaskModalProps = {
    task: Task
    onClose: () => void
}

const attemptDateFormat = new Intl.DateTimeFormat('ru-RU')

const openDialog = (dialog: HTMLDialogElement | null) => {
    if (dialog && !dialog.open) {
        dialog.showModal()
    }
}

const TaskModal = ({ task, onClose }: TaskModalProps) => {
    const titleId = useId()

    return (
        <dialog
            ref={openDialog}
            aria-labelledby={titleId}
            onClose={onClose}
            className="m-auto max-h-5/6 w-11/12 max-w-lg overflow-y-auto rounded-lg bg-white p-6 shadow-lg backdrop:bg-black/40 dark:bg-gray-900 dark:text-gray-100"
        >
            <div className="flex items-start justify-between gap-4">
                <h2 id={titleId} className="wrap-break-word text-xl font-semibold">{task.title}</h2>

                <form method="dialog">
                    <button type="submit" className="cursor-pointer rounded border px-3 py-1">Закрыть</button>
                </form>
            </div>

            <dl className="mt-4 grid grid-cols-2 items-center gap-2">
                <dt>Тема</dt>
                <dd>{task.topic}</dd>
                <dt>Сложность</dt>
                <dd className="justify-self-start"><DifficultBadge difficult={task.difficulty} /></dd>
                <dt>Статус</dt>
                <dd>{task.status}</dd>
            </dl>

            {task.sourceUrl && (
                <a href={task.sourceUrl} target="_blank" rel="noreferrer" className="mt-4 inline-block underline">
                    Открыть источник
                </a>
            )}

            <section className="mt-6">
                <h3 className="font-semibold">История попыток</h3>

                {task.attempts.length === 0 ? (
                    <p className="mt-2">Попыток пока нет</p>
                ) : (
                    <ol className="mt-2 space-y-2">
                        {task.attempts.map((attempt) => (
                            <li key={attempt.id} className="rounded border p-3 dark:border-gray-700">
                                <div className="flex flex-wrap gap-x-3">
                                    <time dateTime={attempt.date}>
                                        {attemptDateFormat.format(new Date(attempt.date))}
                                    </time>
                                    <span>{attempt.minutes} мин.</span>
                                    <span>{attempt.solved ? 'Решено' : 'Не решено'}</span>
                                </div>

                                {attempt.note && <p className="mt-1 wrap-break-word">{attempt.note}</p>}
                            </li>
                        ))}
                    </ol>
                )}
            </section>
        </dialog>
    )
}

export default TaskModal
