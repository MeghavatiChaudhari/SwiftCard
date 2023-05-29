import React from "react";
import { Link } from "react-router-dom";

export const Signup=()=>{
   return(
    <div className="container">
      <br></br>
      <br></br>
      <h1>Sign up</h1>
      <hr></hr>
      <br></br>
      <form className="form-group" autoComplete="off">
        <label>Full Name</label>
        <input type="text" className="form-control" required></input>
        <br></br>
        <br></br>
        <label>Email</label>
        <input type="email" className="form-control" required></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <input type="password" className="form-control" required></input>
        <br></br>
         <div className="btn-box">
          <span>Already have an account Login</span>
          <Link to={'Login'} className="link">Here</Link>
          <br></br>
          <button className="btn btn-success btn-md"> SIGN UP</button>
         </div>
      </form>
    </div>
    
   )
}