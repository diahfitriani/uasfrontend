import React from 'react'
import {NavDropdown, Navbar, Nav, Container} from 'react-bootstrap';

const Navbarcomponent = () => {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
    <Navbar.Brand href="/">SMK NU DARUSSALAM</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Beranda</Nav.Link>
        <Nav.Link href="list">Data Siswa</Nav.Link>
        <NavDropdown title="Kompetensi Keahlian" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Teknik Komputer Jaringan</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Teknik Kendaraan Ringan Otomotif</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Akuntansi</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Lainnya...</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
  )
}

export default Navbarcomponent