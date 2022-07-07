import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";

// interfaces
interface FormInputs {
  name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

function Signup() {
  const navigate = useNavigate();
  const initialInputs: FormInputs = {
    name: "",
    email: "",
    password: "",
    address: "",
    city: "",
    state: "",
    country: "",
  };
  const [formInputs, setFormInputs] = useState<FormInputs>(initialInputs);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs((prevState: FormInputs): FormInputs => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    });
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("HERE", formInputs);
    const response = await fetch("http://localhost:3001/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formInputs),
    });

    if (response.status === 201) {
      navigate("/login");
    } else {
      console.log("please try again");
    }
  };

  return (
    <Container className="my-5 bg1">
      <Row className="d-flex justify-content-center">
        <Col xs={10}>
          <h1>Signup</h1>
          <hr className="thick-line" />
        </Col>
      </Row>
      <Form
        className="pb-5"
        onSubmit={(e: any) => {
          HandleSubmit(e);
        }}
      >
        <Form.Group controlId="signup">
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="name" label="Name:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e)
                  }
                  type="text"
                  maxLength={50}
                  value={formInputs.name}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={10}>
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
              <FloatingLabel controlId="password" label="Password:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e)
                  }
                  type="password"
                  minLength={8}
                  maxLength={255}
                  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                  title="Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
                  value={formInputs.password}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="address" label="Address:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e)
                  }
                  type="text"
                  maxLength={255}
                  value={formInputs.address}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-2">
            <Col xs={6} md={5}>
              <FloatingLabel controlId="city" label="City:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e)
                  }
                  type="text"
                  maxLength={50}
                  value={formInputs.city}
                  required
                />
              </FloatingLabel>
            </Col>
            <Col xs={6} md={5}>
              <FloatingLabel controlId="state" label="State:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e)
                  }
                  type="text"
                  maxLength={2}
                  value={formInputs.state}
                  required
                />
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center mb-3">
            <Col xs={12} md={10}>
              <FloatingLabel controlId="country" label="Country:">
                <Form.Control
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleOnChange(e)
                  }
                  type="text"
                  maxLength={50}
                  value={formInputs.country}
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

export default Signup;
