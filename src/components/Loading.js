import React from "react";
import Spin from "../assets/Spinner-1s-200px.svg";
export default function Loading(){
    return(
        <div style={{display:"flex",justifyContent:"center",alignItems:"center", width:"100vw",height:"100vh",background:"white"}}>
            <img style={{objectFit:"contain"}} src={Spin} rel="loading"/>
        </div>
     )
}