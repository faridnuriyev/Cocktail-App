import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bgForHeader" variant="dark">
        <Container>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <div className="navbar-brand">Bunnies Cocktail App</div>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Cocktails" id="collasible-nav-dropdown">
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/CocktailsByAlchohol"}
                >
                  <div className="dropdown-item ">Alcoholic Cocktails</div>
                </Link>
                <NavDropdown.Divider />
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/CocktailsByNonAlchohol"}
                >
                  <div className="dropdown-item">Non-alchoholic Cocktails</div>
                </Link>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link style={{ textDecoration: "none" }} to={"/contact"}>
                <div className="nav-link">Contact Us</div>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
