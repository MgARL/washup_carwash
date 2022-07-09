import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BasicInfo from "./BasicInfo";
import VehicleInfo from "./VehicleInfo";



function Profile() {
  return (
    <Container className="bg2 filler py-3">
      <Row>
        <Col xs={12} className="text-start">
          <h2>Profile</h2>
        </Col>
      </Row>
      <BasicInfo />
      <hr />
      <VehicleInfo />
    </Container>
  );
}

export default Profile;
