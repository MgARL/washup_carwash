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
    <main className="bg2 filler py-3">
      <Row>
        <Col xs={12} className="text-start ms-5">
          <h2>Profile</h2>
        </Col>
      </Row>
      <BasicInfo />
      <hr />
      <Row className="vehicle-info">
        <Col xs={12}>
          <Row>
            <Col xs={12} className="text-start ms-5">
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
    </main>
  );
}

export default Profile;
