import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import AppointmentsTable from "./AppointmentsTable";

function Appointments() {
  const navigate = useNavigate();
  const [upcomingApps, setUpcomingApps] = useState<any>(null);
  const [noDataFound, setNoDataFound] = useState<boolean>(false);
  
  useEffect(() => {
    const getAppointments = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}appointments/user-all`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();

      if (response.status === 404 || data.allAppointments.length <= 0) {
        return setNoDataFound(true);
      }
      if (response.status === 200) {
        return setUpcomingApps(data.allAppointments);
      }
      navigate("/login");
    };
    getAppointments();
  }, []);


  return (
    <main className="bg2">
      <Row>
        <Col xs={12} className="text-start ms-5">
          <h2>All Appointments</h2>
        </Col>
      </Row>
      <Container className="px-5 mt-3">
        {upcomingApps ? (
          <AppointmentsTable appointments={upcomingApps}/>
        ) : noDataFound ? (
          <p>No Data Found </p>
        ) : (
          <Spinner animation="grow" variant="primary" />
        )}
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={5} className="my-5 py-3 bg1">
            <h4>Schedule new appointment</h4>
            <Button onClick={() => navigate("/scheduling/service")} variant="success" className="mt-2">
              Schedule Now
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Appointments;
