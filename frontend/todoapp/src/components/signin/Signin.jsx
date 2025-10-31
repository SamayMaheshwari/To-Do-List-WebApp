import React from 'react'
import './Signin.css';
import HeadingComponent from './HeadingComponent';
const Signin = () => {
  return (
    <div className='signin'>
         <div className='signup'>
        <div className="container">
            <div className="row">
                <div className="column col-lg-4 d-flex justify-content-center align-items-center">
                    <HeadingComponent first='Sign' second='In'/>
                </div>
                <div className="column col-lg-8 d-flex justify-content-center align-items-center">
                    <div className='d-flex flex-column w-100 p-5'>
                        <input className='p-2 my-3 input-signup' type="email" name='email' placeholder='Enter Your Email' />
                        <input className='p-2 my-3 input-signup' type="password" name='password' placeholder='Enter Your Password' />
                        <button className='btn-signup p-2 '>Sign In</button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default Signin