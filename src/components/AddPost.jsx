import React, { useState } from 'react'
import Navbar from './Navbar'

const AddPost = () => {
    const [data,setData]=useState(
        {
            "pid":"",
            "pname":"",
            "type":"",
            "ardate":"",
            "dedate":"",
            "place":""

        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})

    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <Navbar/>
        <div className="container">
            <h1 align="center"><u>Add Post</u></h1><br></br><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <label htmlFor="" className="form-label">post id</label>
                            <input type="text" className="form-control" name='pid' value={data.pid} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <label htmlFor="" className="form-label">post Name</label>
                            <input type="text" className="form-control"name='pname'value={data.pname} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <label htmlFor="" className="form-label">Type</label>
                            <select  id="" className="form-control" name='type' value={data.type} onChange={inputHandler} >
                                <option value="Speed">Speed</option>
                                <option value="Ordinary">Ordinary</option>
                                <option value="Registered">Registered</option>
                            </select>
                        </div>
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <label htmlFor="" className="form-label"> Arrived Date </label>
                            <input type="date" className="form-control" name='ardate' value={data.ardate} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <label htmlFor="" className="form-label"> Deliver Date </label>
                            <input type="date" className="form-control"name='dedate' value={data.dedate} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <label htmlFor="" className="form-label">place</label>
                            <input type="text" className="form-control" name='place' value={data.place} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-12">
                            <button className="btn btn-success" onClick = {readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default AddPost