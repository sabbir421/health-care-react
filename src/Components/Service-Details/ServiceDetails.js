import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';


const ServiceDetails = () => {
    
    const {id} = useParams();
    const [details,setDetails]=useState({});
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/sabbir421/health-care-json/main/service.json')
        .then(res=>res.json())
        .then(data=>{
            const info=data.find(dt=>dt.id=id)
            console.log(info);
            setDetails(info)})
    },[])
    
   
    return (
        <div className='d-flex justify-content-center '>
            
            <Card className='border-0 shadow-xl' style={{ width: '18rem' }}>
  <Card.Img variant="top" src={details.img} />
  <Card.Body>
    <Card.Title>{details.name}</Card.Title>
    <Card.Text>
      {details.deccription}
    </Card.Text>
    
  </Card.Body>
</Card>
           
           
          
          
           
        </div>
    );
};

export default ServiceDetails;