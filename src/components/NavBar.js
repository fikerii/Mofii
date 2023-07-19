import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>Mofi</Navbar.Brand>
          <Nav>
            <Nav.Link>Trending</Nav.Link>
            <Nav.Link>Superhero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
