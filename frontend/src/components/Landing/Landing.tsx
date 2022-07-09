import React from 'react'
import Container from "react-bootstrap/Container";
import '../../assets/css/Landing.css'

import Home from './Home';
import Pricing from './Pricing';
import AboutUs from './AboutUs';


function Landing() {
  return (
    <Container>
      <Home />
      <Pricing />
      <AboutUs />
    </Container>
  )
}

export default Landing