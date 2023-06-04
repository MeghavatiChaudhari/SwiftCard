import React from "react";
import { Link } from "react-router-dom";
import { Signup } from "./Signup";
export const Login=()=>{
    return(
        <div>
        <div className="container">
      <br></br>
      <br></br>
      <h1>Login</h1>
      <hr></hr>
      <br></br>
      <form className="form-group" autoComplete="off">
        <label>Email</label>
        <input type="email" className="form-control" required></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <input type="password" className="form-control" required></input>
        <br></br>
         <div className="btn-box">
          <span>Don't have an account Signup</span>
          <Link to={'Signup'} className="link">Here</Link>
          <br></br>
          <button type="submit" className="btn btn-success btn-md"> SIGN UP</button>
         </div>
      </form>
    </div>
        </div>
    )
}