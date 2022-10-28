import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
import "./Home.css"
import {toast} from 'react-toastify'

const Home = () => {
    const [data, setData] = useState([])

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    },[]);
    
    const deleteUser = (id) =>{
        if(window.confirm("Are you sure that wanted to delete ?"))
             axios.delete(`http://localhost:5000/remove/${id}`)
             toast.success("Deleted successfully")
             setTimeout(()=>loadData(),500)
    }

    return (
        <div style={{ marginTop: "150px" }}>
            <Link to="/add"><button type="button" className="btn btn-Add">Add User</button></Link>
            <table className='styled-table'>
                <thead>
                    <tr>
                        <th style={{ textAlign: "center" }}>No.</th>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Email ID</th>
                        <th style={{ textAlign: "center" }}>Password</th>
                        <th style={{ textAlign: "center" }}>Confirm Password</th>
                        <th style={{ textAlign: "center" }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope='row'>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.password}</td>
                                <td>{item.cpassword}</td>
                                <td>
                                    <Link to={`/update/${item.id}`}>
                                        <button className='btn btn-edit'>Edit</button>
                                    </Link>
                                    <button className='btn btn-delete'onClick={()=>deleteUser(item.id)}>Delete</button>
                                    <Link to={`/view/${item.id}`}>
                                        <button className='btn btn-view'>View</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Home
