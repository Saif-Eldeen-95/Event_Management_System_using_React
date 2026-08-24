import { createContext, useContext, useEffect, useState } from 'react';
import { getEvents, createEvent as createEventService } from '../services/eventService';

const EventContext = createContext(null);

export function EventProvider({ children }) {
    const [events, setEvents] = useState([]);
    const [registeredEvents, setRegisteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadEvents();
    }, []);

    async function loadEvents() {
        try {
            setLoading(true);
            setError(null);
            const data = await getEvents();
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
        setRegisteredEvents((prev) =>
            prev.includes(eventId) ? prev : [...prev, eventId]
        );
    }

    function unregisterEvent(eventId) {
        setRegisteredEvents((prev) => prev.filter((id) => id !== eventId));
    }

    function isRegistered(eventId) {
        return registeredEvents.includes(eventId);
    }

    function getEventFromState(id) {
        return events.find((e) => String(e.id) === String(id)) ?? null;
    }

    const value = {
        events,
        registeredEvents,
        loading,
        error,
        addEvent,
        registerEvent,
        unregisterEvent,
        isRegistered,
        getEventFromState,
        refreshEvents: loadEvents,
    };

    return (
        <EventContext.Provider value={value}>
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
