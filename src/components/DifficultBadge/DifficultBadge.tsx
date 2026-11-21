
interface DifficultBadgeProps {
    difficult: string
}

const DifficultBadge = ({difficult}: DifficultBadgeProps) => {
    let className;

    switch (difficult) {
        case 'easy':
        className = 'p-1 border border-green-500 bg-green-300 dark:border-green-700 dark:bg-green-950'
        break
        case 'medium':
        className = 'p-1 border border-yellow-500 bg-yellow-300 dark:border-yellow-600 dark:bg-yellow-950'
        break
        case 'hard':
        className = 'p-1 border border-red-500 bg-red-300 dark:border-red-700 dark:bg-red-950'
        break
    }

    return (
        <div className={className}>
            {difficult}
        </div>
    )
}

export default DifficultBadge
