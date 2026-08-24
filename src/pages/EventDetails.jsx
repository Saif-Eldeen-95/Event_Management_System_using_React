import { useParams, Link } from 'react-router-dom';
import { useEvents } from '../context/EventContext';
import Loader from '../components/ui/Loader';
import './EventDetails.css';

const CATEGORY_CLASS = {
    Tech: 'event-details__badge--tech',
    Sports: 'event-details__badge--sports',
    Career: 'event-details__badge--career',
    Art: 'event-details__badge--art',
    Workshop: 'event-details__badge--workshop',
};

function EventDetails() {
    const { id } = useParams();
    const { loading, isRegistered, registerEvent, unregisterEvent, getEventFromState } = useEvents();

    if (loading) return <Loader />;

    const event = getEventFromState(id);

    if (!event) {
        return (
            <div className="event-details-page event-details-page--not-found">
                <h1>Event not found</h1>
                <Link to="/events">&larr; Back to Events</Link>
            </div>
        );
    }

    const registered = isRegistered(event.id);
    const badgeClass = CATEGORY_CLASS[event.category] || 'event-details__badge--default';

    return (
        <div className="event-details-page">
            <Link to="/events" className="event-details__back">&larr; Back to Events</Link>

            <div className="event-details__card">
                <div className="event-details__header">
                    <span className={`event-details__badge ${badgeClass}`}>{event.category}</span>
                    <h1 className="event-details__title">{event.title}</h1>
                </div>

                <div className="event-details__body">
                    <div className="event-details__info-grid">
                        <div className="event-details__info-item">
                            <span className="event-details__info-label">Date</span>
                            <span>{event.date}</span>
                        </div>
                        <div className="event-details__info-item">
                            <span className="event-details__info-label">Time</span>
                            <span>{event.time}</span>
                        </div>
                        <div className="event-details__info-item">
                            <span className="event-details__info-label">Location</span>
                            <span>{event.location}</span>
                        </div>
                        <div className="event-details__info-item">
                            <span className="event-details__info-label">Available Seats</span>
                            <span>{event.seats}</span>
                        </div>
                    </div>

                    <hr className="event-details__divider" />

                    <h3 className="event-details__about-title">About this Event</h3>
                    <p className="event-details__description">{event.description}</p>

                    <button
                        type="button"
                        className={`btn ${registered ? 'btn--ghost' : 'btn--primary'} event-details__cta`}
                        onClick={() => (registered ? unregisterEvent(event.id) : registerEvent(event.id))}
                    >
                        {registered ? 'Unregister' : 'Register Now'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;
