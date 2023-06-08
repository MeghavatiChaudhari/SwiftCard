import React from "react";
import { NavLink } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
export const Navbar=()=>{
    return(
        <div className="navigate">
        <span id="nav1">  
        <NavLink to={"/Signup"} style={{color:"white"} }> SIGN UP </NavLink>
        </span>
        <span id="nav2">
        <NavLink to={"/Login"} style={{color:"white"}}> LOGIN</NavLink>
        </span>
        </div>
    )
}