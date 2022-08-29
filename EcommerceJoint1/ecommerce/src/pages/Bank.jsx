// import styled from "styled-components";

// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://i.ibb.co/X4kXKNc/pexels-anna-shvets-4482900-1.jpg")
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
//   box-shadow: 0 0 20px #000;
//   border:1px solid #000;
//   border-radius: 25px;
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
//   border-radius: 5px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
//   margin-bottom: 10px;
//   border-radius: 10px;
//   font-weight: bold;
  
// `;

// const Link = styled.a`
//   margin: 5px 0px;
//   font-size: 12px;
//   text-decoration: underline;
//   cursor: pointer;
// `;

// const Bank = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Title>PAYMENT</Title>
//         <Form>
//           <Input placeholder="userid" />
//           <Input placeholder="pin" />
//           <Button>PAY</Button>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Bank;


import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userRequest,userRequestBank } from "../requestMethods";
import Home from "./Home";
import Navbar from "../Components/Navbar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/W6gX2m3/pexels-sergij-217316.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 20px #000;
  border:1px solid #000;
  border-radius: 25px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
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
  border-radius: 5px;
`;

const Button = styled.button`
  width: 30%;
  border: none;
  padding: 15px 20px ;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-right: 20px;
  border-radius: 10px;
  font-weight: bold;
  
  
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const ContainerNav = styled.div``;
 
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  flex: 1;
  display: flex;

`;
const ButtonGroup = styled.div`
  display: flex;
  justifyContent: "space-between" 

`



const Bank = () => {
  const [email, setEmail] = useState("");
  const [card_number, setCardNumber] = useState("");
  const [pin, setPin] = useState("");
  
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser)

  
  const handleClick = async (e) => {
    console.log("_________________________________");
    console.log(currentUser.email);
    console.log(currentUser._id);
    try {
      const id = currentUser._id;
      const res = await userRequest.put("/user/"+id, 
      {
        
        
        card_no:card_number,
        card_pin:pin,
        balance:1000000
      
      }
      );
      
   
      // window.location="/login/";
      
    } catch(err) {
      console.log(err);
    }
  };

  const handleClickHOME = () => {
    navigate("/",{replace:true});
  };

  const handleClickBALANCE = () => {
    navigate("/balance",{replace:true});
  };


  



  return (

    <Container>  

      <Wrapper>
        <Title>Bank Information</Title>
        <Form>
          <Input placeholder="account no" 
          onChange={(e) => setCardNumber(e.target.value)}
          />
          <Input placeholder="pin" 
          onChange={(e) => setPin(e.target.value)}
          />
      
          {/* <Button onClick={handleClick}>PROCEED</Button> */}


        
        <ButtonGroup>
        <Button onClick={handleClick}>CREATE</Button>
        <Button onClick={handleClickHOME}>HOME</Button>
        <Button onClick={handleClickBALANCE}>BALANCE</Button>
        </ButtonGroup>

      </Form>
      </Wrapper>
    </Container>
  );
};

export default Bank;