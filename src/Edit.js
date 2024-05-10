import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function Edit() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3030/posts/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    },[])

    function handleSubmit(event) {
        event.preventDefault()
        axios.put('http://localhost:3030/posts/'+id,data)
        .then(res => {
            alert("Updated successfull");
            navigate('/')
        })
    }

  return (
    <div className="d-flex w-100 vh-100 justifyContent: center alignItems: center">
      <div className="w-50 border :bg-light p-5">

       <form onSubmit={handleSubmit}> 
       <div>
            <label for="id">ID :</label>
            <input type="text" value={data.id} name="id" className="form-control"/>
         </div>

         <div>
            <label for="name">Name :</label>
            <input type="text" value={data.name} name="name" className="form-control"
            onChange={e => setData({...data, name:e.target.value})}/>
         </div>

         <div>
            <label for="email">Email :</label>
            <input type="email" value={data.email} name="email" className="form-control" 
            onChange={e => setData({...data, email:e.target.value})}/>
         </div>
            <button className="btn mt-2 btn-info">Update</button>
        </form> 

      </div>
    </div> 
  )
}

export default Edit;