# Event Management Platform --- PROJECT STATE

## Project Goal

Transform the existing `contest_project_react` repository into a
polished, cohesive **Event Management Platform**.

The final result should feel like one intentionally designed product,
not a collection of unrelated small React projects.

The main project is the foundation. Other existing projects will only be
integrated where their functionality naturally strengthens the platform.

------------------------------------------------------------------------

## Source Projects

### Main Foundation

-   Repository: `contest_project_react`
-   Role: Core Event Management Platform
-   Important: The repository name is misleading; the application itself
    is an Events platform. "React Final Contest" is only one event in
    the data, not the application's domain.

### Project to Integrate

-   `Interactive_Form_using_React`
-   Planned role: Event Registration / Registration Flow
-   Useful concepts/features:
    -   Form inputs
    -   Validation
    -   Controlled components
    -   Form UI
    -   Theme/context ideas where appropriate

### Project to Integrate

-   `API_calling_website_by_React`
-   Planned role: API/data architecture
-   Useful concepts/features:
    -   Axios
    -   API requests
    -   Loading states
    -   Error handling
    -   Dynamic data
    -   React Router patterns
    -   Separation of API logic from UI

### Project Excluded

-   `To_Do_List_website`
-   Decision: Do NOT integrate it.
-   Reason: It does not naturally strengthen the Event Management
    Platform and would make the project feel forced.

------------------------------------------------------------------------

## Product Concept

### Event Management Platform

The application should support a coherent user journey:

Home → Browse Events → Event Details → Register → Registration Form →
Confirmation → My Events

Potential core areas:

-   Home
-   Events
-   Event Details
-   My Events
-   Create Event
-   Registration
-   Future event-management features if they fit naturally

------------------------------------------------------------------------

## Current Architecture Direction

Target structure:

``` text
src/
├── assets/
│
├── components/
│   ├── layout/              ✅ created
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Navbar.css
│   │   └── Navbar.jsx
│   │
│   └── ui/                  ✅ created
│       ├── Button.css
│       ├── Button.jsx
│       ├── EmptyState.css
│       ├── EmptyState.jsx
│       ├── EventCard.css
│       ├── EventCard.jsx
│       ├── Loader.css
│       └── Loader.jsx
│
├── pages/                   ✅ created (stubs)
│   ├── CreateEvents.jsx
│   ├── EventDetails.jsx
│   ├── Events.jsx
│   ├── Home.jsx
│   └── MyEvents.jsx
│
├── context/                 ✅ created
│   └── EventContext.jsx
│
├── services/                ✅ created
│   └── eventService.js
│
├── data/                    ✅ created
│   └── fallbackEvents.js    (moved from root Data/events.js)
│
├── App.css
├── App.jsx
├── globals.css              ✅ created (CSS tokens + reset)
└── main.jsx
```

> **Note:** `globals.css` lives at the `src/` root (not in a `styles/`
> subfolder). The old `Data/events.js` at the project root is now
> superseded by `src/data/fallbackEvents.js` and can be deleted.

This is a target architecture, not a requirement to create every file
immediately.

------------------------------------------------------------------------

## Architecture Principles

1.  Keep the Event Platform as the core.
2.  Do not force unrelated features into the product.
3.  Use the existing projects as sources of functionality and patterns,
    not as separate applications pasted together.
4.  Shared UI should follow one consistent design system.
5.  Keep API/data logic separate from presentation.
6.  Prefer reusable components over duplicated UI.
7.  Keep routing centralized and intentional.
8.  Preserve working functionality while refactoring incrementally.
9.  Do not rewrite everything at once.
10. Every major refactor should be tested before moving to the next
    stage.

------------------------------------------------------------------------

## Current Branch

Git branch created:

`redesign/event-platform`

The original project remains available as a fallback.

------------------------------------------------------------------------

## Current Status

### Completed

-   [x] Identified `contest_project_react` as the main foundation.
-   [x] Confirmed the application is an Event Management Platform.
-   [x] Reviewed the role of the Interactive Form project.
-   [x] Reviewed the role of the API Calling project.
-   [x] Decided to completely exclude the To-Do project.
-   [x] Created the feature branch `redesign/event-platform`.
-   [x] Confirmed the existing project runs successfully with
    `npm run dev`.
-   [x] Established the full `src/` folder structure.
-   [x] Created `components/layout/` — `Navbar.jsx/.css`,
    `Footer.jsx/.css`.
-   [x] Created `components/ui/` — `Button`, `EmptyState`, `EventCard`,
    `Loader` (each `.jsx` + `.css`).
-   [x] Created `pages/` stubs — `Home`, `Events`, `EventDetails`,
    `CreateEvents`, `MyEvents`.
-   [x] Created `context/EventContext.jsx` with `EventProvider` and
    `useEvents` hook.
-   [x] Created `services/eventService.js` with CRUD stubs.
-   [x] Created `data/fallbackEvents.js` (migrated from root
    `Data/events.js`).
-   [x] Created `globals.css` with CSS custom properties and base reset.
-   [x] Updated `main.jsx` to import `globals.css`.

### In Progress

-   [ ] Fill in `Navbar.jsx` with real navigation links and routing.
-   [ ] Fill in `Footer.jsx` with real content.
-   [ ] Implement `EventContext` state management fully.
-   [ ] Wire `eventService.js` functions to `EventContext`.

### Not Yet Started

-   [ ] Refactor `App.jsx` (add routing, wrap with `EventProvider`)
-   [ ] Review and clean current routing
-   [ ] Style all UI components (`Button`, `EventCard`, `Loader`, etc.)
-   [ ] Build out `Events.jsx` — list all events using `EventCard`
-   [ ] Build out `EventDetails.jsx` — show full event info
-   [ ] Build out `CreateEvents.jsx` — event creation form
-   [ ] Build out `MyEvents.jsx` — user's registered/created events
-   [ ] Build out `Home.jsx` — hero + featured events
-   [ ] Integrate the registration form
-   [ ] Improve event browsing and filtering
-   [ ] Polish responsive behavior
-   [ ] Final visual consistency pass
-   [ ] Production build
-   [ ] Deploy
-   [ ] Update README
-   [ ] Prepare final CV/project description

------------------------------------------------------------------------

## Current Phase

### Phase 1 --- Foundation & Architecture *(in progress)*

The directory skeleton and all placeholder files are in place.

The next step is to wire everything together:

1.  Update `App.jsx` — add React Router, wrap the tree with
    `EventProvider`, and connect the page components.
2.  Implement real navigation in `Navbar.jsx`.
3.  Seed `EventContext` with `fallbackEvents` and expose CRUD helpers.
4.  Implement `Events.jsx` as the first real page using `EventCard`.

------------------------------------------------------------------------

## Design Direction

The final UI should feel like a modern, polished event platform.

Avoid: - A generic Bootstrap/demo appearance - Mixing the old visual
styles from different projects - Copy-pasting entire old pages into the
new app - Unnecessary features added only to make the project look
bigger - Inconsistent buttons, cards, spacing, typography, and colors

Target: - One visual language - Consistent navigation - Consistent
cards - Consistent buttons - Clear hierarchy - Responsive layout -
Modern spacing and typography - Professional empty/loading/error
states - Light/Dark mode only if it fits the final design

------------------------------------------------------------------------

## Planned User Flow

``` text
Home
  ↓
Browse Events
  ↓
Event Details
  ↓
Register
  ↓
Registration Form
  ↓
Validation
  ↓
Confirmation
  ↓
My Events
```

------------------------------------------------------------------------

## Integration Strategy

### Interactive Form

Do not copy the old form blindly.

Refactor its useful functionality into a reusable:

`RegistrationForm`

It should receive the selected event as data, for example:

``` jsx
<RegistrationForm event={event} />
```

The form should become part of the event registration workflow.

------------------------------------------------------------------------

### API Project

Do not copy the API project's pages into the Event Platform.

Instead, reuse its useful API architecture.

Target:

``` text
UI
 ↓
Pages
 ↓
Context / State
 ↓
Services
 ↓
API
```

Potential service functions:

``` js
getEvents()
getEventById()
createEvent()
updateEvent()
deleteEvent()
```

Whether these use a real API, mock API, or fallback data will be decided
after reviewing the current project and available backend/data source.

------------------------------------------------------------------------

## Important Decisions

-   The final project is ONE product.
-   The main domain is Event Management.
-   The main repository is the existing `contest_project_react`.
-   The Interactive Form becomes part of Event Registration.
-   The API project contributes API/data architecture.
-   The To-Do project is excluded.
-   Portfolio remains a separate project.
-   Responsive Landing Page remains a separate project.
-   Do not create a new repository unless there is a strong technical
    reason.
-   Do not sacrifice product coherence just to include old code.

------------------------------------------------------------------------

## Next Task

### Wire `App.jsx` and start Phase 1 implementation.

Steps:

1.  Install `react-router-dom` if not already present.
2.  Refactor `App.jsx`:
    -   Wrap the app in `<EventProvider>`.
    -   Set up `<BrowserRouter>` with routes for all five pages.
    -   Keep `<Navbar />` and `<Footer />` in the shell.
3.  Add navigation links to `Navbar.jsx`.
4.  Implement `Events.jsx` (list view) using `EventCard` and
    `fallbackEvents`.
5.  Run the app and verify all routes render without errors.

After that, update this state file with what changed and the next task.

------------------------------------------------------------------------

## Working Rule

The goal is not to maximize the number of features.

The goal is to produce a **cohesive, polished, technically credible
React project** where every major feature has a clear reason to exist.
