import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
           <Container>
 
  <Row xs={1} md={2}>
    <Col>
        <h3>ABOUT US</h3>
    </Col>
    <Col >
        <h3>Contact With Us</h3>
    </Col>
  </Row>
</Container>
        </div>
    );
};

export default Footer;