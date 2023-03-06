import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import logo from './assets/Logo.svg';
import "./NavbarStyles.css";

function NavBar() {
    return (
        <Navbar className="justify-content-end" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        src={logo}
                        height="50"
                        className="d-inline-block align-top logo"
                        alt="Company Logo"
                    />
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
export default NavBar;

