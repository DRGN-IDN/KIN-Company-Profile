// This is dashboard section 
import React, { Component } from "react";
import NaviBar from "../components/NaviBar";
import ContainerHA from "../components1/ContainerHA";
import ContainerSer from "../components1/ContainerSertifikasi";
import Footer from "../components/Footer";

class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <NaviBar />
        <br />
        <br />
        <ContainerHA />
        <ContainerSer />
        <Footer />
      </React.Fragment>
    );
  }
}

export default AboutUs;