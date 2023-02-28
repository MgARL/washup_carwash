import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

function NotLoggedInNav() {
  return (
    <>
      <Nav.Link href="/washapp/#home" className="d-flex align-items-center">
        Home
      </Nav.Link>
      <Nav.Link href="/washapp/#pricing" className="d-flex align-items-center">
        Pricing
      </Nav.Link>
      <Nav.Link href="/washapp/#about-us" className="d-flex align-items-center">
        About Us
      </Nav.Link>
      <Nav.Link eventKey={1} as={Link} to="/signup" className="d-flex align-items-center">
        <Button variant="success">Signup</Button>
      </Nav.Link>
      <Nav.Link eventKey={2} as={Link} to="/login" className="d-flex align-items-center">
        <Button variant="primary">
          Login
        </Button>
      </Nav.Link>
    </>
  );
}

export default NotLoggedInNav;
