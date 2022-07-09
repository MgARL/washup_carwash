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
          <img src={logo} alt="Whasapp Logo" width="250rem" />
        </Col>
      </Row>
      <Row className='d-flex justify-content-center'>
        <Col xs={12} className='w-75 text-start' >
          <p>
          Lorem ipsum dolor sit amet, ne augue inermis molestiae sed, eos quaestio ocurreret an, et nam cetero insolens. Nam possit semper voluptua ad. Eum ei graeco qualisque, qui causae melius ea, ceteros senserit quaerendum pro ea. Eros omnesque quo et, no cetero ceteros nusquam vim, mea ut inani audiam. Vis cu summo euismod, cetero prodesset ut est. Nam audiam scripta posidonium cu, in vis sale iudicabit.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default AboutUs