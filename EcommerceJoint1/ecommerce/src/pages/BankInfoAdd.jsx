import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { userRequest,userRequestBank } from "../requestMethods";

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
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 10px;
  font-weight: bold;
  
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
 




const InfoAdd = () => {
  const [email, setEmail] = useState("");
  const [card_number, setCardNumber] = useState("");
  const [pin, setPin] = useState("");
  
  const history = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser)

  
  const handleClick = async (e) => {
    console.log("_________________________________");
    console.log(currentUser.email);
    try {
      console.log("#######$$$$$$$$$$@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!")
      const res = await userRequestBank.post("/account/adding/", 
      {
        
        email : currentUser.email,
        card_number:card_number,
        pin:pin,
        balance:1000000
      
      }
      );
      
      console.log("DOINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
      // history('/',{replace:true});
      window.location = "/";
    } catch(err) {
      window.location = "/";
      console.log("ERROOOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRRRR");
      console.log(err);
    }
  };

  



  return (
    <Container>
      <Wrapper>
        <Title>Bank Information</Title>
        <Form>
        <Input placeholder="email" 
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input placeholder="account no" 
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <Input placeholder="pin" 
          onChange={(e) => setPin(e.target.value)}
        />
        <Input placeholder="confirm pin" />
          <button onClick={handleClick}>PROCEED</button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default InfoAdd;