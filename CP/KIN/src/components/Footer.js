import React from "react";
import "../css/Kin.css";
import { Container } from "react-bootstrap";


function Footer() {
    return (
    // Container Footer
      <Container fluid className="container-footer">
                &nbsp;
                <p className="ftitle1">
                <i>  &copy; {new Date().getFullYear()} PT Karya Internusa - All Right Reserved</i>
                </p>
                &nbsp;
        </Container>
    );
}

export default Footer;