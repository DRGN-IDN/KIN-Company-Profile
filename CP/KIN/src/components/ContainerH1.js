import React from "react";
import { Container, Col, Row  } from "react-bootstrap";
import "../css/Kin.css";

function ContainerH1() {
    return (
      // Container H1
      <Container fluid className="container-h1">
        <div className="form-container">
        <h1 className="font-title1"><b>Sejarah Singkat Perusahaan</b></h1>
        <Container>
        <Row >
        <Col sm={6} >
        <br />
        &nbsp;
        <p className="font-paragraph1">
          PT. KARYA INTERNUSA berdiri pada tahun 1997 dengan bisnis Rental Alat Berat dan
          Perbaikan Alat Berat. Proyek pertama yang dikerjakan PT. KARYA INTERNUSA adalah
          Menyewakan Alat-alat Berat ke PT. Petrokimia Gresik pada tahun 1999. Sejalan dengan
          perkembangan Perusahaan, PT. KARYA INTERNUSA telah melakukan pengembangan
          usaha dalam hal konstruksi pada Proyek Industri. Meskipun awalnya hanya supporting
          sebagai Sub-Contractor, tetapi saat ini sudah berkembang menjadi Divisi Konstruksi secara
          mandiri.
        </p>
        </Col>
        <Col sm={6}>
        <br />
        &nbsp;
        <img
              src="/images/SSP-Cover.png"
              width="400"
              alt="Cover SSP"
              className="responsive"
          />
        </Col>
        </Row>
        </Container>
        </div>
        </Container>
    );
  }
  
  export default ContainerH1;
  