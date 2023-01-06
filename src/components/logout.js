import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Logout() {
const navigate = useNavigate();

const Logout = ()=>{
   
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userid");
    localStorage.removeItem("username");
    localStorage.removeItem("user");
    localStorage.removeItem("persist:root");
    if(!localStorage.getItem("accessToken")){
        
        alert("logged out successfully")
        navigate("/login");
        window.location.reload(false);
    }


}

  return (
  <Link to ="/login"> <button className='btn btn-danger'  onClick={()=>Logout()}>Logout</button></Link>

  )
}

export default Logout;