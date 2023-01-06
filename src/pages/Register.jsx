// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { mobile } from "../responsive";
// import axios
//  from "axios";
//  import { useNavigate } from "react-router-dom";
//  import { formik } from "formik";
//  import { useFormik } from "formik";
// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 40%;
//   padding: 20px;
//   background-color: white;
//   ${mobile({ width: "75%" })}
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;

// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
// `;

// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 0px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
// `;
// const buttons = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
// `;

// const Register = () => {
//   let navigate = useNavigate();
//   let formik = useFormik({
//     initialValues: {
//       username: "",
//       email: "",
//       password: "",
      
//     },
//     onSubmit: async (values) => {
//       try{
// const users = await axios.post(`http://localhost:5000/api/auth/register`,values);
// alert(users.data.message);     
// navigate("/")
// }
//       catch(err){
//         console.log(err);
//       }
     
//     },
//   });


  // try{
  //   const users = await axios.post(`http://localhost:5000/api/auth/register`,values);
  //   alert(users.data.message);     
  //   navigate("/")
  //   }
  //         catch(err){
  //           console.log(err);
  //         }
//   return (
//     <Container>
//       <Wrapper>
//         <Title>CREATE AN ACCOUNT</Title>
//         <form onSubmit={formik.handleSubmit}>
//           {/* <Input placeholder="name" />
//           <Input placeholder="last name" /> */}
//           <input placeholder="username" value={formik.values.username} onChange={formik.handleChange} />
//           <input placeholder="email" value={formik.values.email} onChange={formik.handleChange} />
//           <input placeholder="password" value={formik.values.password} onChange={formik.handleChange}/>
//           {/* <Input placeholder="confirm password" /> */}
//           <Agreement>
//             By creating an account, I consent to the processing of my personal
//             data in accordance with the <b>PRIVACY POLICY</b>
//           </Agreement>
//           <Button type="submit">CREATE</Button><br></br>&nbsp;&nbsp;&nbsp;&nbsp;
//           <Link to ="/login"><button style={{width:"200px",height:"50px" ,background:"teal", color:"white"}}>Click this to Sign in after registration</button></Link>
//         </form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Register;

import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { style } from "@mui/system";

import { BrowserRouter, Routes, Route ,Link} from "react-router-dom";
function Register() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      
    },
    onSubmit: async (values) => {
      try{
const users = await axios.post(`https://ecombackend-h7m9.onrender.com/api/auth/register`,values);
alert("Successfully Registered");     
navigate("/login")
}
      catch(err){
        console.log(err);
      }
     
    },
  });
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
    <div className="Register" style={
      {

        background:"#334"
      }
    }>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{background:"#334"}}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} >
           Ecom registration  
          </Typography>
          <Button component ={Link} to="/login"variant="contained">Signin</Button>
        </Toolbar>
      </AppBar>
    </Box>
   </div>
<form onSubmit={formik.handleSubmit}>
 {/* <TextField helperText="Please enter your role user or admin use small letter" name="role" value={formik.values.role} onChange={formik.handleChange} id="filled-basic" label="admin/user" variant="filled"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/> */}
{/* <TextField helperText="Please enter your role user or admin use small letter" name="role" value={formik.values.role} onChange={formik.handleChange} id="filled-basic" label="admin/user" variant="filled"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/> */}


<TextField  helperText="Please enter username" name="username" type="string" value={formik.values.username} onChange={formik.handleChange} id="filled-basic1" label="Username" variant="filled"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

 <TextField helperText="Please enter email" name="email" value={formik.values.email} onChange={formik.handleChange} id="filled-basic" label="Email" variant="filled" type="email"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

 <TextField name="password" value={formik.values.password} onChange={formik.handleChange} id="filled-basic" label="Password" variant="filled" type="password"
 style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>
 
 <Button type="submit" variant="contained"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>Register</Button><br/>

 </form>
</div>


);
}

export default Register;