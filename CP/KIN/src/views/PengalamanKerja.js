// This is dashboard section 
import React, { Component } from "react";
import NaviBar from "../components/NaviBar";
import PengKer from "../components2/pk";
import PengKer1 from "../components2/pk1";
import PengKer2 from "../components2/pk2";
// import ContainerSer from "../components1/ContainerSertifikasi";
import Footer from "../components/Footer";

class PengalamanKerja extends Component {
  render() {
    return (
      <React.Fragment>
        <NaviBar />
        <br />
        <br />
        <PengKer />
        <PengKer1 />
        <PengKer2 />
        <Footer />
      </React.Fragment>
    );
  }
}

export default PengalamanKerja;