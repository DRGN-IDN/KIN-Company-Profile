import React from "react";
import { Container, Col, Row  } from "react-bootstrap";
import "../css/Kin.css";

function ContainerContact() {
    return (
      // Container H1
      <Container fluid className="container-footer">
        <div className="form-container">
        <h1 className="ftitle"><b><i>Contact us</i></b></h1>
        <Container>
        <Row >
        <Col sm={12} >
        <br />
        <p className="font-footer">
                <i> Jl Roomo Maduran No. 208 Roomo-Manyar-Gresik, Jawa Timur</i> </p>
                <p className="font-footer"> <i> karyainternusa@gmail.com </i> </p>
                <p className="font-footer"> <i>Telp: (031) 3977308  </i> </p>
                <p className="font-footer"> <i>Whatsapp: (+62) 821-4339-1151   </i> </p>
                <p className="font-footer"> <i> Fax: (031) 3971607 </i> </p>
        </Col>
        </Row>
        </Container>
        </div>
        </Container>
    );
  }
  
  export default ContainerContact;
  