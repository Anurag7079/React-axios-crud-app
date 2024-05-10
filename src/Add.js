import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {

    const [inputData,setInputData] = useState ({name:'' , email:''})
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();

    function handleSubmit (event) {
        event.preventDefault()

        axios.post('http://localhost:3030/posts', inputData)
        .then(res=>{
            alert("Data added successfully");
            navigate('/');
        }).catch(err=> console.log(err));
    }

  return (

    <div className="m-5 d-flex w-100 vh-100 display: flex:  justifyContent: center alignItems: center">
      <div className="w-50 border :bg-light p-5">

       <form onSubmit={handleSubmit}> 
         <div>
            <label for="name">Name :</label>
            <input type="text" name="name" className="form-control"
            onChange={e => setInputData({...inputData,name:e.target.value})}/>
         </div>

         <div>
            <label for="email">Email :</label>
            <input type="Email" name="Email" className="form-control" 
            onChange={e => setInputData({...inputData, email:e.target.value})}/>
         </div>
            <button className="m-2 btn btn-info">Submit</button>
        </form> 

      </div>
    </div> 
 );
}

export default Add;
