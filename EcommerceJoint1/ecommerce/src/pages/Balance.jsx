import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { useNavigate } from 'react-router-dom';
import { userRequest, userRequestBank } from "../requestMethods";
import { useEffect, useState } from "react";
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





const Balance = () => {
    const [userbalance, setUserbalance] = useState("");
    const [ecombalance, setEcombalance] = useState("");
    const [supbalance, setSupbalance] = useState("");
    const [balance, setBalance] = useState([]);
    const history = useNavigate();
    const currentUser = useSelector((state) => state.user.currentUser)

    useEffect(() => {
        const getBalance = async (e) => {
            console.log("_________________________________");
            console.log(currentUser._id);
            try {
                console.log("#######$$$$$$$$$$@@@@@@@@@@@@@!!!!!!!!!!!!!!!!!!!!")
                const res = await userRequestBank.get("/account/balance/" + currentUser.email);
                setBalance(res.data);
                console.log("GET BALANCE_____________________");
                console.log(res.data);
                // history('/',{replace:true});
                //   window.location = "/";
            } catch (err) {
                //   window.location = "/";
                console.log("ERROOOOOOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRRRR");
                console.log(err);
            }
        };
        getBalance();
    }, []);



    const userbl = balance.balance_user;
    console.log(userbl);
    // const bal_user = balance.map(b=>b.balance_user);
    // const bal_ecom = balance.map(b=>b.balance_ecom);
    // const bal_sup = balance.map(b=>b.balance_sup);  
    // console.log(bal_user);
    // console.log(bal_ecom);
    // console.log(bal_sup);


    return (
        <Container>
            <Wrapper>
                <Title>Bank Information</Title>
                <Title>Bank Balace</Title>
                {/* {balance ?
                    <p1>User Balance:{balance.balance_user}</p1>


                    :
                    <p1>User Balance:  ERROR ( Register to Bank )</p1>
                }


                {balance ?
                    <p1>Ecommerce Balance:{balance.balance_}</p1>


                    :
                    <p1>Ecommerce Balance:  ERROR ( Register to Bank )</p1>
                }

                {balance ?
                    <p1>User Balance:{balance.balance_sup}</p1>


                    :
                    <p1>Supplier Balance:  ERROR ( Register to Bank )</p1>
                } */}
                <Title>User Balance:{balance.balance_user}</Title>
                <Title>Ecommerce Balance:{balance.balance_ecom}</Title>
                <Title>Supplier Balance:{balance.balance_sup}</Title>

            </Wrapper>
        </Container>
    );
};

export default Balance;