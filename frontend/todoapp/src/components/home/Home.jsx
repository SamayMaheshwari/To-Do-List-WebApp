import React from "react";
import './Home.css';

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center flex-column">
        <h1 className="text-center">Organize your <br /> work and life, finally.</h1>
        <p>Become focused, organized, calm with <br />todo app. The World's #1 task manager app.</p>
        <button className="home-button p-2">Make ToDo List</button>
        </div> 
    </div>
  );
}
export default Home;