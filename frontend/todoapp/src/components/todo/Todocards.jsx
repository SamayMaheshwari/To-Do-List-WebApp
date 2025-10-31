import React from 'react'
import './Todocards.css';
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import './Update.jsx';

const Todocards = ({title,description,id,delid, display}) => {
  return (
    <div className='todo-cards p-3'>
        <div>
            <h5>{title}</h5>
            <p className='todo-card-para'>{description.split("",77)}...</p>
        </div>
        <div className='d-flex justify-content-around '>
            <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1' onClick ={() => { display("block") }}>
                <GrDocumentUpdate className='card-icon'/> Update
            </div>
            <div className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger' 
            onClick={() => {
              
                delid(id);
            }}>
            
                <MdDelete className='card-icon del'/> Delete
            </div>
        </div>
    </div>
  )
}

export default Todocards