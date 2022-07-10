import { useNavigate } from "react-router-dom";
import { SchedulingParams } from "../../interfaces_types/interfaces";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ServiceOptions from "./ServiceOptions";
import VehicleOptions from "./VehicleOptions";
import DateTimeOptions from "./DateTimeOptions";
import PaymentOptions from "./PaymentOptions";
import Confirmation from "./Confirmation";

function Scheduling({ title, content, next }: SchedulingParams) {
  const navigate = useNavigate();

  const renderContent = () => {
    switch (content) {
      case "service":
        return <ServiceOptions />;
      case "vehicle":
        return <VehicleOptions />;
      case "date-time":
        return <DateTimeOptions />;
      case "payment":
        return <PaymentOptions />;
      case "confirmation":
        return <Confirmation />;
    }
  };

  return (
    <Container className="bg2 py-5">
      <Row className="text-start">
        <Col xs={12}>
          <h2>
            {title !== "Confirmation" && "Choose"} {title}:
          </h2>
        </Col>
      </Row>
      <Row>{renderContent()}</Row>
      <Row className="d-flex justify-content-between">
        <Col xs={12} sm={3}>
          <Button
            variant="secondary"
            className="mt-2"
            disabled={content === "service"}
            onClick={() => navigate(-1)}
          >
            Previous
          </Button>
        </Col>
        <Col xs={12} sm={3}>
          {next === "submit" ? (
            <Button
              variant="primary"
              className="mt-2"
              onClick={() => console.log("handle Submit")}
            >
              submit
            </Button>
          ) : (
            <Button
              variant="primary"
              className="mt-2"
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
