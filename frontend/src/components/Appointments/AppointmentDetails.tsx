import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

import VehiclesCards from "../Vehicle/VehiclesCards";
import ServicesCards from "../Services/ServicesCards";

function AppointmentDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [appointment, setAppointment] = useState<any>(null);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  useEffect(() => {
    getAppointment();
  }, []);

  const getAppointment = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}appointments/user-one?appointment_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        return setAppointment(data.Appointment);
      }
      setErrorMessage(true);
      setTimeout(() => setErrorMessage(false), 5000);
      setTimeout(() => navigate("/appointments"), 5000);
    } catch (error) {
      setErrorMessage(true);
      setTimeout(() => setErrorMessage(false), 3000);
      setTimeout(() => navigate("/appointments"), 5000);
    }
  };

  const handleDelete = async () => {
    const response: Response = await fetch(
      `${process.env.REACT_APP_API_URL}appointments/delete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          appointment_id: id,
        }),
      }
    );
    if (response.status === 204) {
      setSuccessMessage(true);
      setTimeout(() => navigate("/appointments"), 3000);
    }
  };

  const renderAppointment = () => {
    return (
      <>
        <Row className="text-start">
          <Col xs={12}>
            <h3>Appointment Details</h3>
          </Col>
        </Row>
        <hr />
        <section className="mx-5 text-start">
          <Row className="mb-3">
            <Col xs={12}>
              <Row>
                <Col xs={12} md={3}>
                  Date: {appointment.date}
                </Col>
                <Col xs={12} md={3}>
                  Time: {appointment.time}
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>Services to be performed:</Col>
            <Col xs={12}>
              <ServicesCards currentServices={appointment.services} />
            </Col>
          </Row>
          <Row>
            <Col xs={12}>Vehicles to be serviced:</Col>
            <Col xs={12} className="my-3 text-center">
              <VehiclesCards
                currentVehicles={appointment.vehicles}
                type="option"
              />
            </Col>
          </Row>
          <hr />
          {successMessage && (
            <Alert variant="success">
              Appointment Deleted, you will be redirected shortly
            </Alert>
          )}
          <Row className="d-flex justify-content-center">
            <Col xs={12} sm={3} className="d-flex justify-content-center">
              <Button
                onClick={() => handleDelete()}
                variant="danger"
                className="mt-2"
              >
                Cancel Appointment
              </Button>
            </Col>
          </Row>
        </section>
      </>
    );
  };

  return (
    <Container className="bg2 py-5 footer-fill">
      {appointment ? (
        renderAppointment()
      ) : errorMessage ? (
        <Alert variant="danger">
          Couldn't Find Appointment, you will be redirected shortly
        </Alert>
      ) : (
        <Spinner animation="grow" variant="primary" />
      )}
    </Container>
  );
}

export default AppointmentDetails;
