import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import '../log-in/Login.css'


const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  
  const {signInUsingEmail,error}=useAuth();


  const handleFormSubmit=(e)=>{
      e.preventDefault()
      signInUsingEmail(email,password)
  }

  const handleEmail=(e)=>{
      setEmail(e.target.value);

  }
  const handlePassword=(e)=>{
      setPassword(e.target.value);

  }
 
    const { signInUsingGoogle } = useAuth();
    return (
        <div className='login-form  w-50 mx-auto mt-2'>
            <h2 className='text-white d-flex justify-content-center'>Please Login</h2>
            <div>
              {error}
            <Form onSubmit={handleFormSubmit}>
  <Form.Group className="mb-3" controlId="formGroupEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGroupPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
    <Form.Control className='loginBtn w-25 my-2 ' type="submit" placeholder="Password" />
   <Link className='d-flex justify-content-center' to='/registation'>create new Account</Link>
    
  </Form.Group>
</Form>
      <div className='d-flex justify-content-center'>--------or-------</div> <br></br>
            </div>
            <button onClick={signInUsingGoogle} className="googleBtn rounded mb-2 btn-white border-0 text-dark p-2">Google Sign In</button>
        </div>
    );
};

export default Login;