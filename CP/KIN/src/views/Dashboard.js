// This is dashboard section 
import React, { Component } from "react";
import NaviBar from "../components/NaviBar";
import ContainerHome from "../components/ContainerHome";
import ContainerH1 from "../components/ContainerH1";
import ContainerH2 from "../components/ContainerH2";
import ContainerC from "../components/ContainerContact";
import Footer from "../components/Footer";

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <NaviBar />
        <br />
        <ContainerHome />
        <ContainerH1 />
        <ContainerH2 />
        <ContainerC />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Dashboard;