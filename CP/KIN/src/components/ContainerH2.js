import React from "react";
import { Container, Col, Row, Card ,ListGroup } from "react-bootstrap";
import "../css/Kin.css";

function ContainerH1() {
    return (
      // Container H1
      <Container fluid className="container-home">
        <div className="form-container">
        <h1 className="font-title1"><b>Layanan Bisnis Kami</b></h1>
        <Container>
        <br />
        <br />
        <Row>
              <Col sm="4">
                <Card className="text-center">
                <Card.Img variant="top" src="images/AlatBeratRez.png" />
                <Card.Body>
            <Card.Title className="font-card">Divisi Alat Berat</Card.Title>
            <Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item className="font-card1">Alat Berat untuk Pekerjaan</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Generator 60 Kva - 1000 Kva</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Mesin Las Engine</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Mesin Las Traffo</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Crane / Half Crane</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Trailer and Dump Truck</ListGroup.Item>
                    <ListGroup.Item className="font-card1"></ListGroup.Item>
                </ListGroup>
            </Card.Text>
            </Card.Body>
                </Card>
              </Col>
              <Col sm="4">
              <Card className="text-center">
              <Card.Img variant="top" src="images/KontruksiDivRez.png" />
                <Card.Body>
                <Card.Title className="font-card">Divisi Kontruksi</Card.Title>
            <Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item className="font-card1">Pekerjaan Tanah</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Pekerjaan Pancang</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Pekerjaan Pondasi</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Kontruksi Baja</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Pekerjaan Pipa</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Gedung</ListGroup.Item>
                    <ListGroup.Item className="font-card1"></ListGroup.Item>
                </ListGroup>
            </Card.Text>
            </Card.Body>
                </Card>
              </Col>
              <Col sm="4">
              <Card className="text-center">
              <Card.Img variant="top" src="images/BetonDivRez.png" />
                <Card.Body>
                <Card.Title className="font-card">Divisi Beton (Ready Mix and Pre-Cast Concrete)</Card.Title>
            <Card.Text>
                <ListGroup variant="flush">
                    <ListGroup.Item className="font-card1">Unit Batching Plant</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Unit Stone Crusher</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Armada Truk Mixer</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Laboratorium Beton</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Jembatan Timbang</ListGroup.Item>
                    <ListGroup.Item className="font-card1">Unit Pre-Cast Concrete</ListGroup.Item>
                </ListGroup>
            </Card.Text>
            </Card.Body>
                </Card>
              </Col>
            </Row>
        </Container>
        </div>
        </Container>
    );
  }
  
  export default ContainerH1;
  