import React from 'react'
import './Update.css';

const Update = ({display}) => {
  return (
    <div className='p-5 d-flex flex-column justify-content-center align-items-start update'>
        <h3>UPDATE YOUR TASK</h3>
        <input type='text'className='update-inputs my-4 w-100 p-3'/>
        <textarea className='update-inputs w-100 p-3'/>
        <div>
            <button className="btn btn-dark my-4 ">Update Task</button>
        <button className="btn btn-danger my-4 mx-3" onClick = {()=>display("none")}>Close</button>
        </div>
    </div>
  )
}

export default Update;