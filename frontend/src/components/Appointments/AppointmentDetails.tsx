import { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AppointmentDetails() {
    
  return (
    <Container className="bg2">
      <Row className="text-start">
        <Col xs={12}>
          <h4>Appointment Details</h4>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>app info</Col>
      </Row>
      <Row>
        <Col xs={12}>Services</Col>
      </Row>
      <Row>
        <Col xs={12}>Vehicles</Col>
      </Row>
    </Container>
  );
}

export default AppointmentDetails;
