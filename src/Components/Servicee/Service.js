import React from 'react';
import { Card, Col } from 'react-bootstrap';


const Service = ({service}) => {
   
    const{name,img,deccription}=service;
    
    return (
        
        <div>

    <Col>
      <Card>
        <Card.Img variant="top" src={img} height='250px' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
            <p>{deccription}</p>
            <button className='btn btn-primary'> Read More</button>
        </Card.Body>
      </Card>
    </Col>
  

            
        </div>
    );
};

export default Service;