import React from "react";
import { NavLink } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import logo from '../Images/logo.png';
export const Navbar=()=>{
    return(
      
        <div className="navbar">

        <div className="leftside">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
        <div className="navigate">
        <span id="nav1">  
         <NavLink to={"/Signup"} style={{color:"black"} }> SIGN UP </NavLink>
        </span>
        <span id="nav2">
         <NavLink to={"/Login"} style={{color:"black"}}> LOGIN</NavLink>
         </span>
        </div>

      </div>
    );
}