import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home() {
  return (
    <div id="home" className="d-flex bg2">
      <section id="home-info" className="text-start mt-5 ms-3">
        <Row>
          <Col xs={12}>
            <h1>WashApp Carwash</h1>
          </Col>
        </Row>
        <Row className="mt-3 ms-1">
          <Col xs={12}>
            <h5>We bring quality service to your vehicle!</h5>
          </Col>
        </Row>
        <Row className="mt-5 d-flex justify-content-center">
          <Col xs={12} md={6}>
            <Button variant="success"> <Link to='/signup' className="link-light">Schedule Service</Link></Button>
          </Col>
        </Row>
      </section>
      <section id="home-image"></section>
    </div>
  );
}

export default Home;
