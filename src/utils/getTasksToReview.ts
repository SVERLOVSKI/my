import type { Task } from '../data/seed'

const reviewDelay = 72 * 60 * 60 * 1000

export const getTasksToReview = (tasks: readonly Task[], now: number) => {
    const reviewCutoff = now - reviewDelay

    return tasks.filter((task) => {
        let lastSolvedAt = Number.NEGATIVE_INFINITY

        for (const attempt of task.attempts) {
            if (attempt.solved) {
                const solvedAt = Date.parse(attempt.date)

                if (solvedAt > lastSolvedAt) {
                    lastSolvedAt = solvedAt
                }
            }
        }

        return Number.isFinite(lastSolvedAt) && lastSolvedAt <= reviewCutoff
    })
}
