import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/Kin.css";

function pk2() {
    return (
      // Container H1
      <Container fluid className="container-h1">

        <div className="form-container">
        <Container>
        <Row >
        <Col sm={12} >
        &nbsp;
        <p className="font-paragraph1">
        Lampiran 4 berikut ini untuk bukti pengalaman kerja PT Karya Internusa
        </p>
        </Col>
        </Row>
        <Row>
        <Col sm={3}>
            &nbsp;
            <h3 className="font-paragraph2">Lampiran 3</h3>
            <h4> 2 Foto bagian atas</h4>
            <ul>
          <li className="font-paragraph3"> Pembangunan Pengendali Banjir Sistem Kali Kedunglarangan Di Kabupaten Pasuruan dan Kabupaten Sidoarjo (Myc)</li>
            </ul>
            <h4> 1 Foto bagian bawah</h4>
            <ul>
            <li className="font-paragraph3"> Proyek Jalan Tol Semarang - Solo Tahun 2016 (Lokasi: Jawa Tengah)</li>
            </ul>
            <h4> 2 Foto bagian bawah</h4>
            <ul>
            <li className="font-paragraph3"> Proyek Pembangunan Jalan Baru Batas </li>
            </ul>
        </Col>
        <Col sm={6}>
    <img
      className="d-block w-100"
      src="images/pk5.png"
      alt="Lampiran 2"
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
  
  export default pk2;