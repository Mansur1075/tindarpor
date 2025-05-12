import React from 'react'
import {Navbar,Container,Nav} from "react-bootstrap"
import rakib from "../../assets/rakib.png"
import "./menu.css";


const menu = () => {
  return (
     <Navbar expand="lg" className='main' >
      <Container>
        <Navbar.Brand href="#home">
          <img src={rakib}alt="rakib" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home">Resources</Nav.Link>
            <Nav.Link href="#link">Success stories</Nav.Link>
            <Nav.Link href="#link">Company</Nav.Link>
            <Nav.Link href="#link">Pricing</Nav.Link>
          </Nav>
          <div className="con_man">
            <a href="#">Login</a>
          </div>
          <div className="con_btn">
            <a href="#">Create free account</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default menu