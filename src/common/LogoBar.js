import React, { useEffect } from "react";

import "./LogoBar.css";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import axios from "axios";

import { TitleBrandText, DescriptionText } from "./Text";

const LogoBar = () => {
  // Page-wide logging
  useEffect(() => {
    let a = 2;
    const hasVisited = localStorage.getItem("userHasVisited1");
    if (!hasVisited) {
      axios.post(
        "https://seattle-wingwomen-server-4d833a733018.herokuapp.com/visit",
        {
          userAgent: navigator?.userAgent,
        }
      );
      localStorage.setItem("userHasVisited1", "true");
    }
  });

  return (
    <Container fluid className="logobar-container">
      <Navbar expand="lg">
        <Navbar.Brand as={Link} to="/">
          <div style={{ marginLeft: "24px" }}>
            <TitleBrandText>The Seattle Wingwomen</TitleBrandText>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-end"
          style={{ marginRight: "24px" }}
        >
          <Nav>
            <Nav.Link as={Link} to="/about">
              <DescriptionText>About Us</DescriptionText>
            </Nav.Link>
            <Nav.Link as={Link} to="/submit">
              <DescriptionText>Submit a Profile</DescriptionText>
            </Nav.Link>
            <Nav.Link as={Link} to="/singles">
              <DescriptionText>Find Love</DescriptionText>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default LogoBar;
