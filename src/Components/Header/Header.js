
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
  const{user}=useAuth;
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home" className='ms-5 text-primary'>SAS Medical</Navbar.Brand>
    <Navbar.Toggle /> 
    <Navbar.Collapse className="justify-content-end">
   
    
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/services#services">Services</Nav.Link>
      <Nav.Link as={Link} to="#pricing">About Us</Nav.Link>
      { user?.email ?  <Button variant='light'>Log Out</Button> :
       
        <Nav.Link as={Link} to='/login'>Log in</Nav.Link>
        }
      
      
      <Navbar.Text className='ms-3'>
      sing in as  <a href="#login">{user?.displayName }</a>
      </Navbar.Text>
    </Navbar.Collapse>
    
    </Container>
  </Navbar>
  
</>
    );
};

export default Header;