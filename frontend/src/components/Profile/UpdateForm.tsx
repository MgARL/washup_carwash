import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

function UpdateForm() {
  return (
    <Form
      className="pb-3"
      onSubmit={(e: any) => {
        //   handleSubmit(e);
      }}
    >
      <Form.Group controlId="basic-info">
        <Row className="d-flex justify-content-center mb-2">
          <Col xs={12} md={5}>
            <FloatingLabel controlId="name" label="Name:">
              <Form.Control
                // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //   handleOnChange(e)
                // }
                type="text"
                maxLength={50}
                // value={}
                required
              />
            </FloatingLabel>
          </Col>
          <Col xs={12} md={5}>
            <FloatingLabel controlId="address" label="Address:">
              <Form.Control
                //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //     handleOnChange(e)
                //   }
                type="text"
                maxLength={50}
                //   value={}s
                required
              />
            </FloatingLabel>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mb-2">
          <Col xs={12} md={5}>
            <FloatingLabel controlId="city" label="City:">
              <Form.Control
                //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                //     handleOnChange(e)
                //   }
                type="text"
                maxLength={50}
                //   value={formInputs.password}
                required
              />
            </FloatingLabel>
          </Col>
          <Col xs={12} md={5}>
            <Row>
              <Col xs={12} md={6}>
                <FloatingLabel controlId="state" label="State:">
                  <Form.Control
                    //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     handleOnChange(e)
                    //   }
                    type="text"
                    maxLength={2}
                    //   value={formInputs.password}
                    required
                  />
                </FloatingLabel>
              </Col>
              <Col xs={12} md={6}>
                <FloatingLabel controlId="Country" label="Country:">
                  <Form.Control
                    //   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    //     handleOnChange(e)
                    //   }
                    type="text"
                    maxLength={50}
                    //   value={formInputs.password}
                    required
                  />
                </FloatingLabel>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-5">
          <Col xs={2}>
            <Button variant="primary" type="submit">
              Save Info
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
}

export default UpdateForm;
