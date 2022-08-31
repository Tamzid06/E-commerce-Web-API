
import { useLocation } from "react-router";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { userRequest,userRequestBank } from "../requestMethods";
import { useDispatch } from "react-redux";
import { deleteCart } from "../redux/cartRedux";

const Info = styled.div`
  flex: 3;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px; 
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
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
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;












const Success = () => {
  // console.log();
  const location = useLocation();
  // const cat = location.pathname.split("/")[2];
  var userid = null;
  var orderid = null;
  var products = null;
  var amount = null;
  var cart = null;
  var img = null;
  var title = null;
  var _id = null;
  var color = null;
  var size = null;
  var quantity = null;
  var total = 0;
  var st = null;

  const history = useNavigate();

  if(location.state){
    userid = location.state.userID;
    orderid = location.state.orderID;
    products = location.state.products;
    amount = location.state.amount;
    cart = location.state.cart;
    img = cart.products.map(p=> p.img);
    title = cart.products.map(p=> p.title);
    _id = cart.products.map(p=> p._id);
    color = cart.products.map(p=> p.color);
    size = cart.products.map(p=> p.size);
    quantity = cart.products.map(p=> p.quantity);
    total = cart.total;
    st = location.state;

  }



  const dispatch = useDispatch();

  const makeRequest = async () => {
    try {
      
      // const id = "6306c3261c7099076585b3d5";
      const res = await userRequest.post("/payment/" + orderid[0]);
      console.log(res);
      dispatch(
        deleteCart({...products})
      );

      // history("/",{state:{st:st}});
    } catch { }
  };

  return (

    <Container>
    <Navbar />
    <Announcement />
    <Wrapper>
      <Title>YOUR BAG</Title>
      <Top>
        <TopButton>CONTINUE SHOPPING</TopButton>
        <TopTexts>
          <TopText>Shopping Bag(2)</TopText>
          <TopText>Your Wishlist (0)</TopText>
        </TopTexts>
        {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
      </Top>
      <Bottom>
        <Info>
          {cart ? 
            cart.products.map((product) => (
            <Product>
              <ProductDetail>
                <Image src={product.img} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Size:</b> {product.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>
                  tk {product.price * product.quantity}
                </ProductPrice>
              </PriceDetail>
            </Product>

          ))
          :
        
         <p>"NO CART"</p>

        }
          <Hr />

        </Info>
        <Summary>
          <SummaryTitle>ORDER SUMMARY</SummaryTitle>
          <SummaryItem>
            <SummaryItemText>Subtotal</SummaryItemText>
            <SummaryItemPrice>tk {total}</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>tk 70</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>tk -100</SummaryItemPrice>
          </SummaryItem>
          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>tk {total > 0 ? total - 100 + 70 : 0}</SummaryItemPrice>
          </SummaryItem>
          <Link to = "/">
          <Button  onClick={makeRequest}>CHECKOUT NOW</Button>
          </Link>
         
        </Summary>
      </Bottom>
    </Wrapper>
    <Footer />
  </Container>   
















      // {location.state.nam
      //   ? `Order has been created successfully. Your order number is ${location.state.nam}`
      //   : `Successfull. Your order is being prepared...`}
      // <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>

  );
};

export default Success;