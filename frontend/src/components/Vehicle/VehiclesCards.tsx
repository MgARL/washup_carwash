import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";

import removeArrValue from "../../hooks/removeArrValue";

const { REACT_APP_API_URL } = process.env;

function VehiclesCards({ currentVehicles, type }: any) {
  const navigate = useNavigate();
  const {
    selectedVehicles,
    setSelectedVehicles,
    selectedVehiclesNames,
    setSelectedVehiclesNames,
  } = useContext(GlobalContext);
  const [allVehicles, setAllVehicles] = useState<any>(currentVehicles);
  const [noVehicles, setNoVehicles] = useState<boolean>(false);
  const [reRender, setReRender] = useState<boolean>(false);

  useEffect(() => {
    if (currentVehicles.length <= 0) {
      getAllVehicles();
    }
  }, [reRender]);

  const getAllVehicles = async () => {
    const response = await fetch(`${REACT_APP_API_URL}vehicles/all`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return setAllVehicles(data.allVehicles);
    }
    if (response.status === 404) {
      return setNoVehicles(true);
    }
    navigate("/login");
  };

  const toggleReRender = () => {
    if (reRender) {
      return setReRender(false);
    }
    setReRender(true);
  };

  const handleDelete = async (id: string) => {
    const response: Response = await fetch(
      `${REACT_APP_API_URL}vehicles/delete`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          vehicle_id: id,
        }),
      }
    );
    if (response.status === 204) {
      toggleReRender();
    }
  };

  const handleVehicleSelect = (
    vehicle_id: string,
    vehicle_make: string,
    vehicle_model: string
  ) => {
    const vehicle_name = `${vehicle_make} ${vehicle_model}`;
    if (!selectedVehicles.includes(vehicle_id)) {
      setSelectedVehicles?.((prevState: any) => [...prevState, vehicle_id]);
      setSelectedVehiclesNames?.((prevState: any) => [
        ...prevState,
        vehicle_name,
      ]);
    } else {
      const newArr = removeArrValue(selectedVehicles, vehicle_id);
      const newNameArr = removeArrValue(selectedVehiclesNames, vehicle_name);
      setSelectedVehicles?.(newArr);
      setSelectedVehiclesNames?.(newNameArr);
    }
  };

  const renderVehicles = () => {
    return allVehicles.map((vehicle: any) => {
      return (
        <Col
          key={vehicle.vehicle_id}
          className="d-flex justify-content-center my-2"
        >
          <Card
            style={{ width: "18rem" }}
            className={`${type === "option" && "card-select"} ${
              (selectedVehicles.includes(vehicle.vehicle_id) && type === "option" ) &&
              "border border-success"
            }`}
            onClick={() => {
              if (type === "option") {
                handleVehicleSelect(
                  vehicle.vehicle_id,
                  vehicle.make,
                  vehicle.model
                );
              }
            }}
          >
            <Card.Body id={vehicle.vehicle_id}>
              <Card.Title className="mb-3">{vehicle.model}</Card.Title>
              <Card.Text>Make: {vehicle.make}</Card.Text>
              <Card.Text>Year: {vehicle.year}</Card.Text>
              <Card.Text>Type: {vehicle.type}</Card.Text>
            </Card.Body>
            {currentVehicles.length <= 0 && type !== "option" && (
              <Card.Footer>
                <Row className="d-flex justify-content-center align-items-center">
                  <Col xs={5}>
                    <RiEditLine
                      onClick={() =>
                        navigate(`/vehicle/edit/${vehicle.vehicle_id}`)
                      }
                      size={"2em"}
                      className="clickable-icons edit"
                    />
                  </Col>
                  <Col xs={5}>
                    <RiDeleteBin6Line
                      onClick={() => handleDelete(`${vehicle.vehicle_id}`)}
                      size={"1.8em"}
                      className="clickable-icons delete"
                    />
                  </Col>
                </Row>
              </Card.Footer>
            )}
            {(type === "option" && currentVehicles.length > 0) && (
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
    <Row xs={1} sm={2} md={3} lg={4} className='d-flex justify-content-center'>
      {allVehicles ? (
        renderVehicles()
      ) : noVehicles ? (
        <p>No vehicles found</p>
      ) : (
        <Spinner animation="grow" variant="primary" />
      )}
    </Row>
  );
}

export default VehiclesCards;
