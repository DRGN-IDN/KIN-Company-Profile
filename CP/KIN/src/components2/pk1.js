import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../css/Kin.css";

function pk1() {
    return (
      // Container H1
      <Container fluid className="container-home">

        <div className="form-container">
        <Container>
        <Row >
        <Col sm={12} >
        &nbsp;
        <p className="font-paragraph1">
        Lampiran 2 berikut ini untuk bukti pengalaman kerja PT Karya Internusa
        </p>
        </Col>
        </Row>
        <Row>
        <Col sm={3}>
            &nbsp;
            <h3 className="font-paragraph2">Lampiran 2 (Atas ke Bawah)</h3>
            <ul>
          <li className="font-paragraph3"> Steel Structure Erection Works - Ammonia dan Urea 1B Fertilizer Expansion Project (Pupuk Kujang - Lokasi Cikampek)</li>
          <li className="font-paragraph3"> Steel Structure dan Erection Works - Flare Gas Installation dan Hydrongen Recovery System (Pertamina Up.V - Lokasi - Balikpapan, Kaltim)</li>
          <li className="font-paragraph3"> Amerada Hess - Lokasi - Manyar, Gresik</li>
          <li className="font-paragraph3"> Pembangunan Gudang In-Bag PT Petrokimia Gresik </li>
          <li className="font-paragraph3"> Pekerjaan Galian Tanah dan Batu Pembangunan Jalan Hadiwarmo-Sidomulyo (Lokasi Pacitan - Jawa Timur)</li>
          <li className="font-paragraph3"> Steel Structure Erection Works - PLTU 1 Jawa Tengah, Coal-Fired Power Plant</li>
          <li className="font-paragraph3"> Reklamasi Pantai - PT Wilmar Nabati Indonesia - Gresik </li>
      </ul>
        </Col>
        <Col sm={6}>
    <img
      className="d-block w-100"
      src="images/pk3.png"
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
  
  export default pk1;