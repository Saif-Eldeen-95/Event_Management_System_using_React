import { createContext, useContext, useState } from 'react';
import { fallbackEvents } from '../data/fallbackEvents';

const EventContext = createContext(null);

export function EventProvider({ children }) {
    const [events, setEvents] = useState(fallbackEvents);

    return (
        <EventContext.Provider value={{ events, setEvents }}>
            {children}
        </EventContext.Provider>
    );
}

export function useEvents() {
    return useContext(EventContext);
}
