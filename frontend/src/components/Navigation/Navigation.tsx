import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_no_bg.png";

// Bootstrap Comps
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import LoggedInNav from "./LoggedInNav";
import NotLoggedInNav from "./NotLoggedInNav";

// types / Interfaces

interface Props {
  loggedIn: boolean;
}

function Navigation({ loggedIn }: Props) {
  return (
    <>
      <Navbar collapseOnSelect variant="light" sticky="top" expand="sm" className="bg1">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              width="80"
              className="d-inline-block align-center"
              alt="Link logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              {loggedIn ? <LoggedInNav /> : <NotLoggedInNav />}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
