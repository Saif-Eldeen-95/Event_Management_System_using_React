import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
<div>
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Campus Event Hub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link as={Link} to="/Events">Events</Nav.Link>
            <Nav.Link as={Link} to="/CreateEvents">Create Event</Nav.Link>
            <Nav.Link as={Link} to="/MyEvents">My Events</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
    </div>
  )
}
