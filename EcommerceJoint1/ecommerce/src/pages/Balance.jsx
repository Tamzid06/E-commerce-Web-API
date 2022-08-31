import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { useNavigate } from 'react-router-dom';
import { userRequest, userRequestBank } from "../requestMethods";
import { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import Navbar from '../Components/Navbar'

const Card = styled.div `
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: auto;
  text-align: center;
  margin-top: 100px;
`

const Title = styled.div`
color: black;
font-size: 24px;
margin-top: 5px;
height:50px;
text-align: center;
font-weight: 500;
`

const Container2 = styled.div`
font-family: sans-serif;
text-align: center;
`;

const OutText = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  width: 100%;
  font-size: 18px;
  margin-top: 10px;
  transition: all 0.8s ease;
  &:hover {
    transform: scale(1.1);
  }
`

const a = styled.div` 
  text-decoration: none;
  font-size: 22px;
  color: black;
  &:hover {
    transform: scale(1.1);
  }
`

// button:hover,
// a:hover {
//   transform: scale(1.1);
// }


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
        // <Container>
        //     <Wrapper>
        //         <Title>Bank Information</Title>
        //         <Title>Bank Balace</Title>
        //         {/* {balance ?
        //             <p1>User Balance:{balance.balance_user}</p1>


        //             :
        //             <p1>User Balance:  ERROR ( Register to Bank )</p1>
        //         }


        //         {balance ?
        //             <p1>Ecommerce Balance:{balance.balance_}</p1>


        //             :
        //             <p1>Ecommerce Balance:  ERROR ( Register to Bank )</p1>
        //         }

        //         {balance ?
        //             <p1>User Balance:{balance.balance_sup}</p1>


        //             :
        //             <p1>Supplier Balance:  ERROR ( Register to Bank )</p1>
        //         } */}
        //         <Title>User Balance:{balance.balance_user}</Title>
        //         <Title>Ecommerce Balance:{balance.balance_ecom}</Title>
        //         <Title>Supplier Balance:{balance.balance_sup}</Title>

        //     </Wrapper>
        // </Container>

        <div>
        <Navbar/>
      <Container2>  
        <Card>
          <Title>BALANCE</Title>
            <OutText>User Balance:{balance.balance_user}</OutText>
            <OutText>Ecommerce Balance:{balance.balance_ecom}</OutText>
            <OutText>Supplier Balance:{balance.balance_sup}</OutText>
           
        </Card>
        </Container2>
        <Footer/>
        </div>
    );
};

export default Balance;