import React from "react";
import { Link } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
export const Navbar=()=>{
    return(
        <div>
        <Link to={Signup}> SIGN UP</Link>
        <Link to={Login}> LOGIN</Link>
        </div>
        
    )
}