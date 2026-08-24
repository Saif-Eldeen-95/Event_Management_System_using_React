import { useState } from 'react';
import { useEvents } from '../context/EventContext';
import EventCard from '../components/ui/EventCard';
import Loader from '../components/ui/Loader';
import EmptyState from '../components/ui/EmptyState';
import './Events.css';

const CATEGORIES = ['All', 'Tech', 'Sports', 'Career', 'Art', 'Workshop'];

function Events() {
    const { events, loading, error, isRegistered, registerEvent, unregisterEvent, isFavorite, toggleFavorite } = useEvents();
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('All');

    const filteredEvents = events.filter((event) => {
        const matchesQuery = event.title.toLowerCase().includes(query.trim().toLowerCase());
        const matchesCategory = category === 'All' || event.category === category;
        return matchesQuery && matchesCategory;
    });

    return (
        <div className="events-page">
            <h1 className="events-page__title">All Events</h1>
            <p className="events-page__subtitle">Browse and filter upcoming events</p>

            <div className="events-page__filters">
                <div className="events-page__search">
                    <input
                        className="events-page__search-input"
                        type="search"
                        placeholder="Search events..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        aria-label="Search events by title"
                    />
                </div>

                <select
                    className="events-page__category-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    aria-label="Filter by category"
                >
                    {CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>{cat === 'All' ? 'All Categories' : cat}</option>
                    ))}
                </select>
            </div>

            {loading && <Loader />}
            {error && <p className="events-page__error">{error}</p>}

            {!loading && !error && (
                <>
                    {filteredEvents.length === 0 ? (
                        <EmptyState
                            message="No events match your search."
                            actionLabel="Clear filters"
                            actionTo="/events"
                        />
                    ) : (
                        <>
                            <p className="events-page__results-count">
                                {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''} found
                            </p>
                            <div className="events-page__grid">
                                {filteredEvents.map((event) => (
                                    <EventCard
                                        key={event.id}
                                        event={event}
                                        isRegistered={isRegistered(event.id)}
                                        onRegister={registerEvent}
                                        onUnregister={unregisterEvent}
                                isFavorite={isFavorite(event.id)}
                                onToggleFavorite={toggleFavorite}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
}

export default Events;
