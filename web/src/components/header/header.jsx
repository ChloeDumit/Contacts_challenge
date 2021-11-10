import React from "react";
import logo from "../../images/contact.png";
import "./header.css";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <header className="header_style">
      <Navbar collapseOnSelect expand="lg" className="nav_bar_color">
        <Navbar.Brand href="/">
				<img className="logo" alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="hamburguer"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_bar_items">
            <Nav.Item>
              <Nav.Link href="/new_contact">New Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/all_contacts">Contact List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/history">Edit History</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/edit_contact">Edit Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      <div className="NavBar"></div>
    </header>
  );
}

export default Header;