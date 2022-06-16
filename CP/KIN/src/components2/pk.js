import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/Kin.css";

function pk() {
    return (
      // Container H1
      <Container fluid className="container-h1">
          <br />
          <br />
        <div className="form-container">
        <Container>
        <Row >
        <Col sm={12} >
        <h1 className="font-title"><b>Pengalaman Kerja</b></h1>
        &nbsp;
        <p className="font-paragraph1">
        Sebagai referensi untuk pekerjaan yang dipercayakan kepada kami dan sudah kami selesaikan selama ini, berikut kami lampirkan data-data sebagai bahan evaluasi dan 
        pertimbangan
        </p>
        </Col>
        </Row>
        <Row>
        <Col sm={3}>
            &nbsp;
            <h3 className="font-paragraph2">Lampiran 1 (Atas ke Bawah)</h3>
            <ul>
          <li className="font-paragraph3"> Pembangunan Jalan Beton 2014 (Proyek Wuhuan - Gresik)</li>
          <li className="font-paragraph3"> Proyek Jalan Beton 2014 - PT. Bukaka</li>
          <li className="font-paragraph3"> Pemasangan Box Culvert 2014 (Proyek Wuhuan - Gresik)</li>
          <li className="font-paragraph3"> Pemasangan Box Culvert 2014 - PT Bukaka </li>
          <li className="font-paragraph3"> Pembangunan Pondasi Peralatan Pabrik 2014 (Proyek Wuhuan - Gresik)</li>
          <li className="font-paragraph3"> Pengecoran lantai ditingkat ketinggian 29 mtr - 2014 (Proyek Wuhuan - Gresik)</li>
          <li className="font-paragraph3"> Proyek Tanggul Pengaman Pantai - 2015 / PT Petrokopindo Cipta Selaras (Lokasi PT Petrokimia Gresik - Di </li>
      </ul>
        </Col>
        <Col sm={6}>
    <img
      className="d-block w-100"
      src="images/pk2.png"
      alt="Lampiran 1"
    />
        </Col>
        <Col sm={3}>
            &nbsp;
        </Col>
        </Row>
        </Container>
        </div>
        </Container>
    );
  }
  
  export default pk;