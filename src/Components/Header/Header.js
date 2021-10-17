import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
    <Container>
    <Navbar.Brand href="#home" className='ms-5 text-primary'>SAS Medical</Navbar.Brand>
    <Navbar.Toggle /> 
    <Navbar.Collapse className="justify-content-end">
   
    
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#service">Services</Nav.Link>
      <Nav.Link href="#pricing">About Us</Nav.Link>
      <Link to='/login'>login</Link>
      
      
      <Navbar.Text className='ms-3'>
        <a href="#login">Mark Otto</a>
      </Navbar.Text>
    </Navbar.Collapse>
    <Nav className="me-auto">
    </Nav>
    </Container>
  </Navbar>
  
</>
    );
};

export default Header;