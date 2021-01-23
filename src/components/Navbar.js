import React from "react";
import {
    Navbar,
    Nav,
} from "react-bootstrap";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Navbar.Brand href="/">My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/projects">Projects</Link>
                    <Link className="nav-link" to="/education">Education</Link>
                    <Link className="nav-link" to="/experience">Experience</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation