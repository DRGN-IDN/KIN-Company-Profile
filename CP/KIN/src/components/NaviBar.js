import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../css/Kin.css";
import '../App.css';
import styled from "styled-components";
const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: Black;
  }
  .pill-nav a {
    display: inline-block;
    text-align: center;
    padding: 15px;
    border-radius: 10px;
  }

  .pill-nav a:hover {
    color: yellow !important;
  }

  // .pill-nav a.active {
  //   background-color: yellow;
  //   color: Black !important;
  // }
`;

class NaviBar extends Component {
    render() {
        return (
            <Styles>
              <Navbar expand="lg" className="navbar-bg" fixed="top">
                <Container>
                <Navbar.Brand href="/">
                <img
                  src="/images/logo2.png"
                  width="50"
                  height="10"
                  alt="Karya Internusa Logo"
                  className="img-fluid"
                />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto pill-nav">
                    {/* NAVIGATION LINKS */}
                    <Nav.Item>
                        <Nav.Link href="/home">Home</Nav.Link>
                    </Nav.Item>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Nav.Item>
                        <Nav.Link href="/about">Tentang Kami</Nav.Link>
                    </Nav.Item>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <Nav.Item>
                        <Nav.Link href="/pengalaman">Pengalaman Kerja</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
                </Container>
              </Navbar>
          </Styles>
        );
    }
}
export default NaviBar;


