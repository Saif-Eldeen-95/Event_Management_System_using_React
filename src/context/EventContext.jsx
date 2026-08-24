import { createContext, useContext, useEffect, useState } from 'react';
import { getEvents, createEvent as createEventService } from '../services/eventService';

const EventContext = createContext(null);

const STORAGE_KEYS = {
    events: 'eventhub_events',
    registered: 'eventhub_registered',
    favorites: 'eventhub_favorites',
};

function readStorage(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
}

export function EventProvider({ children }) {
    const [events, setEvents] = useState([]);
    const [registeredEvents, setRegisteredEvents] = useState(() => readStorage(STORAGE_KEYS.registered, []));
    const [favoriteEvents, setFavoriteEvents] = useState(() => readStorage(STORAGE_KEYS.favorites, []));
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadEvents();
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.registered, JSON.stringify(registeredEvents));
    }, [registeredEvents]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEYS.favorites, JSON.stringify(favoriteEvents));
    }, [favoriteEvents]);

    useEffect(() => {
        if (events.length > 0) {
            localStorage.setItem(STORAGE_KEYS.events, JSON.stringify(events));
        }
    }, [events]);

    async function loadEvents() {
        try {
            setLoading(true);
            setError(null);

            const storedEvents = readStorage(STORAGE_KEYS.events, null);
            const data = storedEvents ?? await getEvents();
            setEvents(data);
        } catch {
            setError('Failed to load events. Please try again later.');
        } finally {
            setLoading(false);
        }
    }

    async function addEvent(eventData) {
        const newEvent = await createEventService(eventData);
        setEvents((prev) => [...prev, newEvent]);
        return newEvent;
    }

    function registerEvent(eventId) {
        const id = Number(eventId);
        const event = events.find((item) => Number(item.id) === id);

        if (!event || Number(event.seats) <= 0 || registeredEvents.includes(id)) {
            return false;
        }

        setEvents((prev) =>
            prev.map((item) =>
                Number(item.id) === id
                    ? { ...item, seats: Math.max(0, Number(item.seats) - 1) }
                    : item
            )
        );
        setRegisteredEvents((prev) => [...prev, id]);
        return true;
    }

    function unregisterEvent(eventId) {
        const id = Number(eventId);
        const event = events.find((item) => Number(item.id) === id);

        if (!event || !registeredEvents.includes(id)) {
            return false;
        }

        setEvents((prev) =>
            prev.map((item) =>
                Number(item.id) === id
                    ? { ...item, seats: Number(item.seats) + 1 }
                    : item
            )
        );
        setRegisteredEvents((prev) => prev.filter((registeredId) => registeredId !== id));
        return true;
    }

    function isRegistered(eventId) {
        return registeredEvents.includes(Number(eventId));
    }

    function isFavorite(eventId) {
        return favoriteEvents.includes(Number(eventId));
    }

    function toggleFavorite(eventId) {
        const id = Number(eventId);
        setFavoriteEvents((prev) =>
            prev.includes(id) ? prev.filter((favoriteId) => favoriteId !== id) : [...prev, id]
        );
    }

    function getEventFromState(id) {
        return events.find((event) => String(event.id) === String(id)) ?? null;
    }

    return (
        <EventContext.Provider
            value={{
                events,
                registeredEvents,
                favoriteEvents,
                loading,
                error,
                addEvent,
                registerEvent,
                unregisterEvent,
                isRegistered,
                isFavorite,
                toggleFavorite,
                getEventFromState,
                refreshEvents: loadEvents,
            }}
        >
            {children}
        </EventContext.Provider>
    );
}

export function useEvents() {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEvents must be used within an EventProvider');
    }
    return context;
}
