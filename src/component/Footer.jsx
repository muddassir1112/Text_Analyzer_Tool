import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <Navbar className="bg-body-tertiary shadow-up" fixed="bottom">
      <Container>
        <Navbar.Brand href="#home" style={{ fontFamily: "Edu SA Beginner" }}>
          Build by Muddassir Ansari
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link
            href="https://muddassir-ansari-portfolio.netlify.app/"
            className="pe-2 portfolio"
          >
            Know More
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
