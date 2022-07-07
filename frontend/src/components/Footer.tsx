import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import {
  FaFacebook,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaYoutube,
  FaRegCopyright
} from "react-icons/fa";

function Footer() {
  return (
    <Container  fluid className="pb-4 bg1">
      <Row>
        <Col sm={12}>
          {" "}
          <a href="mailto: support@example.com">Contact us</a>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col sm={12}>
          {" "}
          <a
            href="https://www.google.com/search?channel=fs&client=ubuntu&q=washapp+carwash"
            target="a_blank"
            rel="nonreferrer"
          >
            Review us on Google
          </a>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center mb-5">
        <Col xs={2} sm={1}>
          <a className="link-dark" href="https://www.linkedin.com/in/miguel-rod-developer/" target="a_blank" rel="nonreferrer">
            {<FaLinkedin size="2em" />}
          </a>
        </Col>
        <Col xs={2} sm={1}>
          <a className="link-dark" href="https://www.facebook.com/" target="a_blank" rel="nonreferrer">
            {<FaFacebook size="2em" />}
          </a>
        </Col>
        <Col xs={2} sm={1}>
          <a className="link-dark" href="https://www.twitter.com/" target="a_blank" rel="nonreferrer">
            {<FaTwitterSquare size="2em" />}
          </a>
        </Col>
        <Col xs={2} sm={1}>
          <a className="link-dark" href="https://www.instagram.com/" target="a_blank" rel="nonreferrer">
            {<FaInstagramSquare size="2em" />}
          </a>
        </Col>
        <Col xs={2} sm={1}>
          <a className="link-dark" href="https://www.youtube.com/" target="a_blank" rel="nonreferrer">
            {<FaYoutube size="2em" />}
          </a>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12}>
          <p className="text-muted fst-italic">
            Copyright <span><FaRegCopyright/></span> 2022 | All Rights Reserved
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <p>
            Designed and Developed by:
          </p>
        </Col>
        <Col xs={12}>
          <a href="https://www.linkedin.com/in/miguel-rod-developer/" target="a_blank" rel="nonreferrer">
            Miguel Rodriguez
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
