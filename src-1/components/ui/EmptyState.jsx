import { Link } from 'react-router-dom';
import './EmptyState.css';

function EmptyState({ message = 'No items found.', actionLabel, actionTo }) {
    return (
        <div className="empty-state">
            <span className="empty-state__icon" aria-hidden="true">📭</span>
            <p className="empty-state__message">{message}</p>
            {actionLabel && actionTo && (
                <Link to={actionTo} className="btn btn--primary empty-state__action">
                    {actionLabel}
                </Link>
            )}
        </div>
    );
}

export default EmptyState;
