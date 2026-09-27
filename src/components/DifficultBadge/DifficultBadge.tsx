
interface DifficultBadgeProps {
    difficult: string
}

const DifficultBadge = ({difficult}: DifficultBadgeProps) => {
    let className;

    switch (difficult) {
        case 'easy':
        className = 'p-1 border border-green-500 bg-green-300'
        break
        case 'medium':
        className = 'p-1 border border-orange-500 bg-orange-300'
        break
        case 'hard':
        className = 'p-1 border border-red-500 bg-red-300'
        break
    }

    return (
        <div className={className}>
            {difficult}
        </div>
    )
}

export default DifficultBadge