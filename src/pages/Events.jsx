import { useState } from 'react';
import { useEvents } from '../context/EventContext';
import EventCard from '../components/ui/EventCard';
import Loader from '../components/ui/Loader';
import EmptyState from '../components/ui/EmptyState';
import './Events.css';

function Events() {
    const { events, loading, error, isRegistered, registerEvent, unregisterEvent } = useEvents();
    const [query, setQuery] = useState('');

    const filteredEvents = events.filter((event) =>
        event.title.toLowerCase().includes(query.trim().toLowerCase())
    );

    return (
        <div className="events-page">
            <h1 className="events-page__title">All Events</h1>
            <p className="events-page__subtitle">Search and filter events</p>

            <div className="events-page__search">
                <input
                    type="search"
                    placeholder="Search events by title..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    aria-label="Search events by title"
                />
            </div>

            {loading && <Loader />}
            {error && <p className="events-page__error">{error}</p>}

            {!loading && !error && filteredEvents.length === 0 && (
                <EmptyState message="No events match your search." />
            )}

            {!loading && !error && filteredEvents.length > 0 && (
                <div className="events-page__grid">
                    {filteredEvents.map((event) => (
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

export default Events;
