import React, {useState} from 'react'
import './Todo.css';
import Todocards from './Todocards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';

const Todo = () => {
    const [Inputs, setInputs] = useState({title: '', description: ''});
    const [Array, setArray] = useState([]);
    const show = () => {
        document.getElementById('textarea').style.display = 'block';
    };    
    const change = (e) => {
        const {name, value} = e.target;
        setInputs({...Inputs, [name]: value});
    };
    const submit = () => {
      if (Inputs.title==="" || Inputs.description==="") {
        toast.error("Please Fill All The Fields!");
      }
       else{ 
        setArray([...Array, Inputs]);
        setInputs({title: '', description: ''});
        toast.success("Task Added Successfully!");
        toast.error("Task Not Saved, Please SignUp!");
       }
        
    };
    const del = (id) => {
      Array.splice(id, 1);
      setArray([...Array]);
      
    };
    const dis = (value) => {
      console.log(value)
      document.getElementById('todo-update').style.display= value;
    };
      

    
    
  return (
    <>
    <div className='todo'>
      <ToastContainer/>
        <div className="todo-main container d-flex justify-content-center align-items-center my-4 flex-column">
           <div className='todo-inputs-div d-flex flex-column w-50 p-1'>
            <input type="text" className='todo-inputs my-2 p-2' placeholder='TITLE' onClick={show} name='title' value={Inputs.title} onChange={change}/>
            <textarea id='textarea' type="text" className='todo-inputs my-3 p-2' placeholder='DESCRIPTION' name='description' value={Inputs.description} onChange={change}/>
          
            </div>
              <div className='w-50 d-flex justify-content-end px-2 py-1 my-2' onClick={submit}><button className='add-btn'>Add</button></div>
        </div>
        <div className="todo-body">
          <div className="container-fluid">
            <div className="row">
              
            {Array && Array.map((item, index) => (
              <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
              <Todocards title={item.title} description={item.description} id={index} delid={ del } display ={dis}/>
              </div>
            ))}
              
            </div>
          </div>
        </div>
    </div>
    <div className="todo-update" id='todo-update'>
      <div className="container update">
        <Update display={ dis }/>
      </div>
      
    </div>
    </>
  )
}

export default Todo