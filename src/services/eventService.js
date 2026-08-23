/**
 * eventService.js
 * Centralizes all event-related API calls and business logic.
 * Replace the stub implementations below with real fetch/axios calls when an API is ready.
 */

import { fallbackEvents } from '../data/fallbackEvents';

/** Fetch all events (stub: returns fallback data) */
export async function getEvents() {
    return fallbackEvents;
}

/** Fetch a single event by id */
export async function getEventById(id) {
    return fallbackEvents.find((e) => e.id === id) ?? null;
}

/** Create a new event */
export async function createEvent(eventData) {
    const newEvent = { id: Date.now(), ...eventData };
    return newEvent;
}

/** Delete an event by id */
export async function deleteEvent(id) {
    return id;
}
