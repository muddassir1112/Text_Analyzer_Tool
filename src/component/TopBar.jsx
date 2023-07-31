import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/Screenshot_2023-07-31_16-21-43.png";
function TopBar() {
  return (
    <Navbar
      className="bg-body-tertiary"
      fixed="top"
      style={{
        background: "#f1f7ff",
        boxShadow: "1px 2px 9px #F4AAB9",
      }}
    >
      <Container>
        <Navbar.Brand href="#home" className="container__title">
          <img
            src={logo}
            alt="Logo"
            style={{ height: "52px", width: "230px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end container__contact--links">
          <Nav.Link href="https://twitter.com/shahbaz111298" className="pe-2">
            <i
              className="fa fa-twitter-square"
              style={{ fontSize: "36px" }}
            ></i>
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/muddassir-ansari-b59ab6227"
            className="pe-2"
          >
            <i
              className="fa fa-linkedin-square"
              style={{ fontSize: "36px" }}
            ></i>
          </Nav.Link>
          <Nav.Link
            href="https://www.instagram.com/muddassir.ansari.1044/"
            className="pe-2"
          >
            <i className="fa fa-instagram" style={{ fontSize: "36px" }}></i>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopBar;
