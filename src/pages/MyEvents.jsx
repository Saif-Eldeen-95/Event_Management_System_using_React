import { useEvents } from '../context/EventContext';
import EventCard from '../components/ui/EventCard';
import Loader from '../components/ui/Loader';
import EmptyState from '../components/ui/EmptyState';
import './MyEvents.css';

function MyEvents() {
    const { events, loading, error, registeredEvents, isRegistered, registerEvent, unregisterEvent } = useEvents();

    const myEvents = events.filter((event) => registeredEvents.includes(event.id));

    return (
        <div className="my-events-page">
            <h1 className="my-events-page__title">My Events</h1>
            <p className="my-events-page__subtitle">Your registered events</p>

            {loading && <Loader />}
            {error && <p className="my-events-page__error">{error}</p>}

            {!loading && !error && myEvents.length === 0 && (
                <EmptyState message="You haven't registered for any events yet." />
            )}

            {!loading && !error && myEvents.length > 0 && (
                <div className="my-events-page__grid">
                    {myEvents.map((event) => (
                        <EventCard
                            key={event.id}
                            event={event}
                            isRegistered={isRegistered(event.id)}
                            onRegister={registerEvent}
                            onUnregister={unregisterEvent}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default MyEvents;
