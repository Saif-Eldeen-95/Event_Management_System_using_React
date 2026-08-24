/**
 * eventService.js
 * Centralizes all event-related data access.
 *
 * Currently backed by local fallback data (no real backend yet).
 * The async signatures are kept intentionally so a real API layer
 * (axios calls) can be dropped in later without touching the
 * components or context that consume this service.
 */

import { fallbackEvents } from '../data/fallbackEvents';

// Simulates network latency so loading states are visible during development.
const SIMULATED_DELAY_MS = 300;

function delay(value) {
    return new Promise((resolve) => setTimeout(() => resolve(value), SIMULATED_DELAY_MS));
}

/** Fetch all events */
export async function getEvents() {
    return delay(fallbackEvents.map((event) => ({ ...event })));
}

/** Fetch a single event by id */
export async function getEventById(id) {
    const event = fallbackEvents.find((e) => String(e.id) === String(id)) ?? null;
    return delay(event);
}

/** Create a new event */
export async function createEvent(eventData) {
    const newEvent = { id: Date.now(), ...eventData };
    return delay(newEvent);
}

/** Update an existing event */
export async function updateEvent(id, updates) {
    const updated = { id, ...updates };
    return delay(updated);
}

/** Delete an event by id */
export async function deleteEvent(id) {
    return delay(id);
}
