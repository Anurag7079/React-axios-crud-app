/* eslint-disable no-template-curly-in-string */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function App() {
  // const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:3030/posts/").then((res) => {
      // setColumns(Object.keys(res.data[0]));
      setRecords(res.data);
    });
  }, []);

  function handleDelete(id) {
    const userConfirmed = window.confirm("Do you want to Delete");
    if (userConfirmed) {
      axios.delete('http://localhost:3030/posts/'+id)
      .then(res=>{
        navigate('/')
        alert("Deleted successfull..");
      }).catch(err => console.log(err))
    }
  }

  return (
      <div className="container mt-5">
        <div className="text end">
          <Link to="/create" className="m-5 btn btn-primary">
            Add Details
          </Link>
        </div>
        <table className="table">
          <thead>
             <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
             </tr>
          </thead>
          <tbody>
            {
              records.map((d, i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>
                  <Link to={`/update/${d.id}`} className="btn btn-success">Edit</Link>
                  <button onClick={e => handleDelete(d.id)} className="btn ms-1 btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
   
  );
}

export default App;
