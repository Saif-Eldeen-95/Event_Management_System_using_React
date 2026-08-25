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
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </BrowserRouter>
        </EventProvider>
    );
}

export default App;
