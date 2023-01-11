// import { Badge, Button } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
// import React from "react";
// import styled from "styled-components";
// import { mobile } from "../responsive";
// import Logout from "./logout";
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// const Container = styled.div`
//   height: 60px;
//   ${mobile({ height: "50px" })}
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ padding: "10px 0px" })}
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}
// `;
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   ${mobile({ flex: 2, justifyContent: "center" })}
// `;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
//   ${mobile({ fontSize: "12px", marginLeft: "10px" })}
// `;

// const Navbar = () => {
//   const quantity = useSelector(state=>state.cart.quantity)
//   const Navigate = useNavigate()
// const handleLogin =()=>{
//     Navigate("/login")
// }
// const handleRegister =()=>{
//   Navigate("/register")
// }
//   return (
//     <Container>
//       <Wrapper>
//         <Left>
//           <Language>EN</Language>
//           <SearchContainer>
//             <Input placeholder="Search" />
//             <Search style={{ color: "gray", fontSize: 16 }} />
//           </SearchContainer>
//         </Left>
//         <Center>
//           <Logo>My Store.</Logo>
//         </Center>
//         <Right>
//           {/* <MenuItem><button onClick={handleRegister}>REGISTER</button></MenuItem>
//          <MenuItem ><button onClick={handleLogin}>SIGN IN</button></MenuItem> */}
//          <Link to="/"><Logout/></Link>
//           <Link to="/cart">
//           <MenuItem>
//             <Badge badgeContent={quantity} color="primary">
//               <ShoppingCartOutlined />
//             </Badge>
//           </MenuItem>
//           </Link>
//         </Right>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Navbar;


import { Badge} from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logout from "./logout";
import Button from '@mui/material/Button';


const Container = styled.div`
  height: 60px;
  background:#000036;
  color:gold;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  const Navigate = useNavigate()
const handleLogin =()=>{
    Navigate("/login")
}
const navigate = useNavigate()
const handleLogout=()=>{
  navigate("/register")
}
const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          {/* <SearchContainer> */}
            {/* <Input placeholder="Search" /> */}
            {/* <Search style={{ color: "gray", fontSize: 16 }} /> */}
          {/* </SearchContainer> */}
        </Left>
        <Center>
          <Link to="/"><Logo style={{color:"gold" , textDecoration:"none !important"}}>My Store.</Logo></Link>
          {/* <button onClick={()=>{handleLogout()}}>logout</button> */}
        </Center>
        <Right>
        {user ?<></> :<Link to="/register"><MenuItem style={{color:"gold"}}>REGISTER</MenuItem></Link>}
       { user? <Logout/>: <MenuItem ><Button variant="contained" onClick={handleLogin} style={{background:"black",color:"gold"}}>SIGN IN</Button></MenuItem>}
          
          <Link to="/cart" style={{color:"gold"}}>
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
     
    </Container>
  );
};

export default Navbar;