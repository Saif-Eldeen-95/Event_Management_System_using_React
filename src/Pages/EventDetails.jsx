import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaChair } from 'react-icons/fa';

const badgeColors = {
  Workshop: 'primary',
  Career: 'success',
  Sports: 'danger',
  Art: 'warning',
  Tech: 'info',
  Default: 'secondary',
};

function EventDetails({ events, registerEvent, unregisterEvent, registeredEvents }) {
  const { id } = useParams();
  const event = events.find(e => e.id === parseInt(id));

  if (!event) return <h3 className="text-center mt-5">Event not found!</h3>;

  const badgeColor = badgeColors[event.category] || badgeColors.Default;

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card className="shadow-sm rounded-4" style={{ width: '100%', maxWidth: '650px' }}>

        <Card.Header className="bg-primary text-white rounded-top-4 p-4">
          <Badge bg={badgeColor} className="mb-2">{event.category}</Badge>
          <h3 className="fw-bold mb-0">{event.title}</h3>
        </Card.Header>

        <Card.Body className="p-4">

          <div className="d-flex flex-column gap-3 mb-4">

            <div className="d-flex align-items-center gap-2">
              <FaCalendarAlt color="#0d6efd" size={18} />
              <span className="fw-semibold">Date:</span>
              <span>{event.date}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaClock color="#0d6efd" size={18} />
              <span className="fw-semibold">Time:</span>
              <span>{event.time}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaMapMarkerAlt color="#0d6efd" size={18} />
              <span className="fw-semibold">Location:</span>
              <span>{event.location}</span>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaChair color="#0d6efd" size={18} />
              <span className="fw-semibold">Available Seats:</span>
              <span>{event.seats}</span>
            </div>

          </div>

          <hr />

          <h6 className="fw-bold mb-2">About this Event</h6>
          <p className="text-muted">{event.description}</p>

          <Button variant="primary" className="w-100 py-2 fw-semibold mt-3" onClick={() => registeredEvents.includes(event.id) ? unregisterEvent(event.id) : registerEvent(event.id)}>
            {registeredEvents.includes(event.id) ? 'Unregister' : 'Register Now'}
          </Button>

        </Card.Body>
      </Card>
    </div>
  );
}

export default EventDetails;