import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Button from '@mui/material/Button';
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
  <Link to ="/login"> <Button  variant="contained" className='btn btn-danger'  onClick={()=>Logout()}>Logout</Button></Link>

  )
}

export default Logout;