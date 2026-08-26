# Event Management System

A frontend event management system built with **React** and **Vite**.

The project focuses on building a responsive and interactive event management interface while practicing React fundamentals, component-based architecture, routing, state management, reusable UI components, and client-side interactions.

> **Frontend-only project:** This project does not include a backend, database, authentication system, or real server-side event registration. Event data and user interactions are handled on the client side.

---

## Features

* Browse available events
* View detailed information for each event
* Search and explore events
* Create events through a frontend form
* Event registration interface
* Add and remove events from favorites
* View personal events and saved interactions
* Responsive layout for different screen sizes
* Reusable React components
* Client-side state management
* Multiple pages with React routing
* Light and dark theme support

---

## Tech Stack

* **React**
* **Vite**
* **JavaScript (JSX)**
* **CSS**
* **React Router**
* **React Context API**
* **Local Storage** for client-side persistence

No backend framework or database is used in this project.

---

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── layout/
│   └── ui/
├── context/
│   └── EventContext.jsx
├── data/
├── pages/
│   ├── Home.jsx
│   ├── Events.jsx
│   ├── EventDetails.jsx
│   ├── CreateEvents.jsx
│   └── MyEvents.jsx
├── services/
│   └── eventService.js
├── App.jsx
├── App.css
├── globals.css
└── main.jsx
```

The project is organized to keep pages, reusable components, application state, event data, and service logic separated and easier to maintain.

---

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/Saif-Eldeen-95/Event_Management_System_using_React.git
```

Navigate to the project:

```bash
cd Event_Management_System_using_React
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local URL provided by Vite.

---

## Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run preview
```

Previews the production build locally.

```bash
npm run lint
```

Runs ESLint checks.

---

## Project Scope

This project was developed as a **frontend-focused React project**.

The goal is to demonstrate practical frontend development skills through a complete event management interface rather than building a full-stack application.

The current implementation uses client-side data and state. Features such as registration and event creation are represented through frontend interactions and are not connected to a real backend or database.

---

## What I Practiced

Through this project, I practiced:

* Building React applications with Vite
* Creating reusable components
* Managing shared state with React Context
* Working with React Router
* Handling forms and user interactions
* Managing client-side event data
* Building responsive layouts with CSS
* Implementing light and dark themes
* Organizing a React project into separate responsibilities
* Improving UI consistency and usability

---

## Future Improvements

A backend could be added in the future to provide:

* User authentication
* Persistent event storage
* Real event registration
* User accounts
* Server-side event management

These features are **outside the current scope** of this frontend-focused project.

---

## Author

**Saif Eldeen Shady**

Computer Engineering Student & Frontend Developer

[GitHub](https://github.com/Saif-Eldeen-95)
