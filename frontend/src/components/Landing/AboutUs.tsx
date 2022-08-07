import React from 'react'
import logo from '../../assets/images/logo_no_bg.png'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutUs() {
  return (
    <div id='about-us' className='bg2 py-5'>
      <Row>
        <Col xs={12}>
          <h1>ABOUT US</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <img src={logo} alt="Washapp Logo" width="250rem" />
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col xs={12} className='w-75 text-start' >
          <p>
            Founded in Raleigh, NC in the 70s, Washapp brings years of experience to the car detailing field.
            We are committed to bring an excellent and qualitative service to You. Our services have been carefully vetted to bring the best value to your vehicle needs.
            We have been bringing quality to our clients for decades now, you vehicle will be in the best hands!
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default AboutUs