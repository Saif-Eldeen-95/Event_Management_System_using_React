import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaHeart } from 'react-icons/fa';
import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import { useNavigate } from 'react-router-dom'; 

const badgeColors = {
  Workshop: 'primary',
  Career: 'success',
  Sports: 'danger',
  Art: 'warning',
  Tech: 'info',
  Default: 'secondary',
};

export default function EventCard({ Event_Id, Event_Title, Event_Date, Event_Time, Event_Location, Event_Description, Event_Category, registerEvent, unregisterEvent, isRegistered }) { // ← 2
  const [isFav, setIsFav] = useState(false);
  const badgeColor = badgeColors[Event_Category] || badgeColors.Default;
  const navigate = useNavigate(); 

  return (
    <div>
      <Card style={{
        position: 'relative',
        border: '1px solid lightgray',
        borderRadius: '10px',
        textAlign: 'left',
        margin: '20px',
        width: '400px',
        height: '300px',
        overflow: 'hidden'
      }}>
        <Badge bg={badgeColor} style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1 }}>{Event_Category}</Badge>
        <FaHeart
          size={24}
          color={isFav ? 'white' : 'red'}
          style={{
            cursor: 'pointer',
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '5px',
            backgroundColor: isFav ? 'red' : 'white',
            border: '1px solid red',
          }}
          onClick={() => setIsFav(!isFav)}
        />
        <Card.Body style={{ paddingTop: '2.5rem' }}>
          <Card.Title style={{ fontWeight: 'bold' }}>{Event_Title}</Card.Title>
          <h6 className='text-muted p-1'>{Event_Date} | {Event_Time}</h6>
          <h6>{Event_Location}</h6>
          <Card.Text>{Event_Description}</Card.Text>
          <div style={{ marginTop: 'auto', display: 'flex', gap: '8px' }}>
            <Button
              variant='light'
              style={{ border: '1px solid blue', color: 'blue', margin: '5px' }}
              onClick={() => navigate(`/EventDetails/${Event_Id}`)} 
            >
              Details
            </Button>
            <Button variant="primary" style={{ margin: '5px' }} onClick={() => isRegistered ? unregisterEvent(Event_Id) : registerEvent(Event_Id)}>{isRegistered ? 'Unregister' : 'Register'}</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}