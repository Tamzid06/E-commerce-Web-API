import Navbar from '../Components/Navbar';
import { useLocation } from "react-router";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { userRequest, userRequestBank } from "../requestMethods";
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/cartRedux";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2


const Info = styled.div`
  flex: 3;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px; 
  align-items: center;
  flex-direction: column;
  justify-content: center;
  
`;


const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
   
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
   
`;



const Product = styled.div`
  display: flex;
  justify-content: space-between;
   
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
   
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 2vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 30px;
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 30%;
  margin-top: 10px;
  padding: 10px 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Contain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  
`;



const Card = styled.div `
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 600px;
  height:500px;
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
background-color: #e6fff2;
`;

const OutText = styled.button`
  border: none;
  border-radius: 10px;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  width: 100%;
  font-size: 20px;
  margin-top: 5px;
  transition: all 0.8s ease;
  &:hover {
    transform: scale(1.2);
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











const OrdersProfile = () => {
  // console.log();
  const currentUser = useSelector((state) => state.user.currentUser);
  const currentTotal = useSelector((state) => state.cart.total);
  let userID;
  if (currentUser) {
    userID = currentUser._id;
  }
  const [ord, setOrd] = useState([]);
  const history = useNavigate();
  const location = useLocation();
  // console.log(location.state.userID);
  // const userid = location.state.userID;
  // console.log(location.state.amount);
  // const currentUser = useSelector((state) => state.user.currentUser);
  // const [orderId, setOrderId] = useState(null);

  const [card, setCard] = useState([]);
  var products = null;
  var amount = null;
  var cart = null;
  if (location.state) {
    products = location.state.products;
    amount = location.state.amount;
    cart = location.state.cart;
  }

  useEffect(() => {
    const getOrd = async () => {
      try {

        // const id = "6306c3261c7099076585b3d5";
        const res = await userRequest.get("/orders/find/" + userID);
        setOrd(res.data);

      } catch { }
    };

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
    getOrd();
  }, []);


  console.log(ord);
  const address = ord.map(order => order.address);
  const id = ord.map(order => order._id);
  const status = ord.map(order => order.status);
  console.log(address)


  const username = card.map(c => c.username);
  const email = card.map(c => c.email);
  const card_no = card.map(c => c.card_no);
  console.log(card_no);




  const makeRequest = async () => {
    console.log("_________________________________");
    console.log(currentUser._id);

    history('/success', {
      state:
      {
        orderID: id,
        nam: "fahim",
        userID: userID,
        // products: cart.products.map((item) => ({
        //   productId: item._id,
        //   quantity: item._quantity,
        // })),
        cart: cart,
        amount: cart.total,
        address: "Surma,Sylhet,Bangladesh",


      }
    });

  };






  return (  
    <div>
      <Navbar/>
    <Container2>  
      <Card>
        <Title>ORDER DETAILS</Title>
          <OutText>Username: {username[0]}</OutText>
          <OutText>Email: {email[0]}</OutText>
          <OutText>Address: {address[0]}</OutText>
          <OutText>OrderID: {id[0]}</OutText>
          <OutText>Card No: {card_no}</OutText>
          <OutText>Payment Status: {status[0]}</OutText>
          {status[0] == "Pending" ?
            <Button onClick={makeRequest}> Pay </Button>
            :
            <Button > Thanks </Button>
            }
      </Card>
      </Container2>
      <Footer/>
      </div>
  );

  
  // return (
  //   <Container>
  //     <Navbar />
  //     <Announcement />
  //     <Wrapper>

  //       <SummaryTitle>ORDER SUMMARY</SummaryTitle>

  //       <Summary>
  //       <SummaryItem>
  //         <SummaryItemText>Username</SummaryItemText>
  //         <SummaryItemPrice>{username[0]}</SummaryItemPrice>
  //       </SummaryItem>
  //       </Summary>
  //       <Summary>
  //       <SummaryItem>
  //         <SummaryItemText>Email</SummaryItemText>
  //         <SummaryItemPrice>{email[0]}</SummaryItemPrice>
  //       </SummaryItem>
  //       <SummaryItem>
  //         <SummaryItemText>Order ID</SummaryItemText>
  //         <SummaryItemPrice>{id[0]}</SummaryItemPrice>
  //       </SummaryItem>
  //       <SummaryItem>
  //         <SummaryItemText>Address:</SummaryItemText>
  //         <SummaryItemPrice>{address[0]}</SummaryItemPrice>
  //       </SummaryItem>
  //       <SummaryItem>
  //         <SummaryItemText>Order Status</SummaryItemText>
  //         <SummaryItemPrice>{status[0]}</SummaryItemPrice>
  //       </SummaryItem>
  //       <SummaryItem>
  //         <SummaryItemText>Card No</SummaryItemText>
  //         <SummaryItemPrice>{card_no}</SummaryItemPrice>
  //       </SummaryItem>

  //     </Summary>
  //     </Wrapper>
  //     </Container>
  //     );
  // return (

  //     <Container>
  //         <Navbar />
  //         <Announcement />
  //         <Wrapper>
  //             <Title>YOUR BAG</Title>
  //             <Top>
  //                 <TopButton>CONTINUE SHOPPING</TopButton>
  //                 <TopTexts>
  //                     <TopText>{ord.status}</TopText>
  //                     <TopText>Your Wishlist (0)</TopText>
  //                 </TopTexts>
  //                 {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
  //             </Top>
  //             <Bottom>

  //                 <Summary>
  //                     <SummaryTitle>ORDER SUMMARY</SummaryTitle>


  //                     <Button onClick={makeRequest}>CHECKOUT NOW</Button>

  //                 </Summary>
  //             </Bottom>
  //         </Wrapper>
  //         <Footer />
  //     </Container>












  //     );
};





// {location.state.nam
//   ? `Order has been created successfully. Your order number is ${location.state.nam}`
//   : `Successfull. Your order is being prepared...`}
// <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>

export default OrdersProfile;



