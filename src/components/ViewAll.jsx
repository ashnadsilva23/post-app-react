import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAll = () => {
    const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(
            
                (response)=>{
                   console.log(response.data)
                   changeData(response.data)
                }
            
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
            
        ).finally()

    }
    useEffect(()=>fetchData(),[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1>View All</h1>
                <div className="row">
                    <div className="col">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">User Id</th>
      <th scope="col">Title</th>
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>
            {
                return <tr>
                <th scope="row">{index}</th>
                <td >{value.id}</td>
                <td>{value.userId}</td>
                <td>{value.title}</td>
              </tr>
            }
    )}
    
    
    
  </tbody>
</table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll