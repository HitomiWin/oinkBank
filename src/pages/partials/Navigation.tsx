import React, { memo, VFC } from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../contexts/AuthContext";

export const Navigation: VFC = memo(() => {
  const { currentUser } = useAuthContext();

  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link to="/" className="navbar-brand  text-info">
          <span role="img" aria-label="A piggy bank">
            <FontAwesomeIcon icon={faPiggyBank} color="white" size="lg" />
          </span>{" "}
          Oink Bank
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {currentUser ? (
              <>
                <NavDropdown
                  title={currentUser.displayName ?? currentUser.email}
                  id="basic-nav-dropdown"
                >
                  <NavLink to="/register-child" className="dropdown-item">
                    Add Child
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink to="/logout" className="dropdown-item ">
                    Log Out
                  </NavLink>
                </NavDropdown>
              </>
            ) : (
              <>
                <NavLink to="/login" className="nav-link text-info">
                  Login
                </NavLink>
                <NavLink to="/signup" className="nav-link text-info">
                  Signup
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
});
