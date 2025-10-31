import React from 'react'
import './Signup.css';
import HeadingComponent from './HeadingComponent';
import axios from 'axios';
import { useState } from 'react';
const Signup = () => {
    const [Inputs, setInputs] = useState({email:"", username:"", password:""});
    const change = (e) => {
        const { name, value } = e.target;
        setInputs({ ...Inputs, [name]: value });
    };
    const submit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/api/v1/register', Inputs).then((response) => {
            console.log(response);
            setInputs({email:"", username:"", password:""});
        });
        
        
    };
  return (
    <div className='signup'>
        <div className="container">
            <div className="row">
                <div className="column col-lg-4 d-flex justify-content-center align-items-center">
                    <HeadingComponent first='Sign' second='Up'/>
                </div>
                <div className="column col-lg-8 d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column w-100 p-5'>
                        <input className='p-2 my-3 input-signup' type="email" name='email' placeholder='Enter Your Email' onChange={change} value={Inputs.email}/>
                        <input className='p-2 my-3 input-signup'  type="username" name='username' placeholder='Enter your Username' onChange={change} value={Inputs.username}/>
                        <input className='p-2 my-3 input-signup' type="password" name='password' placeholder='Enter Your Password' onChange={change} value={Inputs.password}/>
                        <button className='btn-signup p-2 ' onClick={submit}>Sign Up</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Signup