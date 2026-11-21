import type { Task } from '../../data/seed'
import { getStatistics } from '../../utils/getStatistics'
import MinutesTable from '../MinutesTable/MinutesTable'

type StatisticsProps = {
    tasks: readonly Task[]
    now: number
}

const dateFormat = new Intl.DateTimeFormat('ru-RU')
const percentFormat = new Intl.NumberFormat('ru-RU', { style: 'percent', maximumFractionDigits: 1 })

const Statistics = ({ tasks, now }: StatisticsProps) => {
    const { minutesByDay, minutesByTopic, solvedShare } = getStatistics(tasks, now)

    const dayRows = [...minutesByDay].map(([day, minutes]) => ({ label: dateFormat.format(day), minutes }))
    const topicRows = [...minutesByTopic].map(([topic, minutes]) => ({ label: topic, minutes }))

    return (
        <section className="max-w-3xl space-y-3">
            <h2 className="text-lg font-semibold">Статистика</h2>
            <p>Решено задач: {percentFormat.format(solvedShare)}</p>

            <div className="grid items-start gap-4 sm:grid-cols-2">
                <MinutesTable title="Минуты по дням" labelHeading="Дата" rows={dayRows} />
                <MinutesTable title="Минуты по темам" labelHeading="Тема" rows={topicRows} />
            </div>
        </section>
    )
}

export default Statistics
