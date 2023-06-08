import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Signup } from "./Signup";
export const Login=()=>{

     const[email,setEmail]=useState('');
     const[password,setPassword]=useState('');

     const handleLogin=(e)=>{
      e.preventDefault();
      console.log(email,password);
     }


    return(
        <div>
        <div className="container">
        
      <br></br>
      <br></br>
      {/* <h1>Login</h1> */}
      <hr></hr>
      <br></br>
      <form className="form-group" autoComplete="off" onSubmit={handleLogin}>
        <label className="label">Email</label>
        <input type="email" className="form-control" required onChange={(e)=>setEmail(e.target.value)} value={email}></input>
        <br></br>
        <br></br>
        <label className="label">Password</label>
        <input  type="password" className="form-control" required onChange={(e)=>setPassword(e.target.value)} value={password}></input>
        <br></br>
         <div className="btn-box">
          <span style={{fontFamily: "font-family:Montserrat , sans-serif"}}>Don't have an account Signup</span>
          <NavLink to={'/Signup'} className="link">Here</NavLink>
          <br></br>
          <button type="submit" className="button1"> Login</button>
         </div>
      </form>
      {/* <Signup /> */}
    </div>
        </div>
    )
}