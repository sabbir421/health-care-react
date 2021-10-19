import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = ({service}) => {
   
    const{name,img,deccription,id}=service;
    
    return (
        
        <div >

    <Col>
      <Card className='container border-0'>
        <Card.Img variant="top" src={img} height='250px' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
            <p>{deccription}</p>
            <Link to={`/details/${id}`}>
                <button className="btn btn-warning">{name.toLowerCase()}</button>
            </Link>
        </Card.Body>
      </Card>
    </Col>
  

            
        </div>
    );
};

export default Service;