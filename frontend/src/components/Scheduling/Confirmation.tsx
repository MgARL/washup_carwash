import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Confirmation() {
  const {
    selectedServices,
    selectedServicesNames,
    selectedVehicles,
    servicesPrices,
    date,
    time,
  } = useContext(GlobalContext);

  const calculateTotal = () => {
    const totalPrices = servicesPrices.map((price: number): number => {
      return price * selectedVehicles.length;
    });
    let total = 0;
    totalPrices.map((price: number): void => {
      total += price;
    });
    return `${total}`;
  };

  return (
    <Container className="bg2 text-start">
      <Row className="mx-4">
        <Col xs={12}>
          <h3>Services</h3>
        </Col>
      </Row>
      <Row className="mx-4">
        <Col xs={12}>
          <ul>
            {selectedServicesNames.map((service: string, idx: number) => {
              return <li key={selectedServices[idx]}>{service}</li>;
            })}
          </ul>
        </Col>
      </Row>
      <Row className="mx-4">
        <Col xs={12}>
          <h3>Payment</h3>
        </Col>
      </Row>
      <Row className="mx-5">
        <Col xs={6}>
          Payment- Stripe
        </Col>
        <Col xs={6}>
          Amount: {calculateTotal()}
        </Col>
      </Row>
      <Row className="mx-4">
        <Col xs={12}>
          <h3>Appointment Date</h3>
        </Col>
      </Row>
      <Row className="mx-5">
        <Col xs={12}>
          {date?.toLocaleString().split(',')[0]}
        </Col>
      </Row>
      <Row className="mx-4">
        <Col xs={12}>
          <h3>Service Address</h3>
        </Col>
      </Row>
      <Row className="mx-5">
        <Col xs={12}>
          Address here...
        </Col>
      </Row>
      <Row className="mx-4">
        <Col xs={12}>
          <h3>Vehicles</h3>
        </Col>
      </Row>
      <Row className="mx-5">
        <Col xs={12}>
          vehicles here...
        </Col>
      </Row>
    </Container>
    
  );
}

export default Confirmation;
