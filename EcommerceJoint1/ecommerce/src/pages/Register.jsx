import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { userRequest, userRequestBank, publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// import { useForm } from "react-hook-form";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/KhLxYf5/7035194-56.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  // const { reset } = useForm();

  let location = useLocation();
  // const redirect = location.pathname.split("/")[1];
  // const redirect = location.search ? location.search.split('=')[1] : '/';
  console.log("hoooooooooooooooooooooooooooo");
  const history2 = useNavigate();
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  // const [submitted, setSubmitted] = useState(false);
  // const currentUser = useSelector((state) => state.user.currentUser)

  // useEffect(()=>{
  //   handleClickReg();
  //   return()=>{
  //     // setSubmitted(submitted);
  //     // setEmail(email);
  //     // setUsername(username);
  //     // setPassword(password);
  //   }
  // },[]);



  // useEffect(() => {
  //   // simulate async api call with set timeout
  // }, []);

  //   useEffect(() => {
  //     // reset form with user data
  // }, [email,username,password]);






  // const handleClickReg = (e) => {
  //   console.log("!!!!!!!!!!!!!!!!!!$$$$$$$$$$$$$!!!!!!!!!!!!!!!!!!!");
  //   console.log(email);
  //   console.log(username);
  //   console.log(password);
    

  //   try {
  //     console.log("____________________*****************************____________________________");
  //     await publicRequest.post("/auth/register",
  //       {

  //         email: email,
  //         username: username,
  //         password: password,
  //       }

  //     ).then();


  //   }catch (err) {
  //     // setSubmitted(false);

  //     console.log("____________________________________________________");
  //     console.log("____________________#####################____________________________");
  //     console.log('Error', err.response.data);
  //     alert(err.response.data);

  //   }
  // };










  const handleClickReg = async (e) => {
    e.preventDefault();
    console.log("!!!!!!!!!!!!!!!!!!$$$$$$$$$$$$$!!!!!!!!!!!!!!!!!!!");
    console.log(email);
    console.log(username);
    console.log(password);
  
    try {
      console.log("____________________*****************************____________________________");
      console.log(email);
      const res = await publicRequest.post("/auth/register",
        {

          email: email,
          username: username,
          password: password,
        }

      );
      console.log("____________________#####################____________________________");
      // setSubmitted(true);
      window.location = "/login";
      // history2("/login");
    } catch (err) {
      // setSubmitted(false);

      console.log("____________________________________________________");
      console.log("____________________#####################____________________________");
      console.log('Error', err.message);
      if(err.response.data.message == 'Username or Email already exists' && password && email){
        alert(err.response.data.message);
      }else{
        alert("Fill up the form");
      }

      // alert(err.response.data.message);

    }
  };



  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>

          <Input placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
              // setSubmitted(false);
            }}
          />
          {/* <Input placeholder="last name" 
          onChange={(e) => setCardNumber(e.target.value)}
          />
          <Input placeholder="username" 
          onChange={(e) => setCardNumber(e.target.value)}
          /> */}
          <Input placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
              // setSubmitted(false);
            }}
          />
          <Input placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
              // setSubmitted(false);
            }}
          />
          {/* <Input placeholder="confirm password" 
          onChange={(e) => setCardNumber(e.target.value)}
          /> */}
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          {/* {email && username && password ? 
        <Link to="/login">
        <Button onClick={handleClickReg}>CREATE</Button>
        </Link>
        :
        <Link to="/register">
        <Button>CREATE</Button>
        </Link>
} */}
          <Button onClick={handleClickReg}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>

  );
};

export default Register;