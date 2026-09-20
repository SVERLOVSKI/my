export type Topic = 'algorithms' | 'react' | 'typescript' | 'css'
export type Difficulty = 'easy' | 'medium' | 'hard'
export type Status = 'backlog' | 'in-progress' | 'done'

export type Attempt = {
  id: string
  date: string // ISO
  minutes: number
  solved: boolean
  note: string
}

export type Task = {
  id: string
  title: string
  topic: Topic
  difficulty: Difficulty
  status: Status
  sourceUrl?: string
  attempts: Attempt[]
  createdAt: string
}

export const tasks: Task[] = [
  {
    id: 'two-sum',
    title: 'Two Sum',
    topic: 'algorithms',
    difficulty: 'easy',
    status: 'backlog',
    sourceUrl: 'https://leetcode.com/problems/two-sum/',
    attempts: [],
    createdAt: '2026-09-12T09:00:00.000Z',
  },
  {
    id: 'sticky-columns',
    title: 'Липкие колонки таблицы',
    topic: 'css',
    difficulty: 'medium',
    status: 'backlog',
    attempts: [],
    createdAt: '2026-09-15T08:30:00.000Z',
  },
  {
    id: 'debounce',
    title: 'Своя debounce',
    topic: 'typescript',
    difficulty: 'medium',
    status: 'in-progress',
    sourceUrl: 'https://developer.mozilla.org/ru/docs/Web/API/Window/setTimeout',
    attempts: [
      {
        id: 'debounce-1',
        date: '2026-09-16T18:10:00.000Z',
        minutes: 25,
        solved: false,
        note: 'Потерял this при вызове через метод объекта — стрелка внутри таймера не помогла.',
      },
      {
        id: 'debounce-2',
        date: '2026-09-18T19:40:00.000Z',
        minutes: 35,
        solved: false,
        note: 'Базовый вариант работает, cancel() и flush() ещё не написал.',
      },
    ],
    createdAt: '2026-09-10T11:15:00.000Z',
  },
  {
    id: 'virtual-list',
    title: 'Виртуальный список',
    topic: 'react',
    difficulty: 'hard',
    status: 'in-progress',
    attempts: [
      {
        id: 'virtual-list-1',
        date: '2026-09-13T20:05:00.000Z',
        minutes: 50,
        solved: false,
        note: 'Окно считал в state и обновлял в onScroll — список дёргался на каждом кадре.',
      },
      {
        id: 'virtual-list-2',
        date: '2026-09-17T21:00:00.000Z',
        minutes: 40,
        solved: false,
        note: 'Перенёс расчёт в рендер, осталась проблема со скроллом при изменении высоты строки.',
      },
      {
        id: 'virtual-list-3',
        date: '2026-09-19T20:30:00.000Z',
        minutes: 55,
        solved: false,
        note: 'Добавил оверскан, но на быстром скролле всё ещё мелькает пустота.',
      },
    ],
    createdAt: '2026-09-08T10:00:00.000Z',
  },
  {
    id: 'flatten-array',
    title: 'Плоский массив',
    topic: 'algorithms',
    difficulty: 'easy',
    status: 'done',
    sourceUrl: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/flat',
    attempts: [
      {
        id: 'flatten-array-1',
        date: '2026-09-05T17:45:00.000Z',
        minutes: 20,
        solved: false,
        note: 'Рекурсия падала на глубине — забыл про базовый случай для не-массива.',
      },
      {
        id: 'flatten-array-2',
        date: '2026-09-06T18:20:00.000Z',
        minutes: 15,
        solved: true,
        note: 'Дописал вариант со стеком, оба решения сошлись на тестах.',
      },
    ],
    createdAt: '2026-09-04T12:00:00.000Z',
  },
  {
    id: 'promise-all',
    title: 'Свой Promise.all',
    topic: 'typescript',
    difficulty: 'hard',
    status: 'done',
    sourceUrl: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise/all',
    attempts: [
      {
        id: 'promise-all-1',
        date: '2026-08-29T19:00:00.000Z',
        minutes: 45,
        solved: false,
        note: 'Результаты складывал через push — порядок ломался, если первый промис резолвился последним.',
      },
      {
        id: 'promise-all-2',
        date: '2026-09-01T20:15:00.000Z',
        minutes: 30,
        solved: false,
        note: 'Порядок починил по индексу, но пустой массив зависал вместо мгновенного резолва.',
      },
      {
        id: 'promise-all-3',
        date: '2026-09-02T19:30:00.000Z',
        minutes: 25,
        solved: true,
        note: 'Счётчик выполненных + ранний выход на пустом входе, реджект на первой ошибке.',
      },
    ],
    createdAt: '2026-08-28T09:45:00.000Z',
  },
]
