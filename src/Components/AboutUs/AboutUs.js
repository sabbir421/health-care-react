import React from 'react';
import { Form } from 'react-bootstrap';
import loginImg from '../../img/login-img.png'

const AboutUs = () => {
    return (
        <div>
            <h1 className='d-flex justify-content-center text-primary'>ABOUT US</h1>
            <div className='container bg-warning p-3'>
                <h1 className='d-flex justify-content-center'>Our Branch</h1> <hr />
<div class="container">
  <div class="row">
    <div class="col">
      Uttara, Dhaka
      <p>phone :0145555455</p>
    </div>
    <div class="col">
      Gulshan, Dhaka
      <p>phone :0145555455</p>
    </div>
    <div class="col">
      Banani, Dhaka
      <p>phone :0145555455</p>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col">
      Danmondi, Dhaka
      <p>phone :0145555455</p>
    </div>
    <div class="col">
     Mirpur, Dhaka
     <p>phone :0145555455</p>
    </div>
    <div class="col">
     Savar, Dhaka
     <p>phone :0145555455</p>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col">
      Khulna, Bangladesh
      <p>phone :0145555455</p>
    </div>
    <div class="col">
      Barishal, Bangladesh
      <p>phone :0145555455</p>
    </div>
    <div class="col">
      Chitagong, Bangladesh
      <p>phone :0145555455</p>
    </div>
  </div>
</div>
<div class="container">
  <div class="row">
    <div class="col">
     Ramgpur, Bangladesh
     <p>phone :0145555455</p>
    </div>
    <div class="col">
      Bogura, Bangladesh
      <p>phone :0145555455</p>
    </div>
    <div class="col">
     Bagerhat, Bangladesh
     <p>phone :0145555455</p>
    </div>
  </div>
</div>
            </div>
            {/* branch end */}
  
  <div className="row container">
    <div className="col-8 bg-primary my-3 rounded" > 
    <Form className='w-50 p-2'>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label className='text-white'>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
   
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label className='text-white'>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
  </Form.Group>
  <button className='text-dark bg-warning border-0 rounded p-2 mb-2'>Join with us</button>
</Form></div>
    <div class="col-4"><img className='img-fluid' src={loginImg} alt="" /></div>
  </div>
</div>
        
    );
};

export default AboutUs;