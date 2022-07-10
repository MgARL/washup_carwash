import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import BasicInfo from "./BasicInfo";
import VehiclesCards from "../Vehicle/VehiclesCards";

function Profile() {
  const navigate = useNavigate();
  return (
    <Container className="bg2 filler py-3">
      <Row>
        <Col xs={12} className="text-start">
          <h2>Profile</h2>
        </Col>
      </Row>
      <BasicInfo />
      <hr />
      <Row className="vehicle-info mx-5 px-5">
        <Col xs={12}>
          <Row>
            <Col xs={12} className="text-start">
              <h5>Vehicle Info</h5>
            </Col>
          </Row>
          <VehiclesCards currentVehicles={[]}/>
          <Row className="my-5 d-flex justify-content-center">
            <Col xs={12} md={6}>
              <Button
                variant="primary"
                onClick={() => navigate("/vehicle/add")}
              >
                Add Vehicle
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;
