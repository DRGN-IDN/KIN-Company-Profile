import React from "react";
import { Container, Col, Row  } from "react-bootstrap";
import "../css/Kin.css";

function ContainerHA() {
    return (
      // Container H
      <Container fluid className="container-home">
        <div className="form-container">
        <Container>
        <Row >
        <Col sm={12}>
        <br />
        <br />
          <img
              src="/images/Value4.png"
              alt="Cover"
              className="responsive "
          />
        </Col>
        </Row>
        <Row>
        <Col sm={12} >
        <br />
        <br />
        <h1 className="font-title"><b>Nilai Perusahaan</b></h1>
        <ul>
          <li className="font-paragraph1">
              Berambisi dan berdisiplin untuk mencapai kinerja dengan standar tertinggi
          </li>
          <li className="font-paragraph1">
              Terbuka, jujur dalam semua hubungan
          </li>
          <li className="font-paragraph1">
              Bekerjasama pada berbagai bisnis dan kemitraan
          </li>
          <li className="font-paragraph1">
              Menjalankan usaha jangka panjang, menghindari keuntungan dalam jangka pendek serta melaksanakan
          </li>
        </ul>
        </Col>
        </Row>
        </Container>
        </div>
        </Container>
    );
  }
  
  export default ContainerHA;
  