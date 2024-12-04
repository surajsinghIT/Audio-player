import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const HeaderSection = () => {
  return (
    <Navbar  variant="dark" expand="lg" sticky="top" style={{ backgroundColor: "#343a40" }}>
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <i className="bi bi-music-note-beamed me-2"></i>
          MusicMingle
        </Navbar.Brand>

        {/* Toggle Button for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="">Home</Nav.Link>
            <Nav.Link href="">Discover</Nav.Link>
            <Nav.Link href="">Playlists</Nav.Link>
            <Nav.Link href="">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderSection;
