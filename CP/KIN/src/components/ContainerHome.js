import React from "react";
import { Container, Col, Row  } from "react-bootstrap";
import "../css/Kin.css";

function ContainerHome() {
    return (
      // Container H
      <Container fluid className="container-home">
        <div className="form-container">
        <Container>
        <Row >
        <Col sm={5} >
        <br />
        <br />
        <h1 className="font-title"><b>Selamat Datang</b></h1>
        <p className="font-paragraph"> Kami mengucapkan selamat datang di website <b>PT Karya Internusa</b>, sebagai salah satu perusahaan kontraktor yang berlokasi di Gresik, Jawa Timur. 
        Kami selalu senang sentiasa memberikan pencapain mutu untuk memenuhi harapan client dalam melakukan proyek kontruksi ataupun proyek lainnya.
        </p>
        </Col>
        <Col sm={7}>
        <br />
        <br />
          <img
              src="/images/Cover-Image.png"
              width="400"
              alt="Cover"
              className="responsive"
          />
        </Col>
        </Row>
        </Container>
        </div>
        </Container>
    );
  }
  
  export default ContainerHome;
  