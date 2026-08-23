import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EventCard from '../Components/EventCard';

export default function MyEvents({ events, registeredEvents, unregisterEvent, registerEvent }) {
  const myEvents = events.filter(e => registeredEvents.includes(e.id));

  return (
    <div>
      <h2 className="mt-4 text-center">My Events</h2>
      <p className="text-center text-muted p-3">Your registered events</p>
      {myEvents.length === 0 ? (
        <p className="text-center">No registered events yet.</p>
      ) : (
        <Row>
          {myEvents.map(e => (
            <Col key={e.id} md={6} lg={4}>
              <EventCard 
                Event_Id={e.id} 
                Event_Title={e.title} 
                Event_Date={e.date} 
                Event_Time={e.time} 
                Event_Location={e.location} 
                Event_Description={e.description} 
                Event_Category={e.category} 
                registerEvent={registerEvent} 
                unregisterEvent={unregisterEvent} 
                isRegistered={true} 
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}
