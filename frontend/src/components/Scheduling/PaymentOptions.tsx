import { useContext, useState } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

function PaymentOptions({ setPaid, paid }: any) {
  const {
    selectedServices,
    selectedVehicles
  } = useContext(GlobalContext);
  const [success, setSuccess] = useState<boolean>(false);

  const calculateTotal = () => {
    const totalPrices = selectedServices.map((service: any): number => {
      return service.service_price * selectedVehicles.length;
    });
    let total = 0;
    totalPrices.map((price: number): void => {
      total += price;
    });
    return `${total}`;
  };

  return (
    <Container className="bg2 text-center">
      <main className="mx-4">
        <Row className="bg1">
          <Col xs={6} md={8} className="text-start">
            <h5>Item</h5>
          </Col>
          <Col xs={3} md={2}>
            <h5>Qty</h5>
          </Col>
          <Col xs={3} md={2}>
            <h5>Price</h5>
          </Col>
        </Row>
        {selectedServices.map((service: any) => {
          return (
            <Row key={service.service_id} className="app-rows">
              <Col xs={6} md={8} className="text-start">
                {service.service_name}
              </Col>
              <Col xs={3} md={2}>{selectedVehicles.length}</Col>
              <Col xs={3} md={2}>$ {service.service_price}</Col>
            </Row>
          );
        })}
        <Row>
          <Col xs={6} md={8} className="text-end">
            Total:
          </Col>
          <Col xs={3} md={2}></Col>
          <Col xs={3} md={2}>$ {calculateTotal()}</Col>
        </Row>
        <Row className="mt-5">
          {success && (
            <Alert variant="success">Payment Added, Please Click Next</Alert>
          )}
          <Col>
            <Button
              variant="success"
              disabled={paid}
              onClick={() => {
                setTimeout(() => setPaid(true), 2000);
                setTimeout(() => setSuccess(true), 2000);
                setTimeout(() => setSuccess(false), 6000);
              }}
            >
              Pay With Stripe
            </Button>
          </Col>
        </Row>
      </main>
    </Container>
  );
}

export default PaymentOptions;
