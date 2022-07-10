import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Alert from 'react-bootstrap/Alert'

// interfaces
import { LoginInputs } from "../interfaces_types/interfaces";

// contexts
import { GlobalContext } from "../contexts/GlobalContext";

function Login() {
  const navigate = useNavigate();

  const { setLoggedIn } = useContext(GlobalContext);
  const initialInputs: LoginInputs = {
    email: "",
    password: "",
  };
  const [formInputs, setFormInputs] = useState<LoginInputs>(initialInputs);
  const [errorMessage, setErrorMessage] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs(
      (prevState: LoginInputs): LoginInputs => ({
        ...prevState,
        [e.target.id]: e.target.value,
      })
    );
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch(`${process.env.REACT_APP_API_URL}users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formInputs),
    });
    if (response.status === 200) {
      const data = await response.json();
      localStorage.setItem("token", data.token);
      setLoggedIn?.(true);
      navigate("/");
    }

    setErrorMessage(true);
    setTimeout(() => setErrorMessage(false), 3000);
    setFormInputs(initialInputs);
  };

  return (
    <Container className="my-5 pt-3 bg1">
      <Row className="d-flex justify-content-center">
        <Col xs={10}>
          <h1>Login</h1>
          <hr className="thick-line" />
        </Col>
      </Row>
      <Form
        className="pb-5"
        onSubmit={(e: any) => {
          handleSubmit(e);
        }}
      >
        <Form.Group controlId="login">
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={10}>
          {errorMessage && <Alert variant='danger'> Wrong Credentials Please Try Again</Alert>}
              <FloatingLabel controlId="email" label="Email:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e)
                  }
                  type="email"
                  maxLength={50}
                  value={formInputs.email}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="password" label="password:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e)
                  }
                  type="password"
                  maxLength={50}
                  value={formInputs.password}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs={2}>
              <Button variant="success" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}

export default Login;
