import type { Task, Topic } from '../data/seed'

// В период входят сегодняшний день и шесть предыдущих календарных дней.
const daysInPeriod = 7

// Принимаем время в миллисекундах и сдвиг по дням. По умолчанию берём день самого timestamp.
const getDayStart = (timestamp: number, offset = 0) => {
    // Создаём объект Date, чтобы работать с календарной датой в локальном часовом поясе.
    const day = new Date(timestamp)

    // Сдвигаем календарную дату. Date сам обработает переход между месяцами и годами.
    day.setDate(day.getDate() + offset)
    // Обнуляем часы, минуты, секунды и миллисекунды, чтобы все попытки за день получили один ключ.
    day.setHours(0, 0, 0, 0)

    // Возвращаем начало дня в миллисекундах. Это числовой ключ для Map.
    return day.getTime()
}

// Получаем все задачи и момент now, от которого отсчитывается семидневный период.
export const getStatistics = (tasks: readonly Task[], now: number) => {
    // В этой Map ключом служит начало дня, а значением — накопленная сумма минут за день.
    const minutesByDay = new Map<number, number>()
    // Здесь ключом служит тема, а значением — сумма минут всех задач этой темы за период.
    const minutesByTopic = new Map<Topic, number>()
    // Счётчик понадобится для доли выполненных задач по всей доске.
    let doneCount = 0

    // Идём от -6 до 0 включительно, чтобы получить семь дат от самой ранней до сегодняшней.
    for (let offset = 1 - daysInPeriod; offset <= 0; offset += 1) {
        // Заранее создаём запись с нулём, чтобы день отображался и при отсутствии попыток.
        minutesByDay.set(getDayStart(now, offset), 0)
    }

    // Обходим полный список, чтобы учесть статус и попытки каждой задачи.
    for (const task of tasks) {
        // Выполненность определяем по статусу задачи независимо от даты её попыток.
        if (task.status === 'done') {
            // Засчитываем одну выполненную задачу целиком.
            doneCount += 1
        }

        // Время тратится на любую попытку, поэтому обходим успешные и неуспешные записи.
        for (const attempt of task.attempts) {
            // Date.parse переводит дату попытки в миллисекунды, а getDayStart даёт ключ её дня.
            const dayStart = getDayStart(Date.parse(attempt.date))
            // Ищем текущую сумму для этого дня среди семи заранее созданных записей.
            const dayMinutes = minutesByDay.get(dayStart)

            // undefined означает, что день вне периода. Ноль означает, что день есть и минут пока 0.
            if (dayMinutes === undefined) {
                // Переходим к следующей попытке, пропуская оба обновления сумм для этой записи.
                continue
            }

            // Прибавляем минуты попытки к уже накопленной сумме за её день.
            minutesByDay.set(dayStart, dayMinutes + attempt.minutes)
            // Прибавляем те же минуты к теме задачи. Для темы, встретившейся впервые, берём 0.
            minutesByTopic.set(task.topic, (minutesByTopic.get(task.topic) ?? 0) + attempt.minutes)
        }
    }

    // Делим число выполненных задач на общее число задач. Для пустой доски берём 0.
    const solvedShare = tasks.length === 0 ? 0 : doneCount / tasks.length

    // Возвращаем данные для двух таблиц и долю, которую интерфейс отобразит в процентах.
    return { minutesByDay, minutesByTopic, solvedShare }
}
