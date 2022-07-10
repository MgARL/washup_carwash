import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ServicesCards({ currentServices }: any) {
  const [allServices, setAllServices] = useState<any>(currentServices);

  useEffect(() => {
    if (currentServices.length <= 0) {
      getServices();
    }
  }, []);

  const getServices = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}services/all`
    );
    const data = await response.json();
    setAllServices(data.allServices);
  };

  const renderCards = (): any => {
    return allServices.map((service: any) => {
      return (
        <Col
          key={service.service_id}
          className="d-flex justify-content-center my-2"
        >
          <Card style={{ width: "18rem" }} className="bg2">
            <Card.Header>{service.service_name}</Card.Header>
            <Card.Body className="bg1 card-min-height d-flex align-items-center">
              Carwash Rims Cleaning Door and Jams Cleaning Exterior Windows
              Cleaning
            </Card.Body>
            {currentServices.length <= 0 && (
              <Card.Footer> starting at ${service.service_price}</Card.Footer>
            )}
          </Card>
        </Col>
      );
    });
  };

  return (
      <Row xs={1} md={3} lg={4} className="my-5 d-flex justify-content-center">
        {allServices ? renderCards() : <p>loading</p>}
      </Row>
  );
}

export default ServicesCards;
