import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";
import { Login } from "./Login";
export const Signup=()=>{

     const[email ,setEmail] =useState('');
     const[fullname, setFullname]=useState('');
     const[password ,setPassword]=useState('');
     const[errormsg ,setErrormsg] =useState('');
     const[successmsg ,setSuccessmsg] =useState('');
     const handleSignup=(e)=>{
      e.preventDefault();
      console.log(fullname , email , password);
     }

   return(
    <div className="container">
    
      <br></br>
      <br></br>
      {/* <h1>Signup</h1> */}
      <hr></hr>
      <br></br>
      <form className="form-group" autoComplete="off" >
        <label className="label">Full Name</label>
        <input type="text" className="form-control" required onChange={(e)=>setFullname(e.target.value)} value={fullname}></input>
        <br></br>
        <br></br>
        <label className="label">Email</label>
        <input type="email" className="form-control" required onChange={(e)=>setEmail(e.target.value)} value={email}></input>
        <br></br>
        <br></br>
        <label className="label">Password</label>
        <input type="password" className="form-control" required onChange={(e)=>setPassword(e.target.value)} value={password}></input>
        <br></br>
         <div className="btn-box">
          <span>Already have an account Login</span>
          <NavLink to={'/Login'} className="link">Here</NavLink>
          <br></br>
          <button type="submit" className="button1"> Signup</button>
         </div>
      </form>
    </div>
    
   )
}