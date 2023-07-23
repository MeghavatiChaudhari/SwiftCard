import { useState } from "react";
import React from "react";
import { NavLink, Navigate } from "react-router-dom";
import { Login } from "./Login";
import { auth,db } from "../config/config";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";

import { collection, doc, setDoc } from "firebase/firestore"; // Import necessary functions


 export const Signup=()=>{
      
     const history = useNavigate();
     const[email ,setEmail] =useState('');
     const[fullname, setFullname]=useState('');
     const[password ,setPassword]=useState('');
     const[errormsg ,setErrormsg] =useState('');
     const[successmsg ,setSuccessmsg] =useState('');
     const handleSignup=(e)=>{
       e.preventDefault();
      // console.log(fullname , email , password);

      createUserWithEmailAndPassword(auth ,email,password).then((credentials)=>{
         console.log(credentials);
        //  fs.collection('users').doc(credentials.user.uid).set({
          const userDoc = {
            FullName: fullname,
            Email: email,
            password: password,
          };
          setDoc(doc(db, "users", credentials.user.uid), userDoc)({
          // setDoc(doc(fs, "users", credentials.user.uid), {
          FullName:fullname,
          Email:email,
          password:password,
        }).then(()=>{
          setSuccessmsg('Signup Successfully');
          setFullname('');
          setEmail('');
          setPassword('');
          setErrormsg('');
          setTimeout(()=>{
            setSuccessmsg('');
            history.push('/login');
          },3000)
        }).catch(error=>setErrormsg(error.message));
      }).catch((error)=>{
        setErrormsg(error.message)
      })
   
      }

          
   return(
    <div className="container">
    
      <br></br>
      <br></br>
      {/* <h1>Signup</h1> */}
      <hr></hr>
      <br></br>
      {successmsg&&<>
      <div className='succes-msg'>{successmsg}</div>
       <br></br>
       </>}
      <form className="form-group" autoComplete="off" onSubmit={handleSignup}>
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
      {errormsg&&<>
      <div className='error-msg'>{errormsg}</div>
       <br></br>
       </>}
    </div>
    
   )
}