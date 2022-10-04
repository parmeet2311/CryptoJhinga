import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/Logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import rectangle from "../Assets1/Rectangle 226.png";
import Swap from "../Assets1/swap.png"


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container >
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" style={{width:"100%",justifyContent:"space-around"}} defaultActiveKey="#home">
            <div className="nav-item-router">
              <Nav.Item className="navItem">
                <Nav.Link as={Link} to="/howitworks" onClick={() => updateExpanded(false)}>
                 How it works
                  
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="navItem">
                <Nav.Link
                  as={Link}
                  to="/savings"
                  onClick={() => updateExpanded(false)}
                >
                  Savings
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="navItem">
                <Nav.Link
                  as={Link}
                  to="/Metaverse"
                  onClick={() => updateExpanded(false)}
                >
                  Metaverse
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="navItem">
                <Nav.Link
                  as={Link}
                  to="/Reserves"
                  onClick={() => updateExpanded(false)}
                >
                  Reserves
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="navItem">
                <Nav.Link
                  as={Link}
                  to="/blog"
                  onClick={() => updateExpanded(false)}
                >
                  Blog
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/contact"
                  onClick={() => updateExpanded(false)}
                >
                  Contact us
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/about"
                  onClick={() => updateExpanded(false)}
                >
                  About us
                </Nav.Link>
              </Nav.Item> */}
            </div>

            <div>

              <Nav.Item className="fork-btn">
                {/* <Button
                href="/launch"
                target="_blank"
                className="fork-btn-inner"
              >
                Launch App
              </Button> */}
                <Dropdown>
                  <Dropdown.Toggle variant="success" className="fork-btn-inner" id="dropdown-basic">
                    Launch App
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/primary_market"><img style={{ height: '25px', margin: '0px 7px' }} src={rectangle} />Primary Market</Dropdown.Item>
                    <Dropdown.Item href="/swap_exchange"><img style={{ height: '25px', margin: '0px 7px' }} src={Swap} /> Swap Exchange</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
