import React from 'react';
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Navbar expand="lg" className="navbar-dark" style={{ backgroundColor: '#121212' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-danger">
          <big>🎮 </big> GameZone
        </Navbar.Brand>

        <BootstrapNav className="ms-auto">
          <BootstrapNav.Link as={Link} to="/" className="text-primary">Home</BootstrapNav.Link>
          <BootstrapNav.Link as={Link} to="/videos" className="text-primary">Videos</BootstrapNav.Link>
          <BootstrapNav.Link as={Link} to="/live" className="text-primary">Live</BootstrapNav.Link>
          <BootstrapNav.Link as={Link} to="/shorts" className="text-primary">Shorts</BootstrapNav.Link>
        </BootstrapNav>
      </Container>
    </Navbar>
  );
};

export default Nav;
