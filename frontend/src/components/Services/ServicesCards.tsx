import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import removeArrValue from "../../hooks/removeArrValue";

function ServicesCards({ currentServices, type }: any) {
  const [allServices, setAllServices] = useState<any>(currentServices);
  const {
    setSelectedServices,
    selectedServices,
    servicesPrices,
    setServicesPrices,
    selectedServicesNames,
    setSelectedServicesNames
  } = useContext(GlobalContext);

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

  const handleServiceSelect = (service_id: string, service_price: any, service_name: any) => {
    if (!selectedServices.includes(service_id)) {
      setSelectedServices?.((prevState: any) => [...prevState, service_id]);
      setServicesPrices?.((prevState: any) => [...prevState, service_price]);
      setSelectedServicesNames?.((prevState: any) => [...prevState, service_name]);
    } else {
      let newServiceArr = removeArrValue(selectedServices, service_id);
      let newPriceArr = removeArrValue(servicesPrices, service_price);
      let newServiceNamesArr = removeArrValue(selectedServicesNames, service_name);
      setSelectedServices?.(newServiceArr);
      setServicesPrices?.(newPriceArr);
      setSelectedServicesNames?.(newServiceNamesArr);
    }
  };

  const renderCards = (): any => {
    return allServices.map((service: any) => {
      return (
        <Col
          key={service.service_id}
          className="d-flex justify-content-center my-2"
        >
          <Card
            style={{ width: "18rem" }}
            className={`bg2 ${type === "option" && "card-select"} ${
             (selectedServices.includes(service.service_id) && type === "option") &&
              "border border-success"
            }`}
            onClick={() => {
              if (type === "option") {
                handleServiceSelect(service.service_id, service.service_price, service.service_name);
              }
            }}
          >
            <Card.Header>{service.service_name}</Card.Header>
            <Card.Body className="bg1 card-min-height d-flex align-items-center">
              Carwash Rims Cleaning Door and Jams Cleaning Exterior Windows
              Cleaning
              <br />
              {type == "option" && `Price: ${service.service_price}`}
            </Card.Body>
            {currentServices.length <= 0 && type !== "option" && (
              <Card.Footer> price: ${service.service_price}</Card.Footer>
            )}
            {type === "option" && (
              <Card.Footer>
                <Button variant="success">Select</Button>
              </Card.Footer>
            )}
          </Card>
        </Col>
      );
    });
  };

  return (
    <Row xs={1} md={3} lg={4} className="my-5 d-flex justify-content-center">
      {allServices.length >= 0 ? renderCards() : <p>loading</p>}
    </Row>
  );
}

export default ServicesCards;
