import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SchedulingParams,
  AppointmentBody,
} from "../../interfaces_types/interfaces";
import { GlobalContext } from "../../contexts/GlobalContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import ServicesCards from "../Services/ServicesCards";
import VehiclesCards from "../Vehicle/VehiclesCards";
import DateTimeOptions from "./DateTimeOptions";
import PaymentOptions from "./PaymentOptions";
import Confirmation from "./Confirmation";

function Scheduling({ title, content, next }: SchedulingParams) {
  const navigate = useNavigate();
  const {
    selectedServices,
    selectedVehicles,
    time,
    date,
    setSelectedServices,
    setSelectedVehicles,
    setDate,
    setSelectedVehiclesNames,
    setSelectedServicesNames,
  } = useContext(GlobalContext);
  const [successMessage, setSuccessMessage] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const [paid, setPaid] = useState<boolean>(false);

  const handleSubmit: () => void = async () => {
    const body: AppointmentBody = {
      date: date?.toISOString().split("T")[0],
      time,
      service_ids: selectedServices,
      vehicle_ids: selectedVehicles,
    };

    try {
      const response: Response = await fetch(
        `${process.env.REACT_APP_API_URL}appointments/create`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );
      if (response.status === 201) {
        const data = await response.json();
        setSelectedServices?.([]);
        setSelectedVehicles?.([]);
        setSelectedVehiclesNames?.([]);
        setSelectedServicesNames?.([]);
        setDate?.(null);
        setSuccessMessage(true);
        setPaid(false);
        setTimeout(
          () => navigate(`/appointments/${data.appointment_id}`),
          3000
        );
        return;
      }
      setErrorMessage(true);
      setTimeout(() => setErrorMessage(false), 3000);
    } catch (error) {
      setErrorMessage(true);
      setTimeout(() => setErrorMessage(false), 3000);
      console.error(error);
    }
  };

  const renderContent = () => {
    switch (content) {
      case "service":
        return <ServicesCards currentServices={[]} type="option" />;
      case "vehicle":
        return <VehiclesCards currentVehicles={[]} type="option" />;
      case "date-time":
        return <DateTimeOptions />;
      case "payment":
        return <PaymentOptions setPaid={setPaid} paid={paid} />;
      case "confirmation":
        return <Confirmation />;
    }
  };

  const isDisabled: () => boolean = () => {
    switch (content) {
      case "service":
        return selectedServices.length <= 0;
      case "vehicle":
        return selectedVehicles.length <= 0;
      case "date-time":
        return !date || !time;
      case "payment":
        return !paid;
      default:
        return false;
    }
  };

  return (
    <Container className="bg2 py-5">
      <Row className="text-start">
        <Col xs={12}>
          <h2>
            {title !== "Confirmation" && title !== "Payment" && "Choose"}{" "}
            {title}:
          </h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">{renderContent()}</Row>
      {content === "vehicle" && (
        <Row className="d-flex justify-content-center">
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
      )}
      {successMessage && (
        <Alert variant="success">
          Appointment Successfully Scheduled, you will be redirected to details
          shortly
        </Alert>
      )}
      {errorMessage && (
        <Alert variant="danger">Something Went wrong, please try again</Alert>
      )}
      <Row className="d-flex justify-content-between mt-4">
        <Col xs={6} sm={3}>
          <Button
            variant="secondary"
            className="mt-2"
            disabled={content === "service"}
            onClick={() => navigate(-1)}
          >
            Previous
          </Button>
        </Col>
        <Col xs={6} sm={3}>
          {next === "submit" ? (
            <Button
              variant="primary"
              className="mt-2"
              onClick={() => handleSubmit()}
            >
              submit
            </Button>
          ) : (
            <Button
              variant="primary"
              className="mt-2"
              disabled={isDisabled()}
              onClick={() => navigate(`/scheduling/${next}`)}
            >
              Next
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Scheduling;
