import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";

export const Signup=()=>{

     const[email ,setEmail] = useState('');
     const[fullname, setFullname]= useState('');
     const[password ,setPassword]=useState('');
     const[errormsg ,setErrormsg] = useState('');
     const[successmsg ,setSuccessmsg] = useState('');




   return(
    <div className="container">
      <br></br>
      <br></br>
      <h1>Signup</h1>
      <hr></hr>
      <br></br>
      <form className="form-group" autoComplete="off">
        <label>Full Name</label>
        <input type="text" className="form-control" required onChange={(e)=>setFullname(e.target.value)} value={fullname}></input>
        <br></br>
        <br></br>
        <label>Email</label>
        <input type="email" className="form-control" required onChange={(e)=>setEmail(e.target.value)} value={email}></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <input type="password" className="form-control" required></input>
        <br></br>
         <div className="btn-box">
          <span>Already have an account Login</span>
          <Link to={'Login'} className="link">Here</Link>
          <br></br>
          <button type="submit" className="btn btn-success btn-md"> Login</button>
         </div>
      </form>
    </div>
    
   )
}