import React from "react";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import gsap from 'gsap';
import { Expo } from 'gsap';
export const Home=()=>{
    // var Expo = gsap.Expo;

    // gsap.to("#one",{
    //     width:"100%",
    //      ease: Expo.easeInOut,
    //     duration:2
    // })
    if (typeof gsap !== 'undefined') {
      // GSAP is installed and available
      console.log("GSAP is installed.");
    } else {
      // GSAP is not installed or not available
      console.log("GSAP is not installed.");
    }
  
    gsap.to(".imagecontainer",{
        ease:Expo.easeInOut,
        width: "100%",
        repeat:-1,
        yoyo:true,
        duration:1,
        stagger:2
    })
    return(
        <div>
         <Navbar/>
        {/* <Products/>  */}
    
        
     <div id="main">
      <div id="center">

     <div className="text">
        <h1>Nature</h1>
        <h1>Nature</h1>
        <h1>Nature</h1>
     </div>
      <div id="one" className="imagecontainer">
         <img src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80" alt=""/> 
      </div>
      <div className="imagecontainer">
        <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt=""/>
      </div>
      <div className="imagecontainer">
        <img src="https://images.unsplash.com/photo-1627577279474-b87fe8490617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=449&q=80" alt=""/>
      </div>
      

      </div>
     </div>
       
        </div>
        
    )
}