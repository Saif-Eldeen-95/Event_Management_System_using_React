import { initialEvents } from '../../Data/events';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventCard from '../Components/EventCard';
import{useState} from 'react';
import Form from 'react-bootstrap/Form';
import {FaSearch} from 'react-icons/fa';
import InputGroup from 'react-bootstrap/InputGroup';

export default function Events({events, registerEvent, unregisterEvent, registeredEvents}) {
const [Query,setQuery]=useState("");
const filtered = events.filter(e =>
    e.title.toLowerCase().includes(Query.trim().toLowerCase())
  );
  return (
    <div>
      <h2 className="mt-4 text-center">All Events</h2>
      <p className="text-center text-muted p-3">Search and filter events</p>


      <InputGroup className="mb-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
        <InputGroup.Text>
          <FaSearch />
        </InputGroup.Text>
        <Form.Control
          type="search"
          placeholder="Search events by title..."
          value={Query}
          onChange={e => setQuery(e.target.value)}
        />
      </InputGroup>
      <Row>
      {filtered.map(e => (
        <Col key={e.id} md={6} lg={4}>
          <EventCard Event_Id={e.id} Event_Title={e.title} Event_Date={e.date} Event_Time={e.time} Event_Location={e.location} Event_Description={e.description} Event_Category={e.category} registerEvent={registerEvent} unregisterEvent={unregisterEvent} isRegistered={registeredEvents.includes(e.id)} />
        </Col>
     ))}
    </Row>
    /</div>
  )

}