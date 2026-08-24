import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEvents } from '../context/EventContext';
import Loader from '../components/ui/Loader';
import './EventDetails.css';

const HEADER_CLASS = {
    Sports: 'event-details__header--sports',
    Career: 'event-details__header--career',
    Art: 'event-details__header--art',
    Workshop: 'event-details__header--workshop',
};

function EventDetails() {
    const { id } = useParams();
    const { loading, isRegistered, registerEvent, unregisterEvent, getEventFromState } = useEvents();
    const [toast, setToast] = useState(null); // { type: 'success'|'info', message: string }

    // Auto-dismiss the toast after 3 seconds
    useEffect(() => {
        if (!toast) return;
        const timer = setTimeout(() => setToast(null), 3000);
        return () => clearTimeout(timer);
    }, [toast]);

    if (loading) return <Loader />;

    const event = getEventFromState(id);

    if (!event) {
        return (
            <div className="event-details-page event-details-page--not-found">
                <h1>Event not found</h1>
                <Link to="/events">← Back to Events</Link>
            </div>
        );
    }

    const registered = isRegistered(event.id);
    const headerClass = HEADER_CLASS[event.category] || '';

    function handleToggleRegistration() {
        if (registered) {
            unregisterEvent(event.id);
            setToast({ type: 'info', message: '✓ You have been unregistered from this event.' });
        } else {
            registerEvent(event.id);
            setToast({ type: 'success', message: '🎉 You are registered! See you there.' });
        }
    }

    return (
        <div className="event-details-page">
            <Link to="/events" className="event-details__back">← Back to Events</Link>

            <div className="event-details__card">
                <div className={`event-details__header ${headerClass}`}>
                    <span className="event-details__badge">{event.category}</span>
                    <h1 className="event-details__title">{event.title}</h1>
                </div>

                <div className="event-details__body">
                    <div className="event-details__info-grid">
                        <div className="event-details__info-item">
                            <span className="event-details__info-label">Date</span>
                            <span className="event-details__info-value">{event.date}</span>
                        </div>
                        <div className="event-details__info-item">
                            <span className="event-details__info-label">Time</span>
                            <span className="event-details__info-value">{event.time}</span>
                        </div>
                        <div className="event-details__info-item">
                            <span className="event-details__info-label">Location</span>
                            <span className="event-details__info-value">{event.location}</span>
                        </div>
                        <div className="event-details__info-item">
                            <span className="event-details__info-label">Available Seats</span>
                            <span className="event-details__info-value">{event.seats}</span>
                        </div>
                    </div>

                    <hr className="event-details__divider" />

                    <h3 className="event-details__about-title">About this Event</h3>
                    <p className="event-details__description">{event.description}</p>

                    {toast && (
                        <div className={`event-details__toast event-details__toast--${toast.type}`}>
                            {toast.message}
                        </div>
                    )}

                    <button
                        type="button"
                        className={`btn ${registered ? 'btn--ghost' : 'btn--primary'} event-details__cta`}
                        onClick={handleToggleRegistration}
                    >
                        {registered ? 'Unregister' : 'Register Now'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EventDetails;
