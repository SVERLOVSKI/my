type MinutesRow = {
    label: string
    minutes: number
}

type MinutesTableProps = {
    title: string
    labelHeading: string
    rows: readonly MinutesRow[]
}

const MinutesTable = ({ title, labelHeading, rows }: MinutesTableProps) => (
    <table className="w-full border-collapse border dark:border-gray-700">
        <caption className="mb-2 text-left font-semibold">{title}</caption>

        <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
                <th scope="col" className="px-3 py-2 text-left">{labelHeading}</th>
                <th scope="col" className="px-3 py-2 text-right">Минуты</th>
            </tr>
        </thead>

        <tbody>
            {rows.length === 0 ? (
                <tr>
                    <td colSpan={2} className="border-t px-3 py-2 dark:border-gray-700">За этот период попыток нет</td>
                </tr>
            ) : (
                rows.map((row) => (
                    <tr key={row.label} className="border-t dark:border-gray-700">
                        <th scope="row" className="px-3 py-2 text-left font-normal">{row.label}</th>
                        <td className="px-3 py-2 text-right tabular-nums">{row.minutes}</td>
                    </tr>
                ))
            )}
        </tbody>
    </table>
)

export default MinutesTable
