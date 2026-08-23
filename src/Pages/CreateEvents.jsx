import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function CreateEvents({ events, setEvents }) {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      createEvent();
    }
    setValidated(true);
  };

  const createEvent = () => {
    const newEvent = {
      id: Date.now(),
      title: document.getElementById('validationCustom01').value,
      category: document.getElementById('validationCustom02').value,
      location: document.getElementById('validationCustom03').value,
      seats: document.getElementById('validationCustom04').value,
      date: document.getElementById('validationCustomDate').value,
      time: document.getElementById('validationCustomTime').value,
      description: document.getElementById('validationCustom05').value,
    };
    setEvents([...events, newEvent]);
    console.log('Event created:', newEvent);
    navigate('/Home');
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="bg-white p-5 rounded-4 shadow-sm" style={{ width: '100%', maxWidth: '800px' }}>
        <h3 className="mb-4 fw-bold text-center">Create New Event</h3>

        <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="validationCustom01">
            <Form.Label className="fw-semibold">Event Name</Form.Label>
            <Form.Control required type="text" placeholder="Event Name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a valid event name.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom02">
            <Form.Label className="fw-semibold">Category</Form.Label>
            <Form.Select required defaultValue="">
              <option value="" disabled>Select a category</option>
              <option value="Tech">Tech</option>
              <option value="Sports">Sports</option>
              <option value="Career">Career</option>
              <option value="Art">Art</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">Please select a category.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom03">
            <Form.Label className="fw-semibold">Location</Form.Label>
            <Form.Control type="text" placeholder="Location" required />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Please provide a valid location.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom04">
            <Form.Label className="fw-semibold">Seats</Form.Label>
            <Form.Control type="number" placeholder="Seats" required />
            <Form.Control.Feedback type="invalid">Please provide a valid number of seats.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustomDate">
            <Form.Label className="fw-semibold">Date</Form.Label>
            <Form.Control type="date" required min={new Date().toISOString().split('T')[0]} />
            <Form.Control.Feedback type="invalid">Please provide a valid date.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustomTime">
            <Form.Label className="fw-semibold">Time</Form.Label>
            <Form.Control type="time" required />
            <Form.Control.Feedback type="invalid">Please provide a valid time.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="validationCustom05">
            <Form.Label className="fw-semibold">Description</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Description" required />
            <Form.Control.Feedback type="invalid">Please provide a description.</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100 py-2 fw-semibold">
            Create Event
          </Button>

        </Form>
      </div>
    </div>
  );
}

export default CreateEvents;