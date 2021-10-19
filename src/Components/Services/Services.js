import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Servicee/Service';


const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/sabbir421/health-care-json/main/service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
      
        <div id='services'>
             <h1  className='d-flex justify-content-center text-primary my-3'>Services</h1>
        <Row xs={1} md={2} className="g-4">  

     {
        services.map(service=> <Service service={service}></Service>)
    },
   
  
  
</Row>

        </div>
    );
};

export default Services;