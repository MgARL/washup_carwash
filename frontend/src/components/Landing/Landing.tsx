import React from "react";
import Container from "react-bootstrap/Container";
import "../../assets/css/Landing.css";

import Home from "./Home";
import ServicesCards from "../Services/ServicesCards"
import AboutUs from "./AboutUs";

function Landing() {
  return (
    <main>
      <Home />
      <div id="pricing">
        <ServicesCards currentServices={[]} />
      </div>
      <AboutUs />
    </main>
  );
}

export default Landing;
