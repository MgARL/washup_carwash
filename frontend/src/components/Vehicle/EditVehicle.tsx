import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const { REACT_APP_API_URL } = process.env

function EditVehicle() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [vehicleInfo, setVehicleInfo] = useState<any>({
    make: "",
    model: "",
    year: 2020,
    type: "sedan",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<boolean>(false);

  useEffect(() => {
    const getVehicleInfo = async () => {
      setLoading(true);
      const response = await fetch(
        `${REACT_APP_API_URL}vehicles/vehicle?vehicle_id=${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      setLoading(false);
      if (response.status === 200) {
        return setVehicleInfo(data.Vehicle);
      }
      navigate("/profile");
    };
    getVehicleInfo();
  }, []);

  const updateVehicleInfo = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setVehicleInfo((prevState: any) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const updateVehicle = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    const response = await fetch(`${REACT_APP_API_URL}vehicles/update`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...vehicleInfo, vehicle_id: id }),
    });

    setLoading(false);

    if (response.status === 204) {
      return navigate("/profile");
    }

    setErrorMessage(true);
    setTimeout(() => setErrorMessage(false), 4000);
  };

  const renderError = () =>{
    return(
        <Alert variant="danger">Please try again something went wrong</Alert>
    )
  }

  return (
    <Container className="my-5 bg1">
      <Row className="d-flex justify-content-center pt-3">
        <Col xs={10}>
          <h1>Add Vehicle</h1>
          <hr className="thick-line" />
        </Col>
      </Row>
      <Form
        className="pb-4"
        onSubmit={(e: any) => {
          updateVehicle(e);
        }}
      >
        <Form.Group controlId="add-vehicle">
          <Row className="d-flex justify-content-center mb-4">
            <Col xs={12} md={10}>
              {errorMessage && renderError()}
              <FloatingLabel controlId="make" label="Make:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateVehicleInfo(e)
                  }
                  type="text"
                  maxLength={50}
                  value={vehicleInfo.make}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-4">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="model" label="Model:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateVehicleInfo(e)
                  }
                  type="text"
                  maxLength={50}
                  value={vehicleInfo.model}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-4">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="year" label="Year:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    updateVehicleInfo(e)
                  }
                  type="number"
                  min={1924}
                  max={new Date().getFullYear()}
                  value={vehicleInfo.year}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-4">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="type" label="Type:">
                <Form.Select
                  onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                    updateVehicleInfo(e)
                  }
                  value={vehicleInfo.type}
                  required
                >
                  <option value="sedan">sedan</option>
                  <option value="non-sedan">non-sedan</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-5">
            <Col xs={2}>
              {loading ? (
              <Spinner animation="grow" variant="primary" />
            ) : (
              <Button variant="primary" type="submit">
                Update Vehicle
              </Button>
            )}
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default EditVehicle;
