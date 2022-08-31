import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { userRequest, userRequestBank, publicRequest } from "../requestMethods";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
const CryptoJS = require("crypto-js");


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/DMNGtSm/profile.jpg")
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

const UpdateProfile = () => {

    let location = useLocation();
    const redirect = location.pathname.split("/")[1];
    // const redirect = location.search ? location.search.split('=')[1] : '/';
    const currentUser = useSelector((state) => state.user.currentUser);
    let userID;
    if (currentUser) {
        userID = currentUser._id;
    }

    console.log(userID);
    const history2 = useNavigate();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [card_no, setCard_no] = useState("");
    const [card_pin, setCard_pin] = useState("" );

    const [submitted, setSubmitted] = useState(false);

    // const currentUser = useSelector((state) => state.user.currentUser)

    const [card, setCard] = useState([]);






    useEffect(() => {
        // get card number

        const getCard = async () => {
            try {

                // const id = "6306c3261c7099076585b3d5";
                const res = await userRequest.get("/user/cardinfo/" + userID);
                setCard(res.data);

            } catch {

            }
        };
        getCard();

    }, []);

    const us = card.map(c => c.username);
    const em = card.map(c => c.email);
    const ca = card.map(c => c.card_no);
    const pin_no = card.map(c => c.card_pin);
    console.log("PINNNNNNNNNNNNNN");

    const handleClickReg = async (e) => {
      console.log("!!!!!!!!!!!!!!!!!!$$$$$$$$$$$$$!!!!!!!!!!!!!!!!!!!");
      console.log(us);
      console.log(em);
      console.log(ca);
      console.log(pin_no);
      let updatedUser = username ? username : us[0];
      let updatedEmail = email ? email : em[0];
      let updatedCardNo = card_no ? card_no : ca[0];
      let updatedCardPin = card_pin ? card_pin : pin_no[0];
      console.log(updatedUser);
      console.log(updatedEmail);
      console.log(updatedCardNo);
      console.log(updatedCardPin);

      try {
        const res = await userRequest.put("/user/edit/"+userID,
          {

            
            username:updatedUser ,
            email: updatedEmail,
            card_no:updatedCardNo,
            card_pin:updatedCardPin
          }

        );
        setSubmitted(true);
        // history2("/login");
      } catch (err) {
        setSubmitted(false);
        console.log(err);
      }
    };



    const it = "sssssss";
    return (
      <div>
        <Navbar/>
        <Container>
          
            <Wrapper>
                <Title>ACCOUNT DETAILS</Title>
                <Form>

                    <Input placeholder={us}
                        onChange={(e) => {
                            setUsername(e.target.value);
                            setSubmitted(false);
                        }}
                    />
                    {/* <Input placeholder="last name" 
          onChange={(e) => setCardNumber(e.target.value)}
          />
          <Input placeholder="username" 
          onChange={(e) => setCardNumber(e.target.value)}
          /> */}
                    <Input placeholder={em}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setSubmitted(false);
                        }}
                    />
                    <Input placeholder={ca}
                        onChange={(e) => {
                            setCard_no(e.target.value);
                            setSubmitted(false);
                        }}
                    />

                    <Input placeholder="*****************"
                        onChange={(e) => {
                            setCard_pin(e.target.value);
                            setSubmitted(false);
                        }}
                    />

                    {/* <Input placeholder="confirm password" 
          onChange={(e) => setCardNumber(e.target.value)}
          /> */}
                    {userID ?
                        <Link to="/login">
                            <Button onClick={handleClickReg}>UPDATE</Button>
                        </Link>
                        :
                        <Link to="/register">
                            <Button>REGISTER</Button>
                        </Link>
                    }
                </Form>
            </Wrapper>
        </Container>
        </div>
    );
};

export default UpdateProfile;