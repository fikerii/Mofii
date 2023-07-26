import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Container>
        <nav className="pt-2 navbar navbar-expand navbar-dark">
          <a href="/" className="navbar-brand pe-3">
            Mofii
          </a>

          <Nav className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/movielist"}>
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/favorite"}>
                Your Favorite
              </Link>
            </li>
          </Nav>
        </nav>
      </Container>
    </>
  );
};

export default NavBar;
