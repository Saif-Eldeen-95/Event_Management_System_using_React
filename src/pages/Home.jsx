import { Link } from 'react-router-dom';
import { useEvents } from '../context/EventContext';
import EventCard from '../components/ui/EventCard';
import Loader from '../components/ui/Loader';
import EmptyState from '../components/ui/EmptyState';
import './Home.css';

function Home() {
    const { events, loading, error, isRegistered, registerEvent, unregisterEvent, isFavorite, toggleFavorite } = useEvents();
    const featuredEvents = events.slice(0, 3);

    return (
        <div className="home-page">
            <section className="hero">
                <h1 className="hero__title">Welcome to EventHub</h1>
                <p className="hero__subtitle">
                    Discover, create, and register for events all in one place.
                </p>
                <Link to="/events" className="hero__cta">
                    Explore Events
                </Link>
            </section>

            <section className="featured">
                <div className="featured__header">
                    <h2 className="featured__title">Featured Events</h2>
                    <Link to="/events" className="featured__view-all">View all →</Link>
                </div>
                <p className="featured__subtitle">Upcoming events you can join</p>

                {loading && <Loader />}
                {error && <p className="home-page__error">{error}</p>}

                {!loading && !error && featuredEvents.length === 0 && (
                    <EmptyState
                        message="No events available right now."
                        actionLabel="Create one"
                        actionTo="/create-event"
                    />
                )}

                {!loading && !error && featuredEvents.length > 0 && (
                    <div className="featured__grid">
                        {featuredEvents.map((event) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                isRegistered={isRegistered(event.id)}
                                onRegister={registerEvent}
                                onUnregister={unregisterEvent}
                                isFavorite={isFavorite(event.id)}
                                onToggleFavorite={toggleFavorite}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}

export default Home;
