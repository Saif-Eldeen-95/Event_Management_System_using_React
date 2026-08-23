import Footer from './Components/Footer'
import EventCard from './Components/EventCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Router, Routes, Route, Link, BrowserRouter} from 'react-router-dom'
import './App.css'
import NavBar from './Components/Navbar'
import Home from './Pages/Home'
import MyEvents from './Pages/MyEvents'
import EventDetails from './Pages/EventDetails'
import CreateEvents from './Pages/CreateEvents'
import Events from './Pages/Events.jsx'
import { initialEvents } from '../Data/events.js'
import { useEffect,useState } from 'react'


function App() {
 const [events, setEvents] = useState([]);
 const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  function fetchEvents() {
    setEvents(initialEvents);
    
  }

  function registerEvent(eventId) {
    if (!registeredEvents.includes(eventId)) {
      setRegisteredEvents([...registeredEvents, eventId]);
    }
  }

  function unregisterEvent(eventId) {
    setRegisteredEvents(registeredEvents.filter(id => id !== eventId));
  }

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/Home" element={<Home events={events} registerEvent={registerEvent} unregisterEvent={unregisterEvent} registeredEvents={registeredEvents} />} />
      <Route path="/MyEvents" element={<MyEvents events={events} registeredEvents={registeredEvents} unregisterEvent={unregisterEvent} />} />
      <Route path="/Events" element={<Events events={events} registerEvent={registerEvent} unregisterEvent={unregisterEvent} registeredEvents={registeredEvents} />} />
      <Route path="/EventDetails/:id" element={<EventDetails events={events} registerEvent={registerEvent} unregisterEvent={unregisterEvent} registeredEvents={registeredEvents} />} />
      <Route path="/CreateEvents" element={<CreateEvents events={events} setEvents={setEvents} />} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
