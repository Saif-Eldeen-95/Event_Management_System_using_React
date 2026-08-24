import { useNavigate } from 'react-router-dom';
import Button from './Button';
import './EventCard.css';

const CATEGORY_CLASS = {
    Tech: 'event-card__badge--tech',
    Sports: 'event-card__badge--sports',
    Career: 'event-card__badge--career',
    Art: 'event-card__badge--art',
    Workshop: 'event-card__badge--workshop',
};

function EventCard({ event, isRegistered, onRegister, onUnregister, isFavorite = false, onToggleFavorite }) {
    const navigate = useNavigate();

    if (!event) return null;

    const badgeClass = CATEGORY_CLASS[event.category] || 'event-card__badge--default';

    function handleRegisterClick(e) {
        e.stopPropagation();
        if (isRegistered) {
            onUnregister?.(event.id);
        } else {
            onRegister?.(event.id);
        }
    }

    return (
        <div className="event-card" onClick={() => navigate(`/events/${event.id}`)}>
            <div className="event-card__header">
                <span className={`event-card__badge ${badgeClass}`}>{event.category}</span>
                <button
                    type="button"
                    className={`event-card__favorite${isFavorite ? ' event-card__favorite--active' : ''}`}
                    aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite?.(event.id);
                    }}
                >
                    ♥
                </button>
            </div>

            <h3 className="event-card__title">{event.title}</h3>
            <p className="event-card__meta">{event.date} &middot; {event.time}</p>
            <p className="event-card__location">{event.location}</p>
            <p className="event-card__description">{event.description}</p>

            <div className="event-card__actions">
                <Button
                    variant="secondary"
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/events/${event.id}`);
                    }}
                >
                    Details
                </Button>
                <Button
                    variant={isRegistered ? 'ghost' : event.seats <= 0 ? 'secondary' : 'primary'}
                    onClick={handleRegisterClick}
                    disabled={!isRegistered && event.seats <= 0}
                >
                    {isRegistered ? 'Unregister' : event.seats <= 0 ? 'Full' : 'Register'}
                </Button>
            </div>
        </div>
    );
}

export default EventCard;
