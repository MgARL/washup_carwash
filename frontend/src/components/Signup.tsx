import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function Signup() {
  return (
    <Container className="my-5 bg1">
      <Row className="d-flex justify-content-center">
        <Col xs={10}>
          <h1>Signup</h1>
          <hr className="thick-line" />
        </Col>
      </Row>
      <Form className="pb-5">
        <Form.Group controlId="signup">
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="name" label="Name:">
                <Form.Control type="text" maxLength={50} required />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="email" label="Email:">
                <Form.Control type="email" maxLength={50} required />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="password" label="Password:">
                <Form.Control type="password" maxLength={255} required />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="address" label="Address:">
                <Form.Control type="text" maxLength={255} required />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={6} md={5}>
              <FloatingLabel controlId="city" label="City:">
                <Form.Control type="text" maxLength={50} required />
              </FloatingLabel>
            </Col>
            <Col xs={6} md={5}>
              <FloatingLabel controlId="state" label="State:">
                <Form.Control type="text" maxLength={2} required />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-3">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="country" label="Country:">
                <Form.Control type="text" maxLength={50} required />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs={2}>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Signup;
