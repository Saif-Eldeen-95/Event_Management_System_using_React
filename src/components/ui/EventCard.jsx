import './EventCard.css';

function EventCard({ event }) {
    return (
        <div className="event-card">
            <h3 className="event-card__title">{event?.title}</h3>
            <p className="event-card__category">{event?.category}</p>
            <p className="event-card__date">{event?.date} at {event?.time}</p>
            <p className="event-card__location">{event?.location}</p>
        </div>
    );
}

export default EventCard;
