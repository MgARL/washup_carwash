import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import AppointmentsTable from "./Appointments/AppointmentsTable";

function Dashboard() {
  const navigate = useNavigate();
  const [upcomingApps, setUpcomingApps] = useState<any>(null);
  const [noDataFound, setNoDataFound] = useState<boolean>(false);
  useEffect(() => {
    const getAppointments = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}appointments/user-upcoming`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();

      if (response.status === 404 || data.upcomingAppointments.length <= 0) {
        return setNoDataFound(true);
      }
      if (response.status === 200) {
        return setUpcomingApps(data.upcomingAppointments);
      }
      navigate("/login");
    };
    getAppointments();
  }, []);

  return (
    <Container className="bg2">
      <Row>
        <Col xs={12} className="text-start">
          <h2>Upcoming Appointments</h2>
        </Col>
      </Row>
      <Container className="px-5 mt-3">
        {upcomingApps ? (
          <AppointmentsTable appointments={upcomingApps} />
        ) : noDataFound ? (
          <p>No Data Found </p>
        ) : (
          <Spinner animation="grow" variant="primary" />
        )}
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={5} className="my-5 py-3 mx-3 bg1">
            <h4>Schedule new appointment</h4>
            <Button
              onClick={() => navigate("/scheduling/service")}
              variant="success"
              className="mt-2"
            >
              {" "}
              Schedule Now{" "}
            </Button>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col xs={12} md={5} className="my-5 py-3 bg1">
            <h4>Check all your appointments</h4>
            <Button
              variant="primary"
              className="mt-2"
              onClick={() => navigate("/appointments")}
            >
              {" "}
              Appointments{" "}
            </Button>
          </Col>
          <Col xs={12} md={5} className="my-5 py-3 bg1">
            <h4>Add Vehicle</h4>
            <Button
              variant="primary"
              className="mt-2"
              onClick={() => navigate("/vehicle/add")}
            >
              Add Vehicle
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Dashboard;
