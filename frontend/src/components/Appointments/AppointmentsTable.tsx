import { useNavigate } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AppointmentsTable({appointments}: any) {
    const navigate = useNavigate()
  return (
    <Row>
        <Col xs={12}>
          <Row>
            <Col xs={6} sm={3}>Date</Col>
            <Col xs={6} sm={3}>Time</Col>
            <Col xs={6} sm={3}>Services</Col>
            <Col xs={6} sm={3}>Vehicles</Col>
          </Row>
          <hr />
          {appointments.map((appointment: any) => {
            const { services, vehicles } = appointment;
            {console.log(services)}
            return (
              <Row key={appointment.appointment_id} onClick={()=> navigate(`/appointments/${appointment.appointment_id}`)} className="app-rows app-rows-select">
                <Col xs={6} sm={3} className=" d-flex justify-content-center align-items-center my-3">{appointment.date}</Col>
                <Col xs={6} sm={3} className=" d-flex justify-content-center align-items-center my-3">{appointment.time}</Col>
                <Col xs={6} sm={3} className=" d-flex justify-content-center align-items-center my-3">
                { services.length >= 2 ? `${services[0].service_name} ... more` : services[0].service_name}
                </Col>
                <Col xs={6} sm={3} className=" d-flex justify-content-center align-items-center my-3">
                { vehicles.length >= 2 ? `${vehicles[0].make} ${vehicles[0].model} ... more` : `${vehicles[0].make} ${vehicles[0].model}`}
                </Col>
              </Row>
            );
          })}
        </Col>
      </Row>
  )
}

export default AppointmentsTable