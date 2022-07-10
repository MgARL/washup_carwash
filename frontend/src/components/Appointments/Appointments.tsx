import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";

function Appointments() {
  const navigate = useNavigate();
  const [upcomingApps, setUpcomingApps] = useState<any>(null);
  const [noDataFound, setNoDataFound] = useState<boolean>(false);
  const [reRender, setReRender] = useState<boolean>(false);
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
  }, [reRender]);

  const toggleReRender = () => {
    if (reRender) {
      return setReRender(false);
    }
    setReRender(true);
  };

  const handleDelete = async (id: string) => {
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
      toggleReRender();
    }
  };

  const renderAppointments = () => {
    return (
      <Row>
        {/*Its Own function here */}
        <Col xs={12}>
          <Row>
            <Col xs={3}>Date</Col>
            <Col xs={3}>Time</Col>
            <Col xs={3}>Services</Col>
            <Col xs={2}>Vehicles</Col>
          </Row>
          <hr />
          {/* Map will go here */}
          {upcomingApps.map((appointment: any) => {
            const { services, vehicles } = appointment;
            return (
              <Row key={appointment.appointment_id} onClick={()=> navigate(`/appointments/${appointment.appointment_id}`)} className="app-rows app-rows-select">
                <Col xs={3}>{appointment.date}</Col>
                <Col xs={3}>{appointment.time}</Col>
                <Col xs={3}>
                  {services.map((service: any) => {
                    return `${service.service_name} `;
                  })}
                </Col>
                <Col xs={2}>
                  {vehicles.map((vehicle: any) => {
                    return `${vehicle.make} ${vehicle.model} `;
                  })}
                </Col>
                <Col xs={1}>
                  <RiDeleteBin6Line
                    onClick={() => handleDelete(appointment.appointment_id)}
                    className="clickable-icons delete"
                  />
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
    );
  };

  return (
    <Container className="bg2">
      <Row>
        <Col xs={12} className="text-start">
          <h2>Upcoming Appointments</h2>
        </Col>
      </Row>
      <Container className="px-5 mt-3">
        {upcomingApps ? (
          renderAppointments()
        ) : noDataFound ? (
          <p>No Data Found </p>
        ) : (
          <Spinner animation="grow" variant="primary" />
        )}
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={5} className="my-5 py-3 bg1">
            <h4>Schedule new appointment</h4>
            <Button variant="success" className="mt-2">
              Schedule Now
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Appointments;
