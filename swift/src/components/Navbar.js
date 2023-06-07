import React from "react";
import { NavLink } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
export const Navbar=()=>{
    return(
        <div>
           
        <NavLink to={"/Signup"}> SIGN UP</NavLink>
        <NavLink to={"/Login"}> LOGIN</NavLink>
        </div>
        
    )
}