import './EmptyState.css';

function EmptyState({ message = 'No items found.' }) {
    return (
        <div className="empty-state">
            <p>{message}</p>
        </div>
    );
}

export default EmptyState;
