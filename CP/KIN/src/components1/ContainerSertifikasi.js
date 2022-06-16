import React from "react";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import "../css/Kin.css";

function ContainerSertifikasi() {
    return (
      // Container H1
      <Container fluid className="container-h1">
        <div className="form-container">
        <Container>
        <Row >
        <Col sm={12} >
        <h1 className="font-title"><b>Sertifikasi</b></h1>
        <p className="font-paragraph1">
        PT Karya Internusa yang telah ber-sertifikasi ISO 9001:2015 / ISO 14001:2015/ OHSAS 18001:2007 dan SMK3, berkomitmen didalam peningkatan kepuasan Pelanggan, peningkatan efektifitas kinerja dengan  perbaikan yang berkelanjutan serta menerapkan system
        Manajemen Kesehatan dan Keselamatan Kerja
        </p>
        </Col>
        </Row>
        <Row>
        <Col sm={3}>
            &nbsp;
        </Col>
        <Col sm={6}>
        <br />
        &nbsp;
        <Carousel>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src="images/ISO.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="font-paragraph2">ISO 14001</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/ISO 1.png"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className="font-paragraph2">ISO 9001</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="images/ISO 2.png"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className="font-paragraph2">ISO 18001</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="images/Sertifikasi SMK3.png"
      alt="Fourth slide"
    />
    <Carousel.Caption>
      <h3 className="font-paragraph2">Sertifikat SMK3</h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
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
  
  export default ContainerSertifikasi;