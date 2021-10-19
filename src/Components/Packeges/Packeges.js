
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Packeg from '../../Hooks/Packege/Packeg';

const Packeges = () => {
    const[packeges,setPackeges]=useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/sabbir421/health-care-json/main/packeges.json')
        .then(res=>res.json())
        .then(data=>setPackeges(data))
    },[])
    return (
        <div>
           
             <Row xs={1} md={2} className="g-4">
             {
                packeges.map(packeg=><Packeg packeg={packeg}></Packeg>)
            }
            </Row>

        </div>
    );
};

export default Packeges;