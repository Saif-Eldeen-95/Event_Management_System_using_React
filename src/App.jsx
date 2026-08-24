import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './globals.css';
import './App.css';
import { EventProvider } from './context/EventContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import CreateEvents from './pages/CreateEvents';
import MyEvents from './pages/MyEvents';
import { Link } from 'react-router-dom';

function App() {
    return (
        <EventProvider>
            <BrowserRouter>
                <div className="app">
                    <Navbar />
                    <main className="main-content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/events" element={<Events />} />
                            <Route path="/events/:id" element={<EventDetails />} />
                            <Route path="/create-event" element={<CreateEvents />} />
                            <Route path="/my-events" element={<MyEvents />} />
                            <Route path="*" element={
                                <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
                                    <h1>404</h1>
                                    <p style={{ margin: '1rem 0', color: 'var(--color-text-muted)' }}>The page you are looking for does not exist.</p>
                                    <Link to="/events">Back to Events</Link>
                                </div>
                            } />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </EventProvider>
    );
}

export default App;
