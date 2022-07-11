import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

function Confirmation() {
  const navigate = useNavigate();
  const {
    selectedServices,
    selectedServicesNames,
    selectedVehicles,
    selectedVehiclesNames,
    servicesPrices,
    date,
    time,
  } = useContext(GlobalContext);
  const [address, setAddress] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<boolean>(false)

  useEffect(() => {
    getAddress();
  });

  const getAddress = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}users/user-info`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      if (response.status === 200) {
        return setAddress(data.User.address);
      }
      setErrorMessage(true);
      setTimeout(()=> setErrorMessage(false) ,4000);
      setTimeout(()=> navigate("/login"), 4000);
    } catch (error) {
      setErrorMessage(true);
      setTimeout(()=> setErrorMessage(false) ,4000);
      setTimeout(()=> navigate("/login"), 4000);
    }
  };

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
      {errorMessage && (
        <Alert variant="danger">
          Something went wrong, you will be redirected to login shortly
        </Alert>
      )}
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
        <Col xs={6}>Payment- Stripe</Col>
        <Col xs={6}>Amount: {calculateTotal()}</Col>
      </Row>
      <Row className="mx-4">
        <Col xs={12}>
          <h3>Appointment Date</h3>
        </Col>
      </Row>
      <Row className="mx-5">
        <Col xs={12}>
          {date?.toLocaleString().split(",")[0]} at {time?.slice(0, 5)}
        </Col>
      </Row>
      <Row className="mx-4">
        <Col xs={12}>
          <h3>Service Address</h3>
        </Col>
      </Row>
      <Row className="mx-5">
        <Col xs={12}>
          {address ? address : <Spinner animation="grow" variant="primary" />}
        </Col>
      </Row>
      <Row className="mx-4">
        <Col xs={12}>
          <h3>Vehicles</h3>
        </Col>
      </Row>
      <Row className="mx-5">
        <Col xs={12}>
          <ul>
            {selectedVehiclesNames.map((vehicleName: string, idx: number) => {
              return <li key={selectedVehicles[idx]}>{vehicleName}</li>;
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Confirmation;
