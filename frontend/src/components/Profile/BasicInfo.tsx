import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

import { handleOnChange, handleSubmit } from "./handlers";

function BasicInfo() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  useEffect(() => {
    const getUserInfo = async () => {
      const response = await fetch(`${process.env.REACT_APP_API_URL}users/user-info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status === 200) {
        const data = await response.json();
        return setUserInfo(data.User);
      }
      navigate("/login");
    };
    getUserInfo();
  }, []);

  const renderForm = () => {
    return (
      <Form
        className="pb-3"
        onSubmit={(e: any) => {
          handleSubmit(e, userInfo, setLoading, setSaved, navigate);
        }}
      >
        <Form.Group controlId="basic-info">
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={5}>
              <FloatingLabel controlId="name" label="Name:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e, setUserInfo)
                  }
                  type="text"
                  maxLength={50}
                  value={userInfo.name}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={5}>
              <FloatingLabel controlId="address" label="Address:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e, setUserInfo)
                  }
                  type="text"
                  maxLength={50}
                  value={userInfo.address}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={5}>
              <FloatingLabel controlId="city" label="City:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e, setUserInfo)
                  }
                  type="text"
                  maxLength={50}
                  value={userInfo.city}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={12} md={5}>
              <Row>
                <Col xs={12} md={6}>
                  <FloatingLabel controlId="state" label="State:">
                    <Form.Control
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleOnChange(e, setUserInfo)
                      }
                      type="text"
                      maxLength={2}
                      value={userInfo.state}
                      required
                    />
                  </FloatingLabel>
                </Col>
                <Col xs={12} md={6}>
                  <FloatingLabel controlId="Country" label="Country:">
                    <Form.Control
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleOnChange(e, setUserInfo)
                      }
                      type="text"
                      maxLength={50}
                      value={userInfo.country}
                      required
                    />
                  </FloatingLabel>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mt-5">
            <Col xs={2}>
                {loading ? <Spinner animation="grow" variant="primary" /> : <Button variant="primary" type="submit">
                Save Info
              </Button>}
            </Col>
          </Row>
        </Form.Group>
      </Form>
    );
  };

  const renderSaved = () => {
    return(
        <Alert variant="success">Information Updated!</Alert>
    )
  }

  return (
    <Container>
      <Row className="text-start ms-5 ps-5 mb-3">
        <Col xs={12}>
          <h5>Basic Info</h5>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
            {saved && renderSaved()}
            {userInfo ? renderForm() : <Spinner animation="grow" variant="primary" />}
        </Col>
      </Row>
    </Container>
  );
}

export default BasicInfo;
