import React from "react";
import { NavLink } from "react-router-dom";
import { Signup } from "./Signup";
import { Login } from "./Login";
import logo from '../Images/logo.png';
import { auth,db } from "../config/config";
import { useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Icon } from "@mui/material";
export const Navbar=({user})=>{
    const navigate = useNavigate(); 

    const handleLogout=()=>{
        auth.signOut().then(()=>{
            // history.push('/login');
            navigate('/login'); 
        })
    }

    return(
      
        <div className="navbar">

        <div className="leftside">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>
        </div>
        <div className="navigate">
            {!user&&<>
              <span id="nav1">  
              <NavLink to={"/Signup"} style={{color:"black"} }> SIGN UP </NavLink>
              </span>
              <span id="nav2">
              <NavLink to={"/Login"} style={{color:"black"}}> LOGIN</NavLink>
              </span>
            </>}

            {user&&<>
                <div><NavLink className='navlink' to="/">{user}</NavLink></div>
                    <div className='cart-menu-btn'>
                        <NavLink className='navlink' to="/cart">
                         {/* <Icon icon={ShoppingCartIcon}></Icon> */}
                         <Icon component={ShoppingCartIcon} />
                         
                        </NavLink>
                    </div>
                    <div className='btn btn-danger btn-md'
                    onClick={handleLogout}>LOGOUT</div>
            </>}

        </div>

      </div>
    );
}