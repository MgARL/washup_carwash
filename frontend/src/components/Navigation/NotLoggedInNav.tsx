import { Link } from 'react-router-dom'
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function NotLoggedInNav() {
  return (
    <>
      <Nav.Link as={Link} to="/#home" className="d-flex align-items-center">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/#pricing" className="d-flex align-items-center">
        Pricing
      </Nav.Link>
      <Nav.Link as={Link} to="/#about-us" className="d-flex align-items-center">
        About Us
      </Nav.Link>
      <Nav.Link as={Link} to='/signup' className="d-flex align-items-center">
        <Button variant="success">Signup</Button>
      </Nav.Link>
      <Nav.Link  className="d-flex align-items-center">
        <Button variant="primary">Login</Button>
      </Nav.Link>
    </>
  );
}

export default NotLoggedInNav;
