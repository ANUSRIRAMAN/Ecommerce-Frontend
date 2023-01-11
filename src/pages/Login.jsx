// import { useState } from "react";
// import styled from "styled-components";
// import { login } from "../redux/apiCalls";
// import { mobile } from "../responsive";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 25%;
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
//   flex-direction: column;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 10px 0;
//   padding: 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   &:disabled {
//     color: green;
//     cursor: not-allowed;
//   }
// `;

// const Links = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// const Error = styled.span`
//   color: red;
// `;

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const dispatch = useDispatch();
//   const { isFetching, error } = useSelector((state) => state.user);

//   const handleClick = () => {
//     // e.preventDefault();
//     login(dispatch, { username, password });
//   };
//   return (
//     <Container>
//       <Wrapper>
//         <Title>SIGN IN</Title>
//         <Form>
//           <Input
//             placeholder="username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//           <Input
//             placeholder="password"
//             type="password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button onClick={handleClick} disabled={isFetching}>
//             LOGIN
//           </Button>
//           {error && <Error>Something went wrong...</Error>}
//           <Link to="/home"><button  onClick={handleClick} >Signin</button></Link>
          
//           <Link to="/register">CREATE A NEW ACCOUNT</Link>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Login;


// import React from "react";
// import { useFormik } from "formik";
// import { Link } from "react-router-dom";

// import axios from "axios";
// import Button from '@mui/material/Button';
// import { useNavigate } from "react-router-dom";
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import TextField from '@mui/material/TextField';
// import SearchIcon from '@mui/icons-material/Search';
// import { style } from "@mui/system";

// import { Padding } from "@mui/icons-material";








// function Signin() {
//   let navigate = useNavigate()
//   let formik = useFormik({
//     initialValues: {
//       username: "",
      
//       password: "",
//       role:""
//     },
//     onSubmit: async (values) => {
//    try{
//     const login = await axios.post(`http://localhost:5000/api/auth/login`,values);
//     localStorage.setItem("token",login.data.accesstoken);
//     localStorage.setItem("userid",login.data.userid);
//     alert("login successfully")
 
//     navigate("/home");
   

//    }
//    catch(err){
//     console.log(err);
//    }
  
//     },
//   });
//   const [open, setOpen] = React.useState(false);
//   const handleClose = () => {
//     setOpen(false);
//   };
//   const handleToggle = () => {
//     setOpen(!open);
//   };
//   return (
//     <div>
//     <div className="Register" style={
//       {

//         background:"#334"
//       }
//     }>
//        <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar style={{background:"#334"}}>
//           <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
//            BOOKMYSHOW
//           </Typography>
//           <Button component ={Link} to="/register" variant="contained"> Signup</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//    </div>
//    <div className="signin"  >
// <form onSubmit={formik.handleSubmit}>
//  {/* <TextField  helperText="Please enter your role user or admin use small letter" id="filled-basic" name="role" value={formik.values.role} onChange={formik.handleChange} label="admin/user" variant="filled"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/> */}
 
// <TextField id="filled-basic" name="username" value={formik.values.username} onChange={formik.handleChange} label="UserName" variant="filled"
//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>

//  <TextField id="filled-basic" name="password" value={formik.values.password} onChange={formik.handleChange} label="Password" variant="filled" type="password"


//  style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} /><br/>


//  {/* <Button variant="text"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>FORGET PASSWORD  </Button><br/> */}

//  <Button type="submit"  variant="contained"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}}>LOGIN</Button><br/>
//  </form>
//  <Typography variant="h6"style={{width:"400px",marginTop:"50px" , marginLeft:"450px"}} >
// Don't have an account? Click
//  <Button component ={Link} to="/register"variant="text">Signup</Button> to sign up.</Typography><br/>
//  </div>


// <div className="userinfo" style={{marginLeft:"300px"}}>
// <h3>Credentials for testing user</h3>
// <b>user/admin :</b>user<br/>
// <b>username :</b>user123<br/>
// <b>password :</b>user123<br/>

// </div>
// <div className="admininfo" style={{marginLeft:"900px" ,marginTop:"-110px"}}>
// <h3>Credentials for testing admin</h3>
// <b>user/admin :</b>admin<br/>
// <b>username :</b>admin1234<br/>
// <b>password :</b>admin1234<br/>

// </div>
// </div>

// );
// }

// export default Signin;

import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import {Navigate } from 'react-router-dom';

import { useEffect } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  height: 45%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  display: flex;
 
  justify-content : center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   &:disabled {
//     color: green;
//     cursor: not-allowed;
//   }
// `;

const Links = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  // useEffect(() => {
  //   localStorage.removeItem("accessToken");
  //   localStorage.removeItem("userid");
  //   localStorage.removeItem("username");
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("persist:root");
  //   if(!localStorage.getItem("accessToken")){
        
  //       alert("logged out successfully")
       
  //       window.location.reload(false);
  //   }
  // }, [error()]);
    
    const clear = ()=>{
       
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userid");
        localStorage.removeItem("username");
        localStorage.removeItem("user");
        localStorage.removeItem("persist:root");
        if(!localStorage.getItem("accessToken")){
            
           
           
            window.location.reload(false);
        }
    
    
    }





  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title><br/>
        <Form>
        <TextField id="outlined-basic" label="username" variant="outlined" margin="normal"
          required  onChange={(e) => setUsername(e.target.value)}/>
          {/* <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          /> */}
          {/* <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          /> */}

<TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
        /><br/>
          <Button variant="contained" onClick={handleClick} >
            LOGIN
          </Button><br/>
          {error && <Error><Link to ="/login"  style={{color:"red"}} onClick={()=>clear()}>invalid credentials Click this if Something went wrong...</Link></Error>}
          
          <br/>
          <Link to ="/register">CREATE A NEW ACCOUNT</Link><br/>
          {/* <Link to ="/login"   onClick={()=>clear()}>Click this if Something went wrong...</Link> */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;


